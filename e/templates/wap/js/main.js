require.config({
    　　　　paths: {
    　　　　　

    　　　　},
    		urlArgs: "bust=" +  (new Date()).getTime()
});

require(['pageNav','slide','storeList'], function ($pageNav,slide,storeList){

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

	//店铺列表
	//console.log(store_list)
	$('.m-storeslist').prepend(storeList.showList(store_list,5))

	$('.m-storeslist .show-more').on('touchstart', function(event) {
		event.preventDefault();
		$(this).addClass('touch')
	});

	$('.m-storeslist .show-more').on('touchend', function(event) {
		event.preventDefault();
		$(this).removeClass('touch');
		var lis = storeList.showMore(5);

		if (lis.length==0) {
			console.log(lis)
			$(this).removeClass('show-more').addClass('no-more')
		}
		lis.forEach( function(element, index) {
			$('.m-storeslist .items').append(element)
		});
	});
	
	//console.log(storeList(store_list,5))
	
});

/*

<li class="media">
      <a href="<%=Detail_Url(dr)%>">
      <div class="media-left">
         
             <img src="<%=dr["titlepic"].ToString()%>" style="width: 80px; height: 64px;">
         
      </div>
      <div class="media-body">
          <h4 class="media-heading"><%=dr["title"].ToString()%></h4>
          <p>主营：<%=dr["content"].ToString()%></p>
      </div>
      </a>
    </li>
 */