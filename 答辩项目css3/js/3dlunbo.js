$(function(){
    $("#banner .banner .subBox").each(function(index){
        // this是原生js的对象d
        // $(this):jquery对象
        $(this).css({"left":256*index+"px","transitionDelay":index*0.2+"s"});
        $(this).find(".sub").css("backgroundPosition",-256*index+"px");
    })
    var num = 0;
    var timer = setInterval(moveFn,3000);
    // 左右样式
    $(".prev").click(function(){
        $('.subBox').css("transform","rotateX("+(--num*-90)+"deg)");
    })
    $(".next").click(function(){
        $('.subBox').css("transform","rotateX("+(++num*-90)+"deg)");
    })
    $(".banner").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(moveFn(),3000);
    });
    function moveFn(){
        $('.subBox').css("transform","rotateX("+(++num*-90)+"deg)") 
    }
})