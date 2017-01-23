/**
 * 导航菜单模块
 */

define(['jquery','basic'],function ($,$wgh) {
	var $ul =                    $("#Menu > ul");
	var $menuList=               $ul.find('.menu_style_homepage,.menu_style')
	var $currentli=              $ul.find('.menu_current');
	var $underLine=$('<li class="underline"></li>')

	$ul.append($underLine);
	setPosition($underLine,$currentli);

	$menuList.on('mouseenter',function () {
		setPosition($underLine,$(this));
	}).on('mouseleave',function () {
		setPosition($underLine,$currentli);
	})
	function setPosition ($ele,$refEle) {
		$ele.css({
			left:$wgh.getDOMInfo($refEle).left+10,
			width:$wgh.getDOMInfo($refEle).width
		});
	}
})