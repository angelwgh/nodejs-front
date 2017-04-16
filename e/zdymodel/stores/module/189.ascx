<% @ Control Language="C#" Inherits="PageAdmin.module_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Module_StartHtml%><%if(Zdy_Tag==0 && CleanContainer<2){%>
<div id="module_<%=Module_Id%>" <%=Module_box_style%>class="module_box<%=Layout%><%=Module_ClassName%>">
 <div <%=Module_box_inner%>class="module_box_inner">
   <%if(CleanContainer==0){%><div <%=Module_titlebox_style%>class="module_title"><span <%=Module_title_style%>class="module_sign"><%=Module_Title%></span><span <%=Module_more_style%>class="module_more"><%=More_Url%></span></div>
   <%}if(Module_Header!=""){%><%=Module_Header%><%}%><div id="module_content_<%=Module_Id%>" <%=Module_content_style%>class="module_content">
<%}%><%conn.Open();%><div class="m-storeslist">
  
<script>
  var store_list=[]
    <% 
    
    DataTable dt=Get_Data();
    DataRow dr;
    for(int i=0;i<dt.Rows.Count;i++)
     {
      dr=dt.Rows[i]; //说明：给dr赋值
    %>
    store_list[<%=i%>]={
        id:<%=dr["id"]%>,
        img_src:'<%=dr["titlepic"].ToString()%>',
        title:'<%=dr["title"].ToString()%>',
        content:'<%=dr["content"].ToString()%>',
        url:'<%=Detail_Url(dr)%>',
        clicks:'<%=dr["clicks"].ToString()%>'
    };

    
    <%
     }
    %>
</script>
<div class="show-more">
  <i class="fa fa-angle-double-down"></i>
</div>
</div>

<%conn.Close();%>
   <%if(Zdy_Tag==0 && CleanContainer<2){%></div>
   <div class="module_footer"><span class="l"></span><span class="r"></span></div>
 </div>
</div><%}%><%=Module_EndHtml%>