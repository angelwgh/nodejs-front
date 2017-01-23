<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<script src="http://api.map.baidu.com/api?v=1.4"></script>
<div class="lianxi">
<div class="zlm_lianxi">
<div class="zlm_lx_fl">

<div class="fl_d1">地址：广东省中山市南头镇金湾广场B座16卡</div>
<div class="fl_d2">
<span>咨询热线：010-5XXXX06 / 8517XXX47</span>
<span>客服中心：010-XXXX9737</span>
<span>咨询手机：135XXXXX985 / 18511XXXX67</span>
<span>传真：0760-86744123</span>
<span>QQ：190452532</span>
<span>Email：service#pageadmin.net</span>
</div>

</div>
<div class="zlm_lx_fr">
<script type="text/javascript" src="/e/js/zdyform.js"></script>
<form name="feedback" method="post" Enctype="multipart/form-data" action="/e/aspx/post.aspx">
<ul class="liuyan"><li style="display:none"><span>分类&nbsp;&nbsp;</span><span><select name="sort" id="sort"><option value="0">选择分类</option><option value="609">在线留言</option>
</select></span></li>
<li><span class="s1">留言标题</span><span><input type=text name="title" id="title" class="s2" maxlength="200"></span></li>
<li><span class="s1">您的姓名</span><span><input type=text name="pa_truename" id="pa_truename"  class="s2" maxlength="200"></span></li>
<li><span class="s1">联系电话</span><span><input type=text name="pa_tel" id="pa_tel"  class="s2"  maxlength="200"></span></li>
<li><span class="s1">您的地址</span><span><input type=text name="pa_add" id="pa_add" maxlength="200" class="s2"></span></li>
<li><span class="s1">内容</span><span><textarea name="content" id="content" class="s3" ></textarea></span></li>
<li class="yzm">验证码：<input type=text name="vcode" id="vcode" maxlength=4 size=4 class="s4"> <img src="/e/aspx/yzm.aspx" onclick=Code_Change("vcode_img") align=absmiddle border=0 id="vcode_img" style="cursor:pointer" alt="点击更换"></span></li>
<li><input type="hidden" name="checked" value="0"><input type="hidden" name="showcode" value="0"><input type="hidden" name="to" value=""><input type="hidden" name="mailto" value=""><input type="hidden" name="mailreply" value=""><input type="hidden" name="mailsubject" value=""><input type="hidden" name="mailbody" value=""><input type="hidden" name="insertdatabase" value="1"><input type="hidden" name="siteid" value="1"><input type="hidden" name="formtable" value="feedback"><input type="hidden" name="mustname" value="留言标题,您的姓名,联系电话,内容,"><input type="hidden" name="mustfield" value="title,pa_truename,pa_tel,content,"><input type="hidden" name="musttype" value="text,text,text,textarea,"><input type="button" class="btnok" value=" 提交 " onclick="return set_feedback()"></li></ul>
</form>
<script type="text/javascript">
function set_feedback()
{
document.forms["feedback"].mailto.value="";
document.forms["feedback"].mailreply.value="";
document.forms["feedback"].mailsubject.value="";
document.forms["feedback"].mailbody.value="";
return Check_ZdyForm("feedback");
}

function feedback_zdycheck(){
return true;
}
</script>
</div>
</div>

	<div class="lx_map">
