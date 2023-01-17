var not_played = true;
		var run = false;
		function logAnyKey() { 
			try {
				run = event.key=="Enter"
			}
			catch(error) {
			}
			if (not_played && (run || mobile)) {
				for(let i = 0; i<19;i++){
					asc(i);
				}
  
				function asc(i){
					setTimeout(function(){
					var asciChart = 
					["oooooooooooo oooo  oooo   o8o                .<br>",
					 "`888'     `8 `888  `888   `''              .o8<br>",
					 " 888          888   888  oooo   .ooooo.  .o888oo<br>",
					 " 888oooo8     888   888  `888  d88' `88b   888<br>",
					 " 888    '     888   888   888  888   888   888<br>", 
					 " 888       o  888   888   888  888   888   888 .<br>", 
					 "o888ooooood8 o888o o888o o888o `Y8bod8P'   '888'<br>" ,
					 "<br>",
					 "oooooooooooo<br>",
					 "`888'     `8<br>",
					 " 888                                                                     <br>",
					 " 888          .oooo.   oooo    ooo ooo. .oo.  .oo.    .oooo.   ooo. .oo. <br>",
					 " 888oooo8    `P  )88b   `88.  .8'  `888P'Y88bP'Y88b  `P  )88b  `888P'Y88b <br>",
					 " 888    '     .oP'888    `88..8'    888   888   888   .oP'888   888   888<br>",
					 " 888         d8(  888     `888'     888   888   888  d8(  888   888   888  <br>",
					 "o888o        `Y888''8o    .8P'     o888o o888o o888o `Y888''8o o888o o888o <br>",
					 "                         d8P'      <br>",
					 "                        d8'  <br>",
					 "                        <br>"];
					 document.getElementById("HelloWorld").style.animationPlayState = 'paused';
					 document.getElementById("Name").innerHTML += "<span style='white-space: pre;'>" + asciChart[i] + "</span>";}, 250*i);
				}
				not_played = false;
				setInterval(transition, 5000);
				setTimeout(function() {
					setInterval(stop, 5000);
					console.log("1");
					setTimeout(function() {
						document.body.innerHTML = "";
						window.location = "Main";}, 1000);
				}, 5000);

				function transition() {
					var body = document.querySelector('body');
					body.classList.add('show');
				}

				function stop() {
					var body = document.querySelector('body');
					body.classList.remove('show');
				}

			}
		}
		
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			setTimeout(logAnyKey, 2000);
			mobile = true;
		}
		else {
			document.addEventListener('keypress', logAnyKey);
			var h = document.getElementsByTagName('head').item(0);
			var s = document.createElement("meta");
			s.type = "text/html"; 
			s.appendChild(document.createTextNode('<meta name="viewport" content="width=device-width, initial-scale=1">'));
			h.appendChild(s);

		}