/**
 * 店铺内容页
 */


//主图区域模块
/*!function () {
	if (!_store_data) {
		return
	}

		var $main_img       = $(".main-img .img-show img");
		var $items          = $(".m-store-info .page-head .item");
		var $main_img_area  = $('.m-store-info .main-img .img-show');
		var $main_img_squ   = $('.m-store-info .page-head .img-show span');
		var $main_img_zoom  = $('.m-store-info .main-img .img-lage');

		$main_img_area.height($main_img_area.width());

		var box_size = {};  // 主图尺寸和内部小方块的尺寸
			
			box_size.inner_width      = $main_img_squ.width();
			box_size.inner_height     = $main_img_squ.height();
			box_size.out_width        = $main_img_area.width();
			box_size.out_height       = $main_img_area.height();

		_store_data.main_img_url = _store_data.titlepic||'';
		//console.log(_store_data)



	// 鼠标经过小图实时切换相应主图
	function seletctMainImg () {
		
		$items.on('mouseenter', function(event) {
			event.preventDefault();
			_store_data.main_img_url = $(this).data().imgurl||$(this).attr('data-imgurl');
			
			setMainImgUrl (_store_data.main_img_url);
		});

	
	}

		//设置主图图片地址
		function setMainImgUrl (url) {
			$main_img.attr('src',url)
		}

//---------------------------------------------------------------

	// 鼠标进入主图区域触发相关事件
	function mainImgMouseEnterEvent () {
		$main_img_area.on('mouseenter', function(event) {
			event.preventDefault();
			var position = {};


			mainImgSquareDisplay('show'); //显示半透明小方块
			mainImgZoomDisplay ('show')
			
				
			$main_img_area.on('mousemove', function(e) {
				e.preventDefault();
				//鼠标跟图片边框的距离
				position.x = e.pageX - $main_img_area.offset().left;
				position.y = e.pageY - $main_img_area.offset().top;	
				
				//console.log(position);

				mainImgMouseMove (position);
				mainImgZoomShow ()

			});
			
		});
	}
	
	// 鼠标离开主图区域触发相关事件
	function mainImgMouseLeaveEvent(){
		$main_img_area.on('mouseleave', function(event) {
			event.preventDefault();

			mainImgSquareDisplay('hide')    //隐藏半透明小方块
			mainImgZoomDisplay('hide')      //隐藏图片放大区域
		});
	}

		//主图区域显示半透明小方块
		function mainImgSquareDisplay (key) {
			if (key=='show') {
				$main_img_squ.show();
			}else {
				$main_img_squ.hide();
			}
			
		}

		//鼠标移动事件触发执行的函数
		function mainImgMouseMove (data) {

			mainImgSquarePosition(data);
		}


		//设置半透明小方块的位置
		function mainImgSquarePosition (position) {

			if (position.x >= (box_size.inner_width/2) && position.x <= (box_size.out_width-box_size.inner_width/2)) {
				$main_img_squ.css('left', position.x-box_size.inner_width/2);
			}else if (position.x < (box_size.inner_width/2)) {
				$main_img_squ.css('left', 0);
			}else{
				$main_img_squ.css('left', box_size.out_width-box_size.inner_width);
			}

			if (position.y >= (box_size.inner_height/2) && position.y <= (box_size.out_height-box_size.inner_height/2)) {
				$main_img_squ.css('top', position.y-box_size.inner_height/2);
			}else if (position.y < (box_size.inner_height/2)) {
				$main_img_squ.css('top', 0);
			}else{
				$main_img_squ.css('top', box_size.out_height-box_size.inner_height);
			}

		}

		//图片放大区域显示隐藏
		function mainImgZoomDisplay (key) {
			if (key=="show") {
			 	$main_img_zoom.show();
			 	$main_img_zoom.css({
			 		backgroundImage: 'url('+_store_data.main_img_url+')',
			 		backgroundSize: '800px,800px',
			 		backgroundRepeat: 'no-repeat'
			 	});;
			 } else {
			 	$main_img_zoom.hide();
			 }
		}

		//图片放大区域显示的图片部分
		function mainImgZoomShow () {
			var left =parseInt( (parseInt($main_img_squ.css('left'))) / (box_size.out_width-box_size.inner_width)  * (800-$main_img_zoom.width())  );
			var top  =parseInt( (parseInt($main_img_squ.css('top')))  / (box_size.out_height-box_size.inner_height) * (800-$main_img_zoom.height()) );
			$main_img_zoom.css({
				backgroundPosition: '-'+left + 'px -'+top+'px'
			});
		}
//---------------------------------------------------------------

	//页面加载完成后需要执行的函数
	function pageOnloadfunction () {
		seletctMainImg ()              //鼠标经过小图实时切换相应主图
		mainImgMouseEnterEvent ()      //鼠标进入主图区域触发相关事件
		mainImgMouseLeaveEvent()       //鼠标离开主图区域触发相关事件
	}

	pageOnloadfunction()
	//console.dir($wgh);
}()*/


//主图右侧店铺相关信息模块

