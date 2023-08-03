/*** Owl Carousal Bind ***/ 
if($('#owl-carousel__single').length>0){
    
    setTimeout(function() {
        $('#owl-carousel__single').owlCarousel({
            loop:false,
            margin:152,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
        
        $('.owl-prev').attr({'aria-label':'Previous'}).attr({'tabindex':'3'}).removeAttr('role');
        $('.owl-next').attr({'aria-label':'Next'}).attr({'tabindex':'3'}).removeAttr('role');
        $('.owl-prev span, .owl-next span').removeAttr('aria-label');
    }, 500);

   var win = $(this); //this = window
    console.log(win.width());  
   if (parseInt(win.width()) < 600) { 
        // console.log("30");
        setTimeout(function() { $('.owl-nav button').attr({'aria-hidden':true}); }, 1000);
   }else{
        // console.log("33");
        setTimeout(function() { $('.owl-dots button').attr({'aria-hidden':true}); }, 1000);
   }
   

}else if($('.owl-carousel').length>0){
    if($('.owl-carousel').hasClass('newblock')) {
        setTimeout(function() {
            $('.owl-carousel.newblock').owlCarousel({
                loop:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin:20,
                        nav:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                    },
                    600:{
                        items:2,
                        margin:24,
                        nav:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                    },
                    1000:{
                        items:2,
                        margin:24,
                        nav:true
                    },
                    1180:{
                        items:3,
                        margin:24,
                        nav:true
                    },
                    1280:{
                        items:3,
                        margin:24,
                        nav:true,
                        loop:false
                    }
                }
            });
        }, 500);

    }else if($('.owl-carousel').hasClass('recommendationtestimonial')) {

        setTimeout(function() {
            var testimonialwidth = 605;
            testimonialwidth = $('section#banner-section .container').width();
            $('.recommendationtestimonial').css({'width': testimonialwidth+'px'});
            $('.owl-carousel.recommendationtestimonial').owlCarousel({
                loop:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin:0,
                        nav:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                    },
                    600:{
                        items:1,
                        margin:20,
                        nav:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                    },
                    1000:{
                        items:1,
                        margin:20,
                        nav:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                    },
                    1280:{
                        items:1,
                        margin:20,
                        nav:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                    }
                }
            });
        }, 500);

    } else {

        setTimeout(function() {
            $('.owl-carousel').owlCarousel({
                loop:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin:20,
                        nav:true
                    },
                    600:{
                        items:1,
                        margin:80,
                        nav:true,
                    },
                    1000:{
                        items:3,
                        margin:60,
                        nav:true,
                        loop:false
                    },
                    1280:{
                        items:3,
                        margin:152,
                        nav:true,
                        loop:false
                    }
                }
            });
        }, 500);
    }
    

   $('.owl-prev').attr({'aria-label':'Previous'}).attr({'tabindex':'3'}).removeAttr('role');
   $('.owl-next').attr({'aria-label':'Next'}).attr({'tabindex':'3'}).removeAttr('role');
   $('.owl-prev span, .owl-next span').removeAttr('aria-label');
   
   setTimeout(function() { $('.owl-nav button').attr({'aria-hidden':true}); }, 1000);
   var win = $(this); //this = window
    console.log(win.width());  
   if (parseInt(win.width()) < 600) { 
         console.log("30");
   }else{
        // console.log("33");
        setTimeout(function() { $('.owl-dots button').attr({'aria-hidden':true}); }, 1000);
   }

  // setTimeout(function() { $('.owl-carousel').owlCarousel('refresh'); console.log('trigger'); }, 2000);
}


/*** FAQ event Bind ***/ 
if($('.faq-item__trigger').length>0){
    $(".faq-item__trigger").click(function(){
        var objcur = $(this);
        if($('.faq-item').hasClass('active')){
            if(!objcur.parent().parent().hasClass("active")) {
                $('.faq-item.active .faq-item-content').slideToggle();
                $('.faq-item.active .faq-item-content').removeClass("show");
                $('.faq-item.active').removeClass("active");
                
                var id = objcur.attr('aria-controls');
                $('#'+id).slideToggle();
                $('#'+id).toggleClass("show");
                objcur.parent().parent().toggleClass("active");
            }else{
                $('.faq-item.active .faq-item-content').slideToggle();
                $('.faq-item.active .faq-item-content').removeClass("show");
                $('.faq-item.active').removeClass("active");
            }
        }else{
            var id = objcur.attr('aria-controls');
            $('#'+id).slideToggle();
            $('#'+id).toggleClass("show");
            objcur.parent().parent().toggleClass("active");
        }
    });
}

