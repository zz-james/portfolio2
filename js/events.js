"use strict"

/*
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0];
    $('#out').val("Touch x:" + touch.pageX + ", y:" + touch.pageY);
  //  console.log("Touch x:" + touch.pageX + ", y:" + touch.pageY);
}, false);
*/

var $nav, overlay, loadingAnim, maxScroll, speed = 3, $pageScroller, scrollPos = 0;
 
 
$(function(){
    $pageScroller = $('.application');  // cache pointer to horizontal scroller early
    $nav = $("nav");  // cache pointer to nav early
    overlay = document.getElementById('overlay'); // don't need jQuery
    loadingAnim = document.getElementById('loadingAnim'); 
    //$(".application").scroll(doScroll); // on scroll event setter
    $('#readmore').click(toggleSlider);
    $(".panel-button-link").click(scrollToAnchor);  // ??think about maybe publishing event here??
    $('#nav-tab').click(toggleSlider);
    $('.overlay-link').click(function(e){manageOverlay(e.delegateTarget.hash.substr(1))});
    $('#overlay-close-button').click(function(e){toggleOverlay()});
    $(window).hashchange(thehashchanged)
});

/**
 * this is used to manage the back/forward buttons
 */
function thehashchanged() {
	if(overlay.style.display == "block") { /*must have hit back on a single post page */ toggleOverlay(); }
}

/**
 * this method is for making the nav slide up and down
 * @param e
 */
function toggleSlider() {
    if($nav.hasClass('nav-open')) {
        $nav.removeClass('nav-open');
    } else {
        $nav.addClass('nav-open');
    }
    return false;
}

/**
 * manage overlay open and load
 */
function manageOverlay(postId) {
	$('#overlay-container').scrollTop(0);
	$.getJSON( "http://catplusplus.org.uk/wp_api/v1/posts/"+postId, function( data ) {
			$('#overlay-container').html(
	        	buildPost(data.title, data.content_display)
			);
			toggleOverlay();
			$('#overlay-container').scrollTop(0);
			toggleLoadingAnimation();
        });
    toggleLoadingAnimation();
}
 
/**
 * this method shows/hides the loading animation
 */
function toggleLoadingAnimation() {

	if(loadingAnim.style.display == "none"){
		loadingAnim.style.display = "block";
	}else{
		loadingAnim.style.display = "none";
   	}
	return false;
}

/**
 * this method shows/hides the pop up overlay
 * which contains a single post item
 */
function toggleOverlay() {
    if($nav.hasClass('nav-open')) {
        $nav.removeClass('nav-open'); // shut nav if open
    }
	if(overlay.style.display == "none"){
		overlay.style.display = "block";
	}else{
		overlay.style.display = "none";
   	}
	return false;
}

/**
 * this method animates the horiztontal scrolling between columns
 * the magic 55 is the width of the application box left offset
 * @param e is the event from the nav button click
 */
function scrollToAnchor(e){
    toggleSlider();
    var hash = e.currentTarget.hash;
    var aTag = $(hash);
    // flash col incase already on screen
    $(hash+' > *').animate({backgroundColor: '#f00'}).animate({backgroundColor: '#fff'})
    if(!aTag.offset()){return;}
    scrollPos += aTag.offset().left;
    $pageScroller.animate({scrollLeft: scrollPos},'slow',function() {
        // I know this looks weird but the animation doesn't work and needs correcting!
        // try it by putting the -55 in the first animation and you will see!!
        scrollPos += aTag.offset().left;
        $pageScroller.animate({scrollLeft: scrollPos+4},'slow');
        scrollPos = $pageScroller.scrollLeft();
    });
    return false;
}

/**
 * builds post for single post page
 */
function buildPost(title, body) {
    var htmlstring = '<h1>'+title+'</h1>';
    //htmlstring += '<div style="text-align:center"><img class="thumb" src="'+image+'" /></div>';
    htmlstring += '<div>'+body+'</div>';
    return htmlstring;
}

/*
 Color animation 1.6.0
 http://www.bitstorm.org/jquery/color-animation/
 Copyright 2011, 2013 Edwin Martin <edwin@bitstorm.org>
 Released under the MIT and GPL licenses.
*/
(function(d){function h(a,b,e){var c="rgb"+(d.support.rgba?"a":"")+"("+parseInt(a[0]+e*(b[0]-a[0]),10)+","+parseInt(a[1]+e*(b[1]-a[1]),10)+","+parseInt(a[2]+e*(b[2]-a[2]),10);d.support.rgba&&(c+=","+(a&&b?parseFloat(a[3]+e*(b[3]-a[3])):1));return c+")"}function f(a){var b;return(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1]:(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))?[17*parseInt(b[1],16),17*parseInt(b[2],
16),17*parseInt(b[3],16),1]:(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?[parseInt(b[1]),parseInt(b[2]),parseInt(b[3]),1]:(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))?[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])]:l[a]}d.extend(!0,d,{support:{rgba:function(){var a=d("script:first"),b=a.css("color"),e=!1;if(/^rgba/.test(b))e=!0;else try{e=b!=a.css("color","rgba(0, 0, 0, 0.5)").css("color"),
a.css("color",b)}catch(c){}return e}()}});var k="color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" ");d.each(k,function(a,b){d.Tween.propHooks[b]={get:function(a){return d(a.elem).css(b)},set:function(a){var c=a.elem.style,g=f(d(a.elem).css(b)),m=f(a.end);a.run=function(a){c[b]=h(g,m,a)}}}});d.Tween.propHooks.borderColor={set:function(a){var b=a.elem.style,e=[],c=k.slice(2,6);d.each(c,function(b,c){e[c]=f(d(a.elem).css(c))});var g=f(a.end);
a.run=function(a){d.each(c,function(d,c){b[c]=h(e[c],g,a)})}}};var l={aqua:[0,255,255,1],azure:[240,255,255,1],beige:[245,245,220,1],black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgrey:[169,169,169,1],darkgreen:[0,100,0,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkviolet:[148,0,211,1],fuchsia:[255,
0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lightblue:[173,216,230,1],lightcyan:[224,255,255,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,
0,1],transparent:[255,255,255,0]}})(jQuery);

/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
