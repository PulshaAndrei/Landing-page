function send(e) {
    var a = !0,
        s = /.+@.+\..+/i;
    if (s.test(e.email.value) ? ($(".email-div input").removeClass("error_input"), $(".email-div p").removeClass("error_p")) : ($(".email-div input").addClass("error_input"), $(".email-div p").addClass("error_p"), a = !1), "" == e.name.value ? ($(".name-div input").addClass("error_input"), $(".name-div p").addClass("error_p"), a = !1) : ($(".name-div input").removeClass("error_input"), $(".name-div p").removeClass("error_p")), "" == e.message.value ? ($(".message-div textarea").addClass("error_input"), $(".message-div p").addClass("error_p"), a = !1) : ($(".message-div textarea").removeClass("error_input"), $(".message-div p").removeClass("error_p")), "" != grecaptcha.getResponse() ? $(".captcha-div p").removeClass("error_p") : ($(".captcha-div p").addClass("error_p"), a = !1), a) {
        var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        r.open("POST", "https://mandrillapp.com/api/1.0/messages/send.json"), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.onreadystatechange = function() {
            4 == r.readyState && alert(200 == r.status ? "Mail sended!" : 500 == r.status ? "Check apikey" : "Request error")
        }, r.send(JSON.stringify({
            key: "jJvyiaMWRKRJeUOoMc_aDA",
            message: {
                from_email: "support@dollz.com",
                to: [{
                    email: "support@pogodee.com",
                    type: "to"
                }],
                autotext: "true",
                subject: "Doll.im",
                html: "<p>Name: " + e.name.value + "</p><p>E-mail: " + e.email.value + "</p><p>Message: " + e.message.value + "</p>"
            }
        })), $(".close").click()
    }
}
$(function() {
    $(".popup_background").addClass("disable_popup"), $(".contact_us").click(function() {
        $(".popup").removeClass("disable_popup")
    }), $(".close").click(function() {
        $(".popup").addClass("disable_popup")
    })
});

function nextSlide() {
    var e = parseInt($(".slidewrapper").data("current"));
    e++, e >= $(".slidewrapper").children().size() / 2 && (e = 0), $(".slidewrapper").animate({
        left: -e * slideWidth
    }, 1e3).data("current", e)
}

function prevSlide() {
    var e = parseInt($(".slidewrapper").data("current"));
    e--, 0 > e && (e = $(".slidewrapper").children().size() / 2 - 1), $(".slidewrapper").animate({
        left: -e * slideWidth
    }, 1e3).data("current", e)
}
var slideWidth, sliderTimer;
function init_gallery(numImage) {
    for (var i = 1; i < numImage; i++) $(".slidewrapper").append('<li class="slide"><img src="img/gallery_'+i+'.jpg"></li>');
    slideWidth = $(".slide").width(), $(".slidewrapper").width(numImage * slideWidth), sliderTimer = setInterval(nextSlide, 3e3), $(".next_slide").click(function() {
        clearInterval(sliderTimer), nextSlide()
    }), $(".prev_slide").click(function() {
        clearInterval(sliderTimer), prevSlide()
    })
}
$(document).ready(function() {
	var numImage = 0;
	for (var i = 1; i <= 30; i++) loadImage(i);
	function loadImage(index) {
		var image = new Image();
		image.onerror = function () { 
            if (numImage == 0) numImage=index; 
            else numImage = Math.min(numImage, index);
            if (index == 30) init_gallery(numImage);
        };
		image.src = "img/gallery_" + index + ".jpg";
    }   
});
