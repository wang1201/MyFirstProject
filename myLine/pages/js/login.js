console.log('你加载了login.js');

//加载一个模块config配置文件
//加载的时候就是读取
//默认带.js
//require中的依赖是一个数组，
//即使只有一个依赖，也必须使用数组来定义
//路径是相对于当前js的路径
require(['config'],function(){
	//config.js下配置了jquery路径
	//require直接加载，此时jquery执行完毕
	//jquery.hover执行完毕：打印jquery.hover.js
	
	//传参$，发现jquery返回值是return jQuery,打印一个函数
	
	//$.prototype.hoverdir找到jquery的原型上的hoverdir函数
	//因为已经运行了"jquery.hover"，所以函数拿得到
	
	//hover:jquery.hover没有返回值 打印undefined
	require(["jquery","jquery.hover"],function($,hover){
		console.log($);//jquery
		
		console.log($.prototype.hoverdir);//hoverdir()
		console.log(hover);//undefined
	})
})


//定义模块，引入jquery
// define function (name, deps, callback)
//参数：定义模块名，传入定义模块需要的依赖，定义模块的主函数

//纠结一个问题:报错？？？？？
//require(['config'],function(){
//	define('x',['jquery'],function($){
//		console.log($);
//	})
//	require('x');
//})
//答案：
//可以定义后加载，但是不可以放在加载模块的里面，因为读取时再加载加载不到
//也就是说不可以放在模块读取的时候再定义模块
//define('x',[],function($){
//	console.log($);
//})



//define(["jquery"],function($){
//	return {
//		say:function(){
//			console.log($);
//		}
//	}
//})