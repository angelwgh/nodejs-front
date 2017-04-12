define([],function () {
	function StoreList (argument) {
		this.length=5;
	}

	StoreList.prototype.showList = function(data,length){
		this.length=length?length : this.length;
		this.data  = $.isArray(data)?data:[];

		this.length = this.length <data.length ? this.length : data.length;

		var $ul = $('<ul class="items"></ul>');
		for(var i = 0 ; i < this.length ; i++){
			var li = '<li class="media">'+
      					'<a href="'+this.data[i].url+'">'+
					      '<div class="media-left">'+
					      	  '<div class="img">'+
					          '<img src="'+this.data[i].img_src+'" style="width: 80px; height: 64px;">'+
					          '</div>'+
						   '</div>'+
					      '<div class="media-body">'+
					          '<h4 class="media-heading">'+this.data[i].title+'</h4>'+
					          '<p>主营：'+this.data[i].content+'</p>'+
					      '</div>'+
					      '</a>'+
					    '</li>'
			var $li = $(li);
			$ul.append($li);

		}
		this.$ul = $ul;

		return $ul;

	};
	StoreList.prototype.showMore = function (length) {
		var length = length <= (this.data.length - this.length) ? length : this.data.length - this.length;
		var lis=[]
		for(var i = this.length ; i <this.length+length; i++){
			var li = '<li class="media">'+
      					'<a href="'+this.data[i].url+'">'+
					      '<div class="media-left">'+
					          '<div class="img">'+
					          '<img src="'+this.data[i].img_src+'" style="width: 80px; height: 64px;">'+
					          '</div>'+
						   '</div>'+
					      '<div class="media-body">'+
					          '<h4 class="media-heading">'+this.data[i].title+'</h4>'+
					          '<p>主营：'+this.data[i].content+'</p>'+
					      '</div>'+
					      '</a>'+
					    '</li>'
			var $li = $(li);
			lis.push($li);
		}
		this.length=this.length+length;
		return lis
	}
	var storeList = new StoreList();

	return storeList
})