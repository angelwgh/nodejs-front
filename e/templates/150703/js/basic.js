
define([],function () {

	function $wgh () {
		this._config();
	}

	$wgh.prototype._config = function(){
	
	};





	/*点击切换显示隐藏转态的方法*/
	$wgh.prototype.hideShow = function(obj){
		/*  obj = {
				click_obj:           this,                触发点击切换的小图标
				swith_DOM:           formTable,		      切换隐藏显示的区域
				hide_classname:      'hidden',            用于实现点击切换效果的classname
				show_ico_classname:  'fa-angle-up',       隐藏转态时的小图标样式（可选）
				hide_ico_classname:  'fa-angle-down'      显示转态时的小体表样式（可选）
		}*/

		if(obj.swith_DOM.hasClass(obj.hide_classname)){
			obj.swith_DOM.removeClass(obj.hide_classname);
				if (obj.show_ico_classname&&obj.hide_ico_classname) {
					obj.click_obj.removeClass(obj.show_ico_classname).addClass(obj.hide_ico_classname);
				}
		}else {
			obj.swith_DOM.addClass(obj.hide_classname);
				if (obj.show_ico_classname&&obj.hide_ico_classname) {
					obj.click_obj.removeClass(obj.hide_ico_classname).addClass(obj.show_ico_classname);
				}
		}

	};


	$wgh.prototype.Hash = function(){
		this.type='';
		this.content={};
	};


	/*获取DOM对象尺寸位置相关信息*/
	$wgh.prototype.getDOMInfo = function(element,event){
		var data = {}
		//浏览器窗口尺寸
		data.win_width      = $(window).width();
		data.win_height     = $(window).height();
		//元素窗口尺寸
		if (element) {
			data.width          = element.width();
			data.height         = element.height();
			//元素窗口相对浏览器窗口的距离
			data.fixed_top      = element[0].getBoundingClientRect().top ;
			data.fixed_left     = element[0].getBoundingClientRect().left;
			data.fixed_bottom   = data.win_height - element[0].getBoundingClientRect().bottom;
			data.fixed_right    = data.win_width  - element[0].getBoundingClientRect().right;
			//元素相对上一个定位元素的位置
			data.left           = element.position().left;
			data.top            = element.position().top;
		}
		

		/*鼠标位置信息*/
		if (event) {
			data.clientX    =event.clientX;
			data.clientY    =event.clientY;
		}

		return data;
	};


	var $wgh = new $wgh();
	
	return $wgh;
})


