var myModule = (function () {
	//инициализирует наш модуль
	var init = function() {
		_setUpListners();
	};
	//прослушивает события
	var _setUpListners = function (){
		//прошлушка событий
		$('#popup-open').on('click', _showModal); //открываем модельное окно
		$('#add-new-project').on('submit', _addProject); //добавление проекта
	};
	//работает с модальным окном
	var _showModal = function (ev) {
		ev.preventDefault();
		console.log('вызов');
		$('#add-project-popup').bPopup({
			speed:650,
			//transition: 'slideDown'
		});
	};
	//добавляет проект
	var _addProject = function (ev) {
		console.log ('Добавление проекта');
		ev.preventDefault();
		//переменные
		var form = $(this);
		var url = 'add_project.php';
		var myServerAnswer = _ajaxForm(form, url);
		
		console.log(data);
		//запрос на сервер

		myServerAnswer.done(function(ans){
			console.log(ans);

			if(ans.mes === 'OK'){
				console.log(ans.text);
				form.find('.success-me').text(ans.text).show();
			}else{
				console.log(ans.text);
				form.find('.error-mes').text(ans.error);
			}
		})
	};
	// универсальная функция аякс (сбор данных, проверка формы, запрос на сервер, ответ с сервера)
	var _ajaxForm = function (form, url) {

		//if(!valid) return false;
		data = form.serialize();
		console.log (data);
		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType:'json',
			data: data,
		}).fail (function(ans){
			console.log ('Проблемы на сервере');
		});

		return result;

	}
	
	//возвращаем объект
	return {
		init:init
	};
})();

myModule.init();