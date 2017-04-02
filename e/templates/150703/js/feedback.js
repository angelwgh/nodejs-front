//在线留言模块

define(['jquery','basic'],function ($,$wgh) {
	var element            = $('.m-message'),                                     //在线留言窗口
		title              = $('.m-message .title'),                              //标题栏
		formTable          = $('.feedback_table'),                                //在线留言内容区域
		tableSwitch        = $('.m-message .fa'),                                 //右上角最小化最大化按钮
		input              = $('.feedback_table input[type="text"],#content'),    //input 输入窗口
		reset              = $('.feedback_table .bt.reset');                            //重置按钮


	


	/*input输入内容时隐藏提示信息，内容为空时显示提示信息*/

	input.on('input propertychange', function(event) {
		if ($(this).val()=='') {
			$(this).prev('label').show();
		}else {
			$(this).prev('label').hide();
		}
	});
	reset.on('click', function(event) {
		event.preventDefault();
		input.val('');
		$('.feedback_table .prompt').show();
	});


})