window.onresize = function() {
	document.getElementById("map_canvas").style.height = document.body.offsetHeight
			- document.getElementById("TopNav").offsetHeight + "px";
};

document.addEventListener('DOMContentLoaded', function() {
	init();
});

function init() {
	var main_text = "발표자 모집";
	var main_subtitle_text = "I/O Extended 2013 @ Daejeon의 발표자를 모집합니다!<br />"
			+ "Google I/O 2013의 이야기,<br />"
			+ "혹은 다양한 분야의 지식과 경험을 공유해 주세요.<br />"
			+ "여러분과 함께 I/O Extended 2013 @ Daejeon을 채워가겠습니다.";
	var main_link_url = "speaker_registration.html";
	var main_link_text = "Apply Now";

	var main_title = document.getElementById("main_title");
	var main_subtitle = document.getElementById("main_subtitle");
	var main_link = document.getElementById("main_link");

	main_title.innerHTML = main_text;
	main_subtitle.innerHTML = main_subtitle_text;
	main_link.href = main_link_url;
	main_link.innerHTML = main_link_text;
}