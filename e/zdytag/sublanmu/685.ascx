<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<style>
.online_massage{clear:both;overflow:hidden}
.online_massage .om_fr{float:left;width:315px;margin-top:20px;}
.online_massage .om_fl{float:right;width:750px;}
.online_massage .om_fl ul li{margin:10px 0;}
.online_massage .om_fl ul li span{display:block}
.online_massage .om_fl ul li.yzm{text-align:left;}
.online_massage .om_fl ul li.yzm span{display:inline-block}
.online_massage .om_fl ul li span.s2 .inpt1{width:99%;height:30px;line-height:30px;border:1px dashed #aaa;background:#EEEEEE}
.online_massage .om_fl ul li span.s2 .inpt2{width:99%;height:120px;line-height:30px;border:1px dashed #aaa;background:#EEEEEE}
.online_massage .om_fl ul li span .inpt3{width:100px;height:30px;line-height:30px;border:1px dashed #aaa;background:#EEEEEE}
.online_massage .om_fl ul li .btok{width:100px;height:30px;line-height:30px;border:none;background:#DA0600;color:#FFF;}
</style>


<div class="online_massage">
<div class="om_fr"><img src="/e/images/diy/lypic.jpg"></div>
<div class="om_fl">
<script type="text/javascript" src="/e/js/zdyform.js"></script>
<form name="feedback" method="post" Enctype="multipart/form-data" action="/e/aspx/post.aspx">
<ul><li style="display:none"><span>分类&nbsp;&nbsp;</span><span><select name="sort" id="sort"><option value="609">在线留言</option>
</select></span></li>
<li><span class="s1">留言标题</span><span class="s2"><input type=text name="title" id="title" class="inpt1" maxlength="200"></span></li>
<li><span class="s1">您的姓名</span><span class="s2"><input type=text name="pa_truename" id="pa_truename" class="inpt1"  maxlength="200"></span></li>
<li><span class="s1">联系电话</span><span class="s2"><input type=text name="pa_tel" id="pa_tel" class="inpt1" maxlength="200"></span></li>
<li><span class="s1">您的地址</span><span class="s2"><input type=text name="pa_add" id="pa_add" class="inpt1" maxlength="200"></span></li>
<li><span class="s1">内容 </span><span class="s2"><textarea name="content" id="content" class="inpt2"></textarea></span></li>
<li class="yzm"><span>验证码：</span><span><input type=text name="vcode" id="vcode" maxlength=4 size=4  class="inpt3"> <img src="/e/aspx/yzm.aspx" onclick=Code_Change("vcode_img") align=absmiddle border=0 id="vcode_img" style="cursor:pointer" alt="点击更换"></span></li>
<li><input type="hidden" name="checked" value="0"><input type="hidden" name="showcode" value="0"><input type="hidden" name="to" value=""><input type="hidden" name="mailto" value=""><input type="hidden" name="mailreply" value=""><input type="hidden" name="mailsubject" value=""><input type="hidden" name="mailbody" value=""><input type="hidden" name="insertdatabase" value="1"><input type="hidden" name="siteid" value="1"><input type="hidden" name="formtable" value="feedback"><input type="hidden" name="mustname" value="留言标题,您的姓名,联系电话,内容,"><input type="hidden" name="mustfield" value="title,pa_truename,pa_tel,content,"><input type="hidden" name="musttype" value="text,text,text,textarea,"><input type="button" class="btok" value=" 提交 " onclick="return set_feedback()"></li></ul>
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