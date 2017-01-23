//在线留言模块

define(['jquery','basic'],function ($,$wgh) {
	var element            = $('.m-message'),                                     //在线留言窗口
		title              = $('.m-message .title'),                              //标题栏
		formTable          = $('.feedback_table'),                                //在线留言内容区域
		tableSwitch        = $('.m-message .fa'),                                 //右上角最小化最大化按钮
		input              = $('.feedback_table input[type="text"],#content'),    //input 输入窗口
		reset              = $('.feedback_table .bt.reset');                            //重置按钮


	/*点击显示隐藏窗口*/

	/*tableSwitch.on('click',function(event) {
		event.preventDefault();
		event.stopPropagation();
		//设置参数
		var data = {
			click_obj:           $(this),
			swith_DOM:           formTable,
			hide_classname:      'hidden',
			show_ico_classname:  'fa-angle-up',
			hide_ico_classname:  'fa-angle-down'       
		}

		$wgh.hideShow(data);
		return false;
	});

	tableSwitch.on('mousedown',function (event) {
		event.stopPropagation(); //阻止图标mousedown事件冒泡
	})*/

	/*鼠标按住标题栏拖动窗口*/

	/*title.on('mousedown', function(event) {
		event.preventDefault();

		$(this).css({
			cursor: 'move',
		});
		
		var old_info = $wgh.getDOMInfo(element,event);


		element.on('mousemove',function (event) {	
			var new_info = $wgh.getDOMInfo(element,event)
			var left   = old_info.fixed_left   + new_info.clientX - old_info.clientX;
			var bottom = old_info.fixed_bottom - (new_info.clientY - old_info.clientY);
			var top    = old_info.fixed_top    + new_info.clientY - old_info.clientY;
			var right  = old_info.fixed_right  - (new_info.clientX - old_info.clientX)

			left    = left    < 0 ? 0 : (right > 0 ? left   : left + right);
			bottom  = bottom  < 0 ? 0 : (top   > 0 ? bottom : top  + bottom);

			element.animate({
				left: left,
				bottom: bottom},
				0);
		})


		return false;
	});*/

		/*鼠标弹起移除mousemove时间，恢复鼠标指针样式*/
	/*$(document).on('mouseup', function(event) {
		element.off('mousemove');
		title.css({
			cursor: 'default'
		});
	});*/


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




	/*窗口延时显示*/
    /*setTimeout(function () {
		element.show('slow');
	}, 1)*/
})