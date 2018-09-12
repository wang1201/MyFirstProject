let gulp = require('gulp');   

gulp.task('myJs',()=>{
	console.log('我的第一个gulp');
});

let minifyJS = require('gulp-babel-minify');//引入压缩js模块
let minifyCSS = require('gulp-clean-css')//引入压缩css的模块

//定义一个名字叫做‘build’的任务
gulp.task('build',()=>{
	//压缩并复制js
	gulp.src('./myLine/**/*.js')//读取文件
	.pipe(minifyJS())//编译压缩处理
	.pipe(gulp.dest('./clone'))//生成到指定目录
	
	//复制html
	gulp.src('./myLine/**/*.html')
	.pipe(gulp.dest('./clone'))//生成到指定目录
	//并没有压缩
	
	//压缩并复制css
	gulp.src('./myLine/**/*.css')//读取文件
	.pipe(minifyCSS())//编译压缩处理
	.pipe(gulp.dest('./clone'))//生成到指定目录
})







//创建一个本地服务器，以达到实时请求的效果
let connect = require('gulp-connect');

//html监听一旦发现变化，就执行该任务，读取克隆的html文件，刷新
gulp.task('refreshHtml',()=>{
	gulp.src('./myLine/**/*.html')//监控源文件
	.pipe(gulp.dest('./clone'))//源文件变动就生成到指定的目录
	.pipe(connect.reload())//更新
})
gulp.task('refreshJS',()=>{
	gulp.src('./myLine/**/*.js')//监控源文件
	.pipe(minifyJS())//编译压缩处理
	.pipe(gulp.dest('./clone'))//复制过去
})
gulp.task('refreshCSS',()=>{
	gulp.src('./myLine/**/*.css')//监控源文件
	.pipe(minifyCSS())//编译压缩处理
	.pipe(gulp.dest('./clone'))//复制过去
})
gulp.task('server',()=>{
	//创建一个服务器
	connect.server({
		root:'./myLine',//指定服务器的根目录是源页面
		port:9091,//服务器的端口号
		livereload:true //服务器是否热部署（实时刷新）	
	})
	//也就是说运行的时候，直接localhost://9091/login.html就是指的clone下的login
	//监听所有文件的变化，执行相应的任务
	gulp.watch('./myLine/**/*.html',['refreshHtml']);
	gulp.watch('./myLine/**/*.css',['refreshCSS','refreshHtml'])
	gulp.watch('./myLine/**/*.js',['refreshJS','refreshHtml'])
})
