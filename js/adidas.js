$(function(){
		var $oUl =$('#playimages').find('ul');
		var $aLi = $('#playimages').find('li');
		var $imgCon = $('#playimages').find('.con-fangDaIMg'),//正常图片容器
		    $Drag = $('#playimages').find('.magnifyingBegin'),//拖动滑动容器
		    $show = $('#playimages').find('.magnifyingShow'),//放大镜显示区域
		    $showIMg = $show.find('img');//放大镜图片
		var $oImg = $('#playimages').find('.img');
		
		var $aimg = $oUl.find('img');
		var $src = $aimg.attr('src');
		var $prev = $('#playimages').find('.prev');
		var $next = $('#playimages').find('.next');
		var $len = $aLi.length;
		var num=0;
		var $timer = null;
		var liW = $aLi.eq(0).outerWidth();
		var W =liW*$len;
		
		
		$oUl.css('width',W); 
		$oImg.attr('src',$src);
		$aimg.eq(0).attr('class','active');
		
		$aLi.mouseover(function(){
			var i =$(this).index();
			var src = $aimg.eq(i).attr('src');
			console.log(src)
			$oImg.attr('src',src);
			$aimg.attr('class','');
			$showIMg.attr('src',src);
			
			$aimg.eq(i).attr('class','active');
			
			num =i;
		});
		
		$next.mouseover(function(){
			$(this).addClass('active');
		})
		$next.mouseout(function(){
			$(this).removeClass('active');
		})
		$prev.mouseover(function(){
			$(this).addClass('active');
		})
		$prev.mouseout(function(){
			$(this).removeClass('active');
		})
		
		$next.click(function(){
			num++;
			if(num>$len-1){//顺序式轮播
				num=$len-1
			}
//					num=num%5;//循环式的轮播
			$aimg.attr('class','');
			$aimg.eq(num).attr('class','active');
			var src = $aimg.eq(num).attr('src');
			$oImg.attr('src',src);
			$showIMg.attr('src',src);
			$("#wrap").ulScroll();
		})
		$prev.click(function(){
			num--;
//					num=(num+5)%5;//循环式的轮播
			if(num==-1){
				num=0
			}
			$aimg.attr('class','');
			$aimg.eq(num).attr('class','active');
			var src = $aimg.eq(num).attr('src');
			$oImg.attr('src',src);
			$showIMg.attr('src',src);
			$("#wrap").ulScroll();
		})
		$.fn.ulScroll = function(){
			if(num<$len- 2){
				$oUl.animate({'marginLeft':(-liW+3 )*(num-2?0:(num-2)) });
			}
			if(num>=$len- 2){
				$oUl.animate({'marginLeft':(-liW+3 )*($len-4) });
			}
			
		}
		
		
	$.fn.magnifying = function(){
		var multiple = $show.width()/$Drag.width();
		
		$imgCon.mousemove(function(e){
			$Drag.css('display','block');
			$show.css('display','block');
		    //获取坐标
		   	var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
		   		iY = e.pageY - $(this).offset().top - $Drag.height()/2,	
		   		MaxX = $imgCon.width()-$Drag.width(),
		   		MaxY = $imgCon.height()-$Drag.height();

		   	iX = iX > 0 ? iX : 0;
		   	iX = iX < MaxX ? iX : MaxX;
		   	iY = iY > 0 ? iY : 0;
		   	iY = iY < MaxY ? iY : MaxY;	
		   	$Drag.css({left:iX+'px',top:iY+'px'});	   		
		   	$showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
		   	
		});
		$imgCon.mouseout(function(){
		   	$Drag.css('display','none');
			$show.css('display','none');
		});
	}
	$("#playimages").magnifying();
	
	
	//尺码部分
	$sli = $('#size').find('li');
	$sSpan = $('#size').find('span');
	$sli.mouseover(function(){
		$sli.css('border-color','#ccc');
		$sli.eq($(this).index()).css('border-color','red');
	})
	$sli.click(function(){
		$sli.eq($(this).index()).css('border-color','red');
		$sSpan.css('display','none');
		$sSpan.eq($(this).index()).css('display','inline-block');
	})
	//吸顶部分
	var b = $('#detailsNav').offset().top;
	$(document).on('scroll',function(){
		var c = $(document).scrollTop();
		if(b<=c){
			$('#detailsNav').css('position','fixed');
			$('#detailsNav').css('background-color','white');
			$('#detailsNav a').eq(3).css('display','block');
		}else{
			$('#detailsNav').css('position','absolute');
			$('#detailsNav').css('background-color','#F8F8F8');
			$('#detailsNav a').eq(3).css('display','none');
		}
	})
	$DNa = $('#detailsNav').find('.DRnav');
	$DNa.click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//数量加减
	var t = $("#text_box");
	//初始化数量为1,并失效减
	$('#min').attr('disabled',true);
	 //数量增加操作
	 $("#add").click(function(){ 
	  // 给获取的val加上绝对值，避免出现负数
		t.val(Math.abs(parseInt(t.val()))+1);
		if (parseInt(t.val())!=1){
			$('#min').attr('disabled',false);
		};
	 }) 
	 //数量减少操作
	 $("#min").click(function(){
		 t.val(Math.abs(parseInt(t.val()))-1);
		 if (parseInt(t.val())==1){
		 	$('#min').attr('disabled',true);
		 };
	 })
	$("#add").mouseover(function(){
		$(this).css('background-color','#eee');
		$("#min").css('background-color','#fff');
	})
	$("#min").mouseover(function(){
		$(this).css('background-color','#eee');
	})
	$("#add").mouseout(function(){
		$(this).css('background-color','#fff');
	})
	$("#min").mouseout(function(){
		$(this).css('background-color','#fff');
	})
	$("#min").css('background-color','#eee');
	
	
	//右边导航
	var d = $('#rightAside').offset().top-50;
	$(document).on('scroll',function(){
		var c = $(document).scrollTop();
		if(d<=c){
			$('#rightAside').css('position','fixed');
		}else{
			$('#rightAside').css('position','absolute');
		}
	})
	
	
})