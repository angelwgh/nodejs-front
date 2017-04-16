<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>

<script type="text/javascript">



</script>
<!--
变量说明：
ajaxparameter_175：参数变量，用户可以自行增加参数，参数之间用“&”隔开。
参数说明：
siteid：站点id 
sortid：信息分类id,0表示显示所有分类。
pagesize：每页显示数，无此参数则默认20
sqlorder：信息排序方式
回调函数：
function ajax_175_back(backcontent){}
其中参数backcontent为ajax返回的内容，如果页面存在此函数(默认注释掉，如需使用删除掉注释符即可)，则执行此函数，否则默认在页面中加载返回的内容。
-->
<%End();%>