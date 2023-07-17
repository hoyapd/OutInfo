/**
 * var myFullpage = new fullpage('#fullpage', {
  // Navigation
  lockAnchors: false,
  navigation: true,
  navigationPosition: 'right',
  // navigationTooltips: ['firstSlide','secondSlide','thirdSlide','fourthSlide'],
  showActiveTooltip: false,
  slidesNavPosition: 'bottom',

  // Scrolling
  fitToSectionDelay: 600,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',

  // Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  // Design
  fixedElements: '#header',

  // Custom selectors
  sectionSelector: '.section',
  // slideSelector: '.slide',

  lazyLoading: true,

  // Events
  beforeLeave: function(origin, destination, direction, trigger){},
  onLeave: function(origin, destination, direction, trigger){},
  afterLoad: function(origin, destination, direction, trigger){},
  afterRender: function(){},
  afterResize: function(width, height){},
  afterReBuild: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction, trigger){},
  onSlideLeave: function(section, origin, destination, direction, trigger){},
  onScrollOverflow: function(section, slide, position, direction){}
});
 */


$(document).ready(function() {
  // fullpage
  $('#fullpage').fullpage({         
    scrollingSpeed: 500,
    anchors:['oneTab', 'twoTab', 'threeTab', 'fourTab', 'fiveTab'],
    fixedElements: 'header, footer',
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
      // $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
      //   event.preventDefault();
      //   event.stopPropagation();
      //   return false;
      // });
    },
    // afterLoad: function(anchorLink, index) {      
    //   // 전환이 끝난후 이벤트풀기                               
    //   $('#fullpage').off('scroll mousewheel');      
    //   if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); // 모바일분기
    //   if(swiper) swiper.mousewheel.enable();    
    //   if(!$(".sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
    // }
  });
  
  let windowHeight = $( window ).innerHeight();
  let twoSectionHeight = $('#firstTextBox div').height() 
  + $('#secondTextBox div').height() 
  + $('#thirdTextBox div').height() 
  + $('#fourTextBoxforHeight').height() + 150;
  $('.two-section').css('min-height',windowHeight);
  $('.two-section').css('height',twoSectionHeight);

});


function second_animation(){
  if(!$('.two-section').hasClass('animation-true')){
    $("#textAni").typed({
      strings: ["안녕하세요.<br/>LCI 대표 장원석 입니다."],
      typeSpeed: 50
    });
    setTimeout(function(){
      var firstHeight = $('#firstTextBox div').height();
      $('#firstTextBox').css('height',firstHeight);
    },2400);
    setTimeout(function(){
      var secondHeight = $('#secondTextBox div').height();
      $('#secondTextBox').css('height',secondHeight);
    },3100);
    setTimeout(function(){
      var thirdHeight = $('#thirdTextBox div').height();
      $('#thirdTextBox').css('height',thirdHeight);
    },3800);
    setTimeout(function(){
      var fourHeight = $('#fourTextBoxforHeight').height();
      $('#fourTextBox').animate({height:fourHeight,opacity:1},400,'linear');
    },4500);
    setTimeout(function(){
      $('.square-icon-box').removeClass('d-none');
      $('.square-icon-box').animate({opacity:1},400,'linear');
    },4900);
    // $('.two-section').addClass('animation-true');
  }
}
