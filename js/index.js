
$(document).ready(function() {
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    loop: true
  });
  // override the onepage-scroll transformPage function
  var oTransformPage = $.fn.transformPage;
  var pages = ['home', 'about', 'portfolio', 'contact'];
  $.fn.transformPage = function(){
    var pref = pages[arguments[2]-1]+"_btn";
    $('li').removeClass('active');
    $('#'+pref).parent().addClass('active');
    oTransformPage.apply( this, arguments);
  };

  // menu button navigation
  $('nav li a').click(function(e) {
    var ndx = pages.indexOf(e.target.id.slice( 0, -4)) + 1;
    console.log( "nav click page base:", ndx);
    $.fn.moveTo(ndx);
  });
});