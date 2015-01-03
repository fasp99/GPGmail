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
	var str = 'Hello, ';
	var email = gmail.get.user_email();
	var toast = str.concat(email);
	console.log(toast)
	//console.log('Hello, ', gmail.get.user_email())
	alert(toast);
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
var str = "Subject: ";
var toast = str.concat(subject);
alert(toast);
console.log(toast)
}
