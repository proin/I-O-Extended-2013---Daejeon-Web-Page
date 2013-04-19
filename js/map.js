window.onresize = function() {
	document.getElementById("map_canvas").style.height = document.body.offsetHeight
			- document.getElementById("TopNav").offsetHeight + "px";
};

document
		.addEventListener(
				'DOMContentLoaded',
				function() {
					document.getElementById("map_canvas").style.height = document.body.offsetHeight
							- document.getElementById("TopNav").offsetHeight
							+ "px";

					var mobileKeyWords = new Array('IPHONE', 'IPOD',
							'BLACKBERRY', 'ANDROID', 'WINDOWS CE', 'LG', 'MOT',
							'SAMSUNG');
					for ( var word in mobileKeyWords) {
						if (navigator.userAgent.toUpperCase().indexOf(
								mobileKeyWords[word]) != -1) {
							return;
						}
					}

					document.getElementById("map_canvas").style.marginTop = document
							.getElementById("TopNav").offsetHeight
							+ "px";
				});