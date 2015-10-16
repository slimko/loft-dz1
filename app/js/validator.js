var validation = (function () {

	var init = function() {
		_setUpListners();
	};

	var _setUpListners = function (){
		//прошлушка событий
		$('form').on('keydown', '.hasError', _removeError);
		$('form').on ('reset', _clearForm);
	};

	var _removeError = function (){
		$(this).removeClass('hasError');
	}

	var _clearForm = function (form){
		var form = $(this);
		form.find('.input, .textarea').trigger('hideTooltip');
		form.find('.hasError').removeClass('hasError');
	}

	var _createQtip = function (element, position) {
		//позиция тултипа
		if(position=='right'){
			position = {
				my: 'left center',
				at: 'right center'
			}
		}else{
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}

		//инициализируем тултип
		element.qtip({
			content: {
				text: function (){
					return $(this).attr('qtip-content');
				}
			},
			show:{
				event: 'show'
			},
			hide:{
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes:'qtip-mystyle qtip-rounded',
				tip: {
					height:10,
					width:16
				}
			}
		}).trigger('show');

	};

	var validateForm = function (form){

		console.log ('я в модуле валидации проверяю форму');

		var elements = form.find ('input, textarea').not('input[type="file"],input[type="hidden"]'),
			valid=true;

		$.each(elements, function(index,val){
			console.log(val);
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');
			if(val.length === 0){
				element.addClass('hasError');
				_createQtip(element,pos);
				valid = false;
			}	
		});	

		return valid;
	};
	
	//возвращаем объект
	return {
		init:init,
		validateForm: validateForm
	};
})();

validation.init();