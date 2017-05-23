$(function() {
	$("#apod_date_js").datepicker();
	$(".search_button").click(function() {
			var apodDate = $("#apod_date_js").val();
			if (apodDate ==="") {
		alert("Please select a date!");
			}
	});
});

function displayResults(input) {
	var searchResults = '';
	if (input.items) {
		input.items.forEach(function(data) {
		 searchResults += '<div class="result_page">' +
		'<nav class="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">' +
			'<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
			'<span class="navbar-toggler-icon"></span>' +
			'</button>' +
			'<a class="navbar-brand" href="#">APOD</a>' +
			'<div class="collapse navbar-collapse" id="navbarNav">'+
				'<ul class="navbar-nav">' +
					'<li class="nav-item active">' +
						'<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>' +
					'</li>' +
					'<li class="nav-item">' +
						'<a class="nav-link" href="#">Search Again</a>' +
					'</li>' +
					'<li class="nav-item">' +
						'<a class="nav-link" href="#">More Info</a>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</nav>' +
		'<div class="card mb-3">' +
			'<img class="card-img-top" src="/' + data.url + '/" alt="Card image cap">' +
			'<div class="card-block">' +
				'<h4 class="card-title">' + data.title + '</h4>' +
				'<p class="card-text">' + data.explaination + '</p>' +
				'<p class="card-text"><small class="text-muted">Image Credit & Copyright:' + '' + data.copyright + '</small></p>' +
			'</div>' +
		'</div>' +
		'</section>'});
	}
	else {
		searchResults += '<p>No results</p>';
	}

	$('.js-search-results').html(searchResults);
}

$(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var userDate = $('#apod_date_js').val();
		var formatDate = userDate.split('/');
		var newDate = formatDate[2] + '-' + formatDate[0] + '-' + formatDate[1];
		$.getJSON(`https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=8a2IUlzhTscPWU51VzeTBLtwk9dyElTmRF4zJFRq`, function(data){ console.log(data)})
	})

})

