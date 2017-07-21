var pizzaParty = {};

var md = new MobileDetect(window.navigator.userAgent);
var isMobile = md.mobile();
var isPhone = md.phone();
var isTablet = md.tablet();

window.onbeforeunload = function () {
    return window.scrollTo(0, 0);

    var i = 0; //initialize
    var int=0; //Internet Explorer Fix
    $(window).bind("load", function() { //The load event will only fire if the entire page or document is fully loaded
    	var int = setInterval("doThis(i)",500); //500 is the fade in speed in milliseconds
    });

    function doThis() {
    	var imgs = $('.post-thumbnail-title img').length; //count the number of images on the page
    	if (i >= imgs) { //Loop the images
    		clearInterval(int); //When it reaches the last image the loop ends
    	}
    	TweenMax.to($('img:hidden').eq(0), 0.3, {autoAlpha:1, display:'block', ease:Linear.easeOut});
    	// $('img:hidden').eq(0).fadeIn(500); //fades in the hidden images one by one
    	i++; //add 1 to the count
    }
}

window.onload=function() {
	
	TweenMax.set($('.main'), {autoAlpha:0});
	TweenMax.set($('body'), {position:'fixed'});
	// var a = document.getElementById("loader-logo");
	// var svgDoc = a.contentDocument;
	// var svgItem = svgDoc.getElementById("Layer_1");
	// var myGroups = svgItem.getElementsByTagName("path");

	// var svg = myGroups[0];
		var loadPage = $('#loader');
			loadIcon = $('.load');
			// loadLogo = $('#loader-logo');
	  // loadPage.show();
	  // loadIcon.delay(5000).fadeOut(500);

	  loadPage.delay(2000).fadeOut(1000);

	  var timeline = new TimelineLite();
	  timeline.add([
	  	TweenMax.to(loadIcon, 2, {autoAlpha:1, display:'block', onComplete: function(){
	  		
	  		TweenMax.set($('.main'), {autoAlpha:1});
	  		TweenMax.set($('body'), {position:'absolute'});

	  	}})
	  ]);  
};

pizzaParty.isInView = function(elem){
   return $(elem).offset().top - $(window).scrollTop() -  ($('header').height()/2) < $(elem).scrollTop();
}

pizzaParty.themeDark = function(elem){
   return $(elem).offset().top - $(window).scrollTop() < $(elem).scrollTop();
}

pizzaParty.colorChange = function() {
	var footerTop = $('#footer').offset().top;
	var y  = window.pageYOffset || document.documentElement.scrollTo
	  	  menuItem = $('ul.menu li a');
	  	  navLogo = $('.logo-nav');
	  	  navLogoDark = $('.logo-nav-dark');
	  	  hamburger = $('.hamburger').find('span');
	$('section').each(function (index, value) {
		if(pizzaParty.isInView(value) && $(value).hasClass('theme-dark')) {
  	  		if (isMobile) {
				TweenMax.to(hamburger, 0.2, {backgroundColor: '#8a2012', ease:Linear.easeOut});
      	  		navLogo.css({display: 'none'});
      	  		navLogoDark.css({display: 'none'});
  	  		} else {
				TweenMax.to(menuItem, 0.2, {color: '#8a2012', ease:Linear.easeOut});
      	  		navLogo.css({display: 'none'});
      	  		navLogoDark.css({display: 'block'});

      	  		menuItem.on('mouseenter', function(){
      	  			$(this).css({borderBottom: '1px solid #8a2012', transition: '.2s ease-out'})
      	  		});	

      	  		menuItem.on('mouseleave', function(){
      	  			$(this).css({borderBottom: '1px solid transparent', transition: '.2s ease-out'})
      	  		});	

  	  		}	
		} else if(pizzaParty.isInView(value) && !$(value).hasClass('theme-dark')) {
  	  	    if(isMobile) {
				TweenMax.to(hamburger, 0.2, {backgroundColor: '#e9e6d8', ease:Linear.easeOut});
      	  	    navLogo.css({display: 'none'});
      	  	    navLogoDark.css({display: 'none'});
  	  	    } else {
				TweenMax.to(menuItem, 0.2, {color: '#e9e6d8', ease:Linear.easeOut});
      	  	    navLogo.css({display: 'block'});
      	  	    navLogoDark.css({display: 'none'});

      	  	    menuItem.on('mouseenter', function(){
      	  	    	$(this).css({borderBottom: '1px solid #e9e6d8', transition: '.2s ease-out'})
      	  	    });	

      	  	    menuItem.on('mouseleave', function(){
      	  	    	$(this).css({borderBottom: '1px solid transparent', transition: '.2s ease-out'})
      	  	    });	
  	  	    }
		}
	});
}