var win = $(this); //this = window
console.log(win.width());
if($('.footer-nav-links__title').length>0){
    $(".footer-nav-links__title").click(function(){  

        if ((parseInt(win.width()) > 600) && (parseInt(win.width()) < 1024) && window.matchMedia("(orientation: portrait)").matches){
            $(this).toggleClass('active')
            $(this).parent().find('.footer__nav-links-inner').slideToggle();
        }

        if (parseInt(win.width()) < 600  || (parseInt(win.width()) < 980 && window.matchMedia("(orientation: landscape)").matches)) { 
            $(this).toggleClass('active')
            $(this).parent().find('.footer__nav-links-inner').slideToggle();
        }
    });
}

if($('.dialogue-group').length>0){
    var elementcounter = 1;
    $('.dialogue-group .dialogue-tag').each(function() {

        var randomNumber = Math.floor(Math.random() * 50);
        if(elementcounter % 2 == 0)
            $(this).css({"margin-right" : randomNumber});
        else
            $(this).css({"margin-left" : randomNumber});
        elementcounter++;
    });
}

/*** Mobile Submenu Event Bind ***/ 
if($('#v-submenu-tab1').length>0){
    var elementcounter = 1;
    $('#v-submenu-tab1 button.nav-link').hover(function() {
        $('#v-submenu-tab1 button.nav-link').removeClass('active');
        var targetnav = $(this).attr('data-bs-target');
        $(this).addClass('active');

        $('#v-submenu-tab1Content .tab-pane').removeClass('show').removeClass('active');
        $(targetnav).addClass('show').addClass('active');
    });
}

if($('#v-submenu-tab').length>0){
    var elementcounter = 1;
    $('#v-submenu-tab button.nav-link').hover(function() {
        $('#v-submenu-tab button.nav-link').removeClass('active');
        var targetnav = $(this).attr('data-bs-target');
        $(this).addClass('active');
        console.log(targetnav);

        $('#v-submenu-tabContent .tab-pane').removeClass('show').removeClass('active');
        $(targetnav).addClass('show').addClass('active');

        if(targetnav == ""){
            $("#v-submenu-tab").parent().addClass('single__column2');
        }else{
            $("#v-submenu-tab").parent().removeClass('single__column2');
        }
    });
}

/*** Main Menu Event Bind ***/ 
if($('.navbar-toggler').length>0){
    $(".navbar-toggler").click(function(){
        $('#mobile').animate({left:'0px'}, 300)
        $('body').css('overflow','hidden')
    });
}

if($('.navbar-close-toggler').length>0){
    $(".navbar-close-toggler").click(function(){
        $('.mobile-menu').animate({left:'-100%'}, 300)
        $('.mobile-submenu').animate({left:'-100%'}, 300)
        $('body').css('overflow','auto')
    });
}

if($('.mobile__navigation-link').length>0){
    $(".mobile__navigation-link").click(function(){
        let id = $(this).data("content")
        $("#"+id).animate({left:'0px'},300)
    });
}

// cost calculator sliding js
$( document ).on( "click", ".calculate__cost", function() { 
    console.log("closed");
    var win = $(window); //this = window
        console.log("---"+win.width());
        if (window.matchMedia("(orientation: portrait)").matches) {
            console.log("-portrait--"+win.width());
                $('.cost-calculator__left-content').addClass('hideDiv');
                $('.cost-calculator__right').addClass('change-active')
                $('.cost-calculator__right-content').addClass('showDiv');
         }
         if (window.matchMedia("(orientation: landscape)").matches) {
            console.log("-landscape--"+win.width());
            if (win.width() >= 600) { 
                $('.cost-calculator__left-content').animate({left:'-100%'}, 300)
                $('.cost-calculator__right').animate({left:'-50%'}, 300).addClass('change-active')
                $('.cost-calculator__right-content').animate({left:'-50%'}, 300)
            }else{
                $('.cost-calculator__left-content').addClass('hideDiv');
                $('.cost-calculator__right').addClass('change-active')
                $('.cost-calculator__right-content').addClass('showDiv');
            }
         }

        

    
});

