define(['jquery'],function ($) {
	function PageNav () {
		
	}

	PageNav.prototype.getElem = function(elem){
		this.elem = elem;
	};

	PageNav.prototype.getData = function(){
		this.width = this.elem.width();
		this.height = this.width*4/5;
		this.fontSize = this.width/5;
		this.fontFamily='微软雅黑';
	};

	PageNav.prototype.setData = function () {
		this.getData();

		this.elem.css({
				height: this.height,
				fontSize: this.fontSize,
				fontFamily:this.fontFamily
			})
	}

	
	var pageNav = new PageNav();

	return pageNav;
})