if($('#owl-carousel__single').length>0){
    $('#owl-carousel__single').owlCarousel({
       loop:true,
       margin:152,
       responsiveClass:true,
       responsive:{
           0:{
               items:1,
               nav:true
           },
           600:{
               items:1,
               nav:false
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
    $('.owl-carousel').owlCarousel({
       loop:true,
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
               nav:false,
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
}



if($('.faq-item__trigger').length>0){
    $(".faq-item__trigger").click(function(){
        var id = $(this).attr('aria-controls');
        $('#'+id).slideToggle();
        $('#'+id).toggleClass("show");
        $(this).parent().parent().toggleClass("active");
    });
}

if($('.footer-nav-links__title').length>0){
    $(".footer-nav-links__title").click(function(){
        $(this).toggleClass('active')
        $(this).parent().find('.footer__nav-links-inner').slideToggle();
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

if($('.back-btn').length>0){
    $(".back-btn").click(function(){
        let id = $(this).parent().parent().attr("id")
        $("#"+id).animate({left:'-100%'},300)
    });
}

if($('.dropdown').length > 0) {
    console.log("click 619");
    $( document ).on( "click", "li.dropdown-item", function() { 
        console.log("click 621");
        var t1 = $(this).html();
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
        }else{
            $("#postcode-bottom-sheet-drawer").hide();
            $('#phonenumber-field').removeAttr('readonly');
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
        location.href = "loading.html";
    }

    return false;
}

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


if($('.navigation-links').length > 0){
    console.log("307");
    $(".navigation-links li.has-child").hover(function() { 
        console.log("309");
        if($(this).attr('data-state')!="opening")
            $(this).attr({'data-state':'opening'});
    });
    $(".navigation-links li.has-child").focus(function() { 
        console.log("313");
        $(this).attr({'data-state':'opening'});
    });
    $( document ).on( "mouseleave", "li.has-child[data-state='opening']", function() { 
        console.log("317");
        $(this).attr({'data-state':'closed'});
    });
}