if($('.mobile__navigation-link-submenu').length>0){
    $(".mobile__navigation-link-submenu").click(function(){
        var currentObj = $(this);
        console.log("call:::"+currentObj.parent().hasClass('active'));
        if(currentObj.parent().hasClass('active')){
            currentObj.next().slideUp();
            currentObj.parent().removeClass('active');
        }else{
            currentObj.next().slideDown();
            currentObj.parent().addClass('active');
        }
    });
}

/*** Back Button Event Bind ***/ 
if($('.back-btn').length>0){
    $(".back-btn").click(function(){
        let id = $(this).parent().parent().attr("id")
        $("#"+id).animate({left:'-100%'},300)
    });
}


/*** Dropdown Event Bind ***/ 
if($('.dropdown').length > 0) {
    console.log("click 619");
    $( document ).on( "click", "li.dropdown-item", function() { 
        console.log("click 621");
        var obj = $(this);
        var t1 = obj.text().trim();
        if(obj.find('.highlight-text').length > 0) {
            t1 = obj.find('.highlight-text').text().trim();
        }
        
        console.log(t1);
        
        $('.dropdown').val(t1);
        $('#nextBtn').trigger('focusout');
        $("#postcode-bottom-sheet-drawer").hide();
        $('.dropdown-menu').hide();
    }); 

    otherhourfunction();
    $(window).on('resize', function(){
        otherhourfunction();
    });

    $( document ).on( "click", "span.close", function() { 
        console.log("closed");
        $("#postcode-bottom-sheet-drawer").hide();
    });

    $( document ).on( "click", "#confirmBtn", function() { 
        var t1 = $('#phonenumber-field2').val();
        $('.dropdown').val(t1);
        $("#postcode-bottom-sheet-drawer").hide();
        $(`#postcode-form`).addClass('fill')
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
        $('.dropdown-menu').hide();
    });

    $( document ).on( "keyup", ".dropdown", function() {
        $(this).next().css({'display':'flex'});
    });

    function otherhourfunction(){
       
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        var win = $(this); //this = window
        
        if (win.width() < 769) { 
            $('#phonenumber-field').attr({'readonly' : 'readonly'});
            $( document ).on( "click", ".dropdown", function() { 
                $("#postcode-bottom-sheet-drawer").css({'display':'flex'});
                $('#phonenumber-field2').focus();
            });
            $('#locationfieldcalculate').attr({'readonly' : 'readonly'});
        }else{
            $("#postcode-bottom-sheet-drawer").hide();
            $('#phonenumber-field').removeAttr('readonly');
            $('#locationfieldcalculate').removeAttr('readonly');
        }
    }

    window.onclick = function(event) {
        var modal = document.getElementById("postcode-bottom-sheet-drawer");
        if (event.target == modal) {
            $("#postcode-bottom-sheet-drawer").hide();
        }
        $('.dropdown-menu').hide();
    }

    document.onkeyup = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            $("#postcode-bottom-sheet-drawer").hide();
        }   
    };
}

function checkform(){
    if($('#locationfield').val()==""){
        $('#locationfield').parent().addClass('error');
        return false;
    }else{
        $('#locationfield').parent().removeClass('error');
        location.href = "new-usersignup-intrim-design.html";
    }

    return false;
}

function checkformB(){
    if($('#locationfield').val()==""){
        $('#locationfield').parent().addClass('error');
        return false;
    }else{
        $('#locationfield').parent().removeClass('error');
        location.href = "sign-up-to-send-message.html";
    }

    return false;
}


