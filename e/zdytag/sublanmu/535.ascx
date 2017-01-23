<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="ny_ly_t"><img src="/e/css/images/ly_t.jpg"></div>
<div class="ny_ly">
<script src="/e/js/feedback.js" type="text/javascript"></script>
<form action="/e/aspx/post.aspx" method="post" enctype="multipart/form-data" name="feedback">
    <div>
    <ul>
        <li class="ly_1">您的姓名</li>
<li><input class="f_tb" id="pa_truename" maxlength="30" size="10" name="pa_truename" type="text" style="width:450px;height:30px;border:1px #C2D1D7 solid;border-radius:3px;" /></li>
        <li class="ly_2">联系方式</li>
<li><input class="f_tb" id="pa_tel" maxlength="30" size="12" name="pa_tel" type="text" style="width:450px;height:30px;border:1px #C2D1D7 solid;border-radius:3px;"/></li>



        <li class="ly_3">所需产品型号及说明</li>
        <li><textarea id="content"  name="content" rows="5" cols="70" onblur="if(this.value.length&gt;250)this.value=this.value.substr(0,250)" class="f_tb" style="width:450px;border:1px #C2D1D7 solid;border-radius:3px;"></textarea></li>
   
        <li style="float: left; width: 80px; height: 20px;color:#5A5A5A;font-weight:bold;font-size:14px;">验证码：</li>
        <li style="float: left"><input class="f_tb" id="vcode" maxlength="4" size="4" name="vcode" type="text" style="width:80px;border:1px #C2D1D7 solid;border-radius:3px;" /><img id="vcode_img" alt="点击更换" hspace="2" align="absMiddle" border="0" onclick="Code_Change('vcode_img')" style="cursor: pointer" src="/e/aspx/yzm.aspx" /></li>
        <li style="clear: both;font-size: 1px; line-height:0px; height:2px">&nbsp;</li>
        <li style="clear: both;padding:5px 0 5px 0px"> <input class="ok" type="submit" onclick="return set_feedback()" value=" 提交 " />
    </ul>
    </div>
    <input type="hidden" name="checkyzm" value="1" /> <input type="hidden" name="checked" value="0" /> <input type="hidden" name="to" /> <input type="hidden" name="mailto" /> <input type="hidden" name="mailreply" /> <input type="hidden" name="mailsubject" /> <input type="hidden" name="mailbody" /> <input type="hidden" name="sendmail" value="0" /> <input type="hidden" name="insertdatabase" value="1" /> <input type="hidden" name="siteid" value="1" /> <input type="hidden" name="formtable" value="feedback" />
</form>
<script type="text/javascript">
function set_feedback()
{
document.forms["feedback"].mailto.value="";
document.forms["feedback"].mailreply.value="";
document.forms["feedback"].mailsubject.value="";
document.forms["feedback"].mailbody.value="";
return Check_Feedback();
}
</script>
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