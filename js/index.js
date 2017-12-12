$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})
$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
	
    // 首页--tab切换
    var n = 0;
    $('.tabbtn li').click(function(){
        var index = $(this).index();
        n = index;
        tab();
    })
    function tab(){
        $('.tabbtn li').eq(n).css('color','#fff').siblings().css('color','#747474');
        $('.tabbtn li').eq(n).css('background','#4ecac6').siblings().css('background','#efefef');
        $('.tabbtn li').eq(n).css('border','2px solid #4ecac6').siblings().css('border','2px solid #d9d9d9');
        $('.wrap_box .sublist').eq(n).css('display','block').siblings().css('display','none');
    }

    // 首页-tab按钮--楼层切换
    $('.axtive').click(function(){
        var t = $('.dian').offset().top;
        $('body,html').animate({"scrollTop":t},500);
    })


    // 首页-第一个轮播图
	var swiper = new Swiper('.tabb .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: 2500,
        observer:true,
        observeParents:true,
        autoplayDisableOnInteraction: false,
        loop: true
    });

    
    // 首页--第二个轮播图
    var swiper = new Swiper('.carl-wrap .swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        onSlideChangeEnd:function(swiper){
            var index = swiper.activeIndex;
            var href = $('#banner2-sixe .swiper-slide').eq(index).find('a').attr('href');
            $('.btn-title a').attr('href', href);
            // console.log(href)
        }
    });


    // 首页--第三个轮播图
	var swiper = new Swiper('.carousel .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    

    // var swiper = new Swiper('.car-wrap .swiper-container', {
    //     scrollbar: '.swiper-scrollbar',
    //     scrollbarHide: true,
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     grabCursor: true
    // });


    
    // PO文  ---上传页  轮播图
    var swiper = new Swiper('.car3-wrap .swiper-container', {
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });

   

    // 首页--轮播视频
    $('.carousel #video').click(function(){
        $('.colse-wrap').fadeIn(100);
        $('.mask').fadeIn(100).css({
            background: 'rgba(0,0,0,0.5)',
            zIndex:15
        });
    })
    $(".video-wrap video").click(function(){
        $("video").trigger('play');
    })
    $('#colse').click(function(){
        $('.colse-wrap').fadeOut(100);
        $("video").trigger("pause");
        $('.mask').fadeOut(100);
    });
    
    // 首页--详情
    $('#openBtn').click(function(){
    	$('.info').fadeIn(100);
    	$('.mask').fadeIn(100);
    })
    $('.mask').click(function(){
    	$('.info').fadeOut(100);
    	$('.mask').fadeOut(100);
    })
    

    // tab显示消失
    // $(window).scroll(function () {
    //     var a = $(".taba").offset().top;
    //     if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
    //         $('.tabbtn').css("display","block");
    //     }
    //     else{
    //         $('.tabbtn').css("display","none");
    //     }
    // });


    //页面里浏览器顶部的距离
    // var $down = $('#bo');//箭头
    // var $window = $(window);//页面浏览器
    // var $document = $(document);//页面文档

    // $('#bo').click(function(){
    //     var t = $(window).scrollTop();
    //     $('body,html').animate({'scrollTop':t + 700},1000)
    //     $window.scroll(function(){
    //         if ($document.scrollTop() + $window.height() >= $document.height()){
    //             $('#bo').css("display","none");
    //             $('#boo').css("display","block");
    //         }
    //         else {
    //             $('#bo').css("display","block");
    //         }
    //     });
    // })

    // $('#boo').click(function(){
    //     $('body,html').animate({'scrollTop':0},1000)
    //     $window.scroll(function(){
    //         if ($document.scrollTop() + $window.height() <= $document.height()){
    //             $('#boo').css("display","none");
    //             // $('#bo').css("display","block");
    //         }
    //         // else {
    //      //         $('#bo').css("display","block");
    //      //     }
    //     });
    // })



    // 点赞次数
    let dzan = 0;
    $('.zan').click(function(){
        const src = "img/a2.png";
        $(this).find('img').attr('src',src);
        dzan++;
        console.log(dzan);
    })



    // 分享页--评论
    $('.pin img').click(function(){
        $('.commentAll').toggle();
    })
    

})

