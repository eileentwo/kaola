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
	//返回顶部
	$(function(){
	  $("#backTop").click(function() {
	      $("html,body").animate({scrollTop:0}, 1000);
	  }); 
	 })
})


//window.onload = function (){
//	var Ltitle = document.getElementById('funcTab-left-title');
//	var allUl =  document.getElementById('funcTab-left-ul');
//	
//	function Tover(){
//		allUl.style.display = 'block';
//	}
//	function Tout(){
//		allUl.style.display = 'none';
//	}
//	allUl.onmouseover = Ltitle.onmouseover =Tover;
//	allUl.onmouseout = Ltitle.onmouseout =Tout;
//	//轮播图部分
//	var oDiv = document.getElementById('banks-inner');
//	var oPrev = oDiv.getElementsByTagName('a')[0];
//	var oNext = oDiv.getElementsByTagName('a')[1];
//	var oImg = oDiv.getElementsByTagName('img')[0];
//	var oUl = oDiv.getElementsByTagName('ul')[0];
//	var aLi = oUl.getElementsByTagName('li');
//	
//	var arrUrl =['img/index-1/1bgo7pq2249_1920_402.jpg','img/index-1/1bgo42ot26_1920_401.jpg','img/index-1/1bgo43tfg19_1920_403.jpg',
//	'img/index-1/1bgo3h3qe28_1920_404.jpg','img/index-1/1bftp22gp37_1920_405.jpg','img/index-1/1bftp22gp37_1920_406.jpg'];
//
//	var num =0;
//	
//	for ( var i=0; i<arrUrl.length; i++){
//		oUl.innerHTML +='<li>' + i + '</li>';
//	}
//	
//	function fnTab(){
//		oImg.src = arrUrl[num];
//		for (var i=0; i<aLi.length; i++){
//			aLi[i].className = '';
//		}
//		aLi[num].className = 'hover';
//	}
//	fnTab();
//	
//	
//	function Tab(){
//		for (var i=0; i<aLi.length; i++){
//			aLi[i].className = '';
//		}
//		aLi[num].className = 'hover';
//	}
//	
//	for ( var i=0; i<aLi.length; i++){
//		aLi[i].index = i;
//		aLi[i].onmouseover = function (){
//			num = this.index;
//			fnTab();
//		};
//		
//	};
//	oNext.onclick = function(){
//		num++;
//		if( num==arrUrl.length){
//			num=0;
//		} 
//		fnTab();
//	}
//	oPrev.onclick = function(){
//		num--;
//		if( num==-1){
//			num=arrUrl.length-1;
//		} 
//		fnTab();
//	};
//	oDiv.onmouseover = function(){
//		oPrev.style.display = 'block';
//		oNext.style.display = 'block';
//	};
//	
//	oDiv.onmouseout = function(){
//		oPrev.style.display = 'none';
//		oNext.style.display = 'none';
//	};
//	
//	oPrev.onmouseover = function(){
//		this.style.backgroundPositionY = '-154px';
//	};
//	oPrev.onmouseout = function(){
//		this.style.backgroundPositionY = '-68px';
//	};
//	oNext.onmouseover = oPrev.onmouseover;
//	oNext.onmouseout = oPrev.onmouseout;
//	
//};