/*** Postcode Field Change Bind ***/ 
if($('#locationfield').length > 0){
    $(document).ready(function(){
        $('#locationfield').keyup(function(){
            if($(this).val() == ''){
                $(this).parent().addClass('error');
            }else{
                $(this).parent().removeClass('error');
            }
        });
    });
}

/*** Cookie Banner Event Bind ***/ 
document.getElementById("curamcare-cookie__button").focus();

$(document).on( "click", "#curamcare-cookie__button", function() { 
    console.log("closed");
    $("#curamcare-cookie-banner").attr({"aria-hidden" : true});
});

$("section a.btn").click(function(){
    document.getElementById("loader").setAttribute('aria-hidden', false);
    // $('#page-loader').delay("1000ms").val(90);
});

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }


/*** Has Child Navigation Event Bind ***/ 
if($('.navigation-links').length > 0){
    $(".navigation-links li.has-child").hover(function() { 
        if($(this).attr('data-state')!="opening")
            $(this).attr({'data-state':'opening'}).attr({'aria-expanded':'true'});
    });
    $(".navigation-links li.has-child").focus(function() { 
        $(this).attr({'data-state':'opening'}).attr({'aria-expanded':'true'});
    });
    $( document ).on( "mouseleave", "li.has-child[data-state='opening']", function() { 
        $(this).attr({'data-state':'closed'}).attr({'aria-expanded':'false'});
    });
}

/** Read More/Read Less Event **/
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 75;  // How many characters are shown by default
    var showCharbrif = 70;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    

    if($('.more').length>0){
        var win = $(this); //this = window
        
        
        $('.more').each(function() {
            if (win.width() < 769) { 
                if ($(this).hasClass('more-mob')) {
                    showChar = 82 ;
                }
            }
            var content = $(this).html();
    
            if(content.length > showChar) {
    
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
    
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
    
                $(this).html(html);
            }
    
        });
    }

    if($('.morelink').length>0){
        $(".morelink").click(function(){
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggleClass('viewfull');
            return false;
        });
    }
});

if($("#count1").length > 0) {
    document.addEventListener("DOMContentLoaded", () => {
        function counter(id, start, end, duration, addition) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? (1 + addition) : (-1 + addition),
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        
        if (current == end) {
            clearInterval(timer);
        // date = new Date();
        // milliseconds = date.getTime();
        // seconds = milliseconds / 1000;
        // console.log(seconds);
        }

        }, step);
        }

    // date = new Date();
    // milliseconds = date.getTime();
    // seconds = milliseconds / 1000;
    // console.log(seconds);
       // counter("count1", 0, 2, 2000, 0);
        counter("count2", 0, 7000, 5000, 9);
        counter("count3", 0, 4000, 5000, 7);
        counter("count4", 0, 2.5, 2000, 0.25);
   });
}
var $grid = '';
if($("#gallery").length > 0) {

    $grid = $('#gallery').masonry({
        itemSelector: '.testimonial-item'
      });
    
    
}

function onLayout() {
    console.log('layout done');
  }

$(document).on("click", ".profile-btn", function () {
    $(this).toggleClass("show");
    $(".profile-menu").toggleClass("show");
});

