var Show_Style=2;
var Image_16=new Array();
var Pics="/e/upload/s1/imgs/image/2016/12/tpic_t_18152902.jpg";
var Links="/index.aspx?lanmuid=0&sublanmuid=0&id=1";
var Titles="金福源国际库存交易中心";
var Alts="金福源国际库存交易中心";
var Apic16=Pics.split('|');
var ALink16=Links.split('|');
var ATitle16=Titles.split('|');
var AAlts16=Alts.split('|');
var Show_Text=1;
for(i=0;i<Apic16.length;i++)
  {
   Image_16.src = Apic16[i]; 
  }



  var FHTML='<div id="js_slide_focus_16" class="slide_focus focus_style2" style="height:480px"><a class="prev"></a><a class="next"></a>';
  
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic16.length;i++)
   {
     if(ALink16.length<(i+1) || ALink16[i]=="")
      {
       ALink16[i]="javascript:void(0)";
      }
     if(AAlts16.length<(i+1))
      {
       AAlts16[i]="";
      }
     if(ATitle16.length<(i+1))
      {
       ATitle16[i]="";
      }
    FHTML+='<li><a href="'+ALink16[i]+'" target="_self" title="'+AAlts16[i]+'"><img src="'+Apic16[i]+'">';
    FHTML+='<em>'+ATitle16[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(function(){Slide_Focus("js_slide_focus_16",0,5,480,480,false);});