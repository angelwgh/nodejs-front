<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="m-storeslist">
<% @ Register TagPrefix="ascx" TagName="M_0" src="/e/zdymodel/stores/module/162.ascx"%><ascx:M_0 runat="server" TagSiteId=1 SiteId=9 ZdyTag=1 ModuleId="253_0" TagTable="stores" TagSortId=0 SqlOrder="order by " SqlCondition="" ShowNum=5 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
</div>
<%End();%>