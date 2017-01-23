<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
	
<div class="m-storse-center">
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
<!--[if lt IE 9]>
<div class="clear"><div>
<![endif]-->
    </ul>
    <div class="storse-list">
        <script>
          var stores_data={};
          <% @ Register TagPrefix="ascx" TagName="M_0" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_0 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_0" TagTable="stores" TagSortId=645 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_1" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_1 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_1" TagTable="stores" TagSortId=647 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_2" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_2 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_2" TagTable="stores" TagSortId=648 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_3" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_3 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_3" TagTable="stores" TagSortId=649 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
          <% @ Register TagPrefix="ascx" TagName="M_4" src="/e/zdymodel/stores/module/177.ascx"%><ascx:M_4 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="258_4" TagTable="stores" TagSortId=650 SqlOrder="order by " SqlCondition="" ShowNum=1000 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
        </script>
        <div class="floor">
          <ul class="items-list"></ul>
          <ul class="page-list"></ul>
        </div>

<!--[if lt IE 9]>
<div class="clear"><div>
<![endif]-->
    </div>
<%End();%>