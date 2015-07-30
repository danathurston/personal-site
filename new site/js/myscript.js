$(function() {
	
	"use strict";
	
	var fromTop = 50;
	var slides = $('#home .item').length;
	var sHeight = $(window).height(); // height of the window
	
	$('.fullscreen').css('height', sHeight);
	
	// img replace in carousel
	
	$('#home .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});
	
	// always use 100% height of screen
	$(window).resize(function(){
		var sHeight = $(window).height(); // height of the window
		$('.fullscreen').css('height', sHeight);
	});
	
	
	//activate scrollspy
	$('body').scrollspy ({
		target: 'header .navbar',
		offset: fromTop
	});
	
	var currPage = $(this).find('li.active a').attr('href');
	if(currPage !== '#home') {
		$('header nav').addClass('currPage');
	} else {
		$('header nav').removeClass('currPage');	
	}
	
	//scrollspy in page class add
		
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var currPage = $(this).find('li.active a').attr('href');
		if(currPage !== '#home') {
			$('header nav').addClass('currPage');
		} else {
			$('header nav').removeClass('currPage');	
		}
	});
	
	// carousel items indicators loop
	
	for (var i=0; i < slides; i++) {
		var insertIndicator = '<li data-target="#home" data-slide-to="' + i + '"></li>';
		$('#home ol').append(insertIndicator); 
	}

	$('.carousel').carousel({
	  interval: false
	});
	
	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === 
		  this.pathname.replace(/^\//,'') && 
		  location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html,body').animate({
		      scrollTop: target.offset().top-fromTop+2
		    }, 500);
		    return false;
		  } //target.length
		} //click function
	}); //smooth scrolling
});