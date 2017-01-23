<% @ Control  Language="C#" Inherits="PageAdmin.paform"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<tr id='tr_feedback_title'><td class='tdhead'>留言标题<span style='color:#ff0000'>*</span></td><td><input type=text name='title' id='title' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("title"));}%>" style='width:300px'   maxlength="200"><span id="title_tip"></span></td></tr>
<tr id='tr_feedback_pa_truename'><td class='tdhead'>您的姓名<span style='color:#ff0000'>*</span></td><td><input type=text name='pa_truename' id='pa_truename' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_truename"));}%>" style='width:200px'   maxlength="200"><span id="pa_truename_tip"></span></td></tr>
<tr id='tr_feedback_pa_tel'><td class='tdhead'>联系电话<span style='color:#ff0000'>*</span></td><td><input type=text name='pa_tel' id='pa_tel' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_tel"));}%>" style='width:200px'   maxlength="200"><span id="pa_tel_tip"></span></td></tr>
<tr id='tr_feedback_pa_add'><td class='tdhead'>您的地址</td><td><input type=text name='pa_add' id='pa_add' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_add"));}%>"  maxlength="200"><span id="pa_add_tip"></span></td></tr>
<tr id='tr_feedback_content'><td class='tdhead' id='tr_feedback_content'>内容<span style='color:#ff0000'>*</span></td><td><textarea name='content' id='content'  ><%if(post=="add"){Response.Write("");}else{Response.Write(r("content"));}%></textarea><span id="content_tip"></span></td></tr>
<tr id='tr_feedback_thedate'><td class='tdhead'>发布日期<span style='color:#ff0000'>*</span></td><td><input type=text name='thedate' id='thedate' value="<%if(post=="add"){Response.Write(""==""?DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"):"");}else{Response.Write(DateTime.Parse(r("thedate")).ToString("yyyy-MM-dd HH:mm:ss"));}%>"  maxlength="200"><a href="javascript:open_calendar('thedate',1)"><img src=/e/images/icon/date.gif border=0 height=20 hspace=2 align=absbottom></a><span id="thedate_tip"></span></td></tr>

<input type='hidden' name='mustname' value='留言标题,您的姓名,联系电话,内容,发布日期,'><input type='hidden' name='mustfield' value='title,pa_truename,pa_tel,content,thedate,'><input type='hidden' name='musttype' value='text,text,text,textarea,text,'>
<script  type='text/javascript'>
function feedback_zdycheck(){
return true;
}
</script>
<%End();%>






