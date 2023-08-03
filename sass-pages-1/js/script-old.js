/*if($('.form-control__custom').length > 0) {
    $('.form-control__custom').hover(function(){
        $(this).parent().trigger('hover');
        console.log('hover');
    });
}*/

if($('input[type="checkbox"]').length > 0) {
    $('input[type="checkbox"]').hover(function(){
        console.log("hover");
        $(this).parent().trigger('hover');
    });
    $('input[type="checkbox"]').focus(function(){
        console.log("focus");
        $(this).parent().parent().trigger('focus');
    });
}



if($('#sign-up').length>0){
    $("#sign-up input").change(function(){
        console.log("input change");
        if($("#name-field").val()!="" && $("#phonenumber-field").val()!=""){
            $('#sign-up button').removeAttr('disabled');
            $("#phonenumber-field__error-msg").hide();
            $("#name-field-error").hide();
        }else if($("#name-field").val()!=""){
            $('#sign-up button').attr({'disabled':'disabled'});
            $("#phonenumber-field__error-msg").show();
        }else{
            $('#sign-up button').attr({'disabled':'disabled'});
            $("#name-field__error-msg").show();
        }
    });

    $("#sign-up input").keyup(function(){
        console.log("keyup change");
        if($("#name-field").val()!="" && $("#phonenumber-field").val()!=""){
            $('#sign-up button').removeAttr('disabled');
            $("#phonenumber-field__error-msg").hide();
            $("name-field__error-msg").hide();
        }else if($("#name-field").val()!=""){
            $('#sign-up button').attr({'disabled':'disabled'});
            $("#phonenumber-field__error-msg").show();
        }else{
            $('#sign-up button').attr({'disabled':'disabled'});
            $("#name-field__error-msg").show();
        }
    });

    $("#sign-up button").click(function(){
        console.log("click change");
        if($("#name-field").val()!="" && $("#phonenumber-field").val()!=""){
            location.href="otp-screen.html";
        }else if($("#name-field").val()!=""){
            $("#name-field__error-msg").show();
        }else{
            $("#phonenumber-field__error-msg").show();
        }
    });
}


if($('#otp-fill').length>0){

    $("#digit-1").focus();
    var timeLeft = 30;
    var elem = document.getElementById('Timer');

    var timerId = setInterval(countdown, 1000);

    function resendcode(){
        $('form.main-form')[0].reset();
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        elem.innerHTML =  '00:'+timeLeft ;
        $('.resendcode').css({'display':'flex'});
        $("#timer-div").show();
        $("#resend-div").hide();
    }


    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            $("#timer-div").hide();
            $("#resend-div").show();
        } else {
            if(timeLeft<10)
                elem.innerHTML =  '00:0'+timeLeft  ;
            else
                elem.innerHTML = '00:'+timeLeft  ;
            timeLeft--;
        }
    }

    var defaultscreen = false;

    $('.otp__field-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());
            
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    
                    if(!defaultscreen){
                        $('#otp-fill').addClass('error');
                        $('#otp-fill input').addClass('error');
                        defaultscreen = true;
                    }else{
                        $('#otp-fill').removeClass('error');
                        $('#otp-fill input').removeClass('error');
                        $('#nextBtn').removeClass('disabledbtn');
                        $('.hideform').hide();
                        //$('#loader').show();
                        location.href = 'hourly-submit-form.html';
                    }
                }
            }
        });
    });
}

if($('#otp-fill2').length>0){

    $("#digit-1").focus();
    var timeLeft = 30;
    var elem = document.getElementById('Timer');

    var timerId = setInterval(countdown, 1000);

    function resendcode(){
        $('form.main-form')[0].reset();
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        elem.innerHTML =  '00:'+timeLeft ;
        $('.resendcode').css({'display':'flex'});
        $("#timer-div").show();
        $("#resend-div").hide();
    }


    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            $("#timer-div").hide();
            $("#resend-div").show();
        } else {
            if(timeLeft<10)
                elem.innerHTML =  '00:0'+timeLeft  ;
            else
                elem.innerHTML = '00:'+timeLeft  ;
            timeLeft--;
        }
    }

    var defaultscreen = false;

    $('.otp__field-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());
            
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    
                    if(!defaultscreen){
                        $('#otp-fill2').addClass('error');
                        $('#otp-fill2 input').addClass('error');
                        defaultscreen = true;
                    }else{
                        $('#otp-fill2').removeClass('error');
                        $('#otp-fill2 input').removeClass('error');
                        $('#nextBtn').removeClass('disabledbtn');
                        $('.hideform').hide();
                        //$('#loader').show();
                        location.href = 'login-sucessfull.html';
                    }
                }
            }
        });
    });
}

