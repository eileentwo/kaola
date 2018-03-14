$(function(){
    //第一张显示
    $(".bankImg li").eq(0).show();
    
    $("#list li").mouseover(function() {
        $(this).addClass('cur').siblings().removeClass("cur");
        var index = $(this).index();
        i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
        $(".bankImg li").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    
    var i=0;
    var timer=setInterval(play,2000);
    
    var play=function(){
        i++;
        i = i > $(".bankImg li").length-1 ? 0 : i ;
        
        $("#list li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".bankImg li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    
    var playLeft=function(){
        i--;
        i = i < 0 ? $(".bankImg li").length-1 : i ;
        $("#list li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".bankImg li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    
    $("#banks-inner").hover(function() {
        clearInterval(timer);
    }, function() {
        timer=setInterval(play,2000);
    });
    
    $("#prev").click(function(){
        playLeft();
    })
    $("#next").click(function(){
        play();
    })
    $("#prev").mouseover(function(){
    	$(this).css('background-position','-626px -153px')
    })
    $("#next").mouseover(function(){
    	$(this).css('background-position','-670px -154px')
    })
    $("#prev").mouseout(function(){
    	$(this).css('background-position','-626px -68px')
    })
    $("#next").mouseout(function(){
    	$(this).css('background-position','-670px -68px')
    })
    $("#banks-inner").mouseover(function(){
    	$("#next").show();
    	$("#prev").show();
    })
    $("#banks-inner").mouseout(function(){
    	$("#next").hide();
    	$("#prev").hide();
    })
    
    
	//返回顶部
	$(function(){
	  $("#backTop").click(function() {
	      $("html,body").animate({scrollTop:0}, 1000);
	  }); 
	 })
	
    
    //两边导航
	var d = $('#rightAside').offset().top-50;
	$(document).on('scroll',function(){
		var c = $(document).scrollTop();
		if(d<=c){
			$('#rightAside').css('position','fixed');
			$('#contentAside').css('position','fixed');
		}else{
			$('#rightAside').css('position','absolute');
			$('#contentAside').css('position','absolute');
		}
	})
	
	
	//两边导航之左边侧边栏监听
	var _index=0;
    $("#contentAside .aside_left li").click(function(){
    	$(this).find('a').addClass('current').parent().siblings().find('a').removeClass('current');
    	_index = $(this).index() +1;
    	var _top = $("#content-item" +_index).offset().top;
    	$("body,html").animate({scrollTop:_top},500);
    });
    $(window).scroll(function () {
        var conitems = $("#content_items").find(".content-item");
        var contentAside = $("#contentAside");
        var top = $(document).scrollTop();
        var currentId = ""; //滚动条现在所在位置的item id
        conitems.each(function () {//遍历每层楼
            var m = $(this);
            var mTop =m.offset().top ;
            //注意：m.offset().top代表每一个item的顶部位置
            if (top > mTop-240) {//获取当前所在的楼层的ID赋值给currentId判断到了哪个 楼层
                currentId =  m.attr("id");
            } else {
                return false;
            }
        });
		var reg =/\d+/g;
        var curIndex = parseInt(currentId.match(reg));//给相应楼层的a设置current 取消其他链接的current
        if (curIndex) {//判断是否进入了楼层
        	var curA =$("#contentAside .aside_left li").find('a');
        	curA.eq(curIndex-1).addClass('current').parent().siblings().find('a').removeClass('current');
        }
        
    });
    

    
});


