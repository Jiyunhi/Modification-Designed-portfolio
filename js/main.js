/*Loading page에서 문자들이 하나씩 사라지며 마지막 문자가 사라지면 
Loadingpage가 사라지면서 첫번째 화면이 나온다.*/
gsap.to('#loading strong',{left:'-20%',delay:1,duration: 4});
gsap.to('#loading strong .text0',{opacity:0,delay:1.4});
gsap.to('#loading strong .text1',{opacity:0,delay:1.8});
gsap.to('#loading strong .text2',{opacity:0,delay:2.2});
gsap.to('#loading strong .text3',{opacity:0,delay:2.6});
gsap.to('#loading strong .text4',{opacity:0,delay:3.0});
gsap.to('#loading',{opacity:0,delay:3.6});
gsap.to('#loading',{left:'-100%',delay:4.0});
    

/*클릭하는 페이지마다 header gnb 색이 바뀌게 설정*/
$("#header #menu li").click( function(){
    var da = $(this).attr("data-anchor");
       $(".fp-viewing-"+da+" #header #menu li").addClass("active").siblings("li").removeClass("active");
});

/*section3의 Possibility 페이지가 나오면 polygon에 on 클래스를 추가하고 pos가 하나씩 나타나게 만든다..*/
$(window).on('hashchange',function(){
    var hashtagname=location.hash;
    if(hashtagname=="#4thPage"){
        $('#section3 .wrap .polygon').addClass('on');
        gsap.to('#section3 .wrap .pos .article1',{opacity:1, delay:0.4});
        gsap.to('#section3 .wrap .pos .article2',{opacity:1, delay:1.2});
        gsap.to('#section3 .wrap .pos .article3',{opacity:1, delay:2});
    }else{
        $('#section3 .wrap .polygon').removeClass('on');
        gsap.to('#section3 .wrap .pos .article1',{opacity:0});
        gsap.to('#section3 .wrap .pos .article2',{opacity:0});
        gsap.to('#section3 .wrap .pos .article3',{opacity:0});
    }
});