function getInputVal(form){
    let value =  $(".inputField").val()
    console.log(value === '');
    if(value !== ''){
     $("#nextBtn, #nextBtn2").css({'display':'flex'});
     if(!$(`#${form}`).hasClass('fill')){
         $(`#${form}`).addClass('fill')
     }
    }else{
     $("#nextBtn, #nextBtn2").hide()
     if($(`#${form}`).hasClass('fill')){
         $(`#${form}`).removeClass('fill')
     }
    }
 }
 
 $(".radiochecked").change(function(){
     $(".radiochecked").parent().removeClass('active');
     $(this).parent().addClass('active');
     console.log($(this).val());
     $("#whocare-form").addClass('fill');
     setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
     // $("#nextBtn, #nextBtn2").css({'display':'flex'});
     
 })
 
 function getCheckbox(form,obj){

    if ($("#specialist").is(":checked")) {
        $("#nextBtn, #nextBtn2").attr({'href':'conditional-experience.html'});
    }else{
        $("#nextBtn, #nextBtn2").attr({'href':'carer-preference.html'});
    }

     $(obj).parent().parent().toggleClass('active')
     let a = $('.checkboxchecked:checkbox:checked').map(function() {
         return this.value;
     }).get();
     if(a.length == 0){
         if($(`#${form}`).hasClass('fill')){
             $(`#${form}`).removeClass('fill')
         }
         $("#nextBtn, #nextBtn2").hide();
         $("#nextBtn, #nextBtn2").addClass('disabledbtn');
     }else{
         if(!$(`#${form}`).hasClass('fill')){
             $(`#${form}`).addClass('fill')
         }
         $("#nextBtn, #nextBtn2").removeClass('disabledbtn');

     }
 }

 function getCheckbox2(form,obj){

     $(obj).parent().parent().toggleClass('active')
     let a = $('.checkboxchecked:checkbox:checked').map(function() {
         return this.value;
     }).get();
     if(a.length == 0){
         if($(`#${form}`).hasClass('fill')){
             $(`#${form}`).removeClass('fill')
         }
         $("#nextBtn, #nextBtn2").hide();
         $("#nextBtn, #nextBtn2").addClass('disabledbtn');
     }else{
         if(!$(`#${form}`).hasClass('fill')){
             $(`#${form}`).addClass('fill')
         }
         $("#nextBtn, #nextBtn2").removeClass('disabledbtn');

     }
 }

 $('.answer-item input').on('change', function() {
    $("#nextBtn, #nextBtn2").addClass('disabledbtn');
    $(".answer-item input[type='text']").each(function(){
        if($(this).val() != ""){
            $("#nextBtn, #nextBtn2").removeClass('disabledbtn');
          //  $("#helpconditionalexperience-form").addClass('fill');
        }
    });
    $(".answer-item input[type='checkbox']").each(function(){
        if($(this).is(":checked")){
            $("#nextBtn, #nextBtn2").removeClass('disabledbtn');
          //  $("#helpconditionalexperience-form").addClass('fill');
        }
    });
    
});

$(".radiocheckedcare").change(function(){
    $(".radiocheckedcare").parent().removeClass('active')
    $(this).parent().addClass('active')
    //console.log($(this).val());
    $("#carepreference-form").addClass('fill');
    setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
    
});


$(".radiocheckedcare").focus(function(){
    $(".radiocheckedcare").parent().removeClass('active')
    $(this).parent().addClass('active')
});

$(".radiocheckedtypeofcare").change(function(){
    $(".radiocheckedtypeofcare").parent().removeClass('active')
    $(this).parent().addClass('active')
    //console.log($(this).val());
    var res1 = $('input[name="typeofcare"]:checked').val();
    $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
    $("#typeofcarer-form").addClass('fill')
    setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
    
});

$(".radiocheckedtypeofcare").focus(function(){
    $(".radiocheckedtypeofcare").parent().removeClass('active')
    $(this).parent().addClass('active');
});

