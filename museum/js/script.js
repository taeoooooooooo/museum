$(function(){
    // 변수에 담기
    let oneDepth = $('#header .gnb > li'), 
        twoDepth = oneDepth.children('.twoD'), 
        thrBtn = twoDepth.find('.thrBt'), 
        gnbBg = $('#header .gnbBg'),
        leftArea = $('#header .leftArea');

    // oneDepth에 마우스가 올라가면
    oneDepth.mouseenter(function(){
        $(this).addClass('on');
        twoDepth.show();
        gnbBg.show();
        leftArea.show();
        console.log('마우스엔터')
    })/* 마우스올라가면 끝 */

    // oneDepth에 마우스가 떠나가면 
    oneDepth.mouseleave(function(){
        $(this).removeClass('on');
        twoDepth.hide();
        gnbBg.hide();
        leftArea.hide();
        console.log('마우스떠남')
    })/* 마우스떠나가면 끝 */

    
    let orgH = gnbBg.height(),
        longH = gnbBg.height() + 70;

    thrBtn.click(function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $(this).next('.thrD').hide();
            gnbBg.css( 'height' , orgH );
        }else{
            $(this).addClass('on');
            $(this).next('.thrD').show();
            gnbBg.css( 'height' , longH );  
        }
    })/* thrBtn 끝 */

    let openBt = $('.mHeader .menuBtn'),
        mMArea = $('.mMenuArea'),
        closeBt = mMArea.find('.closeBt'),
        oneD = $('.gnbArea').children('.oneD'),
        twoD = $('.gnbArea').children('.twoD'),
        thrBt = twoD.children('.thrBt'),
        thrD = twoD.children('.thrD');

    openBt.click(function(){
        mMArea.animate({'left' : '0'},600);
    })

    closeBt.click(function(){
        mMArea.animate({'left' : '-100%'},600);
    })

    oneD.click(function(){
        twoD.slideUp();
        oneD.removeClass('on')
        // 클릭한 oneD 자기자신 this의 다음요소인 twoD가 보인다 :visible / 안보인다 :hidden 
        // 에 일치하느냐?? is()
        // :visible을 ! 부정을 했기때문에 안보인다면 이 되는겁니다.
        if( !$(this).next('.twoD').is(':visible') ){
            $(this).next('.twoD').slideDown();
            $(this).addClass('on');
        }
    });/* oneD 끝 */

    thrBt.click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('on');
    })/* thrBt 끝 */

    // 전시영역 배경이미지 교체
    let mainCon1LI = $('.mainCon1List > li'),
        mainCon1Bg = $('.mainCon1Bg > div');

    console.log(mainCon1LI);
    console.log(mainCon1Bg);

    mainCon1LI.each(function( idx ){
        //$(this).mouseenter(function(){});
        //$(this).mouseleave(function(){});

        $(this).hover(function(){
            mainCon1Bg.eq(idx).stop().fadeIn(600);
        } , function(){
            mainCon1Bg.eq(idx).stop().fadeOut(300);
        })
    })/* 전시영역 배경이미지 교체 끝 */

    // top버튼
    let topBtn = $('.topBtn');
    topBtn.click(function(){
        $('html').animate({'scrollTop' : '0'}, 800, 'easeInOutExpo')
    })/* top버튼 끝 */

    // 윈도우 스크롤되면 애니메이션
    $(window).scroll(function(){
        let winScrollT = $(window).scrollTop(), // 윈도우 스크롤된 정도
            mCon1T = $('.mainCon1').offset().top, // 수직 위치값
            mCon2T = $('.mainCon2').offset().top,
            mCon3T = $('.mainCon3').offset().top,
            footT = $('#footer').offset().top;
        
        console.log( "윈도우 스크롤 양 " + winScrollT)
        console.log( "mainCon1의 수직 위치값 " + mCon1T)
        console.log( "mainCon2의 수직 위치값 " + mCon2T)
        console.log( "mainCon3의 수직 위치값 " + mCon3T)
        console.log( "footer의 수직 위치값 " + footT)

        console.log( "윈도우 스크롤 양이 mainCon1 수직 위치값 보다 크거나 같은가?")
        console.log( winScrollT >= mCon1T )

        console.log( "윈도우 스크롤 양이 mainCon2 수직 위치값 보다 작거나 같은가?")
        console.log( winScrollT <= mCon2T )

        // 윈도우 스크롤 양이 mainCon1 수직 위치값 보다 크거나 같은가?
        // 또는 || 그리고 &&
        // 윈도우 스크롤 양이 mainCon2 수직 위치값 보다 작거나 같은가?
        // mainCon1 위치가 시작되고 mainCon2 위치 값 이전 까지만

        if( winScrollT >= mCon1T &&  winScrollT <= mCon2T ){
            // mCon1T 애니메이션
            $('.mainCon1 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon1 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon1 .mainCon1List').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
        }else if( winScrollT >= mCon2T &&  winScrollT <= mCon3T){
            // mCon2T 애니메이션
            $('.mainCon2 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon2 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon2 .mainCon2List').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
        }else if(winScrollT >= mCon3T &&  winScrollT <= footT){
            // mCon3T 애니메이션
            $('.mainCon3 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon3 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon3 .mainNews').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
        }

        // 윈도우 스크롤 되면 헤더 고정시키기

        if( winScrollT > 100 ){
            $('#header').css('position' , 'fixed');
            $('#header').addClass('on');
        }else{
            $('#header').css('position' , 'relative');
            $('#header').removeClass('on');
        }

    })/* 윈도우 스크롤 끝 */

    // swiper 설정
    var swiper = new Swiper(".mainSlide", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

})/* ready 끝 */