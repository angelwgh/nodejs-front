require.config({
    　　　　paths: {
    　　　　　

    　　　　},
    		urlArgs: "bust=" +  (new Date()).getTime()
});

require(['pageNav','slide'], function ($pageNav,slide){

	/**
	 * 页面导航宽度、高度、字体大小自适应
	 */
	var $page_nav = $('.page-nav .btn');
	$pageNav.setDomStyle($page_nav)
	
	

	// 底部转态控制
	function footBarStyle () {
		//点击刷新页面
		$('.refresh').on('click', function(event) {
			event.preventDefault();
			location.reload();
			console.log(location)
		});

		//点击返回首页
		$('.fa-home').on('click', function(event) {
			event.preventDefault();
			location.replace('/m')
		});

		//按下更换背景颜色
		$('.bottom_box .col-xs-3').on('mousedown', function(event) {
			event.preventDefault();
			$(this).addClass('md');
			console.log(1);
		});
		$('.bottom_box .home').on('mousedown', function(event) {
			event.preventDefault();
			$(this).addClass('md');
		});

		//弹起恢复背景颜色
		$('body').on('mouseup', function(event) {
			event.preventDefault();
			$('.bottom_box .col-xs-3').removeClass('md');
			$('.bottom_box .home').removeClass('md');
		});
	}

	footBarStyle();

	

	//首页轮播图
	slide.config({
		id:"home-page-silde",
		img_arr:[
			'/e/images/banner/wapbanner01.jpg',
			'/e/images/banner/wapbanner02.jpg'
		]
	})
	$('.sy_slide').prepend(slide.html);
	$('.carousel').carousel();
	
	//首页店铺列表 ajax获取数据
	!function () {
		if($('.m-stores-list').length == 0){return}
		var pagesize   = 5;
		window.ajaxparameter_190="siteid=1&sortid=0&pagesize=20&sqlorder=id desc" //全局参数
		var $ul        = $('.m-stores-list .items');
		var $show_more = $('.m-stores-list .show-more');
		var page = 1;//设置当前页次

		rajax_190(page,true,ajax_190_back);//页面加载后发送ajax请求，第1个参数为当前页次，第2个参数为是否异步加载;
		
		$show_more.on('touchstart', function(event) {
			event.preventDefault();
			$(this).addClass('touch');
		});

		$show_more.on('touchend', function(event) {
			event.preventDefault();
			$(this).removeClass('touch')
			rajax_190(page,true,ajax_190_back);
		});
		
		
		function ajax_190_back(backcontent){ 
			console.log(backcontent.replace(/<div.*/,''))
			var data =JSON.parse(backcontent.replace(/<div.*/,''));
			if(page >data.PageCount){
				$show_more.removeClass('show-more').addClass('no-more');
				return;
			}
			for(var i = 0 ; i < data.stores.length ; i++){
				var li = '<li class="media">'+
	      					'<a href="/m/index.aspx?lanmuid=125&sublanmuid=747&id='+data.stores[i].id+'">'+
						      '<div class="media-left">'+
						      	  '<div class="img">'+
						          '<img src="'+data.stores[i].img_src+'" style="width: 80px; height: 64px;">'+
						          '</div>'+
							   '</div>'+
						      '<div class="media-body">'+
						          '<h4 class="media-heading">'+data.stores[i].title+'</h4>'+
						          '<p>主营：'+data.stores[i].content+'</p>'+
						          '<div class="access" >'+
							          
							          '<span>'+data.stores[i].clicks+'</span>'+
							          '<i class="fa fa-eye"></i>'+
						          '</div>'+
						      '</div>'+
						      '</a>'+
						    '</li>';
						    
				var $li = $(li);
				$ul.append($li);
			}
			page++;
		}

		
	}()
	
	
});

