<% @ Control  Language="C#" Inherits="PageAdmin.patag"%>
<% @ Import NameSpace="System.Data"%>
<% @ Import NameSpace="System.Data.OleDb"%>
<%Start();%>
 <div class="row page-nav">
        <div class="col-xs-4 ">
            <a href="/m/index.aspx?lanmuid=121">
                <div class="btn btn-success">
                	<div class="ibk">
                		<i class="fa fa-shopping-cart"></i>
                    	<span>商铺中心</span>	
                	</div>
                    
                </div>
            </a>
        </div>
        <div class="col-xs-4 ">
            <a href="/m/index.aspx?lanmuid=125">
                <div class="btn btn-primary">
                	<div class="ibk">
                		<i class="fa fa-newspaper-o"></i>
                    	<span>新闻中心</span>	
                	</div>
                    
                </div>
            </a>
        </div>
        <div class="col-xs-4 ">
            <a href="#">
                <div class="btn btn-info">
                	<div class="ibk">
                		<i class="fa fa-laptop"></i>
                    	<span>生活服务</span>	
                	</div>
                   
                </div>
            </a>
        </div>
    </div>
<%End();%>