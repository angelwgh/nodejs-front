<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="zaixian_yd">
<div class="yd_fl">
<div align="center" style="width:340px;margin:0 auto;color:#333">请仔细填写好下方表单，我们的客服人员会在24小时内及时与您联系谢谢您的支持与关注！</div>
<div style="width:97%;margin:0 auto">
<script type="text/javascript" src="/e/js/zdyform.js"></script>
<form name="feedback" method="post" Enctype="multipart/form-data" action="/e/aspx/post.aspx">
<ul class="zaixianyd">
<li class="zx_l1" style="display:none">分类&nbsp;&nbsp;<select name="sort" id="sort"><option value="609">在线预订</option></select></li>


<li class="zx_l1"><span class="s1">您想要的产品 </span><span class="s2"><input type=text name="title" id="title"  maxlength="200" class="s2_inp"></span></li>
<li class="zx_l1"><span class="s1">订购数量 </span><span class="s2"><input type=text name="pa_shuliang" id="pa_shuliang" maxlength="200" class="s2_inp"></span></li>
<li class="zx_l1"><span class="s1">您的姓名 </span><span class="s2"><input type=text name="pa_truename" id="pa_truename" maxlength="200" class="s2_inp"></span></li>
<li class="zx_l1"><span class="s1">联系电话 </span><span class="s2"><input type=text name="pa_tel" id="pa_tel" maxlength="200" class="s2_inp"></span></li>
<li class="zx_l1"><span class="s1">您的地址 </span><span class="s2"><input type=text name="pa_add" id="pa_add" maxlength="200" class="s2_inp"></span></li>
<li class="zx_l2"><span class="s1">内容 </span><span class="s2"><textarea name="content" id="content"  class="s3_inp"></textarea></span></li>
<li class="zx_l1">验证码：<input type=text name="vcode" id="vcode" maxlength=4 size=4  class="s4_inp"> <img src="/e/aspx/yzm.aspx" onclick=Code_Change("vcode_img") align=absmiddle border=0 id="vcode_img" style="cursor:pointer" alt="点击更换"></li>
<li class="zx_l1"><input type="hidden" name="checked" value="0"><input type="hidden" name="showcode" value="0"><input type="hidden" name="to" value=""><input type="hidden" name="mailto" value=""><input type="hidden" name="mailreply" value=""><input type="hidden" name="mailsubject" value=""><input type="hidden" name="mailbody" value=""><input type="hidden" name="insertdatabase" value="1"><input type="hidden" name="siteid" value="1"><input type="hidden" name="formtable" value="feedback"><input type="hidden" name="mustname" value="您想要的产品,订购数量,您的姓名,联系电话,您的地址,内容,"><input type="hidden" name="mustfield" value="title,pa_shuliang,pa_truename,pa_tel,pa_add,content,"><input type="hidden" name="musttype" value="text,text,text,text,text,textarea,"><input type="button" class="btnok" value=" 提交 " onclick="return set_feedback()"></li></ul>
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
</div>
</div>
<div class="yd_fr"><img src="/e/images/diy/yd_pic.jpg"></div>
</div>
<%End();
if(PageCount>1)
{
string PageHtml="<div id=\"sublanmu_page\" class=\"sublanmu_page\">";
if(CurrentPage==1)
{
if(APage_LinkText[0]!=""){PageHtml+="<span class=\"firstpage\">"+APage_LinkText[0]+"</span>";} //首页
}
else if(CurrentPage>1)
{
 if(APage_LinkText[0]!=""){PageHtml+="<a href=\""+GoPage(1)+"\" class=\"firstpage\">"+APage_LinkText[0]+"</a>";} //首页
 if(APage_LinkText[1]!=""){PageHtml+=" <a href=\""+GoPage(CurrentPage-1)+"\" class=\"prevpage\">"+APage_LinkText[1]+"</a>";} //上一页
}
 int p=8; //表示开始时显示的页码总数
 int M=4; //超过p页后左右两边显示页码数
 int LastPage=1;
 if(CurrentPage<p)
  {
    LastPage=p;
    if(LastPage>PageCount)
     {
       LastPage=PageCount;
     }
    for(int i=1;i<=LastPage;i++)
    {
     if(CurrentPage==i)
      {
        PageHtml+=" <span class=\"c\">"+i.ToString()+"</span>";
      }
    else
      {
       PageHtml+=" <a href=\""+GoPage(i)+"\">"+i.ToString()+"</a>";
      }
    }
  }
 else
  {
    //PageHtml+=" <a href=\""+GoPage(CurrentPage-1)+"\">1...</a>";
    LastPage=CurrentPage+M;
    if(LastPage>PageCount)
     {
       LastPage=PageCount;
     }
    for(int i=(CurrentPage-M);i<=LastPage;i++)
    {
     if(CurrentPage==i)
      {
        PageHtml+=" <span class=\"c\">"+i.ToString()+"</span>";
      }
    else
      {
       PageHtml+=" <a href=\""+GoPage(i)+"\">"+i.ToString()+"</a>";
      }
    }

  }

if(CurrentPage<PageCount)
{
  if(LastPage<PageCount)
   {
     PageHtml+=" <a href=\""+GoPage(LastPage+1)+"\">...</a>";
   }
  if(APage_LinkText[2]!=""){PageHtml+=" <a href=\""+GoPage(CurrentPage+1)+"\" class=\"nextpage\">"+APage_LinkText[2]+"</a>";}  //下一页
  if(APage_LinkText[3]!=""){PageHtml+=" <a href=\""+GoPage(PageCount)+"\" class=\"lastpage\">"+APage_LinkText[3]+"</a>";}     //尾页
}
else if(CurrentPage==PageCount)
{
if(APage_LinkText[3]!=""){PageHtml+=" <span class=\"lastpage\">"+APage_LinkText[3]+"</span>";}     //尾页
}
if(Page_LinkInfo!=""){PageHtml+=" <span class=\"pageinfo\">"+String.Format(Page_LinkInfo,CurrentPage,PageCount,RecordCount)+"</span>";} //记录页次
PageHtml+="</div>";
Response.Write(PageHtml);
}%>