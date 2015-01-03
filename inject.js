var gmail;

function refresh(f) {
	if(/in/.test(document.readyState)) {
		setTimeout('refresh(' + f + ')', 10);
	} else {
	f();
	}
}


var main = function(){
// NOTE: Always use the latest version of gmail.js from
// https://github.com/KartikTalwar/gmail.js
	gmail = new Gmail();
	console.log('Hello,', gmail.get.user_email())
	alert('Hello,', gmail.get.user_email());
}

refresh(main);

function hashCheck() {
	if (/^#inbox\/.*/.test(location.hash)) {
		mailOpened();
	}
	else {
	}
}
window.addEventListener('hashchange', hashCheck);
hashCheck();
function mailOpened() {
gmail = new Gmail();
var subject = gmail.get.email_subject();
	alert(subject);
	console.log('Subject: ', subject)
}