pizzaParty.hamburgerNav = function() {
	var hamburger = document.getElementsByClassName('hamburger')[0];
	var mobileNav = document.getElementsByClassName('mobile-nav')[0];
	var bar1 = document.getElementsByClassName('bar-1')[0];
	var bar2 = document.getElementsByClassName('bar-2')[0];
	var bar3 = document.getElementsByClassName('bar-3')[0];
	var links = $('.mobile-nav ul li');

	var activeNav = false

	TweenMax.set(mobileNav, {autoAlpha:0});
	TweenMax.set(bar1, {y:-6});
	TweenMax.set(bar3, {y:6});
	TweenMax.set(links, {autoAlpha:0});

	var hamburgerTimeline = new TimelineLite({paused: true});
	hamburgerTimeline.to([bar1, bar3], 0.3, {y:0, x:0,  rotation:0, scale:1});
	hamburgerTimeline.to(bar2, 0.1, {autoAlpha:0, ease:Linear.easeOut});
	hamburgerTimeline.to(bar1, 0.3, {rotation:45, ease:Power3.easeOut});
	hamburgerTimeline.to(bar3, 0.3, {rotation:-45, ease:Power3.easeOut}, '-=.3');

	hamburger.addEventListener('click', function(){
		if(activeNav == false) {
			activeNav = true;
			hamburgerTimeline.play();
			TweenMax.to([bar1, bar3], 0.1, {backgroundColor:'#8a2012', ease:Linear.easeOut});
			TweenMax.to(mobileNav,0.3, {autoAlpha:1, ease:Linear.easeOut});
			TweenMax.to(links,0.3, {autoAlpha:1, delay:0.5});

		} else if(activeNav == true) {
			activeNav = false;
			hamburgerTimeline.reverse();
			TweenMax.to(links, 0.1, {autoAlpha:0});
			TweenMax.to(mobileNav,0.3, {autoAlpha:0, ease:Linear.easeOut});
			$('section').each(function (index, value) {
				if($(this).hasClass('theme-dark') && pizzaParty.themeDark(this)) {
					TweenMax.to(bar1, 0.1, {backgroundColor:'#8a2012', ease:Linear.easeOut});
					TweenMax.to(bar3, 0.1, {backgroundColor:'#8a2012', ease:Linear.easeOut});
				} else if(!$(this).hasClass('theme-dark') && pizzaParty.themeDark(this)) {
					TweenMax.to(bar1, 0.1, {backgroundColor:'#e9e6d8', ease:Linear.easeOut});
					TweenMax.to(bar3, 0.1, {backgroundColor:'#e9e6d8', ease:Linear.easeOut});
				} else {
					TweenMax.to(bar1, 0.1, {backgroundColor:'#e9e6d8', ease:Linear.easeOut});
					TweenMax.to(bar3, 0.1, {backgroundColor:'#e9e6d8', ease:Linear.easeOut});
				}
			});
		}
	});

	$('.mobile-nav ul li a[href*="#"]:not([href="#"])').click(function(){
		activeNav = false;
		TweenMax.to(mobileNav,0.3, {autoAlpha:0, ease:Linear.easeOut});
		hamburgerTimeline.reverse();
	});
}

