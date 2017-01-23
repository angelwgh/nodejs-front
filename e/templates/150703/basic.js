/**
 * 自定义js功能
 * 依赖JQuery框架
 */

/*自定义一个对象*/
function $wgh () {
	this._config();
}

/*初始化设置对象属性*/
$wgh.prototype._config = function(){
	
};

/*hash对象*/
$wgh.prototype.Hash = function(){
	this.type='';
	this.content={};
};
/*获取hash对象*/
/*floor=4&floor=1*/
$wgh.prototype.getHash = function(){
	var hashStr            = location.hash;
	var hash               = new this.Hash();

	var hashSearchRe       = /^#+\?+/;
	if (hashSearchRe.test(hashStr)) {
		var newHashStr = hashStr.replace(hashSearchRe,'')
		var arr = newHashStr.split('&');
		for(var i = 0 ; i < arr.length ; i++){
			var arr1 = arr[i].split('=');
			hash.content[arr1[0]] = arr1[1];
		}
		hash.type = 'hashSearch';
	}

	return hash;
};

/*设置hash*/
$wgh.prototype.setHash = function(hash){
	var str = ''
	if (hash.type == 'hashSearch') {
		str = '#?';
		for(var k in hash.content){
			str += k +'='+ hash.content[k]+'&';
		}
	}

	location.hash = str.replace(/\&$/,'')
};

/*-------------实例化对象---------------*/
var $wgh = new $wgh();


//导航设置
!function () {
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
			left:$refEle.position().left+10,
			width:$refEle.width()
		});
	}
}()