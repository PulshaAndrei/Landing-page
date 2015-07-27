var date;
$(function(){
	$('.popup').addClass('disable_popup');
	$('.popup_background').addClass('disable_popup');
	$('.contact_us').click(function(){ $('.popup').removeClass('disable_popup')});
	$('.close').click(function(){ $('.popup').addClass('disable_popup')});
});


function send(form){
	var reg = /.+@.+\..+/i;
	if (!reg.test(form.email.value)) {
		$('.email-div input').addClass('error_input');
		$('.email-div p').addClass('error_p');
	}
	else{
		$('.email-div input').removeClass('error_input');
		$('.email-div p').removeClass('error_p');
	};
	if (form.name.value == ""){
		$('.name-div input').addClass('error_input');
		$('.name-div p').addClass('error_p');
	}
	else{
		$('.name-div input').removeClass('error_input');
		$('.name-div p').removeClass('error_p');
	};
	if (form.message.value == ""){
		$('.message-div textarea').addClass('error_input');
		$('.message-div p').addClass('error_p');
	}
	else{
		$('.message-div textarea').removeClass('error_input');
		$('.message-div p').removeClass('error_p');
	};
	if (grecaptcha.getResponse()=="") $('.popup').addClass('disable_popup');
}


