// 得知螢幕height
var windowH = $(window).height()
console.log(windowH)
$("#homeLogo").height(windowH)
$("#weatherContainer").height(windowH-100)

var startPlay = 0
//判定是否已滑過一個螢幕高
$(window).scroll(function(event){
    if($(this).scrollTop() > windowH){
        console.log($(this).scrollTop())
        $("div#title_fixed").addClass('titleFixed')
    }
    else{
        $("div#title_fixed").removeClass('titleFixed')
    }
    if($(this).scrollTop()>1800 && startPlay == 0){
        console.log(0)
        startPlay = 1
        $("#video_play").attr("src","https://www.youtube.com/embed/2zSx_CGouy4?rel=0&autoplay=1")
    }
})
