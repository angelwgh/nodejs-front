/**
 * 首页动画效果
 */

define(['jquery','basic'],function ($,$wgh) {
	
	var $item  = $('#module_content_259 .item');
	var $infoCenter = $('#module_content_259')
	var $slide = $('.m-jfy-slide');
	var $message = $('.m-message');
	var $map=$('.sy_lx_map');
	var $lxfs = $('.sy_lx_fs')
	var $sy_lianxi =$('.sy_lianxi')


	animate ();

	$(window).scroll(function(event) {
		animate ();	

	});

	function addclass (posotionElem,elem) {
		//posotionElem 用来参照位置的dom元素
		//elem 添加动画效果的dom元素
		var bottom = $wgh.getDOMInfo(posotionElem).fixed_bottom;
		var height = $wgh.getDOMInfo(posotionElem).height;
		if (bottom > (-1 * height)/2) {
			elem.addClass('animated');
		}else if (bottom < (-1 * height)) {
			elem.removeClass('animated');
		}


	}

	function animate () {
		addclass ($infoCenter,$item);
		addclass ($slide,$slide);
		addclass ($message,$message);
		addclass ($sy_lianxi,$map);
		addclass ($sy_lianxi,$lxfs);

	}
})