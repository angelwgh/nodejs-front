function ChangeColor(color)
 {
   $("sublanmu_content").style.backgroundColor=color;
 }


function huadong(Id,Class,fx,jl,Speedes){

    var $wh=$(window).height();
    var $cq=$(window).scrollTop();

    var Speed=parseInt(Speedes+'blue'); 

     switch(fx){
       case "left":
    var $c3=$("#"+Id).find("."+Class).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({left:jl+'px'},Speed);
    }
       break;
       case "right":
    var $c3=$("#"+Id).find("."+Class).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({right:jl+'px'},Speed);
    }
       break;
       case "top":
    var $c3=$("#"+Id).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({top:jl+'px'},Speed);
    }
       break;
       case "bottom":
    var $c3=$("#"+Id).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({bottom:jl+'px'},Speed);
       break;
    }
      } 



  $(window).scroll(function() { 
    var $wh=$(window).height();
    var $cq=$(window).scrollTop();

    var Speed=parseInt(Speedes+'blue'); 

     switch(fx){
       case "left":
    var $c3=$("#"+Id).find("."+Class).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({left:jl+'px'},Speed);
    }
       break;
       case "right":
    var $c3=$("#"+Id).find("."+Class).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({right:jl+'px'},Speed);
    }
       break;
       case "top":
    var $c3=$("#"+Id).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({top:jl+'px'},Speed);
    }
       break;
       case "bottom":
    var $c3=$("#"+Id).offset().top;
    if($c3-$cq<$wh-10){
       $("#"+Id).find("."+Class).animate({bottom:jl+'px'},Speed);
       break;
    }
      } 


 });

}

function xuanzhuan(minc,xuanz){

    var $wh=$(window).height();
    var $xzq=$(window).scrollTop();
    var $zxc=$(minc).offset().top


    if($zxc-$xzq<$wh){

     $(minc).find("."+xuanz).css({"transform":"rotateY(360deg)","transition":"all 1.5s"});

    } 


  $(window).scroll(function() { 

    var $wh=$(window).height();
    var $xzq=$(window).scrollTop();
    var $zxc=$(minc).offset().top;


    if($zxc-$xzq<$wh){

     $(minc).find("."+xuanz).css({"transform":"rotateY(360deg)","transition":"all 1.5s"});

    }


 });

};







