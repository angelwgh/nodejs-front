/**
 * 检测页面位置相关信息
 */
define(['jquery'],function ($) {
	var page=['page'];
	page=$('#module_259').scrollTop();
	$(window).scroll(function(event) {
		console.log($('#module_259').offset());
	});
	function a(x) {
		console.log(x)
	}
	return a;
})