
var Adv_range_6="1";
var EndDate_6="2018/01/01";
var Dt_6=new Date();
var NowDate_6=Dt_6.getFullYear()+"/"+(Dt_6.getMonth()+1)+"/"+Dt_6.getDate();
if(Date.parse(EndDate_6)-Date.parse(NowDate_6)<0) 
{
 Adv_range_6="0";
} 
else if(Adv_range_6=="1" && IsPageHome!="1")
{
 Adv_range_6="0";
}
else if(location.href.indexOf("/e/")>0) 
 {
 Adv_range_6="0";
 }

document.write("<div id='adv_6' style='display:none;position:absolute;left:0px;top:0px;z-index:100'>测试新窗口</div>");
var adv_6=document.getElementById("adv_6");
var floatdelay6=25; //控制每次执行间隔的时间，做越大移动得越慢；
var floatspeed =1; //控制每次执行移动的距离，值越大移动得越快；
var floatflagX6 =0;
var floatflagY6 =0;
function toPixel6(str1) 
{
 var oldLen = str1.length;
 var newLen = oldLen - 2;
 str2 = str1.slice(0, newLen);
 str3 = parseInt(str2);
 return str3;
}
function flowAdv6(){
var bWidth = document.body.clientWidth;
var bHeight = document.body.clientHeight;
var bLeft = document.body.scrollLeft;
var bTop = document.body.scrollTop;
var iWidth = adv_6.offsetWidth;
var iHeight = adv_6.offsetHeight;
var iLeft = toPixel6(adv_6.style.left);
var iTop = toPixel6(adv_6.style.top);
if(iLeft < (bWidth - iWidth) && floatflagX6 == 0) {
adv_6.style.left = (iLeft + floatspeed) + "px";
}
else if(iLeft >= (bWidth - iWidth) && floatflagX6 ==0) {
floatflagX6 = 1;
}
else if(iLeft > 0 && floatflagX6 == 1) {
adv_6.style.left = (iLeft - floatspeed) + "px";
}
else if(0 >= iLeft && floatflagX6 == 1) {
floatflagX6 = 0;
}
if(iTop < (bHeight - iHeight) && floatflagY6 == 0) {
adv_6.style.top = (iTop + floatspeed) + "px";
}
else if(iTop >= (bHeight - iHeight) && floatflagY6 ==0) {
floatflagY6 = 1;
}
else if(iTop > 0 && floatflagY6 == 1) {
adv_6.style.top = (iTop - floatspeed) + "px";
}
else if(0 >= iTop && floatflagY6 == 1) {
floatflagY6 = 0;
}
}
function startflowAdv6()
{
adv_6.style.left =Math.floor(Math.random()*1000)+"px";
adv_6.style.display="block";
var floatinterval6 = setInterval("flowAdv6()", floatdelay6);
adv_6.onmouseover = function() {clearInterval(floatinterval6);}
adv_6.onmouseout = function() {floatinterval6 = setInterval("flowAdv6()", floatdelay6);}
}
if(Adv_range_6!="0"){setTimeout('startflowAdv6()',Math.floor(Math.random()*1000));}