<style>
#mapbox{width:99%;height:360px;overflow:hidden;border:1px solid #ccc;}
.lx_contact{width:99%;border:1px solid #ccc;clear:both;overflow:hidden}
.lx_contact ul{clear:both;overflow:hidden;padding:20px 0;}
.lx_contact ul li{float:left;width:33.3%}
.lx_contact ul li.libg{background:url(/e/images/diy/lxbg.jpg) no-repeat right center;}
.lx_contact ul li span{display:block;text-align:center;}
.lx_contact ul li span.s1{font-size:20px;height:30px;line-height:30px;}
.lx_contact ul li span img{width:100px;height:auto;}
</style>
<div id="mapbox"></div>
<script>
var map = new BMap.Map("mapbox");            // 创建Map实例，必须和地图容器id一致
var point = new BMap.Point(113.295299,22.722847); // 创建点坐标
map.centerAndZoom(point,16);                 // 初始化地图,设置中心点坐标和地图级别，最大19级
map.enableScrollWheelZoom();                 //启用滚轮放大缩小
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
var marker = new BMap.Marker(point);                        
map.addOverlay(marker);
var infoWinOpts = {}
var sitetxt="<div style='text-align:left;color:#333;line-height:25px;'><li>地址：广东省中山市南头镇金湾广场B座16号 </li><li>电话：0760-22517081</li></div>";
var infoWin = new BMap.InfoWindow(sitetxt,infoWinOpts);
marker.openInfoWindow(infoWin);
marker.addEventListener("click",function(){this.openInfoWindow(infoWin);});//注册点击事件
</script>
</div>

</div>
<%End();
if(PageCount>1)
{
string PageHtml="<div id=\"sublanmu_page\" class=\"sublanmu_page\">";
if(CurrentPage==1)
{
if(APage_LinkText[0]!=""){PageHtml+="<span class=\"firstpage\">"+APage_LinkText[0]+"</span>";} //首页
}
else if(CurrentPage>1)
{
 if(APage_LinkText[0]!=""){PageHtml+="<a href=\""+GoPage(1)+"\" class=\"firstpage\">"+APage_LinkText[0]+"</a>";} //首页
 if(APage_LinkText[1]!=""){PageHtml+=" <a href=\""+GoPage(CurrentPage-1)+"\" class=\"prevpage\">"+APage_LinkText[1]+"</a>";} //上一页
}
 int p=8; //表示开始时显示的页码总数
 int M=4; //超过p页后左右两边显示页码数
 int LastPage=1;
 if(CurrentPage<p)
  {
    LastPage=p;
    if(LastPage>PageCount)
     {
       LastPage=PageCount;
     }
    for(int i=1;i<=LastPage;i++)
    {
     if(CurrentPage==i)
      {
        PageHtml+=" <span class=\"c\">"+i.ToString()+"</span>";
      }
    else
      {
       PageHtml+=" <a href=\""+GoPage(i)+"\">"+i.ToString()+"</a>";
      }
    }
  }
 else
  {
    //PageHtml+=" <a href=\""+GoPage(CurrentPage-1)+"\">1...</a>";
    LastPage=CurrentPage+M;
    if(LastPage>PageCount)
     {
       LastPage=PageCount;
     }
    for(int i=(CurrentPage-M);i<=LastPage;i++)
    {
     if(CurrentPage==i)
      {
        PageHtml+=" <span class=\"c\">"+i.ToString()+"</span>";
      }
    else
      {
       PageHtml+=" <a href=\""+GoPage(i)+"\">"+i.ToString()+"</a>";
      }
    }

  }

if(CurrentPage<PageCount)
{
  if(LastPage<PageCount)
   {
     PageHtml+=" <a href=\""+GoPage(LastPage+1)+"\">...</a>";
   }
  if(APage_LinkText[2]!=""){PageHtml+=" <a href=\""+GoPage(CurrentPage+1)+"\" class=\"nextpage\">"+APage_LinkText[2]+"</a>";}  //下一页
  if(APage_LinkText[3]!=""){PageHtml+=" <a href=\""+GoPage(PageCount)+"\" class=\"lastpage\">"+APage_LinkText[3]+"</a>";}     //尾页
}
else if(CurrentPage==PageCount)
{
if(APage_LinkText[3]!=""){PageHtml+=" <span class=\"lastpage\">"+APage_LinkText[3]+"</span>";}     //尾页
}
if(Page_LinkInfo!=""){PageHtml+=" <span class=\"pageinfo\">"+String.Format(Page_LinkInfo,CurrentPage,PageCount,RecordCount)+"</span>";} //记录页次
PageHtml+="</div>";
Response.Write(PageHtml);
}%>