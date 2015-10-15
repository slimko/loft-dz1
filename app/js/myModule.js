var myModule = (function () {

	var init = function() {
		_setUpListners();
	};

	var _setUpListners = function (){
		//прошлушка событий
		$('#popup-open').on('click', _showModal);
	};

	var _showModal = function (ev) {
		
		ev.preventDefault();
		console.log('вызов');
		$('#add-project-popup').bPopup({
			speed:650,
			//transition: 'slideDown'
		});
	};

	return {
		init:init
	};
})();

myModule.init();