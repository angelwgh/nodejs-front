require.config({
    　　　　paths: {
    　　　　　　"jquery": "/e/templates/wap/jquery/dist/jquery.min"
    　　　　}
});

require(["jquery",'pageNav'], function ($,$pageNav){

	/**
	 * 页面导航宽度、高度、字体大小自适应
	 */

	!function () { 	
		var $page_nav = $('.page-nav .btn');

		
		$pageNav.getElem($page_nav);

		
		$pageNav.setData();

		$(window).resize(function(){
		  $pageNav.setData();
		});


	}()
});
