$("#btn1").click(function(){
    $("#warp2-bottom1").css({
        display:"block"
    })
    $("#warp2-bottom2").css({
        display:"none"
    })
    $("#warp2-bottom3").css({
        display:"none"
    })
    $(".warp2-top div").removeClass("active");
    $(this).addClass("active");
})
$("#btn2").click(function(){
    $("#warp2-bottom2").css({
        display:"block"
    })
    $("#warp2-bottom1").css({
        display:"none"
    })
    $("#warp2-bottom3").css({
        display:"none"
    })
    $(".warp2-top div").removeClass("active");
    $(this).addClass("active");
})
$("#btn3").click(function(){
    $("#warp2-bottom3").css({
        display:"block"
    })
    $("#warp2-bottom2").css({
        display:"none"
    })
    $("#warp2-bottom1").css({
        display:"none"
    })
    $(".warp2-top div").removeClass("active");
    $(this).addClass("active");
})

