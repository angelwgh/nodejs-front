<% @ Control  Language="C#" Inherits="PageAdmin.paform"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<tr id='tr_stores_title'><td class='tdhead'>商户店铺<span style='color:#ff0000'>*</span></td><td><input type=text name='title' id='title' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("title"));}%>"  maxlength="200"><span id="title_tip"></span></td></tr>
<tr id='tr_stores_pa_name'><td class='tdhead'>姓名</td><td><input type=text name='pa_name' id='pa_name' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_name"));}%>"  maxlength="200"><span id="pa_name_tip"></span></td></tr>
<tr id='tr_stores_pa_qq'><td class='tdhead'>QQ</td><td><input type=text name='pa_qq' id='pa_qq' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_qq"));}%>"  maxlength="200"><span id="pa_qq_tip"></span></td></tr>
<tr id='tr_stores_titlepic'><td class='tdhead'>店铺图片</td><td><input ondblclick="if(this.value!='')window.open(this.value)" type=text name='titlepic' id='titlepic'  value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("titlepic"));}%>"  ><%if(Field_ImageUpload=="true"){%><a href="javascript:delete_file('stores','titlepic',<%=InforId%>)" id="delete_titlepic" style="padding-left:2px;display:<%=r("titlepic")==""?"none":""%>" title='删除图片'><img src=/e/images/public/del.gif border=0></a><a id='upload_titlepic' href="javascript:open_upload('<%=SiteId%>','','image','stores','titlepic','titlepic')" style="display:<%=r("titlepic")==""?"":"none"%>"><img src='/e/images/public/attachimg.gif' border=0  hspace=2 alt='上传图片' align=absbottom></a><%}%><span id="titlepic_tip"></span></td></tr><tr id='tr_stores_pa_tel'><td class='tdhead'>联系电话<span style='color:#ff0000'>*</span></td><td><input type=text name='pa_tel' id='pa_tel' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_tel"));}%>"  maxlength="200"><span id="pa_tel_tip"></span></td></tr>
<tr id='tr_stores_pa_wx'><td class='tdhead'>微信</td><td><input type=text name='pa_wx' id='pa_wx' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_wx"));}%>"  maxlength="200"><span id="pa_wx_tip"></span></td></tr>
<tr id='tr_stores_pa_store_num'><td class='tdhead'>店铺地址</td><td><input type=text name='pa_store_num' id='pa_store_num' value="<%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_store_num"));}%>"  maxlength="200"><span id="pa_store_num_tip"></span></td></tr>
<tr id='tr_stores_pa_imgs'><td class='tdhead'>商铺图片组<br><input type='button' value='增加图片' class='f_bt' onclick="open_files('<%=SiteId%>','0','stores','pa_imgs','images','<%=InforId%>')"><br><input type='button' id='Edit_pa_imgs' value='刷新图片' class='f_bt' onclick="Iframe_Submit('iframe_pa_imgs')" style='display:none'></td><td><div id='pa_imgs_box' style='width:98%;border:1px solid #cccccc;background-color:#ffffff;padding:5px 5px 5px 5px'><input type=hidden value='0' name='pa_imgs' id='pa_imgs'><iframe  id='iframe_pa_imgs' name='iframe_pa_imgs' allowtransparency='true' src='/e/aspx/file_list.aspx?id=<%=InforId%>&table=stores&field=pa_imgs&fieldtype=images&sid=<%=SiteId%>&from=member' frameborder=0 scroling=auto height=150px width=100% marginwidth=0 marginheight=0 align=center></iframe></div><span id="pa_imgs_tip"></span></td></tr><tr id='tr_stores_content'><td class='tdhead'>商铺简介</td><td><textarea name='content' id='content' style="width:100%;height:300px"   ><%if(post=="add"){Response.Write("");}else{Response.Write(r("content"));}%></textarea><script charset="utf-8" src="/e/incs/kindeditor/kindeditor.js" type="text/javascript"></script><script type="text/javascript">var KE_content;KindEditor.ready(function(K) {KE_content= K.create("#content",{uploadJson :kindeditor_uploadJson,fileManagerJson :kindeditor_fileManagerJson,allowImageUpload:<%=Editor_ImageUpload%>,allowFlashUpload:<%=Editor_FlashUpload%>,allowMediaUpload:<%=Editor_FlashUpload%>,allowFileUpload:<%=Editor_AttachmentUpload%>,allowFileManager :false,items :kindeditor_NormalItems,filterMode :false,extraFileUploadParams:{siteid:"<%=SiteId%>"}});});</script><span id="content_tip"></span></td></tr>
<tr id='tr_stores_thedate'><td class='tdhead'>发布日期<span style='color:#ff0000'>*</span></td><td><input type=text name='thedate' id='thedate' value="<%if(post=="add"){Response.Write(""==""?DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"):"");}else{Response.Write(DateTime.Parse(r("thedate")).ToString("yyyy-MM-dd HH:mm:ss"));}%>"  maxlength="50"><a href="javascript:open_calendar('thedate',1)"><img src=/e/images/icon/date.gif border=0 height=20 hspace=2 align=absbottom></a><span id="thedate_tip"></span></td></tr>
<tr id='tr_stores_pa_store_info'><td class='tdhead'>店铺信息</td><td><textarea name='pa_store_info' id='pa_store_info' style="width:100%;height:300px"   ><%if(post=="add"){Response.Write("");}else{Response.Write(r("pa_store_info"));}%></textarea><script type="text/javascript">var KE_pa_store_info;KindEditor.ready(function(K) {KE_pa_store_info= K.create("#pa_store_info",{uploadJson :kindeditor_uploadJson,fileManagerJson :kindeditor_fileManagerJson,allowImageUpload:<%=Editor_ImageUpload%>,allowFlashUpload:<%=Editor_FlashUpload%>,allowMediaUpload:<%=Editor_FlashUpload%>,allowFileUpload:<%=Editor_AttachmentUpload%>,allowFileManager :false,items :kindeditor_NormalItems,filterMode :false,extraFileUploadParams:{siteid:"<%=SiteId%>"}});});</script><span id="pa_store_info_tip"></span></td></tr>

<input type='hidden' name='mustname' value='商户店铺,联系电话,发布日期,'><input type='hidden' name='mustfield' value='title,pa_tel,thedate,'><input type='hidden' name='musttype' value='text,text,text,'>
<script  type='text/javascript'>
function stores_zdycheck(){
Iframe_Submit("iframe_pa_imgs","1")
KE_content.sync();
KE_pa_store_info.sync();
return true;
}
</script>
<%End();%>