pizzaParty.menuNav = function() {
	var foods = [$('.Pizze'), $('.Panino'), $('.Assaggi'), $('.Insalate'), $('.Dolce')];

	var drinks = [$('.Vino'), $('.Birra'), $('.Amaro'), $('.Freddo'), $('.Caldo')];

	$("#menu .menu-nav ul li").click(function() {
		var food = $('#food');
		var create = $('#create');
		var drink = $('#drink');
		var tabName = $(this).attr('id');

		if(tabName == 'food') {
			create.removeClass('active-tab');
			drink.removeClass('active-tab');
			food.addClass('active-tab');
			foods.map(function(food){
				 var foodSection = food;
				 foodSection.css({visibility: 'visible', display:'block', opacity:'1'});
			});
			drinks.map(function(drink){
				 var drinkSection = drink;
				 drinkSection.css({visibility: 'hidden', display: 'none', opacity:'0'});
			});
			$('.Create').css({visibility: 'hidden', display: 'none', opacity:'0'});
			$('#menu .inner-wrapper').css({display:'flex',flexWrap: 'no-wrap', flexDirection:'column', height: 'auto'});

		} else if(tabName == 'create') {
			food.removeClass('active-tab');
			drink.removeClass('active-tab');
			create.addClass('active-tab');
			$('.Create').css({visibility: 'visible', opacity:'1', display:'block'});
			foods.map(function(food){
				 var foodSection = food;
				 foodSection.css({visibility: 'hidden', display:'none', opacity:'0'});
				 
			});
			drinks.map(function(drink){
				 var drinkSection = drink;
				 drinkSection.css({visibility: 'hidden', display:'none', opacity:'0'});
				 
			});
			if(isMobile) {
				$('#menu .inner-wrapper').css({display:'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'flex-start'});
			}
		} else if(tabName == 'drink') {
			food.removeClass('active-tab');
			create.removeClass('active-tab');
			drink.addClass('active-tab');
			foods.map(function(food){
				 var foodSection = food;
				 foodSection.css({visibility: 'hidden', display: 'none', opacity:'0'});
				 
			});
			drinks.map(function(drink){
				 var drinkSection = drink;
				 drinkSection.css({visibility: 'visible', display: 'block', opacity:'1'});
				 if(isMobile) {
				 	$('#menu .inner-wrapper').css({display:'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'flex-start'});
				 } else if(isTablet) {
				 	$('#menu .inner-wrapper').css({display:'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'flex-start'});
				 } else {
				 	$('#menu .inner-wrapper').css({display:'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'flex-start'});
				 }
			});
			$('.Create').css({visibility: 'hidden', display: 'none', opacity:'0'});
		} else {
			return false;
		}

	});
}

pizzaParty.init = function() {

	// TweenMax.set($('#loader-logo'), {autoAlpha:0, display:'none'});

	$('.slider').on('swipe', function(event, slick, direction){
	  var currentSlide = $('.slider').slick('slickCurrentSlide');
	});

	$('.slider').slick({
		centerMode:true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		mobileFirst: true,
		variableWidth: true,
		touchMove: true
	});

	if(isMobile) {
		document.getElementsByClassName('slick-prev')[0].style.display = "none";
		document.getElementsByClassName('slick-next')[0].style.display = "none";
	}

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        // $('header').addClass('nav-up');
	        TweenMax.to($('header'), 0.5, {y:-100, ease:Power1.easeOut});
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            // $('header').removeClass('nav-up');
	            TweenMax.to($('header'), 0.5, {y:0, ease:Power1.easeOut});
	        }
	    }
	    
	    lastScrollTop = st;
	}

	function stickyNav() {
		var mn = $('header');
		    mns = "main-nav-scrolled";
		    hdr = $('#home').height();
		if(isMobile) {
			return false;
		} else {
			if( $(this).scrollTop() > hdr ) {
			  mn.addClass(mns);
			} else if($(this).scrollTop() > hdr/3) {
				mn.removeClass(mns);
				$('.logo').css({opacity:'0'});
			} else {
				mn.removeClass(mns);
				$('.logo').css({opacity:'1'}).delay(1000);
			}
		}
	}

	window.addEventListener('scroll', function() {
		stickyNav();
		pizzaParty.colorChange();
		if(isMobile) {
			return false;
		} else {
			if( $(this).scrollTop() > $('#home').height()) {
				didScroll = true;
				$('header').addClass('main-nav-scrolled');
			} else if($(this).scrollTop() > $("#home").height() - 200) {
				TweenMax.to($('header'), 0.5, {y:-100, ease:Power1.easeOut});
			} else {
				TweenMax.to($('header'), 0.5, {y:0, ease:Power1.easeOut});
			}
		}
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	pizzaParty.hamburgerNav();

	pizzaParty.menuNav();


	window.addEventListener('resize', resize);
	resize();

	document.addEventListener('mousemove', function(e) {

		this.width = document.documentElement.clientWidth;
		this.height = document.documentElement.clientHeight;
		this.halfWidth = this.width/2;
		this.halfHeight = this.height/2;
		this.xOffset = 0;
		this.yOffset = 0;

	    var x = e.clientX;
	    var y = e.clientY;
	    if (x >= this.halfWidth){
	      this.xOffset = -(x - this.halfWidth)/this.halfWidth;
	      $('#customCursor').css({transform: 'rotate(0deg)'});
	    } else if (x < this.halfWidth){
	      this.xOffset = (1 - x/this.halfWidth);
	      $('#customCursor').css({transform: 'rotate(180deg)'});

	    }
	}, false);

	function resize(){
	   	this.width = document.documentElement.clientWidth;
	  	this.height = document.documentElement.clientHeight;
	  	this.halfWidth = this.width/2;
	  	this.halfHeight = this.height/2;
	}

	$('.slick-arrow').mouseleave(function(){
     	$('#customCursor').hide();
     	return false;
	});
	$('.slick-arrow').mouseenter(function(){
     	$('#customCursor').css({display: 'block'});
     	return false;
	});
	$('.slick-arrow').mousemove(function(e){
     	$('#customCursor').css('left', e.clientX).css('top', e.clientY + 100);
    });

    window.sr = ScrollReveal({
    	reset: false,
    	mobile: false 
    });

    sr.reveal('#home-text .inner-wrapper p', {
    	origin: 'top',
    	scale: 1,
    	distance: '0',
    	delay: 200,
    	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    	viewFactor: 0.75
    });

    sr.reveal('#carbone-banner', {
    	origin: 'bottom',
    	scale: 1,
    	distance: '100px',
    	easing: 'ease-out',
    	viewFactor: 0.15
    });

    sr.reveal('.carbone-text .text-1', {
    	origin: 'left',
    	scale: 1,
    	distance: '0',
    	delay: '300',
    	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });

    sr.reveal('.carbone-text .text-2', {
    	origin: 'left',
    	scale: 1,
    	distance: '0',
    	delay: '300',
    	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });

    // sr.reveal('.carbone-image-1', {
    // 	origin: 'bottom',
    // 	scale: 1,
    // 	distance: '100px',
    // 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    // 	viewFactor: 0.25
    // });

    // sr.reveal('.carbone-image-2', {
    // 	origin: 'bottom',
    // 	scale: 1,
    // 	distance: '100px',
    // 	// delay: '100',
    // 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    // 	viewFactor: 0.25
    // });

    sr.reveal('#about .text', {
    	origin: 'top',
    	scale: 1,
    	distance: '0',
    	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    	viewFactor: 0.5
    });
}

$(function(){
	$('.post-thumbnail-title img').hide(); //hide all the images on the page
	pizzaParty.init();
});