$(".radiocheckedhourlyduration").change(function(){
    $(".radiocheckedhourlyduration").parent().removeClass('active')
    $(this).parent().addClass('active')
    //console.log($(this).val());
    var res1 = $('input[name="hourlyduration"]:checked').val();
    $("#hourly-duration-form").addClass('fill');

    if(res1 == 'Fixed term'){
        //console.log("call");
        $("#fixed-term-date").trigger('click').trigger('focus');
    }else{
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
   
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedhourlyduration").focus(function(){
    $(".radiocheckedhourlyduration").parent().removeClass('active')
    $(this).parent().addClass('active');
});


$(".radiocheckedtypeofWhenStart").change(function(){
    $(".radiocheckedtypeofWhenStart").parent().removeClass('active')
    $(this).parent().addClass('active')
    //console.log($(this).val());
    var res1 = $('input[name="hourlywhenstartradio"]:checked').val();
    $("#hourly-when-start-form").addClass('fill');
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
    if(res1 == 'owndate'){
        //console.log("call");
        $("#fixed-term-sdate").trigger('click').trigger('focus');
    }else{
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    
     $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedtypeofWhenStart").focus(function(){
    $(".radiocheckedtypeofWhenStart").parent().removeClass('active')
    $(this).parent().addClass('active')
    
});

$(".radiocheckedtypeofperhour").change(function(){
    $(".radiocheckedtypeofperhour").parent().removeClass('active')
    $(".inputtypeofperhour").parent().parent().removeClass('active')
    $(".inputtypeofperhour").val("")
    $(this).parent().addClass('active')
    var res1 = $('input[name="perhour"]:checked').val();
    $("#hours-per-day-form").addClass('fill');
    if(res1 == "1 hour" || res1 == "2 hour" || res1 == "3 hour"){
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    } else{
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }
});

$(".radiocheckedtypeofperhour").focus(function(){
    $(".radiocheckedtypeofperhour").parent().removeClass('active')
    $(this).parent().addClass('active');
});

$('.inputtypeofperhour').change(function(){
    $('input[name="perhour"]').prop('checked', false);
    $(".radiocheckedtypeofperhour").parent().removeClass('active')
    $(this).parent().parent().addClass('active')
    $("#hours-per-day-form").addClass('fill')
    $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedOverNightWhenStart").change(function(){
    $(".radiocheckedOverNightWhenStart").parent().removeClass('active')
    $(this).parent().addClass('active')
    //console.log($(this).val());
    var res1 = $('input[name="overnightwhenstart"]:checked').val();
    $("#overnight-when-start-form").addClass('fill');

    if(res1 == 'owndate'){
        //console.log("call");
        $("#fixed-term-sdate").trigger('click').trigger('focus');
    }else{
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
   
     $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedOverNightWhenStart").focus(function(){
    $(".radiocheckedOverNightWhenStart").parent().removeClass('active')
    $(this).parent().addClass('active');
});

$(".radiocheckedliveWhenStart").change(function(){
    $(".radiocheckedliveWhenStart").parent().removeClass('active')
    $(this).parent().addClass('active')
    //console.log($(this).val());
    var res1 = $('input[name="livewhenstart"]:checked').val();
    $("#live-when-start-form").addClass('fill'); 
    if(res1 == 'owndate'){
        //console.log("call");
        $("#fixed-term-sdate").trigger('click').trigger('focus');
    }else{
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
   
    $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedliveWhenStart").focus(function(){
    $(".radiocheckedliveWhenStart").parent().removeClass('active')
    $(this).parent().addClass('active');
});

$(".radiocheckedovernightduration").change(function(){
    $(".radiocheckedovernightduration").parent().removeClass('active')
    $(this).parent().addClass('active')
    $("#overnight-duration-form").addClass('fill');

    var res1 = $('input[name="overnightduration"]:checked').val();
    if(res1 == 'Fixed term'){
        //console.log("call");
        $("#fixed-term-date").trigger('click').trigger('focus');
    }else{
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
    
    $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedovernightduration").focus(function(){
    $(".radiocheckedovernightduration").parent().removeClass('active')
    $(this).parent().addClass('active')
});

$(".radiocheckedliveduration").change(function(){
    $(".radiocheckedliveduration").parent().removeClass('active')
    $(this).parent().addClass('active')
    $("#live-duration-from").addClass('fill');
    
    var res1 = $('input[name="liveduration"]:checked').val();
    if(res1 == 'Fixed term'){
        //console.log("call");
        $("#fixed-term-date").trigger('click').trigger('focus');
    }else{
        setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
   
    $("#nextBtn, #nextBtn2").css({'display':'flex'});
});

$(".radiocheckedliveduration").focus(function(){
    $(".radiocheckedliveduration").parent().removeClass('active')
    $(this).parent().addClass('active');
  
});


if($('#fixed-term-date').length>0){
    var currentdate = moment().subtract(1, 'day').format('MM/DD/YYYY');
    //console.log(currentdate);
    $('#fixed-term-date').daterangepicker({
        "timePicker": false,
        "minDate": currentdate,
    }, function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });
}


$( document ).on( "click", ".calendar-table td span", function() {
    console.log( "Goodbye!" );  // jQuery 1.7+
    $(this).parent().trigger("click");
  });

 // $( document ).on( "click", "em.closeBtnDate2", function() { $("button.cancelBtn").trigger("click"); });

    document.onkeyup = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            $("button.cancelBtn").trigger("click");
        }   
    };

  $( document ).on( "click", ".applyBtn", function() { $("button.cancelBtn").trigger("click"); setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100); });
  
  $( document ).on( "click", ".calendar-table td span", function() {
    console.log( "Goodbye!" );  // jQuery 1.7+
    $(this).parent().trigger("click");
  });

  
  $(document).on("click","th.next.available",function(){
    $('.daterangepicker table > tbody  > tr').each(function(index, tr) { 
        if($(this).find("td.ends.off").length == 7){
            $(this).addClass("trDisplayNone")
        }
     });
});

$(document).on("click","th.prev.available",function(){
    $('.daterangepicker table > tbody  > tr').each(function(index, tr) { 
        if($(this).find("td.ends.off").length == 7){
            $(this).addClass("trDisplayNone")
        }
     });
});


if($('#fixed-term-sdate').length>0){
    var currentdate = moment().subtract(1, 'day').format('MM/DD/YYYY');
    //console.log(currentdate);
    $('#fixed-term-sdate').daterangepicker({
        "timePicker": false,
        "singleDatePicker": true,
        "minDate": currentdate,
    }, function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });
}

// Width limiting for answer items on conditional experience page

$(function(){ 
    $(".medium-center-sec-padding-new .conditional-experience-section .list-item").find('.answer-item label').each(function(){
        $(this).width(($(this).width() * 1.06));
    });
});

if($('#otherhours').length > 0) {
    otherhourfunction();
    $(window).on('resize', function(){
        otherhourfunction();
    });

    $( document ).on( "click", "span.close", function() { 
        console.log("closed");
        $(".modal").removeClass('show');

    });

    var currenthour = 1;

    $( document ).on( "click", ".addhour", function() { 
        if(currenthour <= 22){
            currenthour++;
            $("#othertime").val(currenthour+" hours");
        }
    });

    $( document ).on( "click", ".minushour", function() { 
        if(currenthour > 1){
            currenthour--;
            if(currenthour == 1)
                $("#othertime").val(currenthour+" hour");
            else
                $("#othertime").val(currenthour+" hours");
        }
    });

    $( document ).on( "click", "#confirmBtn", function() { 
        console.log("call");
        $(".modal").removeClass('show');
        $("#otherhours").val($("#othertime").val());
        $("#nextBtn").css({'display':'flex'});
    });

    function otherhourfunction(){
       
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        var win = $(this); //this = window
        $(".modal").removeClass('show');
        if (win.width() < 769) { 
            $('#otherhours').attr({'readonly' : 'readonly'});
            $( document ).on( "click", "#otherhours", function() { 
                $(".modal").addClass('show');
            });
        }else{
            $('#otherhours').removeAttr('readonly');
        }
    }

    window.onclick = function(event) {
        var modal = document.getElementById("modalpopup");
        if (event.target == modal) {
            $(".modal").removeClass('show');
        }
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
            $(".modal").removeClass('show');
        }   
    };
}

