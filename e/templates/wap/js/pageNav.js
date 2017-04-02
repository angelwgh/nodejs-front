define(['jquery'],function ($) {
	function PageNav () {
		
	}

	PageNav.prototype._getElem = function(elem){
		this.elem = elem;
	};

	//获取元素属性
	PageNav.prototype._getData = function(){
		this.width = this.elem.width();
		this.height = this.width*4/5;
		this.fontSize = this.width/5;
		this.fontFamily='微软雅黑';
	};

	//根据元素属性设置样式
	PageNav.prototype._setData = function (elem) {
		this._getElem(elem);

		this._getData();

		this.elem.css({
				height: this.height,
				fontSize: this.fontSize,
				fontFamily:this.fontFamily
			})
	}

	PageNav.prototype.setDomStyle = function (elem) {
		this._setData(elem);
		$(window).resize(function () {
			this._setData(elem);
		})
	}
	var pageNav = new PageNav();

	return pageNav;
})