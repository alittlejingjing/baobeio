var aItem=document.querySelectorAll("#wrap1 li")
    var aSpan=document.querySelectorAll("#btnlist span")
    var oLeft=document.getElementById("left")
    var oRight=document.getElementById("right")
    var oWrap=document.getElementById("wrap1")

    var nowIndex=0;
    oRight.onclick=function(){
        if(nowIndex==aItem.length-1){
            nowIndex=0;
        }else{
            nowIndex++;
        }
        animate();
    }

    oLeft.onclick=function(){
        if(nowIndex==0){
            nowIndex=aItem.length-1;
        }else{
            nowIndex--;
        }
        animate();
    }
       
    for(let i=0; i<aSpan.length;i++){
        aSpan[i].onmouseover=function(){
            nowIndex=i;
            animate();
        }
    }
   
   //动画效果
    function animate(){
        for(var i=0;i<aItem.length;i++){
                aItem[i].className="";
                aSpan[i].className="";
            }
            aItem[nowIndex].className="active";
            aSpan[nowIndex].className="active";
        }

    
    oWrap.onmouseenter=function(){
        clearInterval(autoPlayTimer)
    }
    oWrap.onmouseleave=function(){
        clearInterval(autoPlayTimer)
        autoPlayTimer=setInterval(oRight.onclick,2000)
    }
    var autoPlayTimer=setInterval(oRight.onclick,2000)
