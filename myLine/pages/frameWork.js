//node模块化语法 
//require用来加载代码
let $ = require('jquery');
//exports module.exports用来导出代码
module.exports ={
	print:function(){
		$.each();
	}
}

//es6模块化语法
import $ from "jquery";
export default {
	print:function(){
		$.each();
	}
}

//requireJS模块化
//define写成一个模块
define(["jquery"],function(){
	return {
		print : function(){
			$.each();
		}
	}
})
//需要require加载模块
//require('./src/k')