if($('.add-recommendation-loadmore').length > 0){
    $(document).on("click", ".add-recommendation-loadmore", function () {
        console.log("clicked");
        $('div.testimonial-section__content#gallery').append('<div class="testimonial-item">'+
            '<div class="recommendation-cards-grid__header">'+
                '<svg aria-label="Graphics Symbol" role="graphics-symbol" width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M24.555 32.9421C24.555 35.5353 23.508 37.8044 21.414 39.7493C19.3603 41.6942 16.9241 42.6667 14.1053 42.6667C9.67578 42.6667 6.27309 41.1877 3.89725 38.2298C1.52142 35.2719 0.333496 31.1795 0.333496 25.9525C0.333496 21.0902 2.36705 16.1874 6.43417 11.2441C10.5415 6.30073 15.4744 2.55271 21.2328 0L23.8905 4.31529C19.3402 6.54384 15.7764 9.13707 13.1993 12.095C10.6221 15.0529 9.13215 18.6388 8.72947 22.8528H12.112C14.6087 22.8528 16.6422 23.1364 18.2127 23.7037C19.7832 24.271 21.0516 25.0611 22.0181 26.0741C22.9442 27.0465 23.5885 28.1203 23.9509 29.2953C24.3536 30.4704 24.555 31.686 24.555 32.9421ZM54.3335 32.9421C54.3335 35.5353 53.2865 37.8044 51.1926 39.7493C49.1389 41.6942 46.7026 42.6667 43.8838 42.6667C39.4543 42.6667 36.0516 41.1877 33.6758 38.2298C31.2999 35.2719 30.112 31.1795 30.112 25.9525C30.112 21.0902 32.1456 16.1874 36.2127 11.2441C40.3201 6.30073 45.253 2.55271 51.0113 0L53.6691 4.31529C49.1187 6.54384 45.555 9.13707 42.9778 12.095C40.4006 15.0529 38.9107 18.6388 38.508 22.8528H41.8905C44.3872 22.8528 46.4207 23.1364 47.9912 23.7037C49.5617 24.271 50.8301 25.0611 51.7966 26.0741C52.7228 27.0465 53.3671 28.1203 53.7295 29.2953C54.1322 30.4704 54.3335 31.686 54.3335 32.9421Z" fill="#FF732E"/>'+
                '</svg>'+
                '<img class="" src="res/recommendations-page__content__recommendation-cards-avatar-1.webp" alt="recommendations page cards avatar">'+
                '<h4 class="recommendation-cards-grid__header-text">Samantha M.</h4>'+
            '</div>'+
            '<div class="recommendation-cards-grid__body">'+
                '<p>"Samantha is just brilliant. She is very experienced in dementia care, kind and empathetic, knowledgeable and always arrives with a smile."</p>'+
                '<span class="help-text reviewer-name">- Mary Anne</span>'+
                '<span class="help-text review-date">15 December 2022</span>'+
            '</div>'+
        '</div>'+

        '<div class="testimonial-item">'+
            '<div class="recommendation-cards-grid__header">'+
                '<svg aria-label="Graphics Symbol" role="graphics-symbol" width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M24.555 32.9421C24.555 35.5353 23.508 37.8044 21.414 39.7493C19.3603 41.6942 16.9241 42.6667 14.1053 42.6667C9.67578 42.6667 6.27309 41.1877 3.89725 38.2298C1.52142 35.2719 0.333496 31.1795 0.333496 25.9525C0.333496 21.0902 2.36705 16.1874 6.43417 11.2441C10.5415 6.30073 15.4744 2.55271 21.2328 0L23.8905 4.31529C19.3402 6.54384 15.7764 9.13707 13.1993 12.095C10.6221 15.0529 9.13215 18.6388 8.72947 22.8528H12.112C14.6087 22.8528 16.6422 23.1364 18.2127 23.7037C19.7832 24.271 21.0516 25.0611 22.0181 26.0741C22.9442 27.0465 23.5885 28.1203 23.9509 29.2953C24.3536 30.4704 24.555 31.686 24.555 32.9421ZM54.3335 32.9421C54.3335 35.5353 53.2865 37.8044 51.1926 39.7493C49.1389 41.6942 46.7026 42.6667 43.8838 42.6667C39.4543 42.6667 36.0516 41.1877 33.6758 38.2298C31.2999 35.2719 30.112 31.1795 30.112 25.9525C30.112 21.0902 32.1456 16.1874 36.2127 11.2441C40.3201 6.30073 45.253 2.55271 51.0113 0L53.6691 4.31529C49.1187 6.54384 45.555 9.13707 42.9778 12.095C40.4006 15.0529 38.9107 18.6388 38.508 22.8528H41.8905C44.3872 22.8528 46.4207 23.1364 47.9912 23.7037C49.5617 24.271 50.8301 25.0611 51.7966 26.0741C52.7228 27.0465 53.3671 28.1203 53.7295 29.2953C54.1322 30.4704 54.3335 31.686 54.3335 32.9421Z" fill="#FF732E"/>'+
                '</svg>'+
                '<img class="" src="res/recommendations-page__content__recommendation-cards-avatar-1.webp" alt="recommendations page cards avatar">'+
                '<h4 class="recommendation-cards-grid__header-text">Rachael H.</h4>'+
            '</div>'+
            '<div class="recommendation-cards-grid__body">'+
                '<p>This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>'+
                '<span class="help-text reviewer-name">- Mary Anne</span>'+
                '<span class="help-text review-date">15 December 2022</span>'+
            '</div>'+
        '</div>'+

        '<div class="testimonial-item">'+
            '<div class="recommendation-cards-grid__header">'+
                '<svg aria-label="Graphics Symbol" role="graphics-symbol" width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M24.555 32.9421C24.555 35.5353 23.508 37.8044 21.414 39.7493C19.3603 41.6942 16.9241 42.6667 14.1053 42.6667C9.67578 42.6667 6.27309 41.1877 3.89725 38.2298C1.52142 35.2719 0.333496 31.1795 0.333496 25.9525C0.333496 21.0902 2.36705 16.1874 6.43417 11.2441C10.5415 6.30073 15.4744 2.55271 21.2328 0L23.8905 4.31529C19.3402 6.54384 15.7764 9.13707 13.1993 12.095C10.6221 15.0529 9.13215 18.6388 8.72947 22.8528H12.112C14.6087 22.8528 16.6422 23.1364 18.2127 23.7037C19.7832 24.271 21.0516 25.0611 22.0181 26.0741C22.9442 27.0465 23.5885 28.1203 23.9509 29.2953C24.3536 30.4704 24.555 31.686 24.555 32.9421ZM54.3335 32.9421C54.3335 35.5353 53.2865 37.8044 51.1926 39.7493C49.1389 41.6942 46.7026 42.6667 43.8838 42.6667C39.4543 42.6667 36.0516 41.1877 33.6758 38.2298C31.2999 35.2719 30.112 31.1795 30.112 25.9525C30.112 21.0902 32.1456 16.1874 36.2127 11.2441C40.3201 6.30073 45.253 2.55271 51.0113 0L53.6691 4.31529C49.1187 6.54384 45.555 9.13707 42.9778 12.095C40.4006 15.0529 38.9107 18.6388 38.508 22.8528H41.8905C44.3872 22.8528 46.4207 23.1364 47.9912 23.7037C49.5617 24.271 50.8301 25.0611 51.7966 26.0741C52.7228 27.0465 53.3671 28.1203 53.7295 29.2953C54.1322 30.4704 54.3335 31.686 54.3335 32.9421Z" fill="#FF732E"/>'+
                '</svg>'+
                '<img class="" src="res/recommendations-page__content__recommendation-cards-avatar-1.webp" alt="recommendations page cards avatar">'+
                '<h4 class="recommendation-cards-grid__header-text">Michael</h4>'+
            '</div>'+
            '<div class="recommendation-cards-grid__body">'+
                '<p>Samantha is just brilliant. She is very experienced in dementia care, kind and empathetic, knowledgeable and always arrives with a smile.</p>'+
                '<span class="help-text reviewer-name">- Mary Anne</span>'+
                '<span class="help-text review-date">15 December 2022</span>'+
            '</div>'+
        '</div>'+
        
        '<div class="testimonial-item">'+
            '<div class="recommendation-cards-grid__header">'+
                '<svg aria-label="Graphics Symbol" role="graphics-symbol" width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M24.555 32.9421C24.555 35.5353 23.508 37.8044 21.414 39.7493C19.3603 41.6942 16.9241 42.6667 14.1053 42.6667C9.67578 42.6667 6.27309 41.1877 3.89725 38.2298C1.52142 35.2719 0.333496 31.1795 0.333496 25.9525C0.333496 21.0902 2.36705 16.1874 6.43417 11.2441C10.5415 6.30073 15.4744 2.55271 21.2328 0L23.8905 4.31529C19.3402 6.54384 15.7764 9.13707 13.1993 12.095C10.6221 15.0529 9.13215 18.6388 8.72947 22.8528H12.112C14.6087 22.8528 16.6422 23.1364 18.2127 23.7037C19.7832 24.271 21.0516 25.0611 22.0181 26.0741C22.9442 27.0465 23.5885 28.1203 23.9509 29.2953C24.3536 30.4704 24.555 31.686 24.555 32.9421ZM54.3335 32.9421C54.3335 35.5353 53.2865 37.8044 51.1926 39.7493C49.1389 41.6942 46.7026 42.6667 43.8838 42.6667C39.4543 42.6667 36.0516 41.1877 33.6758 38.2298C31.2999 35.2719 30.112 31.1795 30.112 25.9525C30.112 21.0902 32.1456 16.1874 36.2127 11.2441C40.3201 6.30073 45.253 2.55271 51.0113 0L53.6691 4.31529C49.1187 6.54384 45.555 9.13707 42.9778 12.095C40.4006 15.0529 38.9107 18.6388 38.508 22.8528H41.8905C44.3872 22.8528 46.4207 23.1364 47.9912 23.7037C49.5617 24.271 50.8301 25.0611 51.7966 26.0741C52.7228 27.0465 53.3671 28.1203 53.7295 29.2953C54.1322 30.4704 54.3335 31.686 54.3335 32.9421Z" fill="#FF732E"/>'+
                '</svg>'+
                '<img class="" src="res/recommendations-page__content__recommendation-cards-avatar-1.webp" alt="recommendations page cards avatar">'+
                '<h4 class="recommendation-cards-grid__header-text">Rachael H.</h4>'+
            '</div>'+
            '<div class="recommendation-cards-grid__body">'+
                '<p>This book is a treatise on the theory of ethics, very popular during the Renaissance. This book is a treatise on the theory of ethics, very popular during the Renaissance.<br/><br/>This book is a treatise on the theory of ethics, very popular during the Renaissance. very popular during the Renaissance.This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>'+
                '<span class="help-text reviewer-name">- Mary Anne</span>'+
                '<span class="help-text review-date">15 December 2022</span>'+
            '</div>'+
        '</div>'+

        '<div class="testimonial-item">'+
            '<div class="recommendation-cards-grid__header">'+
                '<svg aria-label="Graphics Symbol" role="graphics-symbol" width="55" height="48" viewBox="0 0 55 48" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M24.555 32.9421C24.555 35.5353 23.508 37.8044 21.414 39.7493C19.3603 41.6942 16.9241 42.6667 14.1053 42.6667C9.67578 42.6667 6.27309 41.1877 3.89725 38.2298C1.52142 35.2719 0.333496 31.1795 0.333496 25.9525C0.333496 21.0902 2.36705 16.1874 6.43417 11.2441C10.5415 6.30073 15.4744 2.55271 21.2328 0L23.8905 4.31529C19.3402 6.54384 15.7764 9.13707 13.1993 12.095C10.6221 15.0529 9.13215 18.6388 8.72947 22.8528H12.112C14.6087 22.8528 16.6422 23.1364 18.2127 23.7037C19.7832 24.271 21.0516 25.0611 22.0181 26.0741C22.9442 27.0465 23.5885 28.1203 23.9509 29.2953C24.3536 30.4704 24.555 31.686 24.555 32.9421ZM54.3335 32.9421C54.3335 35.5353 53.2865 37.8044 51.1926 39.7493C49.1389 41.6942 46.7026 42.6667 43.8838 42.6667C39.4543 42.6667 36.0516 41.1877 33.6758 38.2298C31.2999 35.2719 30.112 31.1795 30.112 25.9525C30.112 21.0902 32.1456 16.1874 36.2127 11.2441C40.3201 6.30073 45.253 2.55271 51.0113 0L53.6691 4.31529C49.1187 6.54384 45.555 9.13707 42.9778 12.095C40.4006 15.0529 38.9107 18.6388 38.508 22.8528H41.8905C44.3872 22.8528 46.4207 23.1364 47.9912 23.7037C49.5617 24.271 50.8301 25.0611 51.7966 26.0741C52.7228 27.0465 53.3671 28.1203 53.7295 29.2953C54.1322 30.4704 54.3335 31.686 54.3335 32.9421Z" fill="#FF732E"/>'+
                '</svg>'+
                '<img class="" src="res/recommendations-page__content__recommendation-cards-avatar-1.webp" alt="recommendations page cards avatar">'+
                '<h4 class="recommendation-cards-grid__header-text">Joseph Gonzalez</h4>'+
            '</div>'+
            '<div class="recommendation-cards-grid__body">'+
                '<p>Samantha is just brilliant. She is very experienced in dementia care, kind and empathetic, knowledgeable and always arrives with a smile.'+
                    '<br/><br/>kind and empathetic, knowledgeable and always arrives with a smile.</p>'+
                '<span class="help-text reviewer-name">- Mary Anne</span>'+
                '<span class="help-text review-date">15 December 2022</span>'+
            '</div>'+
        '</div>');
       //$('#gallery,.testimonial-item').removeAttr('style');
        
        setTimeout(function() {
            $('#gallery').masonry('reloadItems');
            $grid.masonry();
        }, 100);
    });
}

