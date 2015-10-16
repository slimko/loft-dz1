var contactMe = (function () {

	var init = function() {
		_setUpListners();
	};

	var _setUpListners = function (){
		//прошлушка событий
		$('#contact-me').on('submit',_submitForm);
	};

	var _submitForm = function (ev){
		ev.preventDefault();
		var form = $(this),
			url = 'contact.php',
			defObj = _ajaxForm(form, url);		
	 //что-то делаем с ответом сервера

	};	
	
	var _ajaxForm = function (form, url){
		console.log ('ajx запрос, но с проверкой!');
		if (!validation.validateForm(form)) return false;

	}

	//возвращаем объект
	return {
		init:init,
		//validateForm: validateForm
	};
})();

contactMe.init();