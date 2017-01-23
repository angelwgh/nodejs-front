<% @ Control Language="C#" Inherits="PageAdmin.detail_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Zdy_Location%>
<div class="sublanmu_box sublanmu_box_<%=Sublanmu_Id%>" id="sublanmu_box">
<div class="sublanmu_content" id="sublanmu_content">
<%conn.Open();%><% 
DataTable dt=Get_Data();
DataRow dr;
int Id;
if(dt.Rows.Count>0)
 {
  dr=dt.Rows[0]; //说明：给dr赋值
  Id=int.Parse(dr["id"].ToString());//获取图片组所属的信息id
%>
<!--
<div class="m-store-info">
    <div class="page-head clearfix">
       <div class="store-imgs left">
           <div class="main-img">
               <div class="img-show">
                   <img src="<%=dr["titlepic"].ToString()%>">
                   <span class="img-preview"></span>
               </div>
               <div class="img-lage">
               </div>
           </div>
           <div class="imgs-list ">
               <ul class="items clearfix">
                   <%
                      DataTable dt_imgs = Get_File("stores","pa_imgs",Id);
                      DataRow dr_img;
                      String img_url = "";
                      int img_count = dt_imgs.Rows.Count;
                         for(int i = 0;i<img_count; i++){
                            dr_img =  dt_imgs.Rows[i];
                            img_url = img_url + dr_img["url"].ToString() + "|";
                          }
                   %>
               </ul>
           </div>
       </div>
       <div class="head-right right">
       </div>

    </div>
</div>

-->
<div class="m-store-info">
<ul class="store-info-list">
</ul>
<div class="background-color"></div>
</div>

<script>

var _store_data = {};
_store_data.title = '<%=dr["title"].ToString()%>';
_store_data.name  = '<%=dr["pa_name"].ToString()%>';
_store_data.qq    = '<%=dr["pa_qq"].ToString()%>';
_store_data.titlepic = '<%=dr["titlepic"].ToString()%>';
_store_data.tel   = '<%=dr["pa_tel"].ToString()%>'
_store_data.wx    = '<%=dr["pa_wx"].ToString()%>';
_store_data.store_num = '<%=dr["pa_store_num"].ToString()%>';
_store_data.content   = '<%=dr["content"].ToString()%>';
_store_data.img_url   ='<%=img_url%>';
</script>
<div class="store-pic-slide">
<script src="/e/templates/150703/storescenter/content/content.js"></script>
</div>
<% 
 }
%><%conn.Close();%>
<script type="text/javascript">Get_Info("<%=Thetable%>","<%=Detail_Id%>")</script>
<asp:PlaceHolder id="P_Comment" runat="server"/></div></div>