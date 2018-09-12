console.log('配置文件config');

//配置参数选项-示例
//requirejs.config({
//  baseUrl: '/public/js',
//  paths: {
//      hello: 'hello'
//  },
//  shim: {
//      hello: { exports: 'hello' }
//  }
//
// });
requirejs.config({
	baseUrl:"localhost:9091",//相对默认位置
	paths:{//相对位置
		//省略.js
		"jquery" : "https://cdn.bootcss.com/jquery/2.2.4/jquery",
		"jquery.hover" : "/pages/js/my.jquery.hover"
	},
	shim:{//依赖关系
		
	}
	
})