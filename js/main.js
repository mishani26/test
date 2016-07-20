var array3=[]
for (var i = 0; i < localStorage.length; i++) {
	var mov=localStorage.getItem(localStorage.key(i)) ;
	var array=JSON.parse(mov);
	var array2={			
		title  : array[0],
		start  : array[1],
		end  : array[2]
	}
	array3.push(array2)
};
$(document).ready(function() {
	var myatr=$('div[bla]:eq(2)');
	myatr.html("3333");
	$('#calendar').fullCalendar({
		theme:true,
		eventColor:'#D620EC',
		events: array3,
		dayClick: function(date, jsEvent, view) {
			$( "#dialog" ).dialog( "open" );
			$("#start").val(date.format());
		}
	});
	$("#dialog").dialog({
		autoOpen: false,
		show: {
			effect: "fade",
			duration: 500
		},
		hide: {
			effect: "scale",
			duration: 500
		}
	}
	);
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$( "#start" ).datepicker({
		dateFormat: "yy-mm-dd"
	});
	$( "#end" ).datepicker({
		dateFormat: "yy-mm-dd"
	});
	$(".btn").click(function(event) {
		localStorage.setItem($("#start").val(),JSON.stringify([$("#label").val(),$("#start").val(),$("#end").val()]));
	});
});