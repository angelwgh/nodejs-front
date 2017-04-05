
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

StoreDetails.prototype.repeatLi = function (ulElem,setLiElem,length) {
	ulElem.html('')
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


console.log(storeDetails);

(function () {
	var $tel_num_list = $('.tel-num-list ul');
	var $close_tel_list   = $('.tel-num-list .close');
	var $show_tel_list =$('.tel-icon');
	var $bg = $('.tel-num-list .bg');

	//商户电话列表
	function setLiElem (i) {
		return '<li>'+
					'<a class="btn btn-primary btn-block" href="tel:'+storeDetails.data.tel[i]+'">'+storeDetails.data.tel[i]+'</a>'+
				'</li>';
	}
	storeDetails.repeatLi($tel_num_list,setLiElem,storeDetails.data.tel.length)



	$('.tel-num-list .close,.tel-num-list .bg').on('click', function(event) {
		event.preventDefault();
		$('.tel-num-list').hide('slow');
	});


	$show_tel_list.on('click', function(event) {
		event.preventDefault();
		$('.tel-num-list').show('slow');
	});


})();

(function () {
	var view = document.getElementsByClassName('m-view')[0];
	var view_height = view.offsetHeight;
	$('.child-view').css('height', view_height);

	view.addEventListener('touchstart', function (event) {
		event.preventDefault();

		var touch = event.targetTouches[0];//获取触发事件的手指

		var start_y = touch.screenY;
		var marginTop = $('.child-views-list').css('margin-top');

		$('body')[0].addEventListener('touchmove', function (event) {
			event.preventDefault();
			var touch = event.targetTouches[0];

			var move_y = touch.screenY;
			var y = move_y-start_y;

			
			console.log(y);
			//console.log(parseInt(marginTop))
			y=parseInt(marginTop)+y;

			$('.child-views-list').css('margin-top', y);

		
		})
	});
	$('body')[0].addEventListener('touchend', function () {
		view.removeEventListener('touchstart');
		$('body')[0].removeEventListener('touchmove');
	});

	console.dir(view)
})();