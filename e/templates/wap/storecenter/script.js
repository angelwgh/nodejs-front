
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


//console.log(storeDetails);

(function () {
	var $tel_num_list = $('.tel-num-list ul');
	var $close_tel_list   = $('.tel-num-list .close');
	var $show_tel_list =$('.tel-icon');
	var $bg = $('.tel-num-list .bg');
	var $child_views_list = $('.child-views-list');

	//商户电话列表
	function setLiElem (i) {
		return '<li>'+
					'<a class="btn btn-primary btn-block" href="tel:'+storeDetails.data.tel[i]+'">'+storeDetails.data.tel[i]+'</a>'+
				'</li>';
	}
	storeDetails.repeatLi($tel_num_list,setLiElem,storeDetails.data.tel.length,true)



	$('.tel-num-list .close,.tel-num-list .bg').on('click', function(event) {
		event.preventDefault();
		$('.tel-num-list').removeClass('sp').addClass('sd');

	});
	$('.tel-num-list .close,.tel-num-list .bg').on('touchend',function (event) {
		event.stopPropagation();
	})

	$show_tel_list.on('click', function(event) {
		event.preventDefault();

		$('.tel-num-list').removeClass('sd').addClass('sp');
	});


	//图片列表
	
	var img_arr = storeDetails.data.img_url.split('|');

	img_arr.pop();
	img_arr.shift();

	function setPicImg (i) {
		return '<div class="pic child-view">'+
					'<img src="'+img_arr[i]+'">'+
		       '</div>'
	}
	console.log(img_arr)
	storeDetails.repeatLi($child_views_list,setPicImg,img_arr.length,false);

})();
!function () {
	function SwitchPage () {
		this._config()
	}

	SwitchPage.prototype._config = function(){
		this.page_index = 0;//当前显示的页面
		this.page_dir = 0;//页面滑动方向，0表示向上滑动，1表示向下滑动
		this.page_num = 0;//页面数量
	};

	SwitchPage.prototype.setPage = function(view_ele,pages){
		this.view      = view_ele;  //页面显示区域
		this.pages     = pages;    //显示的月面内容
		this.view_h    = this.view[0].offsetHeight  //可视窗口的高度
		this.page_num  = this.pages.length;
		pages.height(this.view_h);
	};

	SwitchPage.prototype.switch = function (view_ele,pages_list,pages) {

		this.setPage(view_ele,pages);

		var view = view_ele[0];
		var that = this;
		var start_y=0;
		var end_y  =0;

		view.addEventListener('touchstart',touchStart(event))

		function touchStart (e) {
			return function (e) {
				var touch = e.changedTouches[0];
				start_y   = touch.screenY;
				
			}	
		}
		view.addEventListener('touchend', touchEnd(event));
		function touchEnd (e) {
			return function (e) {
				var touch = e.changedTouches[0];
				end_y = touch.screenY;

				var move_y = end_y-start_y;
				
				switchPage (move_y);
			}
		}
		
		function switchPage (move_y){
			var k = 0;
			if(move_y>0){
				k=1;//往下滑动
				if (that.page_index <=0) {
					return;
				}
			}else if (move_y<0) {
				k=-1; //往上滑动
				if(that.page_index >= that.page_num -1){
					return
				}
			}

			
			var target = (-(that.page_index-k))*that.view_h;
			var length = target- (-that.page_index)*that.view_h;
			//console.log(target)
			var timer = setInterval(function () {
				length = parseInt(length*9/10)
				//console.log(target)
				var y = parseInt(target-length);
				pages_list.css('margin-top', y);

				if (length == 0) {
					clearInterval(timer)
				}
			}, 10)
			
			that.page_index += -k;
		}


	}

	var switchPage = new SwitchPage();


	var $view      = $('.m-view'); //显示页面的可视窗口
	var $pages      = $('.child-view'); //所有页面
	var $page_list = $('.child-views-list')

	switchPage.switch($view,$page_list,$pages)
	//console.log(view_h)

}()