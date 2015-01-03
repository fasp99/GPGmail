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
	console.log("entering mailOpened"	);

	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
	document.body.appendChild(jq);

	var gmsrc = document.createElement('script');
	gmsrc.src = "https://rawgit.com/KartikTalwar/gmail.js/master/src/gmail.js";
	//gmsrc.src = "https://s3.amazonaws.com/bucket/gmail.js";
	document.getElementsByTagName('body')[0].appendChild(gmsrc);
	//document.body.appendChild(gmsrc);
	
	// this doesnt work:
	var name = gmsrc.get.user_email();
	
	/* Here goes the onload listener */
	// this also doesnt work:
	gmsrc.onload = function () {
	var gmail = Gmail();
	console.log(gmail);
	var name = gmsrc.get.user_email();
	alert(name);
	}
}