// $(document).ready(function() {
// 		$("#apod_date_js").datepicker();
// 		$("button").click(function() {
// 				var apodDate = $("#apod_date_js").val();
// 				if (apodDate === "") {
// 			alert("Please select a date");
// 				} else {
// 			confirm("Would you like to view this date?" );
// 				}
// 		});
// });

$( function() {
	$( "#apod_date_js" ).datepicker();
  } );



$(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var userDate = $('#apod_date_js').val();
		var formatDate = userDate.split('/');
		var newDate = formatDate[2] + '-' + formatDate[0] + '-' + formatDate[1];
		console.log(userDate);
		$.getJSON(`https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=8a2IUlzhTscPWU51VzeTBLtwk9dyElTmRF4zJFRq`, function(data){ console.log(data)})
	})

})