if($('.postcode-form-open').length>0){
    $('.postcode-form-open').click(function() {
        $('#postcode-bottom-sheet-drawer').css({'display': 'flex'});
    });
}

if($('.cost-calculate-modal-open').length>0){
    $('.cost-calculate-modal-open').click(function() {
        if($("#locationfieldcalculate").val()!=""){
            $('#cost-calculate-modal').show();
            $('#cost-calculate-modal').addClass('show');
            $('#cost-calculate-modal').css({'display': 'flex'});
        }
    });
}
$( document ).on( "click", "#cost-calculate-modal span.close", function() { 
    $("#cost-calculate-modal").hide();
});

// $( document ).on( "click", "#side-modal span.close", function() { 
//     console.log("closed");
//     $("#side-modal").removeClass('show').hide();

// });


// function addEvent(obj, evt, fn) {
//     if (obj.addEventListener) {
//         obj.addEventListener(evt, fn, false);
//     }
//     else if (obj.attachEvent) {
//         obj.attachEvent("on" + evt, fn);
//     }
// }

// addEvent(window,"load",function(e) {
//     addEvent(document, "mouseout", function(e) {
//         e = e ? e : window.event;
//         var from = e.relatedTarget || e.toElement;
//         if (!from || from.nodeName == "HTML") {
//             $("#side-modal").addClass('show').show(); 
//         }
//     });
// });


