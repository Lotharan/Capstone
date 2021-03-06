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
	console.log(input);
	if (input) {
		 searchResults += '<div class="result_page">' +
		'<nav class="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">' +
			'<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
			'<span class="navbar-toggler-icon"></span>' +
			'</button>' +
			'<a class="navbar-brand" href="https://apod.nasa.gov/apod/archivepix.html">APOD</a>' +
			'<div class="collapse navbar-collapse" id="navbarNav">'+
				'<ul class="navbar-nav">' +
					'<li class="nav-item">' +
						'<a class="nav-link js-search-again" href="#">Search Again</a>' +
					'</li>' +
					'<li class="nav-item">' +
						'<a class="nav-link" href="#">Back to top</a>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</nav>' +
		'<div class="card mb-3">' +
			'<div class="card-block">' +
				'<h4 class="card-title">' + input.title + '</h4>' +
				'<p class="card-text">' + input.explanation + '</p>' +
				'<p class="card-text"><small class="text-muted">Image Credit & Copyright:' + '' + input.copyright + '</small></p>' +
			'</div>' +
			'<img class="image_result" src="'+ input.url + '">'
		'</div>' +
		'</section>';
		console.log(input);
	}
	else {
		searchResults += '<p>No results exist for this date please select another date</p>';
	}

	$('.js-search-results').html(searchResults);
}

	$(function(){
		$('body').on('click','.js-search-again',function(){
			$('.js-search-results').empty();
		})
		$('form').submit(function(event){
			event.preventDefault();
			var userDate = $('#apod_date_js').val();
			var formatDate = userDate.split('/');
			var newDate = formatDate[2] + '-' + formatDate[0] + '-' + formatDate[1];
			$.getJSON(`https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=8a2IUlzhTscPWU51VzeTBLtwk9dyElTmRF4zJFRq`,displayResults)
		});
	});

