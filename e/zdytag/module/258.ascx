<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="m-storse-center" >
<script>
          var stores_data={};
          <% @ Register TagPrefix="ascx" TagName="M_0" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_0 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_0" TagTable="stores" TagSortId=645 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_1" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_1 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_1" TagTable="stores" TagSortId=647 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_2" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_2 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_2" TagTable="stores" TagSortId=648 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_3" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_3 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_3" TagTable="stores" TagSortId=649 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_4" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_4 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_4" TagTable="stores" TagSortId=650 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
        </script>

<!--[if lt IE 9]>
    <ul class="floor-list">
        <li data-floor="645" class="floor_645 active">
            <h2>地下一楼</h2>
        </li>
        <li data-floor="647" class="floor_647">
            <h2>一楼</h2>
        </li>
        <li data-floor="648" class="floor_648">
            <h2>二楼</h2>
        </li>
        <li data-floor="649" class="floor_649">
            <h2>三楼</h2>
        </li>
        <li data-floor="650" class="floor_650">
            <h2>四楼</h2>
        </li>

<div class="clear"><div>

</ul>
<div class="main-goods">
    <div class="floor-num">
       -1
    </div>
    <div class="content">
          日用百货，工艺品，鞋，帽子，五金工具，玩具，户外用品，饰品，文具用品，厨房用品，塑料用品，玻璃制品，仿真花，彩灯
Daily necessities，Crafts，Shoes，Hat，Hardware tools，Toys，Outdoor product，Jewelry，Plastic products，Cultural and sports supplies，Kitchen supplies，Lights,Glass product，Simulation flowers
    </div>
</div>
    <ul class="paging-nav"></ul>
        <div class="storse-list">
        
        <div class="floor">
          <ul class="items-list"></ul>
          <ul class="page-list"></ul>
        </div>


        <div class="clear"></div>

        </div>
   <div class="paging-nav-2"></div>
<![endif]-->

</div>


<script src="/e/templates/150703/storescenter/angular/angular.min.js" type="text/javascript"></script>

<script src="/e/templates/150703/storescenter/angular-route/angular-route.min.js" type="text/javascript"></script>





<%End();%>