$(document).ready(function () {
    //复选框
    let all = $("#all"),
        son = $(".sec_box_son_check");
    all.click(function () {
        if (all.is(":checked")){
            son.prop("checked",true).css("display","block");
            $(".sec_box_son_heart>img").css("display","none");
        }else{
            son.prop("checked",false).css("display","none");
            $(".sec_box_son_heart>img").css("display","block");
        }
    });
    son.click(function () {
        if (!($(".sec_box_son_check").is(":checked"))) {
            all.prop("checked", false);
            son.css("display","none");
            $(".sec_box_son_heart>img").css("display","block");
        }else{
            all.prop("checked", true);
        }
    });
    //左滑
    let expansion = null,
        li = $(".sec_box_son_sum");
    let x, y, X, Y, swipeX, swipeY;
    for (let i = 0;i < li.length;i++){
        li[i].addEventListener('touchstart',function (event) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
            swipeX = true;
            swipeY = true;
            if (expansion){
                expansion.className = "sec_box_son_sum";
                // $(this).children().eq(1).children().eq(1).css("display","block");
            }
        });
        li[i].addEventListener('touchmove', function(event){
            // $(".sec_box_son_heart").css("display","block");
            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY;

            if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
                event.stopPropagation();
                if (X - x > 10){
                    event.preventDefault();
                    this.className = "sec_box_son_sum";
                }
                if (x - X > 10){
                    event.preventDefault();
                    this.className = "sec_box_son_sum swiperleft";
                    // $(this).children().eq(1).children().eq(1).css("display","none");
                    expansion = this;
                }
                swipeY = false;
            }
            if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                swipeX = false;
            }
        });
    }
    //删除
    $(".sec_box_son_del").click(function () {
        $(this).parent().parent().remove();
    });
    //复选框删除
    $(".foot_right").click(function () {
        son.each(function () {
            if ($(this).prop("checked")){
                $(this).parent().parent().parent().parent().remove();
            }
            all.prop("checked",false);
        });
    })
});