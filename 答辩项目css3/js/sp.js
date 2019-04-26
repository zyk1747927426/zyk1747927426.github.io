$(function(){
	// 创建100个div
    var str="";
    var date1 = new Date();
    for(var i=0;i<100;i++){
        str+="<div class='d'></div>";
    }
    // 把创建好的div放进body里
    $("#splunbo").html(str);
    var date2 = new Date();
    // 看效率
    console.log(date2 - date1);
    // 遍历div加css样式 背景图定位
    $(".d").each(function(index){
        $(this).css({   
            "backgroundPosition":-index%10*20 + "px "+ (-parseInt(index/10)*30) + "px",
            // "border":"1px solid red"
        })
        // 延迟
        .delay(index*100)
        // 动画
        .animate({
            "left":index%10*56,"top":parseInt(index/10)*30
        },2000)
    });
})