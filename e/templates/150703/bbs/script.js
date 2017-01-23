!function () {
	var $content                 = $('.sublanmu_box_737 .sublanmu_content_bbs')
	var $bottom_page             = $('.sublanmu_box_737 .sublanmu_page');
	var $top_page                = $bottom_page.clone();

	$content.prepend($top_page);



	var $thedate                 = $('.sublanmu_box_737 .thedate');

	for (var i = 0; i < $thedate.length; i++) {
		$($thedate[i]).html(timeLonger($($thedate[i]).data().date));
	}

	function timeLonger (old_date) {
		var new_date = new Date();
		old_date =new Date(old_date.replace(/[^\d\/: ]/g,''));
        var t        =(new_date - old_date);
       if (t/1000/3600/24/365 > 1) {
       	return parseInt(t/1000/3600/24/365) + "年前";
       }else if (t/1000/3600/24/30 > 1) {
       	return parseInt(t/1000/3600/24/30) + "月前";
       }else if (t/1000/3600/24 > 1) {
       	return parseInt(t/1000/3600/24) +"天前";
       }else if (t/1000/3600 > 1) {
       	return parseInt(t/1000/3600) + "小时前";
       }else if (t/1000/60 > 1) {
       	return parseInt(t/1000/60) + "分前";
       }else{
       	return parseInt(t/1000) + "秒前";
       }
	}

/*	var btm = $('input[type="button"]');
	btm.on('click', function(event) {
		event.preventDefault();
		alert("对不起，请先登陆!1111111")
	});
	console.log(btm)
	if(document.forms['loginbox_6'].login.value != "yes"){

	}*/
      

}()

function set_bbs(){
		console.log();
		if (GetCookie('Member')=='') {
			alert("对不起，请先登陆!1111")
			return
		}
		

		document.forms["bbs"].mailto.value="";
		document.forms["bbs"].mailreply.value="";
		document.forms["bbs"].mailsubject.value="";
		document.forms["bbs"].mailbody.value="";
		return Check_ZdyForm("bbs");
	}

function bbs_zdycheck(){
	KE_pa_tiezicont.sync();
	return true;
}