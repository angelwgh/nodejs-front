<% @ Control Language="C#" Inherits="PageAdmin.module_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Module_StartHtml%><%if(Zdy_Tag==0 && CleanContainer<2){%>
<div id="module_<%=Module_Id%>" <%=Module_box_style%>class="module_box<%=Layout%><%=Module_ClassName%>">
 <div <%=Module_box_inner%>class="module_box_inner">
   <%if(CleanContainer==0){%><div <%=Module_titlebox_style%>class="module_title"><span <%=Module_title_style%>class="module_sign"><%=Module_Title%></span><span <%=Module_more_style%>class="module_more"><%=More_Url%></span></div>
   <%}if(Module_Header!=""){%><%=Module_Header%><%}%><div id="module_content_<%=Module_Id%>" <%=Module_content_style%>class="module_content">
<%}%><%conn.Open();%><% 
DataTable dt=Get_Data();
DataRow dr;
int Id;

string data="[";
for(int i=0;i<dt.Rows.Count;i++)
 {
  dr=dt.Rows[i]; //说明：给dr赋值
  Id=int.Parse(dr["id"].ToString());//获取图片组所属信息id;


     DataTable dt_imgs = Get_File("stores","pa_imgs",Id);//获取图片组附件表集合
     DataRow dr_img;
     String img_url = "";
     int img_count = dt_imgs.Rows.Count;
     for(int j = 0;j<img_count; j++){
         dr_img =  dt_imgs.Rows[j];
         img_url = img_url + dr_img["url"].ToString() + "|";
     }

  data +="{"+"'id':"+dr["id"]+ ",'Detail_Url':'"+ Detail_Url(dr) + "','titlepic':'"+dr["titlepic"].ToString()+"','title':'"+dr["title"].ToString()+"','pa_store_num':'"+dr["pa_store_num"].ToString()+"','pa_imgs':'"+img_url+"'},";
 }
data=data.TrimEnd(',');
data +="]";
%>
stores_data["<%=Sort_Id%>"] = <%=data%>;


<%conn.Close();%>
   <%if(Zdy_Tag==0 && CleanContainer<2){%></div>
   <div class="module_footer"><span class="l"></span><span class="r"></span></div>
 </div>
</div><%}%><%=Module_EndHtml%>