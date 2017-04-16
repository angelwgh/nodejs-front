<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
<div class="m-stores">
    <div class="floors">
       <ul>
         <li data-floor="645" class="floor_645"><span>负一楼</span></li>
         <li data-floor="647" class="floor_647"><span>一楼</span></li>
         <li data-floor="648" class="floor_648"><span>二楼</span></li>
         <li data-floor="649" class="floor_649"><span>三楼</span></li>
         <li data-floor="650" class="floor_650"><span>四楼</span></li>
       </ul>

    </div>
    <div class="store-list">
        <ul class="items">
        </ul>
    </div>
    <div class="show-more">
         <i class="fa fa-angle-double-down"></i>
    </div>
</div>
<script src="/e/aspx/ajax_list.aspx?modelid=190" type="text/javascript"></script>
<script src="/e/templates/wap/storecenter/storeList.js"></script>
<%End();%>