$(document).ready(function(){
    $("#menu").click(function(){
    	$("#options").collapse('toggle');
    	bg = document.getElementById("bg");
		wrapper = document.getElementById("wrapper");

		bg.style.display="block";
		wrapper.style.display="none";
    });
});

function goOptions(){
	bg = document.getElementById("bg");
	options = document.getElementById("options");
	wrapper = document.getElementById("wrapper");

	bg.style.display="block";
	options.style.display="block";
	wrapper.style.display="none";
}

function goIndex(){
	var backimg = document.getElementById("backimg");
	var contenedor = document.getElementById("contenedor");

	backimg.style.display="none";
	contenedor.style.display="block";

}