/*!function () {
	var $mainDOM =             $('.m-store-info .head-right');

	var domHTML = '<div class="store-title">'+
					  '<span>'+((_store_data.title)||'')+'</span>'+
				  '</div>'+

				  '<div class="store-intro">'+
				  	  '<span>'+((_store_data.content)||'')+'</span>'+
				  '</div>'+

				  '<div class="store-info store-name">'+
				  	   '<span class="title ibk "><i class="fa fa-user"></i>联系人:</span>'+
				  	   '<span class="content ibk">'+((_store_data.name)||'')+'</span>'+
				  '</div>'+

				  '<div class="store-info store-tel">'+
				  	   '<span class="title ibk "><i class="fa fa-phone"></i>联系电话:</span>'+
				  	   '<span class="content ibk">'+((_store_data.tel)||'')+'</span>'+
				  '</div>'+

				  '<div class="store-info store-qq">'+
				  	   '<span class="title ibk "><i class="fa fa-qq"></i>联系QQ:</span>'+
				  	   '<span class="content ibk">'+((_store_data.qq)||'')+'</span>'+
				  '</div>'+

				  '<div class="store-info store-qq">'+
				  	   '<span class="title ibk "><i class="fa fa-weixin"></i>微信:</span>'+
				  	   '<span class="content ibk">'+((_store_data.wx)||'')+'</span>'+
				  '</div>'+

				  '<div class="store-info store-qq">'+
				  	   '<span class="title ibk "><i class="fa fa-home"></i>店铺地址:</span>'+
				  	   '<span class="content ibk">'+((_store_data.store_num)||'')+'</span>'+
				  '</div>'+
				  '<hr>'

	$mainDOM.append(domHTML);
}()*/

//店铺内容页上面的导航

!function () {
	var $nav = $('.current_location');
	var $items = $('.current_location_1 a');
	var $ul=$('<ul class="new-nav"></ul>');  
	
	for (var i = 0; i < $items.length; i++) {
		$ul
		.append(
			(
				$('<li class="new-nav-item"></li>')
				)
				.append($($items[i]))
		);
	}

	$nav.append(
		$ul
		.append('<li class="new-nav-item current-nav">'+
			        '<a href="javascript:">'+
			            _store_data.title+
			        '</a>'+
			     '</li>')
		.prepend('<li class="new-nav-item store-name">'+
					'<a href="javascript:">'+
						'当前位置：'+
					'</a>'+
				'</li>'
				)
		.append('<li class="clear"></li>')
		)
	.prepend('<span class="new-nav-box"></span>');


}()

/*
 *图片展示
 */

!function () {
	var Show_Style=3;
	var Image_17=new Array();
	var Pics=(_store_data.img_url).slice(0,-1);
	var Links="/index.aspx?lanmuid=116&sublanmuid=731&id=5|/index.aspx?lanmuid=116&sublanmuid=731&id=4|/index.aspx?lanmuid=116&sublanmuid=731&id=1";
	var Titles="";
	var Alts="";

	var Apic17=Pics.split('|');
	var ALink17=Links.split('|');
	var ATitle17=Titles.split('|');
	var AAlts17=Alts.split('|');
	var Show_Text=1;
	for(i=0;i<Apic17.length;i++)
	  {
	   Image_17.src = Apic17[i]; 
	  }

console.log(Apic17);

	  var FHTML='<div id="js_slide_focus_17" class="slide_focus focus_style3" ><a class="prev"></a><a class="next"></a>';
	  
	  FHTML+='<ul class="inner">';
	  for(var i=0;i<Apic17.length;i++)
	   {
	     if(ALink17.length<(i+1) || ALink17[i]=="")
	      {
	       ALink17[i]="javascript:void(0)";
	      }
	     if(AAlts17.length<(i+1))
	      {
	       AAlts17[i]="";
	      }
	     if(ATitle17.length<(i+1))
	      {
	       ATitle17[i]="";
	      }
	    FHTML+='<li><a href="'+ALink17[i]+'" target="_self" title="'+AAlts17[i]+'"><img src="'+Apic17[i]+'">';
	    FHTML+='<em>'+ATitle17[i]+'</em>';
	    FHTML+='</a></li>';
	   }
	 FHTML+='</ul>';
	 FHTML+='</div>';
	 document.write(FHTML);

	$(window).load(function(){Slide_Focus("js_slide_focus_17",0,5,0,0,true);});
	//function Slide_Focus(id,slidestyle,ITimes,width,height,isbanner)
}()


/**
 * 店铺信息模块
 */

!function () {
	var $info_list         = $('.m-store-info .store-info-list');
	var info_list_html     ='';
	if (_store_data.title == ""||_store_data.img_url=="") {
		return
	}
	info_list_html = '<li class="item store-title">'+
					 	'<span>'+_store_data.title+'</span>'+
					 '</li>'+
					 '<li class="item">'+
					  	'<div class="th left">联系人：</div>'+
					  	'<div class="td left">'+_store_data.name+'</div>'+
					  	'<div class="clear"></div>'+
					  '</li>'+
					  '<li class="item">'+
					  	'<div class="th left">电话：</div>'+
					  	'<div class="td left">'+_store_data.tel+'</div>'+
					  	'<div class="clear"></div>'+
					  '</li>'+
					  '<li class="item">'+
					  	'<div class="th left">QQ：</div>'+
					  	'<div class="td left">'+_store_data.qq+'</div>'+
					  	'<div class="clear"></div>'+
					  '</li>'+
					  '<li class="item">'+
					  	'<div class="th left">微信：</div>'+
					  	'<div class="td left">'+_store_data.wx+'</div>'+
					  	'<div class="clear"></div>'+
					  '</li>'+
					  '<li class="item">'+
					  	'<div class="th left">地址：</div>'+
					  	'<div class="td left">'+_store_data.store_num+'</div>'+
					  	'<div class="clear"></div>'+
					  '</li>'+
					  '<li class="item">'+
					  	'<div class="th left">主营：</div>'+
					  	'<div class="td left">'+_store_data.content+'</div>'+
					  	'<div class="clear"></div>'+
					  '</li>';
	$info_list.append(info_list_html);
}()