if(window.location.hash == "#back"){
    console.log("It is the Back Navigation");
    if($('#phonenumber-field').length > 0){
        $('#phonenumber-field').val('SW10 0AA');
        setTimeout(function() { getInputVal('postcode-form') }, 100);
    }
    if($('#family').length > 0){
        $("#family").prop("checked", true);
        $("#family").parent().addClass('active');
        $("#whocare-form").addClass('fill')
        $("#nextBtn").css({'display':'flex'});
    }

    if($('#specialist').length > 0){
        $('#specialist').prop('checked', true);
        $('#specialist').trigger('change');
        setTimeout(function() { getCheckbox('helpneeded-form',$('#specialist')) }, 100);
    }

    if($('#earlystage-dementia').length > 0){
        $('#earlystage-dementia').prop('checked', true);
        $('#earlystage-dementia').trigger('change');
    }

    if($('#Nopreference').length > 0){
        $("#Nopreference").prop("checked", true);
        $("#Nopreference").parent().addClass('active');
        $("#carepreference-form").addClass('fill');
        $("#nextBtn").css({'display':'flex'});
    }

    if($("#Hourly").length > 0){
        $(".radiocheckedtypeofcare").parent().removeClass('active');
        $("#Hourly").parent().addClass('active');

        $("#Hourly").prop("checked", true);
        //console.log($(this).val());
        var res1 = $('input[name="typeofcare"]:checked').val();
        $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
        $("#typeofcarer-form").addClass('fill');
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }

    if($("input[name='hourlyduration']").length > 0){
        $("#overnight").prop("checked", true);
        $("#overnight").parent().addClass('active');
        $("#hourly-duration-form").addClass('fill');
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }
    
    if($("input[name='hourlywhenstartradio']").length > 0){
        $("#assoonas").prop("checked", true);
        $("#assoonas").parent().addClass('active');
        $("#hourly-when-start-form").addClass('fill');
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }

    if($("input[name='overnightduration']").length > 0){
        $("#overnight").prop("checked", true);
        $("#overnight").parent().addClass('active');
        $("#overnight-duration-form").addClass('fill');
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }

    if($("input[name='liveduration']").length > 0){
        $("#overnight").prop("checked", true);
        $("#overnight").parent().addClass('active');
        $("#live-duration-from").addClass('fill');
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }
    
    

}

