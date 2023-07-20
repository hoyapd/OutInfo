$(document).ready(function() {
  $('body').removeClass('is-loading');
  // fullpage
  $('#fullpage').fullpage({         
    scrollingSpeed: 500,
    anchors:['oneTab', 'twoTab', 'threeTab', 'fourTab', 'fiveTab'],
    fixedElements: 'header, footer',
    scrollOverflow: true,
		scrollOverflowReset: true,
    lazyLoading: true,
    sectionsColor : [
      '#00264b',
      '#ffffff',
      '#f1f1f1',
      '#ffffff',
      '#ffffff',
    ],
    navigation: true,
    // scrollBar: true,
    onLeave: function(origin, destination, direction) {
      // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
      let logoColor = $('.section').eq(destination - 1).attr('data-logoColor');
      if(logoColor == 'blue'){
        $('.logo-text').each(function(){
          $(this).removeClass('text-white');
        })
        
        $('#fp-nav ul li a span').addClass('blue');
        $('.fp-slidesNav ul li a span').addClass('blue');
      }else{
        $('.logo-text').each(function(){
          $(this).removeClass('text-white');
          if(!$(this).hasClass('text-white')){
            $(this).addClass('text-white');
          }
        })
        
        if($('#fp-nav ul li a span').hasClass('blue')){
          $('#fp-nav ul li a span').removeClass('blue');
        }
        if($('.fp-slidesNav ul li a span').hasClass('blue')){
          $('.fp-slidesNav ul li a span').removeClass('blue');
        }
      }

      if(destination == 2){
        second_animation()
      }
      if(destination == 1){
        if($('header').hasClass('blur')){
          $('header').removeClass('blur');
        }
      }
      
      // $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
      //   event.preventDefault();
      //   event.stopPropagation();
      //   return false;
      // });
    },
    afterLoad: function(anchorLink, index) {      
      if(index != 1){
        if(!$('header').hasClass('blur')){
          $('header').addClass('blur');
        }
      }else if($('header').hasClass('blur')){
        $('header').removeClass('blur');
      }
    }
  });



  const swiper = new Swiper('.lciswiper', {
    parallax: true,
    loop: true,
    // autoHeight: true,
    
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    pagination: {
      el: ".swiper-custom-pagination",
      type: "fraction",
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
});


function second_animation(){
  // let windowWidth = $( window ).innerWidth();
  if(!$('.two-section').hasClass('animation-true')){
    $('#typeWithTop').addClass('start');
    $("#textAni").typed({
      strings: ["안녕하세요.<br/>LCI 대표 장원석 입니다."],
      typeSpeed: 50
    });
    setTimeout(function(){
      $('.opacity-action').each(function(){
        $(this).removeClass('opacity-0');
      })
    },2700);
    
  }
}

function copy_text(text){
  // 임시의 textarea 생성
  const area = document.createElement("textarea");
  // body 요소에 존재해야 복사가 진행됨
  document.body.appendChild(area);
  // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
  area.value = text;
  area.select();
  // 복사 후 textarea 지우기
  document.execCommand('copy');
  document.body.removeChild(area);
  alert('복사되었습니다.');
}