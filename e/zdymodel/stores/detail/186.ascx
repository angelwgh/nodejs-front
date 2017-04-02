<% @ Control Language="C#" Inherits="PageAdmin.detail_zdymodel"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%=Zdy_Location%>
<div class="sublanmu_box sublanmu_box_<%=Sublanmu_Id%>" id="sublanmu_box">
<div class="sublanmu_content" id="sublanmu_content">
<%conn.Open();%>
<% 
DataTable dt=Get_Data();
DataRow dr;
for(int i=0;i<dt.Rows.Count;i++)
 {
  dr=dt.Rows[i]; //说明：给dr赋值
     int Id = int.Parse(dr["id"].ToString());
     DataTable imgDt = Get_File("stores","pa_imgs",Id);
%>
<div class="title-pic">
    <img src="<%=imgDt.Rows[0]["url"]%>">
</div>
<div class="tel-num">
    <div class="tel-icon">
         <i class="fa fa-phone"></i>
    </div>
</div>
<span><%=dr["pa_tel"].ToString()%></span>
<span><%=Sort_Name(int.Parse(dr["Sort_Id"].ToString()))%></span>
<%
 }
%>

<script src="/e/templates/wap/storecenter/script.js"></script><%conn.Close();%>
<script type="text/javascript">Get_Info("<%=Thetable%>","<%=Detail_Id%>")</script>
<asp:PlaceHolder id="P_Comment" runat="server"/></div></div>