
 var jdClose=document.getElementById("jd_close");
 var topBanner=document.getElementById("top_banner");
jdClose.onclick=function () {
    topBanner.style.display="none";
}

var arr=document.getElementById("arr");
var slide=document.getElementById("slide");
slide.onmouseover=function () {
    arr.style.display="block";
}
slide.onmouseout=function () {
     arr.style.display="none";
 }

function MouseOver( li,image) {
    var pic=document.getElementById("pic");
    pic.src=image;
    $(li).addClass("current").siblings().removeClass("current");
}

function OnFocus(txt) {
     var txt1=document.getElementById(txt);
     if(txt1.value=="图书开抢")
     {
         txt1.value=" ";
         txt1.style.color="black";
     }
 }
 function OnBlur(txt) {
     var txt1=document.getElementById(txt);
     if(txt1.value==" ")
     {
         txt1.value="图书开抢";
         txt1.style.color="#ccc";
     }
 }

var login=document.getElementById("login");
var mask=document.getElementById("mask");
var box=document.getElementById("box");
var close_all=document.getElementById("close_all");
login.onclick=function () {
    mask.style.display="block";
    box.style.display="block";
}
close_all.onclick=function () {
    mask.style.display="none";
    box.style.display="none";
}

 var lis=document.getElementById("iconsprite").getElementsByTagName("i");
 for(var i=0;i<lis.length;i++)
 {
     lis[i].style.backgroundPosition="0 "+i*(-25)+"px";
     lis[i].onmouseenter=function () {
         for(var i=0;i<lis.length;i++){
             lis[i].style.backgroundPosition="0 "+i*(-25)+"px";
         }
         this.style.backgroundPositionX="-25px";
     }
 }

