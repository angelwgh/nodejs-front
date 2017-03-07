/**
 * 商铺内容页
 */
!function () {
	function Content () {
		this._config();
	}

	Content.prototype._config = function(){
		this.data = _store_data;
		this.data.floor=this.getFloorNum();
		this.data.img_url=this.setImgUrl();
	}

	Content.prototype.getFloorNum = function(){
		switch (this.data.Sort_Id) {
			case '645'	:
				return '地下一层';
				break;
			case 647:
			    return '一层';
			    break;
			case 648:
			    return '二层';
			    break;
			case 649:
			    return '三层';
			    break;
			case 650:
			    return '四层';
			    break;
			default:
				// statements_def
				break;
		}
	};

	Content.prototype.setImgUrl = function(){
		var picArray =  this.data.img_url.split('|');
		picArray.pop();
		return picArray;
	};




	var content = new Content();

	var $main_box = $('.main_box');
    var $content  = $('<div class="m-content f-center"></div>');

   
    	//生成路径导航
    var $content_nav = '<div class = "content-nav">'+
	    					'<ul class= "items">'+
	    						'<li class = "item item1">'+

	    							'<a href="/"><i class = "fa fa-home"></i>首页</a>'+
	    						'</li>'+
	    						'<li class = "item item2">'+
	    							'<a href="/index.aspx?lanmuid=116">商铺中心</a>'+
	    						'</li>'+
	    						'<li class = "item item3">'+
	    							'<a href="/index.aspx?lanmuid=116#?type='+content.data.Sort_Id+'&pageIndex=1">'+content.data.floor+'</a>'+
	    						'</li>'+
	    						'<li class = "item item4">'+
	    							'<a href="#">'+content.data.title+'</a>'+
	    						'</li>'+
	    						'<li class="clear"></li>'
	    					'</ul>'+
	    				'</div>';
		//生成页面头部
	var $content_head = '<div class="content-head">'+
							'<div style="position:absolute;left:50%">'+
								'<div class="full-screen" >'+
									'<div class="main-pic">'+
										'<img src = "'+content.data.img_url[0]+'">'
									'</div>'
								'</div>'+
							'</div>'+
						'</div>'; 
		//生成店铺相关信息
	var $content_info = '<div class="content-info">'+
							'<div class="left f-pr">'+
								'<ul class="store-info">'+
									'<li class="item">'+
										'<div class="left ico-bg">'+
											'<i class="fa fa-phone"></i>'+
										'</div>'+
										'<div class="left">'+
											'<h2>联系电话</h2>'+
											'<p>'+content.data.tel+'</p>'+
										'</div>'+
										'<div class="clear"></div>'+
									'</li>'+
									'<li class="item">'+
										'<div class="left ico-bg">'+
											'<i class="fa fa-map-marker"></i>'+
										'</div>'+
										'<div class="left">'+
											'<h2>店铺地址</h2>'+
											'<p>'+content.data.store_num+'</p>'+
										'</div>'+
										'<div class="clear"></div>'+
									'</li>'+
									'<li class="item">'+
										'<div class="left ico-bg">'+
											'<i class="fa fa-suitcase"></i>'+
										'</div>'+
										'<div class="left">'+
											'<h2>主营产品</h2>'+
											'<p>'+content.data.content+'</p>'+
										'</div>'+
										'<div class="clear"></div>'+
									'</li>'+
								'</ul>'+
							'</div>'+
							'<div class="clear"></div>'+
						'</div>';
		//图片展示
	var $content_pic =  '<div class="content-pic">'+
							'<ul class="pics">';

	for (var i = 1; i < content.data.img_url.length; i++) {
		$content_pic+=          '<li class="pic pic'+i+'">'+
									'<div class="left img">'+
										'<img src="'+content.data.img_url[i]+'">'+
									'</div>'+
									'<div class="right">'+
										'<div class="line">'+
											'<div class="circle">'+
											'</div>'+
										'</div>'+
										
									'</div>'+
									'<div class="clear">'+
									'</div>'+
								'</li>';
		
	}

		$content_pic+= 		'</ul>'+
						'</div>';


	$content.append($content_nav).append($content_head).append($content_info).append($content_pic);
	$main_box.prepend($content);

	
	//控制全屏尺寸
	!function () {
		var $width = $('body').width();
		$('.full-screen').width($width).css('left',-1* $width/2);
		$(window).resize(function(event) {
			var $width = $('body').width();
			$('.full-screen').width($width).css('left',-1* $width/2);
			
		});
	}()
	
	console.log(document.getElementsByClassName('pic1')[0].children[0].offsetHeight);
	
	console.log(content);
}()