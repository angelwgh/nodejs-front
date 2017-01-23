<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="sy_lianxi f-center">
<div class="sy_lx_map">
<script src="http://api.map.baidu.com/api?v=1.4"></script>
<div id="mapbox" class="map"></div>
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
var sitetxt="<div style='text-align:left;color:#333;line-height:25px;'><li>地址：浙江省义乌市稠州北路800号金福源B区3楼336号 </li><li>电话： 86 0579 85678881</li><li>手机： 15757998555</li></div>";
var infoWin = new BMap.InfoWindow(sitetxt,infoWinOpts);
marker.openInfoWindow(infoWin);
marker.addEventListener("click",function(){this.openInfoWindow(infoWin);});//注册点击事件
</script>
</div>
<div class="sy_lx_fs">
<span class="tit">金福源国际库存交易中心</span>
<span class="s1">电话：+86 0579 85678881 </span>
<span class="s2">手机：+86 15757998555</span>
<span class="s3">QQ：56xxx6678</span>
<span class="s4">微信公众号：zjwxxxe</span>
<span class="s5">邮箱：ixxxfo@emilsp.com</span>
</div>
</div>
<%End();%>