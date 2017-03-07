/**
 * 商铺中心模块
 * 
 */

/*(function () {
	var $floors         = $(".m-storse-center .floor-list li");//导航 标签列表
	var $stroesList     = $(".storse-list .floor");            //楼层列表
	var hashObj         = $wgh.getHash();                      //获取hash对象

	stores_data.page = 1; //显示第几页
	stores_data.page_list_num = 8 //每页显示几条
	
	showStoreList(hashObj);
	

	//点击切换楼层
	$floors.on('click', function(event) {
		
		event.preventDefault();
		var $floor   =$(event.target.parentNode) 
		var data     = $floor.data() //读取'data-floor'数据
		
		var hash = new $wgh.Hash(); //实例化一个hash对象
		hash.type = 'hashSearch';	//设置hash的type
		for(var k in data){
			hash.content[k]=data[k];//复制data对象的属性到hash.content
		}

		
		showStoreList(hash);  //根据hash值显示对应的店铺列表
		$wgh.setHash(hash);   //修改hash值
		//console.log(hash);
	});

   //根据显示对应楼层店铺
	function showStoreList (hash) {

		var floor_num = parsingHash(hash);
		var floor_data = stores_data[floor_num];
		var floor_html = '';
		var $ul       = $('.items-list');
		var length    = 0;
		//console.log(hash);
		floor_data.num_of_pages = parseInt(floor_data.length/stores_data.page_list_num) + 1; //总页数
		
		if(stores_data.page == floor_data.num_of_pages){//如果显示的是最后一页
			length = floor_data.length%stores_data.page_list_num;
		}else{
			length = stores_data.page_list_num;
		}
		$floors.removeClass('active');
		$('.floor_'+floor_num).addClass('active');
		$ul.html('');
		for (var i = 0; i < length; i++) {
			floor_html += '<li class="store">'+
							 '<div class="inner-box f-pr">'+
							 '<a class="img" href="'+floor_data[i].Detail_Url+'">'+
						 	 	'<img src="'+floor_data[i].titlepic+'">'+
						 	 '</a>'+
						 	 '<a class="title" href="'+floor_data[i].Detail_Url+'">'+
						 	 	'<h3>'+floor_data[i].title+'</h3>'+
						 	 '</a>'+
						 	 '<p>'+floor_data[i].pa_store_num+'</p>'+
						 	 '</div>'+
						 '</li>';
		}
	
		$ul.append(floor_html);

	}

	//分析hash数据
	function parsingHash (hash) {
		
		if(stores_data[hash.content.floor]){
			return hash.content.floor
		}else{
			return 645;
		}
	}


})()
*/
/**
 * 店铺列表对象
 */
