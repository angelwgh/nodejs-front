/**
 * 首页登陆窗口
 * @param  {[type]} $    [description]
 * @param  {[type]} $wgh [description]
 * @return {[type]}      [description]
 */
define(['jquery','basic'],function ($,$wgh) {
	var $loginbox = $('.loginbox')
	var $sy_login = $('.sy_login')

	$(".loginbox_textbox,.loginbox_textbox_yzm").attr({
			autocomplete: 'new-password'});
	if (location.search !='') {
		return
	}
	if (GetCookie('Member')) {
		return
	}
		$sy_login.append('<div class="title">账号登陆</div>').append($loginbox.clone())
		$loginbox.empty()

		var domArr=document.forms['loginbox_6'];
		var temp='';
		var temp1='';
		
		//console.dir(domArr.childNodes[1])
		for (var i = 0; i < domArr.childNodes.length; i++) {
			//console.log(domArr.childNodes[i].type);
			if (domArr.childNodes[i].nodeType ==1) {
				if (i>=3&&i<=8) {
					temp += '<div><lable class="ibk">'+temp1+'</lable>' + domArr.childNodes[i].outerHTML+'</div>';

				}else{
					temp += '<div>' + domArr.childNodes[i].outerHTML+'</div>';
				}
				
				temp1 ='';
			}else{
				temp1 = domArr.childNodes[i].nodeValue;
			}
			
		}
		domArr.innerHTML = temp+'<div class="clear"></div>';
		domArr.childNodes[3].className="username input";
		domArr.childNodes[4].className="password input";
		domArr.childNodes[5].className="yzm input"

		$(".sy_login .yzm").append($(domArr.childNodes[6]).find('img')).find('lable').html("验证码：");
		$(domArr.childNodes[6]).remove();

		domArr.childNodes[6].className="login btn";
        domArr.childNodes[7].className="reg btn";

        $('.sy_login .reg a').addClass('ibk')

})

