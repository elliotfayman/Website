if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	
		alert("Use Computer for Best Experience");
}
		else {
			var h = document.getElementsByTagName('head').item(0);
			var s = document.createElement("meta");
			s.type = "text/html"; 
			s.appendChild(document.createTextNode('<meta name="viewport" content="width=device-width, initial-scale=1">'));
			h.appendChild(s);

		}