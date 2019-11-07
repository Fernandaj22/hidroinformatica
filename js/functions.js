function goOptions(){
	options = document.getElementById("options");
	options.classList.toggle("ver")
}

function goIndex(){
	location.href = "resumen.html";
}

function more(){
	foto = document.querySelector(".foto");
	info = document.querySelector(".info");

	foto.style.display="none";
	info.style.display="block";
}

function less(){
	foto = document.querySelector(".foto");
	info = document.querySelector(".info");

	foto.style.display="block";
	info.style.display="none";
}