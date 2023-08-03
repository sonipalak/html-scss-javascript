/*if($('.form-control__custom').length > 0) {
    $('.form-control__custom').hover(function(){
        $(this).parent().trigger('hover');
        console.log('hover');
    });
}*/

/** Checkbox Change Event **/
if ($('input[type="checkbox"]').length > 0) {
    $('input[type="checkbox"]').hover(function () {
      console.log("hover");
      $(this).parent().trigger("hover");
    });
    $('input[type="checkbox"]').focus(function () {
      console.log("focus" + $(this).attr("id"));
  
      $(this).parent().parent().trigger("focus");
    });
  }
  /*
  $(".language-dropdown .form__input-group button").click(function(){
      console.log("trigger 23");
      var listid = $(this).attr("aria-controls");
      // $(this).trigger('click');
      $("#"+listid).removeAttr('tabindex');
      setTimeout(function() { $("#"+listid).find("li:first-child input").trigger('focus'); }, 200);
  });
   */
  $("ul[role='listbox'] li:last-child input").blur(function () {
    console.log("trigger 29");
    setTimeout(function () {
      obj = $(".language-dropdown .form__input-group button");
      obj.attr({ "aria-expanded": "false" });
      obj.next().removeClass("show");
      obj.attr({ "aria-expanded": "false" });
    }, 100);
  });
  
  /** Signup Page Input change Event **/
  if ($("#sign-up").length > 0) {
    $("#sign-up input").change(function () {
      console.log("input change");
      if ($("#name-field").val() != "" && $("#phonenumber-field").val() != "") {
        $("#sign-up button").removeAttr("disabled");
        $("#phonenumber-field__error-msg").hide();
        $("#name-field-error").hide();
      } else if ($("#name-field").val() != "") {
        $("#sign-up button").attr({ disabled: "disabled" });
        $("#phonenumber-field__error-msg").show();
      } else {
        $("#sign-up button").attr({ disabled: "disabled" });
        $("#name-field__error-msg").show();
      }
    });
  
    $("#sign-up input").keyup(function () {
      console.log("keyup change");
      if ($("#name-field").val() != "" && $("#phonenumber-field").val() != "") {
        $("#sign-up button").removeAttr("disabled");
        $("#phonenumber-field__error-msg").hide();
        $("name-field__error-msg").hide();
      } else if ($("#name-field").val() != "") {
        $("#sign-up button").attr({ disabled: "disabled" });
        $("#phonenumber-field__error-msg").show();
      } else {
        $("#sign-up button").attr({ disabled: "disabled" });
        $("#name-field__error-msg").show();
      }
    });
  
    $("#sign-up button").click(function () {
      console.log("click change");
      if ($("#name-field").val() != "" && $("#phonenumber-field").val() != "") {
        location.href = "otp-screen.html";
      } else if ($("#name-field").val() != "") {
        $("#name-field__error-msg").show();
      } else {
        $("#phonenumber-field__error-msg").show();
      }
    });
  }
  
  /** OTP Change Event **/
  if ($("#otp-fill").length > 0) {
    $("#digit-1").focus();
    var timeLeft = 30;
    var elem = document.getElementById("Timer");
  
    var timerId = setInterval(countdown, 1000);
  
    function resendcode() {
      $("form.main-form")[0].reset();
      timeLeft = 30;
      timerId = setInterval(countdown, 1000);
      elem.innerHTML = "00:" + timeLeft;
      $(".resendcode").css({ display: "flex" });
      $("#timer-div").show();
      $("#resend-div").hide();
    }
  
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        $("#timer-div").hide();
        $("#resend-div").show();
      } else {
        if (timeLeft < 10) elem.innerHTML = "00:0" + timeLeft;
        else elem.innerHTML = "00:" + timeLeft;
        timeLeft--;
      }
    }
  
    var defaultscreen = false;
  
    $(".otp__field-group")
      .find("input")
      .each(function () {
        $(this).attr("maxlength", 1);
        $(this).on("keyup", function (e) {
          var parent = $($(this).parent());
  
          if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find("input#" + $(this).data("previous"));
  
            if (prev.length) {
              $(prev).select();
            }
          } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 39
          ) {
            var next = parent.find("input#" + $(this).data("next"));
  
            if (next.length) {
              $(next).select();
            } else {
              if (!defaultscreen) {
                $("#otp-fill").addClass("error");
                $("#otp-fill input").addClass("error");
                defaultscreen = true;
              } else {
                $("#otp-fill").removeClass("error");
                $("#otp-fill input").removeClass("error");
                $("#nextBtn").removeClass("disabledbtn");
                $(".hideform").hide();
                //$('#loader').show();
                location.href = "hourly-submit-form.html";
              }
            }
          }
        });
      });
  }
  
  /** OTP Timer Change Event **/
  if ($("#otp-fill2").length > 0) {
    $("#digit-1").focus();
    var timeLeft = 30;
    var elem = document.getElementById("Timer");
  
    var timerId = setInterval(countdown, 1000);
  
    function resendcode() {
      $("form.main-form")[0].reset();
      timeLeft = 30;
      timerId = setInterval(countdown, 1000);
      elem.innerHTML = "00:" + timeLeft;
      $(".resendcode").css({ display: "flex" });
      $("#timer-div").show();
      $("#resend-div").hide();
    }
  
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        $("#timer-div").hide();
        $("#resend-div").show();
      } else {
        if (timeLeft < 10) elem.innerHTML = "00:0" + timeLeft;
        else elem.innerHTML = "00:" + timeLeft;
        timeLeft--;
      }
    }
  
    var defaultscreen = false;
  
    $(".otp__field-group")
      .find("input")
      .each(function () {
        $(this).attr("maxlength", 1);
        $(this).on("keyup", function (e) {
          var parent = $($(this).parent());
  
          if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find("input#" + $(this).data("previous"));
  
            if (prev.length) {
              $(prev).select();
            }
          } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 39
          ) {
            var next = parent.find("input#" + $(this).data("next"));
  
            if (next.length) {
              $(next).select();
            } else {
              if (!defaultscreen) {
                $("#otp-fill2").addClass("error");
                $("#otp-fill2 input").addClass("error");
                defaultscreen = true;
              } else {
                $("#otp-fill2").removeClass("error");
                $("#otp-fill2 input").removeClass("error");
                $("#nextBtn").removeClass("disabledbtn");
                $(".hideform").hide();
                //$('#loader').show();
                location.href = "login-sucessfull.html";
              }
            }
          }
        });
      });
  }
  
  /** On Any Saas Pages form Input Change Event **/
  function getInputVal(form) {
    console.log("call 232");
    let value = $(".inputField").val();
    console.log(value === "");
    if (value !== "") {
      $("#nextBtn, #nextBtn2")
        .removeClass("disabledbtn")
        .css({ display: "flex" });
      if (!$(`#${form}`).hasClass("fill")) {
        $(`#${form}`).addClass("fill");
      }
    } else {
      $("#nextBtn, #nextBtn2").hide();
      if ($(`#${form}`).hasClass("fill")) {
        $(`#${form}`).removeClass("fill");
      }
    }
  }
  
  /** On Any Saas Pages form Input Change Event **/
  $(".radiochecked").change(function () {
    $(".radiochecked").parent().removeClass("active");
    $(this).parent().addClass("active");
    console.log($(this).val());
    $("#whocare-form").addClass("fill");
    setTimeout(function () {
      location.href = $("#nextBtn").attr("href");
    }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
  });
  
  /** On Any Saas Pages form Input Change Event **/
  function getCheckbox(form, obj) {
    if ($("#specialist").is(":checked")) {
      $("#nextBtn, #nextBtn2").attr({ href: "conditional-experience.html" });
    } else {
      $("#nextBtn, #nextBtn2").attr({ href: "carer-preference.html" });
    }
  
    $(obj).parent().parent().toggleClass("active");
    let a = $(".checkboxchecked:checkbox:checked")
      .map(function () {
        return this.value;
      })
      .get();
    if (a.length == 0) {
      if ($(`#${form}`).hasClass("fill")) {
        $(`#${form}`).removeClass("fill");
      }
      $("#nextBtn, #nextBtn2").hide();
      $("#nextBtn, #nextBtn2").addClass("disabledbtn");
    } else {
      if (!$(`#${form}`).hasClass("fill")) {
        $(`#${form}`).addClass("fill");
      }
      $("#nextBtn, #nextBtn2").removeClass("disabledbtn");
    }
  }
  
  /** On Any Saas Pages form Input Change Event **/
  function getCheckbox2(form, obj) {
    $(obj).parent().parent().toggleClass("active");
    let a = $(".checkboxchecked:checkbox:checked")
      .map(function () {
        return this.value;
      })
      .get();
    if (a.length == 0) {
      if ($(`#${form}`).hasClass("fill")) {
        $(`#${form}`).removeClass("fill");
      }
      $("#nextBtn, #nextBtn2").hide();
      $("#nextBtn, #nextBtn2").addClass("disabledbtn");
    } else {
      if (!$(`#${form}`).hasClass("fill")) {
        $(`#${form}`).addClass("fill");
      }
      $("#nextBtn, #nextBtn2").removeClass("disabledbtn");
    }
  }
  
  /** On Checkbox Change Event **/
  $(".answer-item input").on("change", function () {
    $("#nextBtn, #nextBtn2").addClass("disabledbtn");
    $(".answer-item input[type='text']").each(function () {
      if ($(this).val() != "") {
        $("#nextBtn, #nextBtn2").removeClass("disabledbtn");
        //  $("#helpconditionalexperience-form").addClass('fill');
      }
    });
    $(".answer-item input[type='checkbox']").each(function () {
      if ($(this).is(":checked")) {
        $("#nextBtn, #nextBtn2").removeClass("disabledbtn");
        //  $("#helpconditionalexperience-form").addClass('fill');
      }
    });
  });
  
  /** On Radio Change Event **/
  $("#job-posting .radiocheckedcare").change(function () {
    $(".radiocheckedcare").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    $("#carepreference-form").addClass("fill");
    setTimeout(function () {
      location.href = $("#nextBtn").attr("href");
    }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
  });
  
  $(".radiocheckedcare").focus(function () {
    $(".radiocheckedcare").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $("#job-posting .radiocheckedtypeofcare").change(function () {
    $(".radiocheckedtypeofcare").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="typeofcare"]:checked').val();
    $("#nextBtn, #nextBtn2").attr({ href: res1 + "-duration.html" });
    $("#typeofcarer-form").addClass("fill");
    setTimeout(function () {
      location.href = $("#nextBtn").attr("href");
    }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
  });
  
  $(".radiocheckedtypeofcare").focus(function () {
    $(".radiocheckedtypeofcare").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $("#job-posting .radiocheckedhourlyduration").change(function () {
    $(".radiocheckedhourlyduration").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="hourlyduration"]:checked').val();
    $("#hourly-duration-form").addClass("fill");
  
    if (res1 == "Fixed term") {
      //console.log("call");
      $("#fixed-term-date").trigger("click").trigger("focus");
    } else {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
  });
  
  $(".radiocheckedhourlyduration").focus(function () {
    $(".radiocheckedhourlyduration").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $("#job-posting .radiocheckedtypeofWhenStart").change(function () {
    $(".radiocheckedtypeofWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="hourlywhenstartradio"]:checked').val();
    $("#hourly-when-start-form").addClass("fill");
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
    if (res1 == "owndate") {
      //console.log("call");
      $("#fixed-term-sdate").trigger("click").trigger("focus");
    } else {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }
  
    $("#nextBtn, #nextBtn2").css({ display: "flex" });
  });
  
  $(".radiocheckedtypeofWhenStart").focus(function () {
    $(".radiocheckedtypeofWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $("#job-posting .radiocheckedtypeofperhour").change(function () {
    $(".radiocheckedtypeofperhour").parent().removeClass("active");
    $(".inputtypeofperhour").parent().parent().removeClass("active");
    $(".inputtypeofperhour").val("");
    $(this).parent().addClass("active");
    var res1 = $('input[name="perhour"]:checked').val();
    $("#hours-per-day-form").addClass("fill");
    if (res1 == "1 hour" || res1 == "2 hour" || res1 == "3 hour") {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    } else {
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  });
  
  $(".radiocheckedtypeofperhour").focus(function () {
    $(".radiocheckedtypeofperhour").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $(".inputtypeofperhour").change(function () {
    $('input[name="perhour"]').prop("checked", false);
    $(".radiocheckedtypeofperhour").parent().removeClass("active");
    $(this).parent().parent().addClass("active");
    $("#hours-per-day-form").addClass("fill");
    $("#nextBtn, #nextBtn2").css({ display: "flex" });
  });
  
  $(".radiocheckedOverNightWhenStart").change(function () {
    $(".radiocheckedOverNightWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="overnightwhenstart"]:checked').val();
    $("#overnight-when-start-form").addClass("fill");
  
    if (res1 == "owndate") {
      //console.log("call");
      $("#fixed-term-sdate").trigger("click").trigger("focus");
    } else {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  
    $("#nextBtn, #nextBtn2").css({ display: "flex" });
  });
  
  $(".radiocheckedOverNightWhenStart").focus(function () {
    $(".radiocheckedOverNightWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $(".radiocheckedliveWhenStart").change(function () {
    $(".radiocheckedliveWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="livewhenstart"]:checked').val();
    $("#live-when-start-form").addClass("fill");
    if (res1 == "owndate") {
      //console.log("call");
      $("#fixed-term-sdate").trigger("click").trigger("focus");
    } else {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  
    $("#nextBtn, #nextBtn2").css({ display: "flex" });
  });
  
  $(".radiocheckedliveWhenStart").focus(function () {
    $(".radiocheckedliveWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $(".radiocheckedovernightduration").change(function () {
    $(".radiocheckedovernightduration").parent().removeClass("active");
    $(this).parent().addClass("active");
    $("#overnight-duration-form").addClass("fill");
  
    var res1 = $('input[name="overnightduration"]:checked').val();
    if (res1 == "Fixed term") {
      //console.log("call");
      $("#fixed-term-date").trigger("click").trigger("focus");
    } else {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  
    $("#nextBtn, #nextBtn2").css({ display: "flex" });
  });
  
  $(".radiocheckedovernightduration").focus(function () {
    $(".radiocheckedovernightduration").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  $(".radiocheckedliveduration").change(function () {
    $(".radiocheckedliveduration").parent().removeClass("active");
    $(this).parent().addClass("active");
    $("#live-duration-from").addClass("fill");
  
    var res1 = $('input[name="liveduration"]:checked').val();
    if (res1 == "Fixed term") {
      //console.log("call");
      $("#fixed-term-date").trigger("click").trigger("focus");
    } else {
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  
    $("#nextBtn, #nextBtn2").css({ display: "flex" });
  });
  
  $(".radiocheckedliveduration").focus(function () {
    $(".radiocheckedliveduration").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  
  /** Select Datepicker Trigger **/
  if ($("#fixed-term-date").length > 0) {
    var currentdate = moment().subtract(1, "day").format("MM/DD/YYYY");
    //console.log(currentdate);
    $("#fixed-term-date").daterangepicker(
      {
        timePicker: false,
        minDate: currentdate,
      },
      function (start, end, label) {
        console.log(
          "New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')"
        );
      }
    );
  }
  
  /** Datepicker Close Event Trigger **/
  $(document).on("click", ".calendar-table td span", function () {
    console.log("Goodbye!"); // jQuery 1.7+
    $(this).parent().trigger("click");
  });
  
  // $( document ).on( "click", "em.closeBtnDate2", function() { $("button.cancelBtn").trigger("click"); });
  
  /** On Escape Prtess Datepicker Close Event Trigger **/
  document.onkeyup = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      $("button.cancelBtn").trigger("click");
    }
  };
  
  $(document).on("click", ".applyBtn", function () {
    $("button.cancelBtn").trigger("click");
    console.log("call 581");
    if(!$("body").hasClass('closemodaltop')){
      setTimeout(function () {
        location.href = $("#nextBtn").attr("href");
      }, 100);
    }else{
      $("button.closeBtnDate").trigger("click");
    }
  });
  
  
  /** Datepicker Close Event Trigger **/
  $(document).on("click", ".calendar-table td span", function () {
    console.log("Goodbye!"); // jQuery 1.7+
    $(this).parent().trigger("click");
  });
  
  /** Datepicker On Next Event Trigger **/
  $(document).on("click", "th.next.available", function () {
    $(".daterangepicker table > tbody  > tr").each(function (index, tr) {
      if ($(this).find("td.ends.off").length == 7) {
        $(this).addClass("trDisplayNone");
      }
    });
  });
  
  /** Datepicker On Previous Event Trigger **/
  $(document).on("click", "th.prev.available", function () {
    $(".daterangepicker table > tbody  > tr").each(function (index, tr) {
      if ($(this).find("td.ends.off").length == 7) {
        $(this).addClass("trDisplayNone");
      }
    });
  });
  
  /** Single Datepicker Trigger **/
  if ($("#fixed-term-sdate").length > 0) {
    var currentdate = moment().subtract(1, "day").format("MM/DD/YYYY");
    //console.log(currentdate);
    $("#fixed-term-sdate").daterangepicker(
      {
        timePicker: false,
        singleDatePicker: true,
        minDate: currentdate,
      },
      function (start, end, label) {
        console.log(
          "New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')"
        );
      }
    );
  }
  
  // Width limiting for answer items on conditional experience page
  $(function () {
    $(".medium-center-sec-padding-new .conditional-experience-section .list-item")
      .find(".answer-item label")
      .each(function () {
        $(this).width($(this).width() * 1.06);
      });
  });
  
  /** Hours Change Modal Event **/
  if ($("#otherhours").length > 0) {
    otherhourfunction();
    $(window).on("resize", function () {
      otherhourfunction();
    });
  
    $(document).on("click", "span.close", function () {
      console.log("closed");
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
    });
  
    var currenthour = 1;
  
    $(document).on("click", ".addhour", function () {
      if (currenthour <= 22) {
        currenthour++;
        $("#othertime").val(currenthour + " hours");
      }
    });
  
    $(document).on("click", ".minushour", function () {
      if (currenthour > 1) {
        currenthour--;
        if (currenthour == 1) $("#othertime").val(currenthour + " hour");
        else $("#othertime").val(currenthour + " hours");
      }
    });
  
    $(document).on("click", "#confirmBtn", function () {
      console.log("call");
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
      $("#otherhours").val($("#othertime").val());
      $("#nextBtn").css({ display: "flex" });
    });
  
    function otherhourfunction() {
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];
  
      var win = $(this); //this = window
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
      if (win.width() < 769) {
        $("#otherhours").attr({ readonly: "readonly" });
        $(document).on("click", "#otherhours", function () {
          $(".modal").addClass("show");
          $("body").addClass("no-scroll");
        });
      } else {
        $("#otherhours").removeAttr("readonly");
      }
    }
  
    window.onclick = function (event) {
      var modal = document.getElementById("modalpopup");
      if (event.target == modal) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  
    document.onkeyup = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  }
  
  /** On Any Page Back event Bind the Load Previous Values **/
  if (window.location.hash == "#back") {
    console.log("It is the Back Navigation");
    if ($("#phonenumber-field").length > 0) {
      $("#phonenumber-field").val("SW10 0AA");
      setTimeout(function () {
        getInputVal("postcode-form");
      }, 100);
    }
    if ($("#family").length > 0) {
      $("#family").prop("checked", true);
      $("#family").parent().addClass("active");
      $("#whocare-form").addClass("fill");
      $("#nextBtn").css({ display: "flex" });
    }
  
    if ($("#specialist").length > 0) {
      $("#specialist").prop("checked", true);
      $("#specialist").trigger("change");
      setTimeout(function () {
        getCheckbox("helpneeded-form", $("#specialist"));
      }, 100);
    }
  
    if ($("#earlystage-dementia").length > 0) {
      $("#earlystage-dementia").prop("checked", true);
      $("#earlystage-dementia").trigger("change");
    }
  
    if ($("#Nopreference").length > 0) {
      $("#Nopreference").prop("checked", true);
      $("#Nopreference").parent().addClass("active");
      $("#carepreference-form").addClass("fill");
      $("#nextBtn").css({ display: "flex" });
    }
  
    if ($("#Hourly").length > 0) {
      $(".radiocheckedtypeofcare").parent().removeClass("active");
      $("#Hourly").parent().addClass("active");
  
      $("#Hourly").prop("checked", true);
      //console.log($(this).val());
      var res1 = $('input[name="typeofcare"]:checked').val();
      $("#nextBtn, #nextBtn2").attr({ href: res1 + "-duration.html" });
      $("#typeofcarer-form").addClass("fill");
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  
    if ($("input[name='hourlyduration']").length > 0) {
      $("#overnight").prop("checked", true);
      $("#overnight").parent().addClass("active");
      $("#hourly-duration-form").addClass("fill");
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  
    if ($("input[name='hourlywhenstartradio']").length > 0) {
      $("#assoonas").prop("checked", true);
      $("#assoonas").parent().addClass("active");
      $("#hourly-when-start-form").addClass("fill");
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  
    if ($("input[name='overnightduration']").length > 0) {
      $("#overnight").prop("checked", true);
      $("#overnight").parent().addClass("active");
      $("#overnight-duration-form").addClass("fill");
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  
    if ($("input[name='liveduration']").length > 0) {
      $("#overnight").prop("checked", true);
      $("#overnight").parent().addClass("active");
      $("#live-duration-from").addClass("fill");
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  }
  
  /** Dropdown Event Bind **/
  if ($(".dropdown").length > 0) {
    console.log("click 619");
    $(document).on("click", "li.dropdown-item", function () {
      var obj = $(this);
      
      if (obj.hasClass("multiple")) {
        if (obj.find("input:checkbox:checked").length > 0) {
          obj.attr({ "aria-selected": "true" });
        } else {
          obj.attr({ "aria-selected": "false" });
        }
  
        var t1 = obj.text().trim();
        var numberOfChecked = obj.parent().find("input:checkbox:checked").length;
        console.log(numberOfChecked);
        if (numberOfChecked > 1) {
          var insideelement = "";
          obj
            .parent()
            .find("input:checkbox:checked")
            .each(function () {
              var tt = $(this).parent().text();
              insideelement +=
                '<a href="#" class="filter-tag-text subtitle" data-state="active"><span>' +
                tt +
                '</span><svg aria-label="Graphics Symbol" role="graphics-symbol" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5531 3.44679L3.4469 12.553Z" fill="#EEEEEE"></path><path d="M12.5531 3.44679L3.4469 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path><path d="M3.4469 3.44678L12.5531 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path></svg></a>';
            });
          obj.parent().prev().removeClass("noselect");
          obj
            .parent()
            .prev()
            .val(numberOfChecked + " Selected");
          obj
            .parent()
            .prev()
            .attr({ "data-select": numberOfChecked + " Selected" });
          var selid = obj.parent().prev().attr("id");
          $("." + selid + "-selected-tag").html(insideelement);
        } else if (numberOfChecked == 1) {
          obj.parent().prev().removeClass("noselect");
          var insideelement =
            '<a href="#" class="filter-tag-text subtitle" data-state="active"><span>' +
            t1 +
            '</span><svg aria-label="Graphics Symbol" role="graphics-symbol" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5531 3.44679L3.4469 12.553Z" fill="#EEEEEE"></path><path d="M12.5531 3.44679L3.4469 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path><path d="M3.4469 3.44678L12.5531 12.553" stroke="#4248C7" stroke-width="1.7" stroke-linecap="round"></path></svg></a>';
  
          obj.parent().prev().val(t1);
          obj.parent().prev().attr({ "data-select": t1 });
  
          var selid = obj.parent().prev().attr("id");
          $("." + selid + "-selected-tag").html(insideelement);
        } else {
          obj.parent().prev().addClass("noselect");
          obj.parent().prev().val("Select");
          obj.parent().prev().attr({ "data-select": "Select" });
          var insideelement = "";
          var selid = obj.parent().prev().attr("id");
          $("." + selid + "-selected-tag").html(insideelement);
        }
  
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      } else if (obj.hasClass("add-dropdown-item")) {
        var t1 = obj.text().trim();
        if (obj.find(".help-text").length > 0) {
          t1 = obj.find(".help-text q").text().trim();
        }
        console.log(t1);
  
        obj.parent().parent().parent().removeClass("dropdownactive");
  
        if (
          obj
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .hasClass("location-popup")
        ) {
          console.log("call 789");
          $(".location-popup .card-footer__button.btn").removeClass("disabled");
          $(".location-popup .card-footer__button.btn").removeAttr("disabled");
        } else {
          $(".modal").removeClass("show");
          $("body").removeClass("no-scroll");
        }
        //$('.dropdown').val(t1);
        obj.parent().prev().val(t1);
        $("#phonenumber-field").val(t1);
        $("#nextBtn, #nextBtn2").removeClass("disabledbtn").css({ display: "flex" });
      } else {
        var t1 = obj.text().trim();
        if (obj.find(".highlight-text").length > 0) {
          t1 = obj.find(".highlight-text").text().trim();
        }
        console.log(t1);
  
        obj.parent().parent().parent().removeClass("dropdownactive");
  
        if (
          obj
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .hasClass("location-popup")
        ) {
          console.log("call 789");
          $(".location-popup .card-footer__button.btn").removeClass("disabled");
          $(".location-popup .card-footer__button.btn").removeAttr("disabled");
        } else {
          var t1 = obj.text().trim();
          if (obj.find(".highlight-text").length > 0) {
            t1 = obj.find(".highlight-text").text().trim();
          }
          $(".modal").removeClass("show");
          $("body").removeClass("no-scroll");
          $("#phonenumber-field").val(t1);
          $("#nextBtn, #nextBtn2").removeClass("disabledbtn").css({ display: "flex" });
        }
        //$('.dropdown').val(t1);
        obj.parent().prev().val(t1);
      }
  
      if ($(this).parent().prev().attr("id") == "location-postcode-field2") {
        location.href = "location-updated-loader.html";
      }
  
      if ($(this).parent().prev().attr("id") == "location-postcode-field") {
        location.href = "location-updated-loader.html";
      }
      // $('#nextBtn').trigger('focusout');
  
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    });
  
    otherhourfunction();
    $(window).on("resize", function () {
      // otherhourfunction();
    });
  
    $(document).on("click", "span.close", function () {
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
    });
  
    $(document).on("click", "#confirmBtn", function () {
      console.log("call");
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
      $(`#postcode-form`).addClass("fill");
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    });
  
    function otherhourfunction() {
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];
  
      var win = $(this); //this = window
  
      if (win.width() < 769) {
        $("#phonenumber-field:not(.inputField)").attr({ readonly: "readonly" });
        $("#phonenumber-field").click(function () {
          console.log("call 842");
          $("#modalpopup").addClass("show");
          $("body").addClass("no-scroll");
  
          setTimeout(function () {
            $("#modalpopup input#phonenumber-field2").focus();
          }, 150);
        });
        $(document).on("click", ".dropdown", function () {
          console.log("769");
          $(this).next().addClass("show");
        });
      } else {
        $("#phonenumber-field").removeAttr("readonly");
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    }
  
    window.onclick = function (event) {
      var modal = document.getElementById("modalpopup");
      if (event.target == modal) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  
    document.onkeyup = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  }
  
  const siteNavigation = document.querySelector(".daterangepicker");
  
  /** Data State Set on Open Datepicker **/
  function openMenu() {
    siteNavigation.setAttribute("data-state", "opened");
  }
  
  /** Data State Set on Close Datepicker **/
  function closeMenu() {
    siteNavigation.setAttribute("data-state", "closing");
  
    setTimeout(function () {
      siteNavigation.setAttribute("data-state", "closed");
    }, 250);
  }
  
  if ($("#log-in").length > 0) {
    $("#log-in input").keyup(function () {
      if ($("#username").val() != "") {
        $("#log-in button").removeAttr("disabled");
        $("#username__input__error-msg").hide();
      } else {
        $("#log-in button").attr({ disabled: "disabled" });
        $("#username__input__error-msg").show();
      }
    });
  }
  
  if ($("#password-field").length > 0) {
    $("#password-field").keyup(function () {
      if ($("#password-field").val() != "") {
        $("#otp-screen button").removeAttr("disabled");
        $("#password__error-msg").hide();
      } else {
        $("#otp-screen button").attr({ disabled: "disabled" });
        $("#password__error-msg").show();
      }
    });
  }
  
  if ($("#newpass-field").length > 0) {
    $("input[type='password']").keyup(function () {
      if (
        $("#newpass-field").val() != "" &&
        $("#confirmpass-field").val() != ""
      ) {
        $("#reset-password button").removeAttr("disabled");
        $("#newpass-field__error-msg").hide();
      } else {
        $("#reset-password button").attr({ disabled: "disabled" });
        $("#newpass-field__error-msg").show();
      }
    });
  }
  if ($(".confrimpopup").length > 0) {
    $(document).on("click", ".confrimpopup", function () {
      $(".modal#confirmmodalpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  if ($(".callbackpopup").length > 0) {
    $(document).on("click", ".callbackpopup", function () {
      $(".modal#callbackmodalpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  if ($(".signup-popup").length > 0) {
    $(document).on("click", ".signup-popup", function () {
      $(".modal").addClass("show");
      $("body").addClass("no-scroll");
    });
  
    window.onclick = function (event) {
      var modal = document.getElementById("modalpopup");
      if (event.target == modal) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  
    document.onkeyup = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  
    $(document).on("click", "span.close", function () {
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
    });
  }
  
  if ($("#VerifyMobile").length > 0) {
    $(document).on("click", "#VerifyMobile", function () {
      $("#Verifymobilepopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  
    $(document).on("click", "#VerifyMobile1", function () {
      $("#Verifymobilepopup").removeClass("show");
      $("#Verifypopup").addClass("show");
      $("body").toggleClass("no-scroll");
    });
  
    window.onclick = function (event) {
      var modal = document.getElementById("modalpopup");
      if (event.target == modal) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  
    document.onkeyup = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
      }
    };
  
    $(document).on("click", "span.close", function () {
      console.log("closed");
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
    });
  }
  
  if ($(".navbar-toggler").length > 0) {
    $(".navbar-toggler").click(function () {
      $("#mobile").animate({ left: "0px" }, 300);
      $("body").css("overflow", "hidden");
    });
  }
  
  if ($(".navbar-close-toggler").length > 0) {
    $(".navbar-close-toggler").click(function () {
      $(".mobile-menu").animate({ left: "-100%" }, 300);
      $(".mobile-submenu").animate({ left: "-100%" }, 300);
      $("body").css("overflow", "auto");
    });
  }
  
  if ($(".mobile__navigation-link").length > 0) {
    $(".mobile__navigation-link").click(function () {
      let id = $(this).data("content");
      $("#" + id).animate({ left: "0px" }, 300);
    });
  }
  
  if ($(".mobile__navigation-link-submenu").length > 0) {
    $(".mobile__navigation-link-submenu").click(function () {
      var currentObj = $(this);
      console.log("call:::" + currentObj.parent().hasClass("active"));
      if (currentObj.parent().hasClass("active")) {
        currentObj.next().slideUp();
        currentObj.parent().removeClass("active");
      } else {
        currentObj.next().slideDown();
        currentObj.parent().addClass("active");
      }
    });
  }
  
  if ($(".back-btn").length > 0) {
    $(".back-btn").click(function () {
      let id = $(this).parent().parent().attr("id");
      $("#" + id).animate({ left: "-100%" }, 300);
    });
  }
  
  /** Read More/Read Less Event **/
  $(document).ready(function () {
    // Configure/customize these variables.
    var showChar = 155; // How many characters are shown by default
    var showCharbrif = 70; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "More";
    var lesstext = "Less";
  
    if ($(".more").length > 0) {
      var win = $(this); //this = window
  
      $(".more").each(function () {
        if (win.width() < 769) {
          if ($(this).hasClass("more-mob")) {
            showChar = 70;
          }
        }
        var content = $(this).html();
  
        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
  
          var html =
            c +
            '<span class="moreellipses">' +
            ellipsestext +
            '&nbsp;</span><span class="morecontent"><span>' +
            h +
            '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
            moretext +
            "</a></span>";
  
          $(this).html(html);
        }
      });
    }
  
    if ($(".brief__text--collpase").length > 0) {
      var win = $(this); //this = window
      showChar = 71;
  
      $(".brief__text--collpase").each(function () {
        if (win.width() < 769) {
          if ($(this).hasClass("more-mob")) {
            showChar = 70;
          }
        }
        var content = $(this).html();
  
        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
  
          var html =
            c +
            '<span class="moreellipses">' +
            ellipsestext +
            '&nbsp;</span><span class="morecontent"><span>' +
            h +
            '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
            moretext +
            "</a></span>";
  
          $(this).html(html);
        }
      });
    }
  
    if ($(".more-brif").length > 0) {
      $(".more-brif").each(function () {
        var content = $(this).html();
  
        if (content.length > showCharbrif) {
          var c = content.substr(0, showCharbrif);
          var h = content.substr(showCharbrif, content.length - showCharbrif);
  
          var html =
            c +
            '<span class="moreellipses">' +
            ellipsestext +
            '&nbsp;</span><span class="morecontent"><span>' +
            h +
            '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
            moretext +
            "</a></span>";
  
          $(this).html(html);
        }
      });
    }
  
    if ($(".morelink").length > 0) {
      $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
        } else {
          $(this).addClass("less");
          $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggleClass("viewfull");
        return false;
      });
    }
  
    if ($(".change-rate__modal").length > 0) {
      $(document).on("click", ".change-rate__modal", function () {
        $("#changeratemodalpopup").addClass("show");
        $("body").addClass("no-scroll");
      });
    }
  });
  
  if ($(".specificreq-modal").length > 0) {
    $(document).on("click", ".specificreq-modal", function () {
      $("#specificreumodalpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($(".specificreq-modal2").length > 0) {
    $(document).on("click", ".specificreq-modal2", function () {
      $("#specificreumodalpopup2").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($(".change-rate__modal2").length > 0) {
    $(document).on("click", ".change-rate__modal2", function () {
      $("#changeratemodalpopup2").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($("#postcode-field").length > 0) {
    var win = $(this); //this = window
  
    if (win.width() < 769) {
      $("#postcode-field").attr({ readonly: "readonly" });
      $(document).on("click", "#postcode-field", function () {
        $(".modal").removeClass("show");
        $(".dropdown").blur();
        $("#postcode-popup").addClass("show");
        $("#phonenumber-field2").focus();
        $("body").toggleClass("no-scroll");
      });
    } else {
    }
  }
  
  // if($('.invite-popup').length>0){
  //     $( document ).on( "click", ".invite-popup", function() {
  //         $("#invitemodalpopup").addClass('show');
  //     });
  // }
  
  /** Popup Bind for Dashboard Page **/
  if ($(".invite-popup").length > 0) {
    $(document).on("click", ".invite-popup", function () {
      $("#invitemodalpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($(".multiple-invite-popup").length > 0) {
    $(document).on("click", ".multiple-invite-popup", function () {
      $("#selectjobpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  // if($('.notification-modal').length>0){
  //     $( document ).on( "click", ".notification-modal", function() {
  //         $("#notificationpupup").addClass('show');
  //     });
  // }
  
  if ($(".filter-modal").length > 0) {
    $(document).on("click", ".filter-modal", function () {
      $("#modifysearchpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  // insurance details opne modal
  $(document).on("click", ".insurance__info-modal", function () {
    $("#carerprofile-modal").removeClass("show");
    $("#insurancedetails-modal").addClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  // Type of Care modal
  $(document).on("click", ".typeofcare__info-modal", function () {
    $("#type-of-care-modal").addClass("show");
    $("body").addClass("no-scroll");
  });


  $(document).on("click", "#type-of-care-modal .addbtn", function () {
    $("#type-of-care-modal").removeClass("show");
    $("#duration-of-care-modal").addClass("show");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#duration-of-care-modal .addbtn", function () {
    console.log('1357');
    $("#duration-of-care-modal").removeClass("show");
    setTimeout(() => {
    $("#carer-start-modal").addClass("show");
    }, 200);
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#duration-of-care-modal .backbtn", function () {
    $("#duration-of-care-modal").removeClass("show");
    $("#type-of-care-modal").addClass("show");
    $("body").addClass("no-scroll");
  });
  

  $(document).on("click", "#carer-start-modal .addbtn", function () {
    $("#carer-start-modal").removeClass("show");
    setTimeout(() => {
    $("#days-per-week-modal").addClass("show");
  }, 200);
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#carer-start-modal .backbtn", function () {
    $("#carer-start-modal").removeClass("show");
    setTimeout(() => {
    $("#duration-of-care-modal").addClass("show");
  }, 200);
    $("body").addClass("no-scroll");
  });
  

  $(document).on("click", "#days-per-week-modal .addbtn", function () {
    $("#days-per-week-modal").removeClass("show");
    setTimeout(() => {
    $("#nights-per-week-modal").addClass("show");
  }, 200);
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#days-per-week-modal .backbtn", function () {
    $("#days-per-week-modal").removeClass("show");
    setTimeout(() => {
    $("#carer-start-modal").addClass("show");
  }, 200);
    $("body").addClass("no-scroll");
  });


  
  $(document).on("click", "#nights-per-week-modal .addbtn", function () {
    $("#nights-per-week-modal").removeClass("show");
    setTimeout(() => {
    $("#preferredratemodalpopup").addClass("show");
  }, 200);
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#nights-per-week-modal .backbtn", function () {
    $("#nights-per-week-modal").removeClass("show");
    setTimeout(() => {
    $("#days-per-week-modal").addClass("show");
  }, 200);
    $("body").addClass("no-scroll");
  });


  // duration of Care modal
  $(document).on("click", ".durationofcare__info-modal", function () {
    $("#duration-of-care-modal").addClass("show");
    $("body").addClass("no-scroll");
  });
  
  //Change radio button event of duration of Care modal
  $(document).on("change", ".modal .radiocheckedhourlyduration, .modal .radiocheckedhourlyduration2", function () {
    $(".radiocheckedhourlyduration").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="hourlyduration"]:checked').val();
  
    if (res1 == "Fixed term") {
      //console.log("call");
      $("#fixed-term-date").trigger("click").trigger("focus");
    } else {
      // setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
    // $("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  });
  
  // hours per day modal
  $(document).on("click", ".hoursperday__info-modal", function () {
    $("#hours-per-day-modal").addClass("show");
    $("body").addClass("no-scroll");
  });
  
  //Change radio button event of hours per day modal
  $(document).on("change", ".modal .radiocheckedtypeofperhour", function () {
    $(".radiocheckedtypeofperhour").parent().removeClass("active");
    $(".inputtypeofperhour").parent().parent().removeClass("active");
    $(".inputtypeofperhour").val("");
    $(this).parent().addClass("active");
    var res1 = $('input[name="perhour"]:checked').val();
  
    if (res1 == "1 hour" || res1 == "2 hour" || res1 == "3 hour") {
      //redirect setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    } else {
      $("#nextBtn, #nextBtn2").css({ display: "flex" });
    }
  });
  
  // Type of Care modal change input
  $(document).on("change", ".modal .radiocheckedtypeofcare", function () {
    console.log("call 325");
    $(".radiocheckedtypeofcare").parent().parent().parent().removeClass("active");
    $(this).parent().parent().parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="typeofcare"]:checked').val();
    //$("#nextBtn, #nextBtn2").attr({'href': res1+'-duration.html'});
  });
  
  //Preferred rate modal
  if ($(".preferredrate__info-modal").length > 0) {
    $(document).on("click", ".preferredrate__info-modal", function () {
      $("#preferredratemodalpopup").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($(".carerstart__info-modal").length > 0) {
    $(document).on("click", ".carerstart__info-modal", function () {
      $("#carer-start-modal").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($(".nightsperweek__info-modal").length > 0) {
    $(document).on("click", ".nightsperweek__info-modal", function () {
      $("#nights-per-week-modal").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  if ($(".daysperweek__info-modal").length > 0) {
    $(document).on("click", ".daysperweek__info-modal", function () {
      $("#days-per-week-modal").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  /*
  $( document ).on( "click", ".discardmodalpopup-change", function() {
      $("#discardmodalpopup").addClass('show');
  });*/
  
  $(document).on("click", ".unpublish__modal", function () {
    $("#unpublishmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".close-job__popup", function () {
    $("#closejobmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  
  $(document).on("click", "#discardmodalpopup .modal-footer a", function () {
    $("#discardmodalpopup").removeClass("show");
    $("body").addClass("no-scroll");
  });
  
  $(document).on(
    "change",
    ".location-popup #location-postcode-field-mob",
    function () {
      console.log("call 1285");
      if ($(this).val() != "") {
        $(".location-popup .card-footer__button.btn").removeClass("disabled");
        $(".location-popup .card-footer__button.btn").removeAttr("disabled");
      } else {
        $(".location-popup .card-footer__button.btn").addClass("disabled");
        $(".location-popup .card-footer__button.btn").attr({
          disabled: "disabled",
        });
      }
    }
  );
  
  if ($("#carer-start-modal").length > 0) {
    $(document).on("click", "button.closeBtnDate", function () {
      $(".daterangepicker").hide();
    });
  }
  
  //Change radio button event of Carer Start modal
  $(document).on("change", ".modal .radiocheckedtypeofWhenStart", function () {
    $(".radiocheckedtypeofWhenStart").parent().removeClass("active");
    $(this).parent().addClass("active");
    //console.log($(this).val());
    var res1 = $('input[name="hourlywhenstartradio"]:checked').val();
  
    if (res1 == "owndate") {
      //console.log("call");
      $("#fixed-term-sdate").trigger("click").trigger("focus");
    } else {
      //redirect setTimeout(function() { location.href = $("#nextBtn").attr('href'); }, 100);
    }
  
    $("#carer-start-modal .addbtn").css({ visibility: "visible" });
  });
  
  //open View Profile modal
  if ($(".carerprofile-modal").length > 0) {
    $(document).on("click", ".carerprofile-modal", function () {
      $("#carerprofile-modal").addClass("show");
      $("body").addClass("no-scroll");
    });
  }
  
  /*if($('#specificreumodalpopup').length>0){
      console.log("call");*/
  /** Events Bind on Individual Popup event for Back, Previous & Next **/
  $(document).on("change", ".preferences-checkbox-group input", function () {
    $("#specificreumodalpopup .addbtn").attr({ disabled: "disabled" });
    $(".preferences-checkbox-group input[type='checkbox']").each(function () {
      if ($(this).is(":checked")) {
        $("#specificreumodalpopup .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", ".preferences-checkbox-group2 input", function () {
    $("#specificreumodalpopup2 .addbtn").attr({ disabled: "disabled" });
    $(".preferences-checkbox-group2 input[type='checkbox']").each(function () {
      if ($(this).is(":checked")) {
        $("#specificreumodalpopup2 .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#carerinterestmodalpopup input", function () {
    console.log("Checkbox");
    $("#carerinterestmodalpopup .addbtn").attr({ disabled: "disabled" });
    $("#carerinterestmodalpopup input[type='checkbox']").each(function () {
      console.log("Checked");
      if ($(this).is(":checked")) {
        console.log("Checked True");
        $("#carerinterestmodalpopup .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#secondlanmodalpopup input", function () {
    console.log("Checkbox");
    $("#secondlanmodalpopup .addbtn").attr({ disabled: "disabled" });
    $("#secondlanmodalpopup input[type='checkbox']").each(function () {
      console.log("Checked");
      if ($(this).is(":checked")) {
        console.log("Checked True");
        $("#secondlanmodalpopup .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#prefferedratemodalpopup input", function () {
    console.log("Checkbox");
    $("#prefferedratemodalpopup .addbtn").attr({ disabled: "disabled" });
    $("#prefferedratemodalpopup input[type='number']").each(function () {
      console.log("Checked");
      if ($(this).val() != "") {
        console.log("Checked True");
        $("#prefferedratemodalpopup .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#changeratemodalpopup input", function () {
    console.log("Checkbox");
    $("#changeratemodalpopup .addbtn").attr({ disabled: "disabled" });
    $("#changeratemodalpopup input[type='number']").each(function () {
      console.log("Checked");
      if ($(this).val() != "") {
        console.log("Checked True");
        $("#changeratemodalpopup .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#changeratemodalpopup2 input", function () {
    console.log("Checkbox");
    $("#changeratemodalpopup2 .addbtn").attr({ disabled: "disabled" });
    $("#changeratemodalpopup2 input[type='number']").each(function () {
      console.log("Checked");
      if ($(this).val() != "") {
        console.log("Checked True");
        $("#changeratemodalpopup2 .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#selectfundingmodalpopup input", function () {
    console.log("Checkbox");
    $("#selectfundingmodalpopup .addbtn").attr({ disabled: "disabled" });
    $("#selectfundingmodalpopup input[type='radio']").each(function () {
      console.log("Checked");
      if ($(this).is(":checked")) {
        console.log("Checked True");
        $("#selectfundingmodalpopup .addbtn").removeAttr("disabled");
      }
    });
  });
  
  $(document).on("change", "#selectfundingmodalpopup2 input", function () {
    console.log("Checkbox");
    $("#selectfundingmodalpopup2 #selectfundingconfirmBtn").attr({
      disabled: "disabled",
    });
    $("#selectfundingmodalpopup2 input[type='radio']").each(function () {
      if ($(this).is(":checked")) {
        $("#selectfundingmodalpopup2 #selectfundingconfirmBtn").removeAttr(
          "disabled"
        );
      }
    });
  });
  
  /*}
  
  if($('#specificreumodalpopup').length>0){*/
  $(document).on("click", "#specificreumodalpopup .addbtn", function () {
    $("#carerinterestmodalpopup").addClass("show");
    $("#specificreumodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#specificreumodalpopup .skipbtn", function () {
    $("#carerinterestmodalpopup").addClass("show");
    $("#specificreumodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  /*}*/
  
  $(document).on(
    "click",
    "#invitemodalpopup.message-modal .skipbtn",
    function () {
      $("#invitemodalpopup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  $(document).on("click", "#invitemodalpopup.message-modal .addbtn", function () {
    $("#invitemodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#carerinterestmodalpopup .addbtn", function () {
    $("#secondlanmodalpopup").addClass("show");
    $("#carerinterestmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#carerinterestmodalpopup .skipbtn", function () {
    $("#secondlanmodalpopup").addClass("show");
    $("#carerinterestmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#carerinterestmodalpopup .backbtn", function () {
    console.log("call ");
    $("#specificreumodalpopup").addClass("show");
    $("#carerinterestmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#secondlanmodalpopup .addbtn", function () {
    $("#prefferedratemodalpopup").addClass("show");
    $("#secondlanmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#secondlanmodalpopup .skipbtn", function () {
    $("#prefferedratemodalpopup").addClass("show");
    $("#secondlanmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#secondlanmodalpopup .backbtn", function () {
    console.log("call ");
    $("#carerinterestmodalpopup").addClass("show");
    $("#secondlanmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#prefferedratemodalpopup .addbtn", function () {
    $("#selectfundingmodalpopup").addClass("show");
    $("#prefferedratemodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#prefferedratemodalpopup .skipbtn", function () {
    $("#selectfundingmodalpopup").addClass("show");
    $("#prefferedratemodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#prefferedratemodalpopup .backbtn", function () {
    $("#secondlanmodalpopup").addClass("show");
    $("#prefferedratemodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#selectfundingmodalpopup .backbtn", function () {
    $("#prefferedratemodalpopup").addClass("show");
    $("#selectfundingmodalpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#selectfundingmodalpopup .addbtn", function () {
    if (!$(this).hasClass("redirect-recipients-name"))
      location.href = "../job-updated-loader.html";
  });
  
  /*  Change Rate Submit Loader Script  */
  $(document).on("click", "#changeratemodalpopup .addbtn", function () {
    // location.href="../rate-updated-loader.html";
  
    $("#changeratemodalpopup .modal-content .loader__visible").hide();
    $("#changeratemodalpopup #loader").removeClass("loader__hide");
  });
  
  $(document).on("click", "#invitemodalpopup .addbtn", function () {
    location.href = "../invitaion-sent-loader.html";
  });
  
  $(document).on("click", "#preferredratemodalpopup .addbtn", function () {
    location.href = "../job-updated-loader.html";
  });
  
  $(document).on("click", "#unpublishmodalpopup .addbtn", function () {
    location.href = "../job-unpublished-loader.html";
  });
  
  $(document).on("click", ".closemodifyrate", function (event) {
    //console.log(event.currentTarget.className);
    if (event.target !== event.currentTarget) {
      console.log("1472" + event);
      return;
    } else {
      console.log("1476" + event);
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
      setTimeout(() => {
       // $("#discardmodalpopup").addClass("show");
        $("body").addClass("no-scroll");
      }, 200);
    }
  });
  
  $(document).on(
    "click",
    ".closemodifyrate span.close, .closemodifyrate button.card-footer__button",
    function () {
      console.log("1480");
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
      setTimeout(() => {
       // $("#discardmodalpopup").addClass("show");
        $("body").addClass("no-scroll");
      }, 200);
    }
  );
  
  $(document).on("click", "#selectjobpopup .addbtn", function () {
    $("#multipleinvitetojob-popup").addClass("show");
    $("#selectjobpopup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", ".reject-app__modal-open", function () {
    $("#rejectapplication").addClass("show");
    $("body").addClass("no-scroll");
  });
  
  $(document).on("click", "#rejectapplication .modal-footer .btn", function () {
    $("#rejectapplication").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  
  $(document).on("click", "#multipleinvitetojob-popup .backbtn", function () {
    $("#selectjobpopup").addClass("show");
    $("#multipleinvitetojob-popup").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  // Congratulation Banner Hide after 1.2 Sec
  if ($("#congratulations__banner-section").length > 0) {
    $(document).ready(function () {
      setTimeout(function () {
        $("#congratulations__banner-section").animate(
          { height: "toggle", opacity: "toggle" },
          400
        );
      }, 5000);
    });
  }
  
  if ($(".notification-banner").length > 0) {
    $(document).ready(function () {
      setTimeout(function () {
        $(".notification-banner").animate(
          { height: "toggle", opacity: "toggle" },
          400
        );
      }, 1200);
    });
  }
  
  // On Location Change Field Redirect on Success
  $("#location-postcode-field").change(function () {
    location.href = "location-updated-loader.html";
  });
  
  // Show Filter Mobile View
  $(document).on("click", "#modifysearchpopup .filter-title", function () {
    console.log("call 1237");
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
  
  // Show More or Less Events on Search Filter Mobile View
  $(document).on("click", "#modifysearchpopup .show-more-options", function () {
    $(this).parent().parent().toggleClass("showmore");
    if ($(this).parent().parent().hasClass("showmore")) {
      $(this).html("Show less");
    } else {
      $(this).html("Show more");
    }
  });
  
  // Hide Receive updates via email
  if ($(".cards-list__items-card-notification").length > 0) {
    $(document).on(
      "click",
      ".cards-list__items-card-notification button.close-btn",
      function () {
        $(".cards-list__items-card-notification").slideToggle();
        // $('.cards-list__items-card-notification').hide();
      }
    );
  }
  
  $(".carerprofile-modal").click(function () {
    var win = $(window); //this = window
    if (win.width() > 769) {
      $("#carerprofile-modal .modal-content").animate({ left: "0%" }, 300);
      $("#activity-modal .modal-content").animate({ left: "0%" }, 300);
    }
  });
  
  function closePopup() {
    var win = $(window); //this = window
    if (win.width() > 769) {
      $("#carerprofile-modal .modal-content").animate({ left: "80%" }, 300);
      $("#activity-modal .modal-content").animate({ left: "80%" }, 300);
    }
    console.log("1767");
    setTimeout(() => {
      $("#carerprofile-modal").removeClass("show");
      $("#activity-modal").removeClass("show");
      $("body").addClass("no-scroll");
    }, 400);
  }
  
  //
  
  // Hide Receive updates via email
  if ($(".password__field-wrapper").length > 0) {
    $(document).on(
      "click",
      ".password__field-wrapper .prefix-img",
      function () {
        var obj = $(this);
        obj.parent().toggleClass("show-pass");
        if (obj.prev().attr("type") == "password")
          obj.prev().attr({ type: "text" });
        else obj.prev().attr({ type: "password" });
      }
    );
  }
  
  /** Signup Page Send Message Input change Event **/
  if ($("#sign-up-send-message").length > 0) {
    if ($(".signup-to-send-message__form").hasClass("updated__form")) {
      $("#sign-up-send-message input").blur(function () {
        console.log("keyup change");
        $("#sign-up-send-message button.continue").attr({ disabled: "disabled" });
        $("#last-name-field__input__error-msg").hide();
        $("#first-name-field__input__error-msg").hide();
        $("#field__phonenumber__error-msg").hide();
        var checkvalid = true;
        if ($("#first-name-name-field").val() == "") {
          $("#first-name-field__input__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#last-name-name-field").val() == "") {
          $("#last-name-field__input__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#phonenumber-field").val() == "") {
          $("#field__phonenumber__error-msg").show();
          checkvalid = false;
        }
  
        if (checkvalid) {
          $("#sign-up-send-message button.continue").removeAttr("disabled");
        }
      });
  
      /* $("#sign-up-send-message input").keyup(function(){
                  console.log("keyup change");
                  $('#sign-up-send-message button.continue').attr({'disabled':'disabled'});
                  $("#last-name-field__input__error-msg").hide();
                  $("#first-name-field__input__error-msg").hide();
                  $("#field__phonenumber__error-msg").hide();
                  var checkvalid = true;
                  if($("#first-name-name-field").val()==""){
                      $("#first-name-field__input__error-msg").show();
                      checkvalid = false;
                  }
  
                  if($("#last-name-name-field").val()==""){
                      $("#last-name-field__input__error-msg").show();
                      checkvalid = false;
                  }
  
                  if($("#phonenumber-field").val()==""){
                      $("#field__phonenumber__error-msg").show();
                      checkvalid = false;
                  }
  
                  if(checkvalid){
                      $('#sign-up-send-message button.continue').removeAttr('disabled');
                  }
              });*/
  
      $("#sign-up-send-message button").click(function () {
        console.log("click change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != "" &&
          $("#phonenumber-field").val() != ""
        ) {
          location.href = "sign-up-to-send-message-step2.html";
        } else {
          if ($("#first-name-name-field").val() == "") {
            $("#first-name-field__input__error-msg").show();
          }
  
          if ($("#last-name-name-field").val() == "") {
            $("#last-name-field__input__error-msg").show();
          }
  
          if ($("#phonenumber-field").val() == "") {
            $("#field__phonenumber__error-msg").show();
          }
        }
      });
    } else {
      $("#sign-up-send-message input").change(function () {
        console.log("input change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != ""
        ) {
          $("#sign-up-send-message button.continue").removeAttr("disabled");
          $("#first-name-field__input__error-msg").hide();
          $("#last-name-field__input__error-msg").hide();
        } else if ($("#first-name-name-field").val() != "") {
          $("#sign-up-send-message button.continue").attr({
            disabled: "disabled",
          });
          $("#first-name-field__input__error-msg").show();
        } else {
          $("#sign-up-send-message button.continue").attr({
            disabled: "disabled",
          });
          $("#last-name-field__input__error-msg").show();
        }
      });
  
      $("#sign-up-send-message input").keyup(function () {
        console.log("keyup change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != ""
        ) {
          $("#sign-up-send-message button.continue").removeAttr("disabled");
          $("#first-name-field__input__error-msg").hide();
          $("#last-name-field__input__error-msg").hide();
        } else if ($("#first-name-name-field").val() != "") {
          $("#sign-up-send-message button.continue").attr({
            disabled: "disabled",
          });
          $("#last-name-field__input__error-msg").show();
        } else {
          $("#sign-up-send-message button").attr({ disabled: "disabled" });
          $("#first-name-field__input__error-msg").show();
        }
      });
  
      $("#sign-up-send-message button").click(function () {
        console.log("click change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != ""
        ) {
          location.href = "sign-up-to-send-message-step2.html";
        } else if ($("#first-name-name-field").val() != "") {
          $("#first-name-field__input__error-msg").show();
        } else {
          $("#last-name-field__input__error-msg").show();
        }
      });
    }
  }
  
  /** Signup Page Send Message Combined Input change Event **/
  if ($("#sign-up-send-message-combine").length > 0) {
    if (
      $(".signup-to-send-message__form").hasClass("signup-form-with__location")
    ) {
      $("#sign-up-send-message-combine input").blur(function () {
        console.log("keyup change");
        $("#sign-up-send-message-combine button.continue").attr({
          disabled: "disabled",
        });
        $("#email-field__input__error-msg").hide();
        $("#first-name-field__input__error-msg").hide();
        $("#location-signup-field__error-msg").hide();
        $("#password__error-msg").hide();
        $("#field__phonenumber__error-msg").hide();
        var checkvalid = true;
        if ($("#first-name-name-field").val() == "") {
          $("#first-name-field__input__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#send-message-email-field").val() == "") {
          $("#email-field__input__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#phonenumber-field").val() == "") {
          $("#field__phonenumber__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#send-message-password-field").val() == "") {
          $("#password__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#location-signup-field").val() == "") {
          $("#location-signup-field__error-msg").show();
          checkvalid = false;
        }
  
        if (checkvalid) {
          $("#sign-up-send-message-combine button.continue").removeAttr(
            "disabled"
          );
        }
      });
  
      $("#sign-up-send-message-combine button").click(function () {
        console.log("click change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#send-message-email-field").val() != "" &&
          $("#phonenumber-field").val() != "" &&
          $("#send-message-password-field").val() != "" &&
          $("#location-signup-field").val() != ""
        ) {
          console.log("Signup successful");
        } else {
          if ($("#first-name-name-field").val() == "") {
            $("#first-name-field__input__error-msg").show();
          }
  
          if ($("#send-message-email-field").val() == "") {
            $("#email-field__input__error-msg").show();
          }
  
          if ($("#phonenumber-field").val() == "") {
            $("#field__phonenumber__error-msg").show();
          }
  
          if ($("#send-message-password-field").val() == "") {
            $("#password__error-msg").show();
          }
  
          if ($("#location-signup-field").val() == "") {
            $("#location-signup-field__error-msg").show();
          }
        }
      });
    } else {
      $("#sign-up-send-message-combine input").blur(function () {
        console.log("keyup change");
        $("#sign-up-send-message-combine button.continue").attr({
          disabled: "disabled",
        });
        $("#last-name-field__input__error-msg").hide();
        $("#first-name-field__input__error-msg").hide();
        $("#password__error-msg").hide();
        $("#field__phonenumber__error-msg").hide();
        var checkvalid = true;
        if ($("#first-name-name-field").val() == "") {
          $("#first-name-field__input__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#last-name-name-field").val() == "") {
          $("#last-name-field__input__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#phonenumber-field").val() == "") {
          $("#field__phonenumber__error-msg").show();
          checkvalid = false;
        }
  
        if ($("#send-message-password-field").val() == "") {
          $("#password__error-msg").show();
          checkvalid = false;
        }
  
        if (checkvalid) {
          $("#sign-up-send-message-combine button.continue").removeAttr(
            "disabled"
          );
        }
      });
  
      $("#sign-up-send-message-combine button").click(function () {
        console.log("click change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != "" &&
          $("#phonenumber-field").val() != "" &&
          $("#send-message-password-field").val() != ""
        ) {
          console.log("Signup successful");
        } else {
          if ($("#first-name-name-field").val() == "") {
            $("#first-name-field__input__error-msg").show();
          }
  
          if ($("#last-name-name-field").val() == "") {
            $("#last-name-field__input__error-msg").show();
          }
  
          if ($("#phonenumber-field").val() == "") {
            $("#field__phonenumber__error-msg").show();
          }
  
          if ($("#send-message-password-field").val() == "") {
            $("#password__error-msg").show();
          }
        }
      });
    }
  }
  
  /** Signup Page Send Message Step2 Input change Event **/
  if ($("#sign-up-to-send-message-step2").length > 0) {
    $("#sign-up-to-send-message-step2 button.back-btn-to-step1").click(
      function () {
        location.href = "sign-up-to-send-message.html";
      }
    );
  
    $("#sign-up-to-send-message-step2 input").blur(function () {
      console.log("input change");
      $("#email-field__input__error-msg").hide();
      $("#password__error-msg").hide();
      $("#sign-up-to-send-message-step2 button.continue").attr({
        disabled: "disabled",
      });
  
      if (
        $("#send-message-email-field").val() == "" &&
        $("#send-message-password-field").val() == ""
      ) {
        console.log("1835");
        $("#sign-up-to-send-message-step2 button.continue").removeAttr(
          "disabled"
        );
        $("#email-field__input__error-msg").hide();
        $("#password__error-msg").hide();
      } else if ($("#send-message-email-field").val() == "") {
        console.log("1840");
        $("#sign-up-to-send-message-step2 button.continue").attr({
          disabled: "disabled",
        });
        $("#email-field__input__error-msg").show();
      } else if ($("#send-message-password-field").val() == "") {
        console.log("1844");
        $("#sign-up-to-send-message-step2 button.continue").attr({
          disabled: "disabled",
        });
        $("#password__error-msg").show();
      } else {
        console.log("1848");
        $("#sign-up-to-send-message-step2 button.continue").removeAttr(
          "disabled"
        );
      }
    });
  
    /*   $("#sign-up-to-send-message-step2 input").keyup(function(){
              console.log("keyup change");
              if($("#send-message-email-field").val()!="" && $("#send-message-password-field").val()!=""){
                  $('#sign-up-to-send-message-step2 button.continue').removeAttr('disabled');
                  $("#email-field__input__error-msg").hide();
                  $("#password__error-msg").hide();
              }else if($("#send-message-email-field").val()!=""){
                  $('#sign-up-to-send-message-step2 button.continue').attr({'disabled':'disabled'});
                  $("#email-field__input__error-msg").show();
              }else{
                  $('#sign-up-to-send-message-step2 button.continue').attr({'disabled':'disabled'});
                  $("#password__error-msg").show();
              }
          });*/
  
    $("#sign-up-to-send-message-step2 button.continue").click(function () {
      console.log("click change");
      if (
        $("#send-message-email-field").val() != "" &&
        $("#send-message-password-field").val() != ""
      ) {
        location.href = "signup-successfully.html";
      } else if ($("#send-message-email-field").val() != "") {
        $("#email-field__input__error-msg").show();
      } else {
        $("#password__error-msg").show();
      }
    });
  }
  
  // video modal open
  
  if ($(".video-overlay-modal").length > 0) {
    $(document).on("click", ".video-overlay-modal", function () {
      $("#video-overlay-modal").addClass("show");
    });
  }
  
  //send invitation redirection
  $(document).on("click", ".send-invitation", function () {
    console.log(1006);
    location.href = "../invitaion-sent-loader.html";
  });
  
  //profile menu dropdown open
  
  $(document).on("click", ".profile-btn", function () {
    $(this).toggleClass("show");
    $(".profile-menu").toggleClass("show");
  });
  
  $(document).on("click", ".dropdown-btn", function () {
    $(this).toggleClass("show");
    $(".dropdown__job-details").toggleClass("show");
  });
  
  /* if($('.modal').length>0) { */
  $(document).on("click", ".modal span.close", function () {
    console.log("closed");
    $(".modal").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(document).on("click", "#changeratemodalpopup.modal .close", function () {
    console.log("closed");
    $(".modal").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  /* } */
  
  // modify-job popup open
  $(document).on("click", ".postcode-modal-opens", function () {
    $("#postcode-popup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".recipientname-modal-opens", function () {
    $("#Care-recipient-name-popup").addClass("show");
    $("body").addClass("no-scroll");
  }); 
  $(document).on("click", ".recipientname-age-open", function () {
    $("#Care-recipient-age-popup").addClass("show");
    $("body").addClass("no-scroll");
  });

  $(document).on("change", "#Care-recipient-age-popup input", function () {
    if ($(this).val() != "")
      $("#Care-recipient-age-popup .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-recipient-age-popup .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });

  $(document).on("change", "#Care-recipient-age-popup2 input", function () {
    if ($(this).val() != "")
      $("#Care-recipient-age-popup2 .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-recipient-age-popup2 .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });

  $(document).on("change", "#Care-recipient-relationship-popup input", function () {
    if ($(this).val() != "")
      $("#Care-recipient-relationship-popup .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-recipient-relationship-popup .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });
  
  $(document).on("change", "#Care-recipient-relationship-popup2 input", function () {
    if ($(this).val() != "")
      $("#Care-recipient-relationship-popup2 .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-recipient-relationship-popup2 .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });

  $(document).on("click", ".recipientname-relationship-open", function () {
    $("#Care-recipient-relationship-popup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".help-nedded__modal-open", function () {
    $("#help-needed-carer-popup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".interests-popup-open", function () {
    $("#carerinterestmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".interests-popup-open2", function () {
    $("#carerinterestmodalpopup2").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".language-popup-open", function () {
    $("#secondlanmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".carerpreference-popup-open", function () {
    $("#carerpreferencemodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".typeoffunding-popup-open", function () {
    $("#selectfundingmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".condexperience-modal-open", function () {
    $("#condexperiencemodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });
  $(document).on(
    "click",
    ".addcondition__popup-open, .other-experience",
    function () {
      $("#addcondition-modal").addClass("show");
      $("#condexperiencemodalpopup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  $(document).on("click", "#addcondition-modal #add-condition-btn", function () {
    //  $(".addcondition__popup-open #other").val($("#addcondition-modal #name-of-condition").val());
    var t1 = $("#addcondition-modal #name-of-condition").val();
    var t1sub = t1.replace(/\s/g, "");
    $("#addcondition-modal #name-of-condition").val("");
    $("#addcondition-modal #add-condition-btn").addClass("disabled");
    var cont =
      '<div class="answer-item">' +
      '<input type="checkbox" id="' +
      t1sub +
      '" name="' +
      t1sub +
      '" value="' +
      t1 +
      '" checked>' +
      '<label for="' +
      t1sub +
      '">' +
      '<svg role="img" aria-label="Add" class="plus-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g clip-path="url(#clip0_1455_10588415)">' +
      '<path d="M12 1.71436V22.2858" stroke="#616161" stroke-width="1.71429" stroke-linecap="round"/>' +
      '<path d="M22.2857 12H1.71423" stroke="#616161" stroke-width="1.71429" stroke-linecap="round"/>' +
      "</g>" +
      "<defs>" +
      '<clipPath id="clip0_1455_10588415">' +
      '<rect width="24" height="24" fill="white"/>' +
      "</clipPath>" +
      "</defs>" +
      "</svg>" +
      '<svg role="img" aria-label="Remove" class="minus-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M22.57 12H2" stroke="#494FC9" stroke-width="1.71429" stroke-linecap="round"/>' +
      "</svg>" +
      '<span class="regular-font font-medium">' +
      t1 +
      "</span>" +
      "</label>" +
      "</div>";
  
    $(cont).insertBefore(".other-experience");
    // $(".addcondition__popup-open.other-experience").addClass('active');
    $("#addcondition-modal").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(document).on("click", "#addcondition-modal span.close", function (e) {
    e.stopPropagation();
    $("#addcondition-modal").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(document).on("click", ".card-footer__back-button", function () {
    $("#help-needed-popup").removeClass("show");
    $("#help-needed-carer-popup").addClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("change", ".specificcheckbox", function () {
    $("#specificreumodalpopup .card-footer__button").addClass("disabled");
    $("input:checkbox.specificcheckbox:checked").each(function () {
      $(this).parent().parent().toggleClass("active");
      $("#specificreumodalpopup .card-footer__button").removeClass("disabled");
    });
  });
  
  $(document).on("change", "#help-needed-popup input:checkbox", function () {
    $("#help-needed-popup .card-footer__button").addClass("disabled");
    $("#help-needed-popup input:checkbox:checked").each(function () {
      $("#help-needed-popup .card-footer__button").removeClass("disabled");
    });
  });
  
  $(document).on("change", "#selectfundingmodalpopup input:radio", function () {
    $("#selectfundingmodalpopup .card-footer__button").addClass("disabled");
    $("#selectfundingmodalpopup input:radio:checked").each(function () {
      $("#selectfundingmodalpopup .card-footer__button").removeClass("disabled");
    });
  });
  
  $(document).on(
    "change",
    "#carerinterestmodalpopup input:checkbox",
    function () {
      console.log("Checkbox 1761");
      $("#carerinterestmodalpopup .card-footer__button").addClass("disabled");
      $("#carerinterestmodalpopup input:checkbox:checked").each(function () {
        $("#carerinterestmodalpopup .card-footer__button").removeClass(
          "disabled"
        );
      });
    }
  );
  
  $(document).on(
    "change",
    "#carerinterestmodalpopup2 input:checkbox",
    function () {
      console.log("Checkbox 1761_1");
      $("#carerinterestmodalpopup2 #confirmBtn3").attr({ disabled: "disabled" });
      $("#carerinterestmodalpopup2 input:checkbox:checked").each(function () {
        $("#carerinterestmodalpopup2 #confirmBtn3").removeAttr("disabled");
      });
    }
  );
  
  $(document).on("change", "#secondlanmodalpopup input:checkbox", function () {
    console.log("Checkbox 1761");
    $("#secondlanmodalpopup .card-footer__button").addClass("disabled");
    $("#secondlanmodalpopup input:checkbox:checked").each(function () {
      $("#secondlanmodalpopup .card-footer__button").removeClass("disabled");
    });
  });
  
  $(document).on(
    "change",
    "#condexperiencemodalpopup input:checkbox",
    function () {
      console.log("Checkbox 1753");
      $("#condexperiencemodalpopup .card-footer__button").addClass("disabled");
      $("#condexperiencemodalpopup input:checkbox:checked").each(function () {
        $("#condexperiencemodalpopup .card-footer__button").removeClass(
          "disabled"
        );
      });
    }
  );
  
  $(document).on(
    "change",
    "#help-needed-carer-popup input:checkbox",
    function () {
      console.log("Checkbox 1753");
      $(this).parent().parent().toggleClass("active");
      $("#help-needed-carer-popup #helpneedconfirmBtn").addClass("disabled");
      $("#help-needed-carer-popup input:checkbox:checked").each(function () {
        console.log("1772");
        $("#help-needed-carer-popup #helpneedconfirmBtn").removeClass("disabled");
      });
    }
  );
  
  $(document).on(
    "change",
    "#carerpreferencemodalpopup input.radiocheckedcare",
    function (e) {
      console.log("Checkbox 1753");
      e.stopPropagation();
      $("#carerpreferencemodalpopup .radiocheckedcare")
        .parent()
        .removeClass("active");
      $(this).parent().addClass("active");
      $("#carerpreferencemodalpopup .card-footer__button").removeClass(
        "disabled"
      );
    }
  );
  
  $(document).on("change", "#name-of-condition", function () {
    console.log("call 1414");
    if ($(this).val() != "") {
      $("#addcondition-modal .card-footer__button.btn").removeClass("disabled");
      $("#addcondition-modal .card-footer__button.btn").removeAttr("disabled");
    } else {
      $("#addcondition-modal .card-footer__button.btn").addClass("disabled");
      $("#addcondition-modal .card-footer__button.btn").attr({
        disabled: "disabled",
      });
    }
  });
  
  /** On Any Saas Pages form Input Change Event **/
  $(document).on(
    "change",
    "#nights-per-week-modal input.dayschecked",
    function (e) {
      $(this).parent().parent().toggleClass("active");
      let check = true;
      let a = $("#nights-per-week-modal input.dayschecked:checked")
        .map(function () {
          check = false;
        })
        .get();
  
      if (!check) {
        $("#nights-per-week-modal .modal-footer a.addbtn").css({
          visibility: "visible",
        });
      } else {
        $("#nights-per-week-modal .modal-footer a.addbtn").css({
          visibility: "hidden",
        });
      }
    }
  );
  
  $(document).on(
    "change",
    "#days-per-week-modal input.checkboxchecked",
    function (e) {
      $(this).parent().parent().toggleClass("active");
      let check = true;
      let a = $("#days-per-week-modal input.checkboxchecked:checked")
        .map(function () {
          check = false;
        })
        .get();
  
      if (!check) {
        $("#days-per-week-modal .modal-footer a.addbtn").css({
          visibility: "visible",
        });
      } else {
        $("#days-per-week-modal .modal-footer a.addbtn").css({
          visibility: "hidden",
        });
      }
    }
  );
  
  $(document).on(
    "click",
    "#help-needed-carer-popup #helpneedconfirmBtn",
    function () {
      console.log("Checkbox 1777");
      $("#help-needed-carer-popup #helpneedconfirmBtn").addClass("disabled");
      var tt = true;
      $("#help-needed-carer-popup input:checkbox:checked").each(function () {
        console.log("Checkbox 1781");
        if ($("#specialist").is(":checked")) {
          $("#help-needed-carer-popup").removeClass("show");
          $("#help-needed-popup").addClass("show");
          $("body").toggleClass("no-scroll");
          tt = false;
        }
      });
  
      if (tt) {
        $(".modal").removeClass("show");
        $("body").removeClass("no-scroll");
        setTimeout(() => {
         // $("#discardmodalpopup").addClass("show");
          $("body").addClass("no-scroll");
        }, 200);
      }
    }
  );
  
  //Modify Page Popup value set jquery trigger
  if ($("body").hasClass("modify-job")) {
    $("#postcode-popup #location-postcode-field-mob").val("SW1A 2AA");
    $("#postcode-popup #location-postcode-field-mob")
      .next()
      .find("li")
      .trigger("click");
  
    $("#help-needed-carer-popup #companionship-household").prop({
      checked: true,
    });
    $("#help-needed-carer-popup #companionship-household").trigger("change");
  
    $("#specificreumodalpopup #has-driving-licence").prop({ checked: true });
    $("#specificreumodalpopup #has-driving-licence").trigger("change");
  
    $("#carerpreferencemodalpopup #Male").prop({ checked: true });
    $("#carerpreferencemodalpopup #Male").trigger("change");
  
    $("#type-of-care-modal #type-of-care__overnight__sleeping").prop({
      checked: true,
    });
    $("#type-of-care-modal #type-of-care__overnight__sleeping").trigger("change");
  
    $("#duration-of-care-modal #overnight").prop({ checked: true });
    $("#duration-of-care-modal #overnight").trigger("change");
  
    $(
      "#nights-per-week-modal #wednesday, #nights-per-week-modal #thursday, #nights-per-week-modal #friday, #nights-per-week-modal #saturday"
    )
      .prop({ checked: true })
      .trigger("change");
  
    $("#preferredratemodalpopup #modalchange-rate").val("120.00");
    $("#preferredratemodalpopup #modalchange-rate").trigger("click");
  
    $(
      "#carerinterestmodalpopup #cooking, #carerinterestmodalpopup #gardening, #carerinterestmodalpopup #film, #carerinterestmodalpopup #exercise"
    )
      .prop({ checked: true })
      .trigger("change");
  
    $(
      "#condexperiencemodalpopup #physical-disabilities1, #condexperiencemodalpopup #stroke1, #condexperiencemodalpopup #copd1"
    )
      .prop({ checked: true })
      .trigger("change");
  }
  
  $(document).on("click", ".btn-action-modify .backbtn", function () {
    $(".btn-action-modify").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(document).on("click", "#preferredratemodalpopup .backbtn", function () {
    $("#preferredratemodalpopup").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(document).on("click", ".btn-action-modify .addbtn", function () {
    $(".btn-action-modify").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  
  if ($(".jobposting-flow .center-content-area").length > 0) {
    var wh = $(window).height();
    var ch = $("main .action-buttons").height();
    $(".jobposting-flow .center-content-area").css({ "max-height": wh - ch });
  }
  
  $(document).ready(function () {
    setTimeout(function () {
      $("body#signup").addClass("loading");
    }, 1000);
  });
  
  $(document).on("keyup", "#phonenumber-field, #phonenumber-field2, #location-postcode-field-mob", function () {
    var obj = $(this);
    console.log("call 2762");
    if (obj.val() != "") {
      obj.parent().parent().addClass("dropdownactive");
      obj.parent().find(".dropdown-close").addClass("show");
    } else {
      obj.parent().find(".dropdown-close").removeClass("show");
    }
  });
  
  $(document).on("click", ".dropdown-close", function () {
    var obj = $(this);
    obj.parent().find("input").val("");
    obj.removeClass("show");
  });
  
  $(document).on(
    "keyup",
    ".conditional-experience-section .answer-item .other-experience input",
    function () {
      var obj = $(this);
      if (obj.val() != "") {
        obj.parent().addClass("active");
      } else {
        obj.parent().removeClass("active");
      }
    }
  );
  
  $(document).on(
    "click",
    ".language-dropdown .form__input-group button",
    function () {
      var obj = $(this);
  
      var listid = $(this).attr("aria-controls");
      // $(this).trigger('click');
      $("#" + listid).removeAttr("tabindex");
      setTimeout(function () {
        $("#" + listid)
          .find("li:first-child input")
          .trigger("focus");
      }, 200);
  
      setTimeout(() => {
        obj.next().toggleClass("show");
        if (obj.next().hasClass("show")) obj.attr({ "aria-expanded": "true" });
        else obj.attr({ "aria-expanded": "false" });
      }, 20);
    }
  );
  
  window.onclick = function (event) {
    if (
      !$(event.target).parent().parent().hasClass("dropdown-menu") &&
      !$(event.target).parent().parent().parent().hasClass("dropdown-menu")
    ) {
      $(".language-dropdown .form__input-group button").attr({
        "aria-expanded": "false",
      });
      $(".language-dropdown .form__input-group button")
        .next()
        .removeClass("show");
    }
  };
  
  /*$( document ).on( "blur", ".language-dropdown .form__input-group button", function() {
          var obj = $(this);
          obj.next().removeClass("show");
      });
  */
  
  /** On Any Saas Pages form Input Change Event **/
  $(".radiocheckedb2b").change(function () {
    $(".radiocheckedb2b").parent().removeClass("active");
    $(this).parent().addClass("active");
    console.log($(this).val());
    var valselected = $(this).val();
    if (valselected == "Myself" || valselected == "Family") {
      $("#nextBtn").attr({ href: "how-funding.html" });
    } else if (valselected == "Friend") {
      $("#nextBtn").attr({ href: "authorised-pay.html" });
    } else if (valselected == "mybusiness") {
      $("#nextBtn").attr({ href: "organisation-type.html" });
    }
  
    $("#whocare-form").addClass("fill");
  
    setTimeout(function () {
      location.href = $("#nextBtn").attr("href");
    }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
  });
  
  /** On Any Saas Pages form Input Change Event **/
  $(".radiocheckedauthorisedpay").change(function () {
    $(".radiocheckedauthorisedpay").parent().removeClass("active");
    $(this).parent().addClass("active");
    console.log($(this).val());
    var valselected = $(this).val();
    $("#nextBtn").show();
    if (valselected == "yes") {
      $("#nextBtn").attr({ href: "help-needed.html" });
    } else if (valselected == "no") {
      $(".modal#confirmmodalpopup").addClass("show");
      $("body").addClass("no-scroll");
      $("#nextBtn").hide();
    }
  
    $("#whocare-form").addClass("fill");
  
    setTimeout(function () {
      location.href = $("#nextBtn").attr("href");
    }, 100);
    // $("#nextBtn, #nextBtn2").css({'display':'flex'});
  });
  
  $("input:radio[name=funding]").change(function () {
    var valselected = $("input[name='funding']:checked").val();
  
    if (valselected == "Other commercial partner") {
      $("#nextBtn").attr({ href: "commercial-partner.html" });
    } else if (valselected == "Local authority") {
      $("#nextBtn").attr({ href: "local-authority.html" });
    } else if (valselected == "NHS/ICS") {
      $("#nextBtn").attr({ href: "trust.html" });
    } else if (valselected == "Care agencies") {
      $("#nextBtn").attr({ href: "care-agency.html" });
    } else if (valselected == "Case management company") {
      $("#nextBtn").attr({ href: "case-management-company.html" });
    } else if (valselected == "Care home") {
      $("#nextBtn").attr({ href: "care-home.html" });
    } else if (valselected == "Charity") {
      $("#nextBtn").attr({ href: "charity.html" });
    }
  
    $("#whocare-form").addClass("fill");
  
    setTimeout(function () {
      location.href = $("#nextBtn").attr("href");
    }, 100);
  });
  
  document.onkeyup = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      $(".modal").removeClass("show");
      $("body").removeClass("no-scroll");
      obj = $(".language-dropdown .form__input-group button");
      obj.attr({ "aria-expanded": "false" });
      obj.next().removeClass("show");
    }
  };
  
  // management flow additional info modal
  
  $(document).on(
    "click",
    "#secondlanmodalpopup .redirect-type-funding",
    function () {
      $("#selectfundingmodalpopup").addClass("show");
      $("#secondlanmodalpopup, #prefferedratemodalpopup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  // $( document ).on( "click", "#secondlanmodalpopup .redirect-type-funding", function() {
  //     $("#secondlanmodalpopup").addClass('show');
  //     $("#carerinterestmodalpopup").removeClass('show');
  //     $('body').toggleClass('no-scroll');
  // });
  $(document).on(
    "click",
    "#secondlanmodalpopup .redirect-carer-interest",
    function () {
      console.log("call ");
      $("#carerinterestmodalpopup").addClass("show");
      $("#secondlanmodalpopup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  $(document).on(
    "click",
    "#selectfundingmodalpopup .redirect-language",
    function () {
      console.log("call99");
      $("#secondlanmodalpopup").addClass("show");
      $("#selectfundingmodalpopup, #prefferedratemodalpopup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  $(document).on(
    "click",
    "#selectfundingmodalpopup .redirect-recipients-name",
    function () {
      $("#Care-recipient-name-popup").addClass("show");
      $("#selectfundingmodalpopup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  $(document).on(
    "click",
    "#Care-recipient-name-popup .redirect-funding",
    function () {
      $("#selectfundingmodalpopup").addClass("show");
      $("#Care-recipient-name-popup").removeClass("show");
      $("body").toggleClass("no-scroll");
    }
  );
  $(document).on("click", "#Care-recipient-name-popup .end-flow", function () {
    location.href = "care-need-updated-loader.html";
  });
  $(document).on("click", "#specificreumodalpopup2 .addbtn", function () {
    $("#carerinterestmodalpopup2").addClass("show");
    $("#specificreumodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#specificreumodalpopup2 .skipbtn", function () {
    $("#carerinterestmodalpopup2").addClass("show");
    $("#specificreumodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#carerinterestmodalpopup2 .addbtn", function () {
    $("#secondlanmodalpopup2").addClass("show");
    $("#carerinterestmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#carerinterestmodalpopup2 .skipbtn", function () {
    $("#secondlanmodalpopup2").addClass("show");
    $("#carerinterestmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#carerinterestmodalpopup2 .backbtn", function () {
    $("#specificreumodalpopup2").addClass("show");
    $("#carerinterestmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#secondlanmodalpopup2 .addbtn", function () {
    $("#Care-recipient-name-popup2").addClass("show");
    $("#secondlanmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#secondlanmodalpopup2 .skipbtn", function () {
    $("#Care-recipient-name-popup2").addClass("show");
    $("#secondlanmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#secondlanmodalpopup2 .backbtn", function () {
    $("#carerinterestmodalpopup2").addClass("show");
    $("#secondlanmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("change", "#secondlanmodalpopup2 input:checkbox", function () {
    console.log("Checkbox 1761_2");
    $("#secondlanmodalpopup2 #languageconfirmBtn").attr({ disabled: "disabled" });
    $("#secondlanmodalpopup2 input:checkbox:checked").each(function () {
      $("#secondlanmodalpopup2 #languageconfirmBtn").removeAttr("disabled");
    });
  });
  
  $(document).on("click", "#selectfundingmodalpopup2 .addbtn", function () {
    $("#Care-recipient-name-popup2").addClass("show");
    $("#selectfundingmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#selectfundingmodalpopup2 .skipbtn", function () {
    $("#Care-recipient-name-popup2").addClass("show");
    $("#selectfundingmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#selectfundingmodalpopup2 .backbtn", function () {
    $("#secondlanmodalpopup2").addClass("show");
    $("#selectfundingmodalpopup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });
  
  $(document).on("click", "#Care-recipient-name-popup2 .backbtn", function () {
    $("#secondlanmodalpopup2").addClass("show");
    $("#Care-recipient-name-popup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });

  $(document).on("click", "#Care-recipient-age-popup2 .addbtn, #Care-recipient-age-popup2 .skipbtn", function () {
    $("#Care-recipient-relationship-popup2").addClass("show");
    $("#Care-recipient-age-popup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });

  $(document).on("click", "#Care-recipient-age-popup2 .backbtn", function () {
    $("#Care-recipient-name-popup2").addClass("show");
    $("#Care-recipient-age-popup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });

  $(document).on("click", "#Care-recipient-relationship-popup2 .backbtn", function () {
    $("#Care-recipient-age-popup2").addClass("show");
    $("#Care-recipient-relationship-popup2").removeClass("show");
    $("body").toggleClass("no-scroll");
  });

  $(document).on("click", "#Care-recipient-name-popup2 .addbtn", function () {
      console.log("heeee");
      setTimeout(() => {
        $(".modal").removeClass("show");
        $("#Care-recipient-age-popup2").addClass("show");
      },100);
      $("#Care-recipient-name-popup2").removeClass("show");
      $("body").toggleClass("no-scroll");
  });
  $(document).on("click", "#Care-recipient-name-popup2 .skipbtn", function () {
    $("#Care-recipient-name-popup2").removeClass("show");
    setTimeout(() => {
      $(".modal").removeClass("show");
      $("#Care-recipient-age-popup2").addClass("show");
    },100);
    $("body").toggleClass("no-scroll");
  });


  
  $(document).on("change", "#Care-specific-requirement-popup2 textarea", function () {
    console.log("call 2415");
    if ($(this).val() != "")
      $("#Care-specific-requirement-popup2 .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-specific-requirement-popup2 .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });

  $(document).on("change", "#Care-recipient-name-popup input", function () {
    console.log("call 2415");
    if ($(this).val() != "")
      $("#Care-recipient-name-popup .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-recipient-name-popup .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });
  
  $(document).on("change", "#Care-recipient-name-popup2 input", function () {
    console.log("call 2415");
    if ($(this).val() != "")
      $("#Care-recipient-name-popup2 .addbtn")
        .removeAttr("disabled")
        .removeClass("disabled");
    else
      $("#Care-recipient-name-popup2 .addbtn")
        .attr({ disabled: "disabled" })
        .addClass("disabled");
  });
  
  $(document).on(
    "click",
    "#Care-recipient-name-popup #name-chnaged",
    function () {
      $("#Care-recipient-name-popup span.close").trigger("click");
    }
  );

  $(document).on(
    "click",
    "#Care-recipient-age-popup #age-chnaged",
    function () {
      $("#Care-recipient-age-popup span.close").trigger("click");
    }
  );

  
  $(document).on(
    "click",
    "#Care-recipient-relationship-popup #relationship-chnaged",
    function () {
      $("#Care-recipient-relationship-popup span.close").trigger("click");
    }
  );
  
  $(document).on("click", "#closejobmodalpopup .close-job-btn", function () {
    $("#closejobmodalpopup span.close").trigger("click");
  });
  $(document).on(
    "click",
    "#unpublishmodalpopup .unlist-care-needs-close",
    function () {
      $("#unpublishmodalpopup span.close").trigger("click");
    }
  );
  
  $(document).on("click", "#Care-recipient-name-popup2 button.close", function () {
      $("#Care-recipient-name-popup2 span.close").trigger("click");
    }
  );

  $(document).on("click", "#Care-recipient-relationship-popup2 button.close", function () {
    $("#Care-recipient-relationship-popup2 span.close").trigger("click");
  }
);

$(document).on("click", "#changeratemodalpopup2 button#closemodal", function () {
  $("#changeratemodalpopup2").removeClass("show");
  $("body").removeClass("no-scroll");
}
);


$(document).on("click", "#Care-recipient-relationship-popup2 .skipbtn", function () {
  $("#Care-specific-requirement-popup2").addClass("show");
  $("#Care-recipient-relationship-popup2").removeClass("show");
  $("body").addClass("no-scroll");
}
);

$(document).on("click", "#Care-specific-requirement-popup2 button.close,  #Care-specific-requirement-popup2 .skipbtn", function () {
  $("#Care-recipient-relationship-popup2 span.close").trigger("click");
}
);
  
  $(document).on("click", "#changeratemodalpopup2 button.close", function () {
    $("#changeratemodalpopup2 span.close").trigger("click");
  });
  
  $(document).on("click", "#Care-recipient-relationship-popup2 .addbtn", function () {
    $("#Care-specific-requirement-popup2").addClass("show");
    $("#Care-recipient-relationship-popup2").removeClass("show");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#Care-specific-requirement-popup2 .backbtn", function () {
    $("#Care-specific-requirement-popup2").removeClass("show");
    $("#Care-recipient-relationship-popup2").addClass("show");
    $("body").addClass("no-scroll");
  });
  

  $(document).on("click", "#Care-specific-requirement-popup2 .addbtn", function () {
    location.href = "close-job-loader.html";
  });
  
  $(document).on("click", "#changeratemodalpopup2 .boost-rate-btn", function () {
    location.href = "care-need-updated-loader.html";
  });
  $(document).on("click", "#changeratemodalpopup .boost-rate-btn", function () {
    location.href = "care-need-updated-loader.html";
  });
  
  // message flow modal open
  
  $(document).on("click", ".schedule-meeting-modal-open", function () {
    $("#schedule-meeting-modal").addClass("show");
  });
  
  $(document).on("click", ".shift-invoice-modal-open", function () {
    $("#shift-invoice-modal").addClass("show");
  });
  
  $(document).on("click", "#shift-invoice-modal #ConfirmShift", function () {
    $("#shift-invoice-modal").removeClass("show");
  });
  
  $(document).on("click", ".activity-modal-open", function () {
    $("#activity-modal").addClass("show");
  });
  
  $(document).on("click", "#schedule-meeting-modal button.close", function () {
    $("#schedule-meeting-modal").removeClass("show");
  });

  $(document).on("click", ".report-profile-modal-open", function () {
    $("#report-profile__modal").addClass("show");
  });

  $(document).on("click", ".open-report-profile-confirm-modal", function () {
    $('#report-profile__modal').removeClass('show');
    $("#report-profile__confirm-modal").addClass("show");
  });
  
  
  $(document).on("change", "#report-profile__modal input[name='report-profile']", function () {
    
        $("#report-profile__modal #ConfirmReport").removeAttr("disabled").removeClass("disabledbtn");
       
  });

  if ($("#sign-up-send-message-combine2").length > 0) {
    if($("#sign-up-send-message-combine2").hasClass('enter-address__page')){
      $("#sign-up-send-message-combine2 input").blur(function () {
        console.log("keyup change");
        $("#sign-up-send-message-combine2 button.continue").attr({
          disabled: "disabled",
        });
        $("#location-signup-field__error-msg").hide();
        $("#street-address-field__input__error-msg").hide();
        $("#street-address2-field__input__error-msg").hide();
        $("#city-field__input__error-msg").hide();
        var checkvalid = true;
        if ($("#postcode-signup-field").val() == "") {
          $("#location-signup-field__error-msg").show();
          checkvalid = false;
        }
        if ($("#street-address").val() == "") {
          $("#street-address-field__input__error-msg").show();
          checkvalid = false;
        }

        if ($("#street-address2").val() == "") {
          $("#street-address2-field__input__error-msg").show();
          checkvalid = false;
        }

        if ($("#city").val() == "") {
          $("#city-field__input__error-msg").show();
          checkvalid = false;
        }


        if (checkvalid) {
          $("#sign-up-send-message-combine2 button.continue-btn, #sign-up-send-message-combine2 button.continue-btn-usecase1, #sign-up-send-message-combine2 button.onboarding-loader").removeAttr(
            "disabled"
          );
        }
      });

      $("#sign-up-send-message-combine2 button").click(function () {
        console.log("click change");
        if (
          $("#postcode-signup-field").val() != "" &&
          $("#street-address").val() != "" &&
          $("#street-address2").val() != "" &&
          $("#city").val() != ""
        ) {
          console.log("Signup successful");
          if($("#sign-up-send-message-combine2 button").hasClass('continue-btn')){
              location.href="signing-up.html";
          }

          if($("#sign-up-send-message-combine2 button").hasClass('onboarding-loader')){
            location.href="onboarding-loader.html";
          }

          if($("#sign-up-send-message-combine2 button").hasClass('continue-btn-usecase1')){
            location.href="help-needed.html";
          }
          
        } else {
          if ($("#postcode-signup-field").val() == "") {
            $("#location-signup-field__error-msg").show();
          }

          if ($("#street-address").val() == "") {
            $("#street-address-field__input__error-msg").show();
          }

          if ($("#street-address2").val() == "") {
            $("#street-address2-field__input__error-msg").show();
          }
          
          if ($("#city").val() == "") {
            $("#city-field__input__error-msg").show();
          }
        }
      });
    } else if($("#sign-up-send-message-combine2").hasClass('b2buc-1-flow')){
      
      $("#sign-up-send-message-combine2 input").blur(function () {
        console.log("keyup change");
        $("#sign-up-send-message-combine2 button.continue").attr({
          disabled: "disabled",
        });
        $("#last-name-field__input__error-msg").hide();
        $("#first-name-field__input__error-msg").hide();
        $("#password__error-msg").hide();
        $("#field__phonenumber__error-msg").hide();
        $("#email-field__input__error-msg").hide();
        var checkvalid = true;
        if ($("#first-name-name-field").val() == "") {
          $("#first-name-field__input__error-msg").show();
          checkvalid = false;
        }
        if ($("#last-name-name-field").val() == "") {
          $("#last-name-field__input__error-msg").show();
          checkvalid = false;
        }

        if ($("#phonenumber-field").val() == "") {
          $("#field__phonenumber__error-msg").show();
          checkvalid = false;
        }

        if ($("#send-message-password-field").val() == "") {
          $("#password__error-msg").show();
          checkvalid = false;
        }
        
        if ($("#send-message-email-field").val() == "") {
          $("#email-field__input__error-msg").show();
          checkvalid = false;
        }


        if (checkvalid) {
          $("#sign-up-send-message-combine2 button.continue").removeAttr(
            "disabled"
          );
        }
      });

      $("#sign-up-send-message-combine2 button").click(function () {
        console.log("click change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != "" &&
          $("#phonenumber-field").val() != "" &&
          $("#send-message-password-field").val() != ""
        ) {
          console.log("Signup successful");
          if($("#sign-up-send-message-combine2 button").hasClass('continue')){
              location.href="who-care.html";
          }
          
        } else {
          if ($("#first-name-name-field").val() == "") {
            $("#first-name-field__input__error-msg").show();
          }

          if ($("#last-name-name-field").val() == "") {
            $("#last-name-field__input__error-msg").show();
          }

          if ($("#phonenumber-field").val() == "") {
            $("#field__phonenumber__error-msg").show();
          }
          
          if ($("#send-message-email-field").val() == "") {
            $("#email-field__input__error-msg").show();
          }

          if ($("#send-message-password-field").val() == "") {
            $("#password__error-msg").show();
          }
        }
      });
      
    } else {
      $("#sign-up-send-message-combine2 input").blur(function () {
        console.log("keyup change");
        $("#sign-up-send-message-combine2 button.continue").attr({
          disabled: "disabled",
        });
        $("#last-name-field__input__error-msg").hide();
        $("#first-name-field__input__error-msg").hide();
        $("#password__error-msg").hide();
        $("#field__phonenumber__error-msg").hide();
        $("#email-field__input__error-msg").hide();
        var checkvalid = true;
        if ($("#first-name-name-field").val() == "") {
          $("#first-name-field__input__error-msg").show();
          checkvalid = false;
        }
        if ($("#last-name-name-field").val() == "") {
          $("#last-name-field__input__error-msg").show();
          checkvalid = false;
        }

        if ($("#phonenumber-field").val() == "") {
          $("#field__phonenumber__error-msg").show();
          checkvalid = false;
        }

        if ($("#send-message-password-field").val() == "") {
          $("#password__error-msg").show();
          checkvalid = false;
        }
        
        if ($("#send-message-email-field").val() == "") {
          $("#email-field__input__error-msg").show();
          checkvalid = false;
        }


        if (checkvalid) {
          $("#sign-up-send-message-combine2 button.continue").removeAttr(
            "disabled"
          );
        }
      });

      $("#sign-up-send-message-combine2 button").click(function () {
        console.log("click change");
        if (
          $("#first-name-name-field").val() != "" &&
          $("#last-name-name-field").val() != "" &&
          $("#phonenumber-field").val() != "" &&
          $("#send-message-password-field").val() != ""
        ) {
          console.log("Signup successful");
          if($("#sign-up-send-message-combine2 button").hasClass('redirect-address')){
              location.href="enter-address.html";
          }
          
        } else {
          if ($("#first-name-name-field").val() == "") {
            $("#first-name-field__input__error-msg").show();
          }

          if ($("#last-name-name-field").val() == "") {
            $("#last-name-field__input__error-msg").show();
          }

          if ($("#phonenumber-field").val() == "") {
            $("#field__phonenumber__error-msg").show();
          }
          
          if ($("#send-message-email-field").val() == "") {
            $("#email-field__input__error-msg").show();
          }

          if ($("#send-message-password-field").val() == "") {
            $("#password__error-msg").show();
          }
        }
      });
    }
  
}

  $(document).on(
    "change",
    "#schedule-meeting-modal input[name='schedulemeeting']",
    function () {
      console.log("call 2415");
      if ($('input[name="schedulemeeting"]:checked').val() != "")
        $("#schedule-meeting-modal #Confirm")
          .removeAttr("disabled")
          .removeClass("disabledbtn");
      else
        $("#schedule-meeting-modal #Confirm")
          .attr({ disabled: "disabled" })
          .addClass("disabledbtn");
    }
  );
  
  $(document).on(
    "change",
    "#schedule-meeting-modal input[name='meetingdate']",
    function () {
      $("#schedule-meeting-modal .date-cell").removeClass("active");
      $(this).parent().addClass("active");
    }
  );
  
  
  
  if ($("#request-msg").length > 0) {
    $(document).on("change", "#request-msg", function () {
      if($(this).val() != ""){
        $('.request-btn').removeAttr('disabled');
      }else{
        $('.request-btn').attr({'disabled':'disabled'});
      }
    });

    $(document).on("click", "button.btn.primary-button.request-btn", function () {
        alert("Request Demo Submitted Successfully");
    });
    
  }

  if ($(".save-publish-care__modal2").length > 0) {
    $(document).on("click", ".save-publish-care__modal2", function () {
      $("#savepublishcaremodalpopup2").addClass("show");
      $("body").addClass("no-scroll");
    });

    $(document).on("click", "#savepublishcaremodalpopup2 .btn", function () {
      $("#savepublishcaremodalpopup2").removeClass("show");
      $("body").removeClass("no-scroll");
    });
    
  }


  $(document).on("click", "#specificrebackbtn .btn", function () {
    $("#savepublishcaremodalpopup2").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  

  $(document).on("click", ".messages-list__message-cell", function () {
    console.log($(this).data("user"));
    $(".messages-list__message-cell").each(function () {
      $(this).removeClass("active");
    });
    $("#rightPanelName").text($(this).data("user"));
    $("#rightPanelImg").attr("src", $(this).data("profileimg"));
    $("#rightPanelEmptyState").html($(this).data("emptystate"));
    $(this).addClass("active");
  });
  
  $(".activity-modal-open").click(function () {
    console.log("cal");
    var win = $(window); //this = window
    if (win.width() > 769) {
      $("#activity-modal .modal-content").animate({ left: "0%" }, 300);
    }
  });
  
  function closePopupActivity() {
    var win = $(window); //this = window
    if (win.width() > 769) {
      $("#activity-modal .modal-content").animate({ left: "80%" }, 300);
    }
    console.log("1767");
    setTimeout(() => {
      $("#activity-modal").removeClass("show");
      $("body").addClass("no-scroll");
    }, 400);
  }
  
  $(".messages-list__message-cell").click(function(){
      var win = $(window);
      if(win.width() < 600){
          $(".messages-list__left-pannel").addClass('hide');
          $(".messages-chat-window__right-pannel").removeClass('hide');
      }
  })
  function gotoBack(){
      var win = $(window);
      if(win.width() < 600){
          $(".messages-list__left-pannel").removeClass('hide');
          $(".messages-chat-window__right-pannel").addClass('hide');
      }
  }

  if ($(".audio-element-item").length > 0) {
    var audiocount = 1;
      $(".audio-element-item").each(function(){
        $(this).find('audio').attr({'id':'audio'+audiocount});
        
          var x = document.getElementById('audio'+audiocount).duration;
          var t1 = (x/100).toFixed(2);
          $(this).find('.waveform__duration').html(t1.replace(".", ":"));
          audiocount++;
          console.log("call 3348");

          
          $(document).on("click", ".controlelement", function () {
              var obj = $(this);
              var audioele = obj.parent().find('audio').attr('id');
          });
      });
  }


  $(document).on("click", ".self-funding__modal-open", function () {
    $(".self-funding__modal-open").addClass("active");
    $(".modal#selffundingmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#selffundingmodalpopup .close", function () {
    $(".self-funding__modal-open").removeClass("active");
  });

  $(document).on("click", ".direct-payment-funding__modal-open", function () {
    $(".direct-payment-funding__modal-open").addClass("active");
    $(".modal#directpaymentmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#directpaymentmodalpopup .close", function () {
    $(".direct-payment-funding__modal-open").removeClass("active");
  });

  $(document).on("click", ".personal-health-funding__modal-open", function () {
    $(".personal-health-funding__modal-open").addClass("active");
    $(".modal#personalhealthmodalpopup").addClass("show");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", "#personalhealthmodalpopup .close", function () {
    $(".personal-health-funding__modal-open").removeClass("active");
  });


  // open signup popup



/*
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#A2A5E4',
    progressColor: '#494FC9',
    height: 20
});
    
var audioplay = true;

wavesurfer.load('../../res/file_example_MP3_1MG.mp3');

function clickplay() {
    if(audioplay){
        wavesurfer.play();
        audioplay=false;
    }else {
            wavesurfer.pause();    
            audioplay = true;
    }
};

var formatTime = function (time) {
  return [
      Math.floor((time % 3600) / 60), // minutes
      ('00' + Math.floor(time % 60)).slice(-2) // seconds
  ].join(':');
};


wavesurfer.on('ready', function () {
  $('.waveform__duration').text( formatTime(wavesurfer.getDuration()) );
});
*/
// password text visible

function createstars(n) {
  return new Array(n+1).join("•")
}

$(document).ready(function() {

  console.log('pass123465')

  var timer = "";

  $(".panel").prepend($('<input type="text" class="hidpassw" />'));

  $(".hidpassw").attr("name", $(".pass").attr("name"));

  $(".pass").attr("type", "text").removeAttr("name");

  $("body").on("keypress", ".pass", function(e) {
    var code = e.which;
    if (code >= 32 && code <= 127) {
      var character = String.fromCharCode(code);
      $(".hidpassw").val($(".hidpassw").val() + character);
    }


  });

  $("body").on("keypress", ".hidpassw", function(e) {
    var code = e.which;
    if (code >= 32 && code <= 127) {
      var character = String.fromCharCode(code);
      $(".pass").val($(".pass").val() + character).trigger('keyup');
    }
  });

  $("body").on("keyup", ".pass", function(e) {
    var code = e.which;

    if (code == 8) {
      var length = $(".pass").val().length;
      $(".hidpassw").val($(".hidpassw").val().substring(0, length));
    } else if (code == 37) {

    } else {
      var current_val = $('.pass').val().length;
      $(".pass").val(createstars(current_val - 1) + $(".pass").val().substring(current_val - 1));
    }

    clearTimeout(timer);
    timer = setTimeout(function() {
      $(".pass").val(createstars($(".pass").val().length));
    }, 200);

  });

  $("body").on("click", ".revealpass", function(e) {
    console.log("clicked");
     $(".panel").toggleClass('revealText');
  });

});

var showcount = 0;
$("body").on("click", ".input-field__container-tex-input", function(e) {
    console.log("clicked");
    showcount++;
    var fldval = $(this).val();

    var win = $(this); //this = window
 
      if(showcount > 1){
          $('.dropdown-menu .dropdown-item').hide();
          $('.dropdown-menu .add-dropdown-item q').html(fldval);
          $('.dropdown-menu .add-dropdown-item').css({'display':'flex'});
      }
});