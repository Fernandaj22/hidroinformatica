function goOptions(){
	options = document.getElementById("options");
	options.classList.toggle("ver")
}

function goIndex(){
	location.href = "resumen.html";
}

function more(nombre){	
	
	foto = document.querySelector("div#"+nombre+" .foto");
	info = document.querySelector("div#"+nombre+" .info");
	
	foto.style.display="none";
	info.style.display="block";
}

function less(nombre){
	foto = document.querySelector("div#" +nombre+ " .foto");
	info = document.querySelector("div#" +nombre+ " .info");
	
	foto.style.display="block";
	info.style.display="none";
}

function navegar(url){
	window.location.assign(`${url}.html`);
}