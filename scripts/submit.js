var date;
$(function(){
	$('.popup').addClass('disable_popup');
	$('.popup_background').addClass('disable_popup');
	$('.contact_us').click(function(){ $('.popup').removeClass('disable_popup')});
	$('.close').click(function(){ $('.popup').addClass('disable_popup')});
});

function send(form){
	var verify=true;
	var reg = /.+@.+\..+/i;
	if (!reg.test(form.email.value)) {
		$('.email-div input').addClass('error_input');
		$('.email-div p').addClass('error_p');
		verify = false;
	}
	else{
		$('.email-div input').removeClass('error_input');
		$('.email-div p').removeClass('error_p');
	};
	if (form.name.value == ""){
		$('.name-div input').addClass('error_input');
		$('.name-div p').addClass('error_p');
		verify = false;
	}
	else{
		$('.name-div input').removeClass('error_input');
		$('.name-div p').removeClass('error_p');
	};
	if (form.message.value == ""){
		$('.message-div textarea').addClass('error_input');
		$('.message-div p').addClass('error_p');
		verify = false;
	}
	else{
		$('.message-div textarea').removeClass('error_input');
		$('.message-div p').removeClass('error_p');
	};
	if (grecaptcha.getResponse()!="") {
		$('.captcha-div p').removeClass('error_p');
	}
	else{
		$('.captcha-div p').addClass('error_p');
		verify = false;
	}
	if (verify){
		var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
		xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4) {
		        if(xmlhttp.status == 200) alert('Mail sended!')
		        else if(xmlhttp.status == 500) alert('Check apikey')
		        else alert('Request error');
		    }
		}
		xmlhttp.send(JSON.stringify({'key': 'jJvyiaMWRKRJeUOoMc_aDA',
		   'message': {
		       'from_email': 'support@dollz.com',
		       'to': [{'email': 'info@pogodee.com', 'type': 'to'}],
		       'autotext': 'true',
		       'subject': 'Contact us',
		       'html': '<p>Name: '+form.name.value+'</p><p>E-mail: '+form.email.value+'</p><p>Message: '+form.message.value+'</p>'
		    }}));
		$('.close').click();
	}
}