if($('.dropdown').length > 0) {
    console.log("click 619");
    $( document ).on( "click", "li.dropdown-item", function() { 

        var obj = $(this);
        

        if(obj.hasClass("multiple")){

            
            var t1 = obj.text().trim();
            var numberOfChecked = obj.parent().find('input:checkbox:checked').length;
            console.log(numberOfChecked);
            if(numberOfChecked > 1){
                var insideelement = '';
                obj.parent().find('input:checkbox:checked').each(function(){
                    
                    var tt = $(this).parent().text();
                    insideelement += '<a href="#" class="filter-tag-text subtitle" data-state="active"><span>'+tt+'</span><svg aria-label="Graphics Symbol" role="graphics-symbol" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5531 3.44679L3.4469 12.553Z" fill="#EEEEEE"></path><path d="M12.5531 3.44679L3.4469 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path><path d="M3.4469 3.44678L12.5531 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path></svg></a>';
                });

                obj.parent().prev().val(numberOfChecked + ' Selected');
                obj.parent().prev().attr({'data-select': numberOfChecked + ' Selected'});
                var selid = obj.parent().prev().attr('id');
                $("."+selid+"-selected-tag").html(insideelement);

            }else if(numberOfChecked == 1){

                var insideelement = '<a href="#" class="filter-tag-text subtitle" data-state="active"><span>'+t1+'</span><svg aria-label="Graphics Symbol" role="graphics-symbol" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5531 3.44679L3.4469 12.553Z" fill="#EEEEEE"></path><path d="M12.5531 3.44679L3.4469 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path><path d="M3.4469 3.44678L12.5531 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path></svg></a>';

                obj.parent().prev().val(t1);
                obj.parent().prev().attr({'data-select': t1});

                var selid = obj.parent().prev().attr('id');
                $("."+selid+"-selected-tag").html(insideelement);
                
            }else {
                obj.parent().prev().val("Select");
                obj.parent().prev().attr({'data-select': "Select"});
                var insideelement = '';
                var selid = obj.parent().prev().attr('id');
                $("."+selid+"-selected-tag").html(insideelement);
            }
        }else{
            var t1 = obj.text().trim();
            console.log(t1);
            //$('.dropdown').val(t1);
            obj.parent().prev().val(t1);
            
        }

        if($(this).parent().prev().attr('id') == "location-postcode-field2"){
            location.href="location-updated-loader.html";
        }

        if($(this).parent().prev().attr('id') == "location-postcode-field"){
            location.href="location-updated-loader.html";
        }
        // $('#nextBtn').trigger('focusout');
        $(".modal").removeClass('show');
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    }); 

    otherhourfunction();
    $(window).on('resize', function(){
        otherhourfunction();
    });

    $( document ).on( "click", "span.close", function() { 
        console.log("closed");
        $(".modal").removeClass('show');
    });

    $( document ).on( "click", "#confirmBtn", function() { 
        console.log("call");
        $(".modal").removeClass('show');
        $(`#postcode-form`).addClass('fill')
        $("#nextBtn, #nextBtn2").css({'display':'flex'});
    });

    function otherhourfunction(){
       
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];

        var win = $(this); //this = window
        
        if (win.width() < 769) { 
            $('#phonenumber-field').attr({'readonly' : 'readonly'});
            $( document ).on( "click", ".dropdown", function() { 
                console.log("769");
                $(this).next().addClass('show');
            });
        }else{
            $('#phonenumber-field').removeAttr('readonly');
            $(".modal").removeClass('show');
        }
    }

    window.onclick = function(event) {
        var modal = document.getElementById("modalpopup");
        if (event.target == modal) {
            $(".modal").removeClass('show');
        }
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
            $(".modal").removeClass('show');
        }   
    };
}

