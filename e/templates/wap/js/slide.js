//图片模块
define([],function(){

	function Slide(){
		this.config()
	};
	Slide.prototype.config=function(obj){
		this.html          = $('<div></div>');
		if(!obj || $.type(obj)!=="object"){return}
		this.id            = obj.id                || 'slide'+(new Date()).getTime();
		this.ride          = obj.ride              || 'carousel';
		this.interval      = obj.interval          || 5000;
		this.wrap          = obj.wap               || true;
		this.img_arr       = obj.img_arr           || null;

		if (this.img_arr && ($.isArray(this.img_arr))) {
			this.slide();
		}
	}

	Slide.prototype.slide=function(){
		
		var length           = this.img_arr.length;
		console.log(length)
		var C_indicators     = $('<ol class="carousel-indicators"></ol>');
		var C_inner          = $('<div class="carousel-inner"></div>');

		for(var i = 0 ; i < length ; i++){
			var li      = $('<li data-target="#'+this.id+'" data-slide-to="'+i+'""></li>');
			var item    = $('<div class="item"><img src="'+this.img_arr[i]+'"></div>')

			if(i==0){
				li.addClass('active');
				item.addClass('active');
			}
			C_indicators.append(li);
			C_inner.append(item);
		}
		
		var C_control = '<a class="left carousel-control" href="#'+this.id+'" role="button" data-slide="prev">'+
                        	'<span class="fa fa-chevron-left" aria-hidden="true"></span>'+
                        	'<span class="sr-only">Previous</span>'+
                        '</a>'+
                        '<a class="right carousel-control" href="#'+this.id+'" role="button" data-slide="next">'+
				            '<span class="fa fa-chevron-right" aria-hidden="true"></span>'+
				            '<span class="sr-only">Next</span>'+
				        '</a>';
		this.html.attr('id', this.id).addClass('carousel slide').attr('data-ride', this.ride).append(C_indicators).append(C_inner).append(C_control);
	};


	var slide = new Slide();

	return slide;
})