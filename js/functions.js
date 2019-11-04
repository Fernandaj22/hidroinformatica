function goOptions(){
	options = document.getElementById("options");
	options.classList.toggle("ver")
}

function goIndex(){
	location.href = "resumen.html";
}

function more(){
	foto_mini = document.querySelector(".foto-mini");
	cv = document.querySelector(".cv");

	foto = document.querySelector(".foto");
	info = document.querySelector(".info");

	foto_mini.style.display="block";
	cv.style.display="block";

	foto.style.display="none";
	info.style.display="none";
}

function less(){
	foto_mini = document.querySelector(".foto-mini");
	cv = document.querySelector(".cv");

	foto = document.querySelector(".foto");
	info = document.querySelector(".info");

	foto_mini.style.display="none";
	cv.style.display="none";

	foto.style.display="block";
	info.style.display="block";
}