// Add hashes to URL
$(document).on('shown.bs.tab', function(event) {

	// Unmark .navbar-brand on tab toggle
	if ($('.ffos-navbar .navbar-brand').parent().hasClass('active') === true) {
		$('.ffos-navbar .navbar-brand').parent().removeClass('active');
	}

	// Mark main navigation links when clicking on buttons
	$('.ffos-navbar').find('a[href="' + $(event.target).attr('href') + '"]').parent().addClass('active');

	// Check for marked dropdown menu links and mark the parent container
	if ($('.ffos-navbar a[href="#povik-mentori"]').parent().hasClass('active') || $('.ffos-navbar a[href="#povik-ucesnici"]').parent().hasClass('active')) {
		($('.dropdown-toggle').parent().addClass('active'));
	}

	// Add hash to window.location
	window.location.hash = $(event.target).attr('href');
});

// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
	$('.ffos-navbar a[href=#' + url.split('#')[1] + ']').tab('show');
}

// Change hash for page-reload
$('.ffos-navbar a').on('shown', function(e) {
	window.location.hash = e.target.hash;
});

// Hide toggle menu after click
$('#toggle-main-navigation').on('shown.bs.collapse', function() {
	$('#toggle-main-navigation a:not(.dropdown-toggle)').click(function() {
		$('#toggle-main-navigation').collapse('hide');
	});
});