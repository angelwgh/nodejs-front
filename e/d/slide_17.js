var Show_Style=3;
var Image_17=new Array();
var Pics="/e/upload/s1/stores/image/2016/12/t_29110732.jpg|/e/upload/s1/stores/image/2016/12/t_14100619.jpg|/e/upload/s1/stores/image/2016/12/t_13153257.jpg";
var Links="/index.aspx?lanmuid=116&sublanmuid=731&id=5|/index.aspx?lanmuid=116&sublanmuid=731&id=4|/index.aspx?lanmuid=116&sublanmuid=731&id=1";
var Titles="余氏国际贸易中心|店铺3|test";
var Alts="余氏国际贸易中心|店铺3|test";
var Apic17=Pics.split('|');
var ALink17=Links.split('|');
var ATitle17=Titles.split('|');
var AAlts17=Alts.split('|');
var Show_Text=1;
for(i=0;i<Apic17.length;i++)
  {
   Image_17.src = Apic17[i]; 
  }



  var FHTML='<div id="js_slide_focus_17" class="slide_focus focus_style3" ><a class="prev"></a><a class="next"></a>';
  
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic17.length;i++)
   {
     if(ALink17.length<(i+1) || ALink17[i]=="")
      {
       ALink17[i]="javascript:void(0)";
      }
     if(AAlts17.length<(i+1))
      {
       AAlts17[i]="";
      }
     if(ATitle17.length<(i+1))
      {
       ATitle17[i]="";
      }
    FHTML+='<li><a href="'+ALink17[i]+'" target="_self" title="'+AAlts17[i]+'"><img src="'+Apic17[i]+'">';
    FHTML+='<em>'+ATitle17[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(window).load(function(){Slide_Focus("js_slide_focus_17",0,5,0,0,true);});