const siteNavigation = document.querySelector('.daterangepicker');


function openMenu() {
  siteNavigation.setAttribute('data-state', "opened");
}
function closeMenu() {
  siteNavigation.setAttribute('data-state', "closing");

  setTimeout(function() { siteNavigation.setAttribute('data-state', "closed"); }, 250);
}

if($("#log-in").length > 0){
    $("#log-in input").keyup(function(){
        if($("#username").val()!=""){
            $('#log-in button').removeAttr('disabled');
            $("#username__input__error-msg").hide();
        }else{
            $('#log-in button').attr({'disabled':'disabled'});
            $("#username__input__error-msg").show();
        }
    });
}

if($("#password-field").length > 0){
    $("#password-field").keyup(function(){
        if($("#password-field").val()!=""){
            $('#otp-screen button').removeAttr('disabled');
            $("#password__error-msg").hide();
        }else{
            $('#otp-screen button').attr({'disabled':'disabled'});
            $("#password__error-msg").show();
        }
    });
}


if($("#newpass-field").length > 0){
    $("input[type='password']").keyup(function(){
        if($("#newpass-field").val()!="" && $("#confirmpass-field").val()!=""){
            $('#reset-password button').removeAttr('disabled');
            $("#newpass-field__error-msg").hide();
        }else{
            $('#reset-password button').attr({'disabled':'disabled'});
            $("#newpass-field__error-msg").show();
        }
    });
}


if($('.signup-popup').length > 0){
    $( document ).on( "click", ".signup-popup", function() { 
        $(".modal").addClass('show');
    });

    window.onclick = function(event) {
        var modal = document.getElementById("modalpopup");
        if (event.target == modal) {
            $(".modal").removeClass('show');
        }
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
            $(".modal").removeClass('show');
        }   
    };

    $( document ).on( "click", "span.close", function() { 
        console.log("closed");
        $(".modal").removeClass('show');
    });
}

