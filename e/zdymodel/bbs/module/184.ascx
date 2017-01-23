<% @ Control Language="C#" Inherits="PageAdmin.module_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Module_StartHtml%><%if(Zdy_Tag==0 && CleanContainer<2){%>
<div id="module_<%=Module_Id%>" <%=Module_box_style%>class="module_box<%=Layout%><%=Module_ClassName%>">
 <div <%=Module_box_inner%>class="module_box_inner">
   <%if(CleanContainer==0){%><div <%=Module_titlebox_style%>class="module_title"><span <%=Module_title_style%>class="module_sign"><%=Module_Title%></span><span <%=Module_more_style%>class="module_more"><%=More_Url%></span></div>
   <%}if(Module_Header!=""){%><%=Module_Header%><%}%><div id="module_content_<%=Module_Id%>" <%=Module_content_style%>class="module_content">
<%}%><%conn.Open();%><ul>
<%
DataTable dt,comment_dt;
comment_dt=Get_Data("select top 10 *  from pa_comments where checked=1 order by id desc");
DataRow dr,comment_dr;
for(int i=0;i<comment_dt.Rows.Count;i++)
    {
    comment_dr=comment_dt.Rows[i];
    dt=Get_Data("select * from "+comment_dr["thetable"].ToString() +" where id="+comment_dr["detail_id"].ToString()); 
    dr=dt.Rows[0];
%>
<li style="border-bottom:1px dotted #cccccc;padding:10px 0px">
评论标题：<a href="<%=Detail_Url(dr)%>" target=_blank><%=SubStr(dr["title"].ToString(),50,true)%></a><br>
评论内容：<%=SubStr(comment_dr["content"].ToString(),150,true)%>
<br>发布日期：<%=((DateTime)comment_dr["thedate"]).ToString("yyyy-MM-dd")%>
</li>
<%
    }
    %>
</ul><%conn.Close();%>
   <%if(Zdy_Tag==0 && CleanContainer<2){%></div>
   <div class="module_footer"><span class="l"></span><span class="r"></span></div>
 </div>
</div><%}%><%=Module_EndHtml%>