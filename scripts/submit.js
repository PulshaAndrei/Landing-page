$(function(){
	$('.popup').addClass('disable_popup');
	$('.contact_us').click(function(){ $('.popup').removeClass('disable_popup')});
	$('.close').click(function(){ $('.popup').addClass('disable_popup')});
	var date = new Date();
	$('.captcha').append('<img src="http://www.opencaptcha.com/img/'+date.getTime()+'domenDollz-80-140.jpgx">');
	$('.captcha').append('<input type="text" class="form-control" name="captcha" required>');
});

function validate(form){
	return true;
}
function send(form){
	if (validate) {
		console.log(form);
		/*form.submit();*/
	}
}

/*http://www.opencaptcha.com/validate.php?img={imageName}&ans={users Answer}
pass
or fail
*/