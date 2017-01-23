<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div>
<script src="http://api.map.baidu.com/api?v=1.4"></script>
<style>
#mapbox{width:99%;height:500px;overflow:hidden;border:1px solid #ccc;}
</style>
<div id="mapbox"></div>
<script>
var map = new BMap.Map("mapbox");            // 创建Map实例，必须和地图容器id一致
var point = new BMap.Point(120.106958,29.330692); // 创建点坐标
map.centerAndZoom(point,16);                 // 初始化地图,设置中心点坐标和地图级别，最大19级
map.enableScrollWheelZoom();                 //启用滚轮放大缩小
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
var marker = new BMap.Marker(point);                        
map.addOverlay(marker);
var infoWinOpts = {}
var sitetxt="<div style='text-align:left;color:#333;line-height:25px;'><li>地址：浙江省义乌市稠州北路800号金福源B区3楼336号 </li><li>>电话： 86 0579 85678881</li></div>";
var infoWin = new BMap.InfoWindow(sitetxt,infoWinOpts);
marker.openInfoWindow(infoWin);
marker.addEventListener("click",function(){this.openInfoWindow(infoWin);});//注册点击事件
</script>
</div>
<div class="lianxiwomen">
<ul class="lx_fl">
<li>地址：浙江省义乌市稠州北路800号金福源B区3楼336号 </li>
<li>电话： 86 0579 85678881</li>
<li>传真：86 0579 85678881</li>
</ul>
<div class="lx_fr"><span><img src="/e/images/diy/ewm.jpg"></span><span>扫描二维码</span></div>
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