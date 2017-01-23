//首页幻灯片

define(['basic'],function ($wgh) {
	var $slidebox                 = $('.m-jfy-slide')              
		$container                = $('.m-jfy-slide .img-show>ul'),
	    $items                    = $('.m-jfy-slide .img-show>ul>li'),
	    $leftbtn                  = $(".toolbar .left"),
		$rightbtn                 = $(".toolbar .right"),
	    k                         = 0;
	    $itemWidth                = $items.width(),
	    data                      = {};


	if ($slidebox.length == 0) {
		return false;
	}

	$container.width($items.width()*($items.length+2));
	$container.append($($items[0]).clone());
	function setDirection (dierction) {
		data.direction = dierction;
	}

	setDirection("left");//图片滚动的方向
	var timer = setInterval(slide, 2000);

	/*图片轮播控制函数*/
	function slide () {
		var k 		   = parseInt(($container.position().left)/$itemWidth);
		
		//direction 图片切换的方向
		if (data.direction == "left" || !data.direction) {
			$container.animate(
				{
					left: $itemWidth*(k-1) + "px"
				},
				400,
				function () {
					if (k < $items.length*(-1)+2) {
						$container.css({left:0});
					}
				}
			);
		}else if (data.direction == "right") {
			$container.animate(
				{
					left: $itemWidth*(k+1) +'px'
				},
				400,
				function () {
					if (k >= -1) {
						$container.css({left:$itemWidth*($items.length)*(-1)})
					}
				}
			)
		}else {
			return false;
		}
		
	}
	$slidebox.on('mouseover', function(event) {
		event.preventDefault();
		clearInterval(timer)
	});

	$slidebox.on('mouseleave', function(event) {
		event.preventDefault();
		setDirection("left");
		timer = setInterval(slide, 2000);
	});
	$leftbtn.on('click', function(event) {
		event.preventDefault();
		setDirection("right")
		slide ();
	});
	$rightbtn.on('click', function(event) {
	 	event.preventDefault();
	 	setDirection("left")
		slide();
	});
})