!function () {

	if(!window.stores_data){
		return;
	}
	function FloorView () {
		this._config()
	}

	//初始化基本数据
	FloorView.prototype._config = function(){
		this.data={};
		this.type=0;           		//当前楼层
		this.pageIndex=1;      		//当前页页码
		this.pageSize = 8;    		//当前每页显示数据个数
		this.size=1;                //当前类别数据总个数
		this.totlePageCount=1; 		//当前类别总页数    
	};

	//获取店铺列表数据
	FloorView.prototype.getData = function(data){
		for (var k in data){
			this.data[k] = data[k];
		}
	};

	//设置对象属性
	FloorView.prototype.setData = function (obj) {
		this.type 				= obj.type ? obj.type : this.type;
		this.pageIndex 			= obj.pageIndex ? obj.pageIndex : this.pageIndex;
		this.pageSize  			= obj.pageSize ? obj.pageSize : this.pageSize;
		this.size               = (obj.size || obj.size == 0) ? obj.size : this.size;
		this.totlePageCount     = obj.totlePageCount ? obj.totlePageCount : this.totlePageCount;
		this.lastPageSize       = (obj.lastPageSize || obj.lastPageSize == 0) ? obj.lastPageSize : this.lastPageSize;
	}



	//实例化当前显示对象
	var floorView = new FloorView();

	var $floors         = $(".m-storse-center .floor-list li");//导航 标签列表
	var $stroesList     = $(".storse-list .floor");            //楼层列表
	var $pagingNav      = $(".paging-nav");
	var hashObj         = $wgh.getHash();                      //获取hash对象



	floorView.getData(stores_data);

	

	floorView.mainGoods={
   			645:{
   				floor:-1,
   				content:'<p>日用百货，工艺品，鞋，帽子，五金工具，玩具，户外用品，饰品，文具用品，厨房用品，塑料用品，玻璃制品，仿真花，彩灯。</p><p>Daily necessities，Crafts，Shoes，Hat，Hardware tools，Toys，Outdoor product，Jewelry，Plastic products，Cultural and sports supplies，Kitchen supplies，LightsGlass product，Simulation flowers</p>'
   			},
   			647:{
   				floor:1,
   				content:'<p class="f-1">皮带、钱包、背包、拉杆箱。</p><p class="f-1">Belt、Purse、Backpack、Luggage case</p>'
   			},
   			648:{
   				floor:2,
   				content:'<p class="f-2">女装、男装、童装、裤子、打底裤。</p><p class="f-2">Suit-dress、Men’s clothing、Children\'s garments、Trousers、Leggings</p>'
   			},
   			649:{
   				floor:3,
   				content:'<p class="f-3">女装、男装、童装、围巾。</p><p class="f-3">Suit-dress、Men’s clothing、Children\'s garments、Scarf</p>'
   			},
   			650:{
   				floor:4,
   				content:'<p class="f-4">中影辛巴达国际影城 </p><p class="f-4">精品皮草、精品服饰</p><p class="f-4"> Fine fur、Fine clothing</p>'
   			}
	}

	drawPage();

	//解析数据参数
	function parsingData (obj) {
		var option = {};
		option.type = obj.type ? obj.type : this.type;
		option.pageIndex = obj.pageIndex ? obj.pageIndex : this.pageIndex;
		option.pageSize = obj.pageSize ? obj.pageSize : this.pageSize;
		option.size = this.data[option.type].length;
		option.totlePageCount = parseInt(this.data[option.type].length/option.pageSize)+1;
		option.lastPageSize  = (this.data[option.type].length)%(option.pageSize);
		//console.log(option)
		return option
	}

	
	//设置店铺列表显示区域的html代码
	function floorViewHtml () {
		var floor_data = this.data[this.type];
		var items_list=$('.storse-list .items-list');
		var k = (this.pageIndex-1)*this.pageSize;//根据页数输出数据
		var length = this.pageIndex >= this.totlePageCount ? this.lastPageSize : this.pageSize;

		items_list.html('');
		for(var i = 0 ; i < length; i++){

			var pa_imgs = floor_data[k+i].pa_imgs.substring(0, floor_data[k+i].pa_imgs.length-1);
			var imgsArr = pa_imgs.split('|', 4);
			var click_id = 'titlepic_'+floor_data[k+i].id;


			//主图下面预览图，点击切换主图
			var thum_imgs='<ul class="thum_imgs">';
				for(var j = 0 ; j < imgsArr.length ; j++){
					thum_imgs +='<li class = "thum_img">'+
									'<div class = "thum_img_box">'+
										'<img src="'+imgsArr[j]+'" data-imgUrl="'+imgsArr[j]+'" data-clickId="'+click_id+'">'+
									'</div>'+
								'</li>';
				}

				thum_imgs +='<li class="clear"></li></ul>';

				thum_imgs =$(thum_imgs);
				thum_imgs.off();
				thum_imgs.on('click','img', function(event) {
					event.preventDefault();
					var imgUrl = $(event.target).data().imgurl;
					var click_id ='#' + $(event.target).data().clickid;
					$(click_id).attr('src', imgUrl);
					$('.thum_img_box img').removeClass('active');
					$(event.target).addClass('active');
				});

			
			var store_html = $('<li class="store f-pr"></div>');
			var inner_html = '<div class="inner-box">'+
								 '<a class="img" href="'+floor_data[k+i].Detail_Url+'">'+
							 	 	'<img src="'+floor_data[k+i].titlepic+'" id="'+click_id+'">'+
							 	 '</a>'+
							 	 '<a class="title" href="'+floor_data[k+i].Detail_Url+'">'+
							 	 	'<h3>'+floor_data[k+i].title+'</h3>'+
							 	 '</a>'+
							 	 '<p>'+floor_data[k+i].pa_store_num+'</p>'+
						 	 '</div>';
				inner_html = $(inner_html);
				inner_html.off();


				//鼠标进过主图时边上展示大图
				inner_html.on('mouseenter',  function(event) {
					event.preventDefault();
					var $big_pic=$('<div class="big-pic"></div>');
					var $big_pic_img=$('<img src="'+$(this).find('img').attr('src')+'">');
					var $position = $(this).parent().position();
					if($position.top<=0){
						$big_pic.css('top', '0');
					}

					if($position.left>=600){
						$big_pic.css('left','-200%');
					}

					$(this).parent().append($big_pic.append($big_pic_img));

					//console.log($(this).parent().position());
				});

				inner_html.on('mouseleave', function(event) {
					event.preventDefault();
					$('.big-pic').remove();
					/* Act on the event */
					
				});

			items_list.append(store_html.append(inner_html).append(thum_imgs));

		}

		//$('.items-list').html("").append(html);

	}

	//根据hash参数渲染页面
	function drawPage () {
		var hash = $wgh.getHash().content;
		if (location.hash == "") { //默认参数
			hash ={type:645,pageIndex:1,pageSize:8}
		}
		floorView.setData(parsingData.call(floorView,hash)); //设置显示参数
		floorViewHtml.call(floorView);//渲染页面

		creatPageing();
		mainGoods();

		var $pageNum = $('.page-num');

		$floors.removeClass('active');
		$('.floor_'+hash.type).addClass('active');
		$($pageNum[hash.pageIndex-1]).addClass('active');

		$('.paging-nav-2').html("").append($pagingNav.clone(true));

		
	}


	//点击切换楼层
    $floors.on('click', function(event) {
    	event.preventDefault();
    	var data ={
    		'type':$(this).data().floor,
    		pageIndex:1
    	};

    	$floors.removeClass('active');
		$(this).addClass('active');



		var hash = new $wgh.Hash(); //实例化一个hash对象
		hash.type = 'hashSearch';	//设置hash的type
		for(var k in data){
			hash.content[k]=data[k];//复制data对象的属性到hash.content
		}

		

		$wgh.setHash(hash);

		drawPage();

    });

   //翻页器
   function creatPageing () {
	  $pagingNav.html('');
	  $pagingNav.append('<li class="first-page" data-page="'+1+'">首页</li><li class="pre-page" data-page="pre" >上一页</li>');
	   	for (var i = 1; i <=floorView.totlePageCount ; i++) {
	   		$pagingNav.append('<li class="page-num" data-page="'+i+'">'+i+'</li>')
	   	}
   	  $pagingNav.append('<li class="next-page"  data-page="next">下一页</li><li class="last-page" data-page="'+floorView.totlePageCount+'">末页</li><div class="clear"></div>');
   


	//给翻页器绑定鼠标点击事件
	$pagingNav.off();
    $pagingNav.on('click', 'li', function(event) {
	   	event.preventDefault();
	   	var hash = $wgh.getHash();
	   	var page = $(this).data().page;
	   	
	   	
	   	if (location.hash=="") {
	   		hash.type = 'hashSearch';
	   		hash.content.type = 645
	   		hash.content.pageIndex=1;
	   	}

	   	

	   	if (page=="pre") {
	   		hash.content.pageIndex = hash.content.pageIndex == 1? 1: parseInt(hash.content.pageIndex) - 1;
	   	}else if (page=="next") {
	   		console.log(hash.content.pageIndex);
	   		hash.content.pageIndex = hash.content.pageIndex == floorView.totlePageCount ? floorView.totlePageCount : parseInt(hash.content.pageIndex) +1;
	   		console.log(hash.content.pageIndex)
	   	}else{
	   		hash.content.pageIndex=page;
	   	}

	   	  
	   		//
	   		//hash.content.pageIndex=page;
	   		//console.log(hash);
	   		$wgh.setHash(hash);

			drawPage();
	});

}

   	//楼层主营
   	function mainGoods () {
   		var $floorNum = $('.m-storse-center .floor-num');
   		var $mainGoods = $('.m-storse-center .main-goods .content');

   		$floorNum.html(floorView.mainGoods[floorView.type]['floor']);
   		$mainGoods.html(floorView.mainGoods[floorView.type]['content']);
   	}


}()