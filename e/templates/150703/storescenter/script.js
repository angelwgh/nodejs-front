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
 * 显示店铺列表 面向对象
 */
!function () {
	function FloorView () {
		this._config()
	}

	//初始化基本数据
	FloorView.prototype._config = function(){
		this.data=null;
		this.type=0;           		//当前类别
		this.pageIndex=1;      		//当前页页码
		this.pageSize = 8;    		//当前每页显示数据个数
		this.size=1;                //当前类别数据总个数
		this.totlePageCount=1; 		//当前类别总页数       
	};

	//获取店铺列表数据
	FloorView.prototype.getData = function(data){
		this.data = data;
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
	var hashObj         = $wgh.getHash();                      //获取hash对象


	floorView.getData(stores_data);

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
		var html='';
		var k = (this.pageIndex-1)*this.pageSize;//根据页数输出数据
		var length = this.pageIndex >= this.totlePageCount ? this.lastPageSize : this.pageSize;


		for(var i = 0 ; i < length; i++){

			html += '<li class="store">'+
							 '<div class="inner-box f-pr">'+
							 '<a class="img" href="'+floor_data[k+i].Detail_Url+'">'+
						 	 	'<img src="'+floor_data[k+i].titlepic+'">'+
						 	 '</a>'+
						 	 '<a class="title" href="'+floor_data[k+i].Detail_Url+'">'+
						 	 	'<h3>'+floor_data[k+i].title+'</h3>'+
						 	 '</a>'+
						 	 '<p>'+floor_data[k+i].pa_store_num+'</p>'+
						 	 '</div>'+
						 '</li>';
		}
		$('.items-list').html("").append(html)

	}

	//根据hash参数渲染页面
	function drawPage () {
		var hash = $wgh.getHash().content;
		if (location.hash == "") {
			hash ={type:645,pageIndex:1,pageSize:8}
		}
		floorView.setData(parsingData.call(floorView,hash)); //设置显示参数
		floorViewHtml.call(floorView);//渲染页面
	}


	//点击楼层设置hash参数
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
	
}()