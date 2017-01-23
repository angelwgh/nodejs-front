<% @ Control Language="C#" Inherits="PageAdmin.module_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Module_StartHtml%><%if(Zdy_Tag==0 && CleanContainer<2){%>
<div id="module_<%=Module_Id%>" <%=Module_box_style%>class="module_box<%=Layout%><%=Module_ClassName%>">
 <div <%=Module_box_inner%>class="module_box_inner">
   <%if(CleanContainer==0){%><div <%=Module_titlebox_style%>class="module_title"><span <%=Module_title_style%>class="module_sign"><%=Module_Title%></span><span <%=Module_more_style%>class="module_more"><%=More_Url%></span></div>
   <%}if(Module_Header!=""){%><%=Module_Header%><%}%><div id="module_content_<%=Module_Id%>" <%=Module_content_style%>class="module_content">
<%}%><%conn.Open();%>

<div class = "m-jfy-slide">
<div class="img-show">
<% 
int Id;
DataTable dt=Get_Data();
DataTable dt1;
DataRow dr,dr1;
for(int i=0;i<dt.Rows.Count;i++)
 {
  dr=dt.Rows[i]; //说明：给dr赋值
  Id=int.Parse(dr["id"].ToString());//获取图片组所属的信息id
%>  

<ul class="img-list">
<%
  dt1=Get_File("imgs","pa_imgs",Id);//获取图片组附件表集合;类型为DataTable
    for(i=0;i<dt1.Rows.Count;i++){
       dr1=dt1.Rows[i];
%>
    <li>
       <img src="<%=dr1["thumbnail"]%>">
    </li>

<%
    }
%>

</ul>

<%
 }
%>
</div>
<div class="toolbar">
<div class="ctr left">
<i class="fa fa-angle-double-left"></i>
</div>
<div class="ctr right">
<i class="fa fa-angle-double-right"></i>
</div>
</div>
</div>



<%conn.Close();%>
   <%if(Zdy_Tag==0 && CleanContainer<2){%></div>
   <div class="module_footer"><span class="l"></span><span class="r"></span></div>
 </div>
</div><%}%><%=Module_EndHtml%>