if($('#VerifyMobile').length > 0){
    $( document ).on( "click", "#VerifyMobile", function() { 
        console.log("call");
        $("#Verifymobilepopup").addClass('show');
    });

    $( document ).on( "click", "#VerifyMobile1", function() { 
        $("#Verifymobilepopup").removeClass('show');
        $("#Verifypopup").addClass('show');
    });

    window.onclick = function(event) {
        var modal = document.getElementById("modalpopup");
        if (event.target == modal) {
            $(".modal").removeClass('show');
        }
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
            $(".modal").removeClass('show');
        }   
    };

    $( document ).on( "click", "span.close", function() { 
        console.log("closed");
        $(".modal").removeClass('show');
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


$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 155;  // How many characters are shown by default
    var showCharbrif = 70;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "More";
    var lesstext = "Less";
    

    if($('.more').length>0){
        $('.more').each(function() {
            var content = $(this).html();
    
            if(content.length > showChar) {
    
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
    
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
    
                $(this).html(html);
            }
    
        });
    }

    if($('.more-brif').length>0){
        $('.more-brif').each(function() {
            var content = $(this).html();
    
            if(content.length > showCharbrif) {
    
                var c = content.substr(0, showCharbrif);
                var h = content.substr(showCharbrif, content.length - showCharbrif);
    
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

    if($('.changeratemodal').length>0){
        $( document ).on( "click", ".changeratemodal", function() { 
            $("#changeratemodalpopup").addClass('show');
        });
    }
});

if($('.specificreq-modal').length>0){
    $( document ).on( "click", ".specificreq-modal", function() { 
        $("#specificreumodalpopup").addClass('show');
    });
}

if($('#postcode-field').length>0){
    var win = $(this); //this = window
        
    if (win.width() < 769) { 
        $('#postcode-field').attr({'readonly' : 'readonly'});
        $( document ).on( "click", "#postcode-field", function() { 
            $(".modal").removeClass('show');
            $(".dropdown").blur();
            $("#postcode-popup").addClass('show');
            $("#phonenumber-field2").focus();
        });
    }else{

    }
}

// if($('.invite-popup').length>0){
//     $( document ).on( "click", ".invite-popup", function() { 
//         $("#invitemodalpopup").addClass('show');
//     });
// }

if($('.invite-popup').length>0){
    $( document ).on( "click", ".invite-popup", function() { 
        $("#invitemodalpopup").addClass('show');
    });
}

if($('.multiple-invite-popup').length>0){
    $( document ).on( "click", ".multiple-invite-popup", function() { 
        $("#selectjobpopup").addClass('show');
    });
}

if($('.notification-modal').length>0){
    $( document ).on( "click", ".notification-modal", function() { 
        $("#notificationpupup").addClass('show');
    });
}

if($('.filter-modal').length>0){
    $( document ).on( "click", ".filter-modal", function() { 
        $("#modifysearchpopup").addClass('show');
    });
}

//open View Profile modal
if($('.carerprofile-modal').length>0){
    $( document ).on( "click", ".carerprofile-modal", function() { 
        $("#carerprofile-modal").addClass('show');
    });
}

/*if($('#specificreumodalpopup').length>0){
    console.log("call");*/
$( document ).on( "change", ".preferences-checkbox-group input", function() {
    console.log("Checkbox");
    $("#specificreumodalpopup .addbtn").attr({'disabled':'disabled'});
    $(".preferences-checkbox-group input[type='checkbox']").each(function(){
        console.log("Checked");
        if($(this).is(":checked")){
            console.log("Checked True");
            $("#specificreumodalpopup .addbtn").removeAttr('disabled');
        }
    });
});

$( document ).on( "change", "#carerinterestmodalpopup input", function() {
    console.log("Checkbox");
    $("#carerinterestmodalpopup .addbtn").attr({'disabled':'disabled'});
    $("#carerinterestmodalpopup input[type='checkbox']").each(function(){
        console.log("Checked");
        if($(this).is(":checked")){
            console.log("Checked True");
            $("#carerinterestmodalpopup .addbtn").removeAttr('disabled');
        }
    });
});

$( document ).on( "change", "#secondlanmodalpopup input", function() {
    console.log("Checkbox");
    $("#secondlanmodalpopup .addbtn").attr({'disabled':'disabled'});
    $("#secondlanmodalpopup input[type='checkbox']").each(function(){
        console.log("Checked");
        if($(this).is(":checked")){
            console.log("Checked True");
            $("#secondlanmodalpopup .addbtn").removeAttr('disabled');
        }
    });
});

$( document ).on( "change", "#prefferedratemodalpopup input", function() {
    console.log("Checkbox");
    $("#prefferedratemodalpopup .addbtn").attr({'disabled':'disabled'});
    $("#prefferedratemodalpopup input[type='number']").each(function(){
        console.log("Checked");
        if($(this).val()!=""){
            console.log("Checked True");
            $("#prefferedratemodalpopup .addbtn").removeAttr('disabled');
        }
    });
});

$( document ).on( "change", "#changeratemodalpopup input", function() {
    console.log("Checkbox");
    $("#changeratemodalpopup .addbtn").attr({'disabled':'disabled'});
    $("#changeratemodalpopup input[type='number']").each(function(){
        console.log("Checked");
        if($(this).val()!=""){
            console.log("Checked True");
            $("#changeratemodalpopup .addbtn").removeAttr('disabled');
        }
    });
});

$( document ).on( "change", "#selectfundingmodalpopup input", function() {
    console.log("Checkbox");
    $("#selectfundingmodalpopup .addbtn").attr({'disabled':'disabled'});
    $("#selectfundingmodalpopup input[type='radio']").each(function(){
        console.log("Checked");
        if($(this).is(":checked")){
            console.log("Checked True");
            $("#selectfundingmodalpopup .addbtn").removeAttr('disabled');
        }
    });
});


/*}

if($('#specificreumodalpopup').length>0){*/
$( document ).on( "click", "#specificreumodalpopup .addbtn", function() {
    $("#carerinterestmodalpopup").addClass('show');
    $("#specificreumodalpopup").removeClass('show');
});
$( document ).on( "click", "#specificreumodalpopup .skipbtn", function() {
    $("#carerinterestmodalpopup").addClass('show');
    $("#specificreumodalpopup").removeClass('show');
});
/*}*/

$( document ).on( "click", "#carerinterestmodalpopup .addbtn", function() {
    $("#secondlanmodalpopup").addClass('show');
    $("#carerinterestmodalpopup").removeClass('show');
});
$( document ).on( "click", "#carerinterestmodalpopup .skipbtn", function() {
    $("#secondlanmodalpopup").addClass('show');
    $("#carerinterestmodalpopup").removeClass('show');
});
$( document ).on( "click", "#carerinterestmodalpopup .backbtn", function() {
    console.log("call ");
    $("#specificreumodalpopup").addClass('show');
    $("#carerinterestmodalpopup").removeClass('show');
});


$( document ).on( "click", "#secondlanmodalpopup .addbtn", function() {
    $("#prefferedratemodalpopup").addClass('show');
    $("#secondlanmodalpopup").removeClass('show');
});
$( document ).on( "click", "#secondlanmodalpopup .skipbtn", function() {
    $("#prefferedratemodalpopup").addClass('show');
    $("#secondlanmodalpopup").removeClass('show');
});
$( document ).on( "click", "#secondlanmodalpopup .backbtn", function() {
    console.log("call ");
    $("#carerinterestmodalpopup").addClass('show');
    $("#secondlanmodalpopup").removeClass('show');
});


$( document ).on( "click", "#prefferedratemodalpopup .addbtn", function() {
    $("#selectfundingmodalpopup").addClass('show');
    $("#prefferedratemodalpopup").removeClass('show');
});
$( document ).on( "click", "#prefferedratemodalpopup .skipbtn", function() {
    $("#selectfundingmodalpopup").addClass('show');
    $("#prefferedratemodalpopup").removeClass('show');
});
$( document ).on( "click", "#prefferedratemodalpopup .backbtn", function() {
    $("#secondlanmodalpopup").addClass('show');
    $("#prefferedratemodalpopup").removeClass('show');
});


$( document ).on( "click", "#selectfundingmodalpopup .backbtn", function() {
    $("#prefferedratemodalpopup").addClass('show');
    $("#selectfundingmodalpopup").removeClass('show');
});

$( document ).on( "click", "#selectfundingmodalpopup .addbtn", function() {
    location.href="job-updated-loader.html";
});

$( document ).on( "click", "#changeratemodalpopup .addbtn", function() {
    location.href="rate-updated-loader.html";
});

$( document ).on( "click", "#invitemodalpopup .addbtn", function() {
    location.href="invitaion-sent-loader.html";
});

$( document ).on( "click", "#selectjobpopup .addbtn", function() {
    $("#multipleinvitetojob-popup").addClass('show');
    $("#selectjobpopup").removeClass('show');
});

    // Congratulation Banner Hide after 1.2 Sec
    if($('#congratulations__banner-section').length>0){
        $(document).ready(function() {
            setTimeout(function() { $("#congratulations__banner-section").slideUp( "slow", function() {}); }, 1200);
        });
    }

    // On Location Change Field Redirect on Success
    $("#location-postcode-field").change(function(){
        location.href="location-updated-loader.html";
    });

    // Show Filter Mobile View 
    $( document ).on( "click", "#modifysearchpopup .filter-title", function() {
        console.log("call 1237");
        $(this).next().slideToggle();
        $(this).parent().toggleClass("active");
    });

    // Show More or Less Events on Search Filter Mobile View
    $( document ).on( "click", "#modifysearchpopup .show-more-options", function() {
        $(this).parent().parent().toggleClass("showmore");
        if($(this).parent().parent().hasClass("showmore")){
            $(this).html('Show less');
        }else{
            $(this).html('Show more');
        }
    });

    // Hide Receive updates via email  
    if($('.cards-list__items-card-notification').length>0){
        $( document ).on( "click", ".cards-list__items-card-notification button.close-btn", function() {
            $('.cards-list__items-card-notification').slideToggle();
           // $('.cards-list__items-card-notification').hide();
        });
        
    }

    $(".carerprofile-modal").click(function(){
        $("#carerprofile-modal .modal-content").animate({left:'0%'},300)
    })

    function closePopup(){
        $("#carerprofile-modal .modal-content").animate({left:'80%'},300)
        setTimeout(() => {
            $("#carerprofile-modal").removeClass("show");
        }, 400);
    }
    
/*

    // Select Multiple Checkbox Event

    function DBXPclick() {
        var listbutton = $("#selectedDBXP");
        if ($(listbutton).attr("aria-expanded") == "true") {
          $(listbutton).attr("aria-expanded", "false");
          $("#choicelist").css("display", "none");
          $("#selectedDBXP .fa-chevron-down").removeClass("fa-chevron-down--open");
        } else {
          $(listbutton).attr("aria-expanded", "true");
          $("#choicelist").css("display", "block");
          $("#selectedDBXP .fa-chevron-down").addClass("fa-chevron-down--open");
        }
      }
      
      $(function() {
        $("input[name='language']").on("change", function() {
          var itemCount = $("input[name='language']:checked").length;
          if (itemCount == 0)
            $("#DBXPList").html("");
          else if (itemCount == 1)
            $("#DBXPList").html($("label[for='" + $("input[name='language']:checked")[0].id + "']").text());
          else
            $("#DBXPList").html(itemCount + " items selected");
        });
        
          $("input[name='language']").on("keyup", function(e) {
            if (e.keyCode == 27)
              {
                DBXPclick();
                $("#selectedDBXP").focus();
              }
          });
      }); */