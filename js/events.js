"use strict"

/*
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0];
    $('#out').val("Touch x:" + touch.pageX + ", y:" + touch.pageY);
  //  console.log("Touch x:" + touch.pageX + ", y:" + touch.pageY);
}, false);
*/

var nav, speed = 3, $pageScroller, scrollPos = 0;


$(function(){
    $pageScroller = $('.application');  // cache pointer to horizontal scroller early
    nav = document.getElementById("nav");  // cache pointer to nav early
    $(".column-content").scroll(doScroll); // on scroll event setter
    $(".buttonbar-button").click(scrollToAnchor);  // ??think about maybe publishing event here??
    resetMenu();
});

/**
 * this method is for the parallax moving color strip
 * which moves when a column is vertically scrolled
 * @param e
 */
function doScroll(e) {
    var yPos = -(e.currentTarget.scrollTop * speed) % 256;
    var _style = 'background-position: 42px '+(yPos)+'px;';
    nav.setAttribute("style", _style);
}

function resetMenu() {
    $('.icon').removeClass("button-highlight");
    window.location.hash ? $('#button-'+window.location.hash.substring(1)).addClass('button-highlight') : $('#button-home').addClass('button-highlight')
}

/**
 * this method animates the horiztontal scrolling between columns
 * the magic 55 is the width of the application box left offset
 * @param e is the event from the nav button click
 */
function scrollToAnchor(e){
    var aTag = $(e.currentTarget.hash);
    if(!aTag.offset()){return;}
    scrollPos += aTag.offset().left;
    $pageScroller.animate({scrollLeft: scrollPos},'slow',function() {
        // I know this looks weird but the animation doesn't work and needs correcting!
        // try it by putting the -55 in the first animation and you will see!!
        scrollPos += aTag.offset().left;
        $pageScroller.animate({scrollLeft: scrollPos - 50},'slow');
    });
    return false;
}




