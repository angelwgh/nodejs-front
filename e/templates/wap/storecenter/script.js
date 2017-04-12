
function StoreDetails () {
    this._congfig();
}

StoreDetails.prototype._congfig = function () {
	this.data = store_data;
	if(typeof this._parsingTelNum == 'function'){
		this._parsingTelNum();
	}
}

StoreDetails.prototype._parsingTelNum = function(){
	var tel_num = (this.data.tel||'').length<8?'86-0579-85698881':this.data.tel;
		tel_num = tel_num.replace(/(\s+)|(,+)/g, '|')
	var tel_num_arr = tel_num.split('|');
	this.data.tel=tel_num_arr;
};

StoreDetails.prototype.repeatLi = function (ulElem,setLiElem,length,isClearParent) {
	if(isClearParent){
		ulElem.html('')
	}
	
	for (var i = 0 ; i<length ; i++) {
		ulElem.append(setLiElem(i));
	}
}

StoreDetails.prototype.closeDom = function(close_elem,close_class){
	if(close_class){
		close_elem.addClass(close_class)
	}else{
		close_elem.hide();
	};
};

var storeDetails = new StoreDetails();





(function () {
	var $tel_num_list = $('.tel-num-list ul');
	var $close_tel_list   = $('.tel-num-list .close');
	var $show_tel_list =$('.tel-icon');
	var $bg = $('.tel-num-list .bg');
	var $child_views_list = $('.child-views-list');
	var time =null;
	var $tels =$('.tel-num-list ul')

	//商户电话列表
	function setLiElem (i) {
		return '<li>'+
					'<a class="btn btn-primary btn-block" href="tel:'+storeDetails.data.tel[i]+'">'+storeDetails.data.tel[i]+'</a>'+
				'</li>';
	}
	storeDetails.repeatLi($tel_num_list,setLiElem,storeDetails.data.tel.length,true)

	
	//console.log($tels)

	$tels.on('touchmove touchstart touchend',function (event) {
		event.stopPropagation();
	})
	$tels.on('click',function () {
		console.log('click')
	})
	

	$('.tel-num-list .close,.tel-num-list .bg').on('touchstart', function(event) {
		event.preventDefault();
		event.stopPropagation();
	});
	$('.tel-num-list .close,.tel-num-list .bg').on('touchmove', function(event) {
			event.preventDefault();
			event.stopPropagation();
			
	});
	$('.tel-num-list .close,.tel-num-list .bg').on('touchend',function (event) {
		event.preventDefault();
		event.stopPropagation();
		$('.tel-num-list').removeClass('sp').addClass('sd');

	})

	$show_tel_list.on('touchstart', function(event) {
		event.preventDefault();
		event.stopPropagation();		
	});
	$show_tel_list.on('touchmove', function(event) {
			event.preventDefault();
			event.stopPropagation();

	});
	$show_tel_list.on('touchend',function (event) {
			event.preventDefault();
			event.stopPropagation();
			if(navigator.userAgent.indexOf('UCBrowser') > -1) {
			   $('.tel-num-list').css({
				top: 0,
				right:0,
				bottom:0,
				left:0,
				opacity :1
			});
			}
			$('.tel-num-list').removeClass('sd').addClass('sp');
			
			//alert($('.tel-num-list').attr('class'))
	})


	//图片列表
	
	var img_arr = storeDetails.data.img_url.split('|');

	img_arr.pop();
	img_arr.shift();

	function setPicImg (i) {
		return '<div class="pic child-view">'+
					'<img src="/e/templates/wap/images/loading.png" data-src="'+img_arr[i]+'">'+
		       '</div>'
	}
	//console.log(img_arr)
	storeDetails.repeatLi($child_views_list,setPicImg,img_arr.length,false);

})();


//滑动切换页面
!function () {
	function SwitchPage () {
		this._config()
	}

	SwitchPage.prototype._config = function(){
		this.page_index = 0;//当前显示的页面
		this.page_dir = 0;//页面滑动方向，0表示向上滑动，1表示向下滑动
		this.page_num = 0;//页面数量
	};

	SwitchPage.prototype.setPage = function(view_ele,pages,pages_list){
		this.view      = view_ele;  //页面显示区域
		this.pages     = pages;    //显示的页面内容
		this.pages_list= pages_list;
		this.view_h    = this.view[0].offsetHeight  //可视窗口的高度
		this.page_num  = this.pages.length;

		pages.height(this.view_h);                  //设置页面高度
	};

	SwitchPage.prototype.switch = function (view_ele,pages_list,pages) {

		this.setPage(view_ele,pages,pages_list);

		var view = view_ele[0];
		var that = this;
		var start_y=0;
		var end_y  =0;
		var mt     = 0;
		view.addEventListener('touchstart',touchStart(event))

		function touchStart (e) {
			return function (e) {
				e.preventDefault();
				var touch = e.changedTouches[0];
				start_y   = touch.screenY;
				mt       = parseInt(that.pages_list.css('margin-top'))
				//console.log(start_y)
			}	
		}
		view.addEventListener('touchmove',function(event){
			event.preventDefault();
			var touch  = event.targetTouches[0];
			var move_y = touch.screenY-start_y;
			
			that.pages_list.css('margin-top',mt+move_y);

		})
		view.addEventListener('touchend', touchEnd(event));
		function touchEnd (e) {
			return function (e) {
				e.preventDefault();
				var touch = e.changedTouches[0];
				end_y = touch.screenY;

				var move_y = end_y-start_y;
				
				switchPage (pages_list,move_y);
			}
		}
		
		function switchPage (pages_list,move_y){
			return that.switchPage(move_y)
		}
		

	}
	SwitchPage.prototype.loadImg = function(){
		if(this.page_index<=1) return ;
		var k=this.page_index;
		var img = $(this.pages[k].children)
		var src = img.data().src;
		img.attr('src', src);
	};
	SwitchPage.prototype.switchPage=function (move_y) {
		var k = 0;
		var that=this;
		if (move_y) {
			if(move_y>0){
			//往下滑动
			
				this.page_index = this.page_index <=0 ? this.page_index:this.page_index-1;
			}else if (move_y<0) {
				 //往上滑动
				
				this.page_index = this.page_index >= this.page_num-1 ? this.page_index  :this.page_index+1
			}
		}

		var target = -this.page_index*this.view_h;

		var length = target-parseInt(that.pages_list.css('margin-top'));

		var timer = setInterval(function () {
			length = parseInt(length*9/10);
			var y = parseInt(target-length);
			that.pages_list.css('margin-top', y);

			if (length == 0) {
				clearInterval(timer)
			}
		},10)
		
		if(this.page_index>0){
			this.go_top.show();
		}else{
			this.go_top.hide()
		}
		
		this.loadImg();
		
	}

	//返回顶部
	SwitchPage.prototype.setGoTop = function (select) {
		this.go_top = $(select);
		var that=this;
		this.go_top.on('touchend', function(event) {
			event.preventDefault();
			that.page_index = 0;
			that.switchPage();
		});
	}

	var switchPage = new SwitchPage();


	var $view       = $('.m-view'); //显示页面的可视窗口
	var $pages      = $('.child-view'); //所有页面
	var $page_list  = $('.child-views-list')

	switchPage.setGoTop('.go-top');
	switchPage.switch($view,$page_list,$pages)
	//console.log(view_h)

}()