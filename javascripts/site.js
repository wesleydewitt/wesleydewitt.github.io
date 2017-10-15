(function ($) {
	"use strict"
	
  function resizeArticleHeadImageInitial () {
    var articleHead  = $('.article_cover'),
        windowHeight = $(window).height(),
        imgHeight    = (windowHeight*100/100);

    $(articleHead).css({
      'height' : imgHeight + 'px'
    });
  }

  function articlePageScrollToBody () {
    var downArrow = $('.arrow svg');

    downArrow.on('click', function(){
      $('html, body').animate({
        scrollTop: $(".article_body").offset().top
      }, 666/3)
    });
  }

  $(document).ready(function () {
  	$(window).scroll(function () {

  	}).trigger('scroll');

    articlePageScrollToBody();
    resizeArticleHeadImageInitial();

  });

  /*$(window).on('load', function () {
    $(window).on('resize', function () {

    }).trigger('resize');

  });*/

})(jQuery);