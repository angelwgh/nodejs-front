<% @ Control Language="C#" Inherits="PageAdmin.detail_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Zdy_Location%>
<div class="sublanmu_box sublanmu_box_<%=Sublanmu_Id%>" id="sublanmu_box">
<div class="sublanmu_content" id="sublanmu_content">
<%conn.Open();%><% 
DataTable dt=Get_Data();
DataRow dr;
for(int i=0;i<dt.Rows.Count;i++)
 {
  dr=dt.Rows[i]; //说明：给dr赋值
     int Id = int.Parse(dr["id"].ToString());
     DataTable imgDt = Get_File("stores","pa_imgs",Id);
%>
<div class="m-view">
<div class="child-views-list">
<div class="title-pic child-view">
    <img src="<%=imgDt.Rows[0]["url"]%>">
</div>
<div class="tel-num child-view">
    <div class="tel-icon">
         <i class="fa fa-phone"></i>
    </div>
    <div class="tel-num-list">
          <div class="bg"></div>
          <div class="close btn btn-primary"><i class="fa fa-close"></i></div>
          <ul>
               <li class="btn btn-primary btn-block">18888888888</li>
          </ul>
    </div>
</div>
</div>
</div>
<script>
   var store_data = {};
       store_data.tel = '<%=dr["pa_tel"].ToString()%>';//联系电话
       store_data.floor = '<%=Sort_Name(int.Parse(dr["Sort_Id"].ToString()))%>';//楼层
       store_data.store_num = '<%=dr["pa_store_num"].ToString()%>'//店铺地址
       store_data.title = '<%=dr["title"].ToString()%>'
       <%
          string imgUrl = String.Empty;
          for(int j=0; j<imgDt.Rows.Count;j++)
             {
                 DataRow imgDr =  imgDt.Rows[j];
                 
                 imgUrl = imgUrl + imgDr["url"]+"|";
             }
       %>
        store_data.img_url = '<%=imgUrl%> ';//图片组地址
</script>
<%
 }
%>

<script src="/e/templates/wap/storecenter/script.js"></script><%conn.Close();%>
<script type="text/javascript">Get_Info("<%=Thetable%>","<%=Detail_Id%>")</script>
<asp:PlaceHolder id="P_Comment" runat="server"/></div></div>