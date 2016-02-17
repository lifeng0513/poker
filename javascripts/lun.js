$(function(){
//ÂÖ²¥
    var num=0;
    var t=setInterval(move,4000);
    function move(){
        num++;
        if(num==$(".box .list").length-1){
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            })
            num=0;
        }else{
            $(".box").animate({marginLeft:-num*100+"%"})
        }

        $('.btn li').css({background:"#888",border:"none"});
        $('.btn li').eq(num).css({background:"#fff",border:"1px solid #08c",width:"13px" ,height:"13px"});

    }



});