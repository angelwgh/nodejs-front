require.config({
    　　　　paths: {
    　　　　　　"jquery": "/e/templates/wap/jquery/dist/jquery.min"
    　　　　},
    		urlArgs: "bust=" +  (new Date()).getTime()
});

require(["jquery",'pageNav'], function ($,$pageNav){

	/**
	 * 页面导航宽度、高度、字体大小自适应
	 */
	var $page_nav = $('.page-nav .btn');
	$pageNav._setData($page_nav)
	
	

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

	
	
});
