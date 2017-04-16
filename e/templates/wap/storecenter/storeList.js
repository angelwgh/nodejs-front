(function () {
	function StoreList () {
		this._config()
	}

	StoreList.prototype._config = function(){
		this.current_floor = 645;
	};
    

	var storeList = new StoreList();
    
    var $floors  =  $('.floors li');
    var $point   =  $('.floors .fa');
    var $ul =  $('.store-list .items')

    function switchFloor () {

    	floorListStyle();
    	$ajax();
    }


    function floorListStyle () {
    	$floors.removeClass('active');
    	$('.floor_'+storeList.current_floor).addClass('active');
    }


    function $ajax () {
    	window.ajaxparameter_190="siteid=1&sortid="+storeList.current_floor+"&pagesize=5&sqlorder=id desc";
    	rajax_190(1,true,ajax_190_back);
    }


    function ajax_190_back (backcontent) {
    	var data = JSON.parse(backcontent.replace(/<div.*/,''));
        
    	for (var i = 0; i <data.stores.length; i++) {
    		 var $li  = $('<li></li>')
    		 var a   ='<a href="/m/index.aspx?lanmuid=125&sublanmuid=747&id='+data.stores[i].id+'"></a>'
    	     var img = '<img src = "'+data.stores[i].img_src+'" class="img-thumbnail">'
    	     $li.append($(a).append($(img)));
             $ul.append($li)
    	}
    }



    switchFloor()

    $floors.on('touchstart', function(event) {
    	event.preventDefault();
        storeList.current_floor=$(this).data().floor;//获取当前楼层
        $ul.html('');
        switchFloor();


    });

     $floors.on('touchend', function(event) {
     	event.preventDefault();
     	
     });

})()