<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="f-center f-pr">
<div>
<% @ Register TagPrefix="ascx" TagName="M_0" src="/e/zdymodel/imgs/module/172.ascx"%><ascx:M_0 runat="server" TagSiteId=1 SiteId=1 ZdyTag=1 ModuleId="256_0" TagTable="imgs" TagSortId=657 SqlOrder="order by " SqlCondition="" ShowNum=5 TagZtId=0 TitleNum=50 TitlePicWidth=150 TitlePicHeight=150 TheTarget="_self"/>
</div>

<div class="m-message">
	<h2 class="title">
		请留下您的联系方式，我们会跟您联系</i> 
	</h2>
<script type="text/javascript" src="/e/js/zdyform.js"></script>
<style type="text/css">
    .feedback_table {
        border: 1px solid #eeeeee
    }
    .feedback_table td {
        border: 1px solid #eeeeee;
        padding: 2px
    }
    </style>
	<form name="feedback" method="post" enctype="multipart/form-data" action="/e/aspx/post.aspx">
		<table border="0" cellpadding="0" cellspacing="0" align="center" width="95%" class="feedback_table ke-zeroborder">
			<tbody>
				<tr style="display:none;">
					<td align="right">
						分类&nbsp;&nbsp;
					</td>
					<td>
						<select name="sort" id="sort"> <option value="0">选择分类</option>
                            <option value="609" selected="selected">在线留言</option>
                        </select> 
					</td>
				</tr>
				<tr>
					<td>
						<label class="prompt" for="title">标题(必填)</label> <input class="mess-in" type="text" name="title" id="title"  /> 
					</td>
				</tr>
				<tr>
					<td>
						<label class="prompt" for="pa_truename">您的姓名(必填)</label> <input class="mess-in" type="text" name="pa_truename" id="pa_truename"  /> 
					</td>
				</tr>
				<tr>
					<td>
						<label class="prompt" for="pa_tel">联系电话(必填)</label> <input class="mess-in" type="text" name="pa_tel" id="pa_tel"  /> 
					</td>
				</tr>
				<tr>

					<td>
						<label class="prompt" for="pa_add">联系地址</label> <input class="mess-in" type="text" name="pa_add" id="pa_add"  /> 
					</td>
				</tr>
				<tr>
					<td>
						<label class="prompt" for="content">在此输入留言内容，我们会尽快跟您联系(必填)</label> <textarea class="mess-textarea" name="content" id="content" style="overflow:AUTO;resize:none;"></textarea> 
					</td>
				</tr>
				<tr>
					<td>
						<label class="prompt" for="vcode">验证码</label> <input class="mess-vcode" type="text" name="vcode" id="vcode" maxlength="4" size="7" /> <img src="/e/aspx/yzm.aspx" onclick="Code_Change(&quot;vcode_img&quot;)" align="absmiddle" border="0" id="vcode_img" style="cursor:pointer;" alt="点击更换" /> 
					</td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<input type="hidden" name="checked" value="1" /> <input type="hidden" name="showcode" value="0" /> <input type="hidden" name="to" value="" /> <input type="hidden" name="mailto" value="" /> <input type="hidden" name="mailreply" value="" /> <input type="hidden" name="mailsubject" value="" /> <input type="hidden" name="mailbody" value="" /> <input type="hidden" name="insertdatabase" value="1" /> <input type="hidden" name="siteid" value="1" /> <input type="hidden" name="formtable" value="feedback" /> <input type="hidden" name="mustname" value="留言标题,您的姓名,联系电话,内容," /> <input type="hidden" name="mustfield" value="title,pa_truename,pa_tel,content," /> <input type="hidden" name="musttype" value="text,text,text,textarea," /> <input type="button" class="bt" value=" 提交 " onclick="return set_feedback()" /> <input type="reset" value=" 重设 " class="bt reset" /> 
					</td>
				</tr>
			</tbody>
		</table>
	</form>
<script type="text/javascript">
    function set_feedback() {
        document.forms["feedback"].mailto.value = "";
        document.forms["feedback"].mailreply.value = "";
        document.forms["feedback"].mailsubject.value = "";
        document.forms["feedback"].mailbody.value = "";
        return Check_ZdyForm("feedback");
    }
    function feedback_zdycheck() {
        return true;
    }
    </script>
</div>
</div>
<div class=clear></div>
<%End();%>