//   let timer, timer2, currSeconds = 0, currSeconds2 = 0;
          
// function resetTimer() {
//     clearInterval(timer);
    
//     currSeconds = 0;

//     timer = setInterval(startIdleTimer, 90000);
// }
    
// function resetTimer2() {
//     clearInterval(timer2);
    
//     currSeconds2 = 0;

//     console.log("call2");

//     timer2 = setInterval(startIdleTimer, 60000);
// }

// Define the events that
// would reset the timer
// window.onload = resetTimer;
// window.onmousemove = resetTimer;
// window.onmousedown = resetTimer;
// window.ontouchstart = resetTimer;
// window.onclick = resetTimer2;
// window.onkeypress = resetTimer2;
    
// function startIdleTimer() {
//     currSeconds++;
//     currSeconds2++;
    
//     document.querySelector("#side-modal")
//         .style.display = 'block';
// }


// var throttledListener = throttle(scrollListener, 500);
// window.addEventListener('scroll', throttledListener);

// function throttle(func, delay) { 
//     var func = func.bind(func),
//         last = Date.now();
//     return function() {
//         if (Date.now() - last > delay) {
//             func();
//             last = Date.now();
//         }
//     }
// }
// function scrollListener() {
//     console.log('scrolled');
//     var threshold = document.body.clientHeight * 0.8;
//     if (window.pageYOffset >= threshold) {
//         document.querySelector("#side-modal")
//         .style.display = 'block';
//         window.removeEventListener('scroll', throttledListener);
//     }
// }

// document.addEventListener("visibilitychange", function() {
//     if (document.hidden){
//         document.querySelector("#side-modal")
//         .style.display = 'block';
//     } else {
//         console.log("Browser tab is visible")
//     }
// });


// $(window).on('beforeunload', function () {
//     document.querySelector("#side-modal")
//         .style.display = 'block';
//     // return false;
// });