<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<script type="text/javascript" src="/e/js/zdyform.js"></script>
<style type='text/css'>
.feedback_table{border:1px solid #eeeeee}
.feedback_table td{border:1px solid #eeeeee;padding:5px}
</style>
<form name="feedback" method="post" Enctype="multipart/form-data" action="/e/aspx/post.aspx">
<table border=0 cellpadding=0 cellspacing=0  align=center width=95% class="feedback_table"><tr><td align=right>分类&nbsp;&nbsp;</td><td><select name="sort" id="sort"><option value="0">选择分类</option><option value="609">在线留言</option>
</select></td></tr>
<tr><td align=right>留言标题 <span style="color:#ff0000">*</span></td><td><input type=text name="title" id="title" style="width:300px"  maxlength="200"></td></tr>
<tr><td align=right>您的姓名 <span style="color:#ff0000">*</span></td><td><input type=text name="pa_truename" id="pa_truename" style="width:200px"  maxlength="200"></td></tr>
<tr><td align=right>联系电话 <span style="color:#ff0000">*</span></td><td><input type=text name="pa_tel" id="pa_tel" style="width:200px"  maxlength="200"></td></tr>
<tr><td align=right>您的地址&nbsp;&nbsp;</td><td><input type=text name="pa_add" id="pa_add" maxlength="200"></td></tr>
<tr><td align=right>内容 <span style="color:#ff0000">*</span></td><td><textarea name="content" id="content" ></textarea></td></tr>
<tr><td align=right>验证码<span style="color:#ff0000">*</span></td><td><input type=text name="vcode" id="vcode" maxlength=4 size=4> <img src="/e/aspx/yzm.aspx" onclick=Code_Change("vcode_img") align=absmiddle border=0 id="vcode_img" style="cursor:pointer" alt="点击更换"></td></tr>
<tr><td colspan=2 align=center><input type="hidden" name="checked" value="0"><input type="hidden" name="showcode" value="0"><input type="hidden" name="to" value=""><input type="hidden" name="mailto" value=""><input type="hidden" name="mailreply" value=""><input type="hidden" name="mailsubject" value=""><input type="hidden" name="mailbody" value=""><input type="hidden" name="insertdatabase" value="1"><input type="hidden" name="siteid" value="1"><input type="hidden" name="formtable" value="feedback"><input type="hidden" name="mustname" value="留言标题,您的姓名,联系电话,内容,"><input type="hidden" name="mustfield" value="title,pa_truename,pa_tel,content,"><input type="hidden" name="musttype" value="text,text,text,textarea,"><input type="button" class="bt" value=" 提交 " onclick="return set_feedback()"> <input type="reset" value=" 重设 " class="bt"></td></tr></table>
</form>
<script type="text/javascript">
function set_feedback()
{
document.forms["feedback"].mailto.value="";
document.forms["feedback"].mailreply.value="";
document.forms["feedback"].mailsubject.value="";
document.forms["feedback"].mailbody.value="";
return Check_ZdyForm("feedback");
}

function feedback_zdycheck(){
return true;
}
</script>
<%End();%>