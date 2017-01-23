<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="main_box_inner">
	<div class="sy_newszx f-center">
		<div class="sy_n_c1">
			<div class="tit">
				<span class="s1">新闻资讯</span>
				<a href="/index.aspx?lanmuid=107&sublanmuid=720" class="more">查看更多</a>
			</div>
			<div><% @ Register TagPrefix="ascx" TagName="M_0" src="/e/zdymodel/article/module/43.ascx"%><ascx:M_0 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="246_0" TagTable="article" TagSortId=600 SqlOrder="order by " SqlCondition="" ShowNum=5 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/></div>
		</div>
		<div class="sy_n_c2">
			<div class="tit">
				<span class="s1">行业动态</span>
				<a href="/index.aspx?lanmuid=107&sublanmuid=721" class="more">查看更多</a>
			</div>
			<div><% @ Register TagPrefix="ascx" TagName="M_1" src="/e/zdymodel/article/module/43.ascx"%><ascx:M_1 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="246_1" TagTable="article" TagSortId=600 SqlOrder="order by " SqlCondition="" ShowNum=5 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/></div>
		</div>
	</div>
</div>
<%End();%>