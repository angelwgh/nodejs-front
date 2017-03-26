$('.m-storse-center').append('<div ng-app="storesApp"><div ng-view></div></div>')

//总模块
var storesApp=angular.module('storesApp',[
		'ngRoute',
		'storesList'
	]);

//路由设置
	storesApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/645/1',{
			templateUrl:'/e/templates/150703/storescenter/appHtml/app.html',
			controller:'storesListCtrl'
		})
		.when('/:floornumber',{
			templateUrl:'/e/templates/150703/storescenter/appHtml/app.html',
			controller:'storesListCtrl'
		})
		.when('/:floornumber/:pagenumber',{
			templateUrl:'/e/templates/150703/storescenter/appHtml/app.html',
			controller:'storesListCtrl'
		})
		.otherwise({
			redirectTo: '/645/1'
		})

	}])






//楼层店铺模块
var storesList = angular.module('storesList',[]) 


//楼层控制
storesList.controller('storesListCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.section=$routeParams;
	$scope.section.floornumber = $scope.section.floornumber || 645;
	$scope.section.pagenumber  = parseInt($scope.section.pagenumber)  || 1;
	$scope.data={};
	var floordatas={
		645:{
			cn_name:"地下一楼",
			num_name:"-1",
			main_goods:{
				cn:'日用百货，工艺品，鞋，帽子，五金工具，玩具，户外用品，饰品，文具用品，厨房用品，塑料用品，玻璃制品，仿真花，彩灯。',
				en:'Daily necessities，Crafts，Shoes，Hat，Hardware tools，Toys，Outdoor product，Jewelry，Plastic products，Cultural and sports supplies，Kitchen supplies，LightsGlass product，Simulation flowers'
			}
		},
		647:{
			cn_name:"一楼",
			num_name:"1",
			main_goods:{
				cn:'皮带、钱包、背包、拉杆箱。',
				en:'Belt、Purse、Backpack、Luggage case'
			}
		},
		648:{
			cn_name:"二楼",
			num_name:"2",
			main_goods:{
				cn:'女装、男装、童装、裤子、打底裤。',
				en:'Suit-dress、Men’s clothing、Children\'s garments、Trousers、Leggings'
			}
			
		},
		649:{
			cn_name:"三楼",
			num_name:"3",
			main_goods:{
				cn:'女装、男装、童装、围巾。',
				en:'Suit-dress、Men’s clothing、Children\'s garments、Scarf'
			}
		},
		650:{
			cn_name:"四楼",
			num_name:"4",
			main_goods:{
				cn:'精品皮草、精品服饰',
				en:' Fine fur、Fine clothing',
				s:'中影辛巴达国际影城'
			}

		}
	};

	for(var k in stores_data){
		$scope.data[k]={};
		$scope.data[k]['stores']=stores_data[k];
		$scope.data[k]['floordatas']=floordatas[k];
		$scope.data[k]['floordatas']['floorNum']=k;
		$scope.data[k]['stores'].forEach( function(element, index) {
			
		});
	}


	//页面要展示的店铺列表
	$scope.pageSize= 16;//每页展示的店铺数目
	$scope.pageNum = Math.ceil(($scope.data[$scope.section['floornumber']]['stores'].length)/$scope.pageSize);
	$scope.pageNum = $scope.pageNum == 0 ? 1 : $scope.pageNum; //获取当前页数
	$scope.pageNumber =[]
		for(var i = 0 ; i < $scope.pageNum ; i++){
			$scope.pageNumber[i]=i+1;
		}
	$scope.showStorList=$scope.data[$scope.section['floornumber']]['stores'].slice(($scope.section.pagenumber-1)*$scope.pageSize, ($scope.section.pagenumber-1)*$scope.pageSize+$scope.pageSize)
	$scope.showStorList.forEach( function(element, index) {
		if (typeof element.pa_imgs == "string") {
			element.pa_imgs=element.pa_imgs.slice(0,element.pa_imgs.length-1).split('|');
		}
		element.titlepic = element.pa_imgs[0]
	});


	$scope.bigPic=function ($event,store) {
		//console.log(event.target);
		store.isShow = true;
		var $storeElem=$('.store_'+store.id);
		var $position = $storeElem.position();
		console.log($position)
		
			store.top = $position.top<=0 ? true : false;
		

		
			store.left = $position.left>=600 ? true : false;
		
	}

	$scope.delBigPic=function (store) {
		//console.log(store)
		store.isShow=false

	}

	//点击预览切换主图
	$scope.changeTitlePic=function (store,thum_img) {
		store.titlepic = thum_img;
	}
	console.log($scope.data)
}])

