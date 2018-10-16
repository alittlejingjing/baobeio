// var oLeft=document.getElementById("left");
// var oRight=document.getElementById("right");
// var oList1=document.getElementById("list1");
// var oList2=document.getElementById("list2");
// console.log("oLeft")
// oLeft.onclick=function(){
//     oList1.style.display="block";
//     oList2.style.display="none";
//     console.log(1)
// }
// oRight.onclick=function(){
//     oList2.style.display="block";
//     oList1.style.display="none";
// }
$(".left1").click(function(){
    $("#list1").css({
        display:"block"
    })
    $(".warp6-2-top button").removeClass("active");
    $(this).addClass("active");
    $("#list2").css({
        display:"none"
    })

})
$(".right1").click(function(){
    $("#list2").css({
        display:"block"
    })
    $(".warp6-2-top button").removeClass("active");
    $(this).addClass("active");
    $("#list1").css({
        display:"none"
    })
})