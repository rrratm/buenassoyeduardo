//var document = "buenassoyeduardo.html"

//////////ABRIR Y CERRAR PANEL DE COMPRA//////
function abrirComprar() {
	document.getElementById("comprar-contenedor").style.display = "block";
	document.getElementById("boton-comprar").style.display = "none";
};

function cerrarComprar() {
	document.getElementById("comprar-contenedor").style.display = "none";
	document.getElementById("boton-comprar").style.display = "block";
};


///////ABRIR CADA LIBRO///////

function abrirHualixto() {
	document.getElementById("hualixto-cerrado").style.display = "none";
	document.getElementById("hualixto-abierto").style.display = "flex";
	verTexto1Hualixto(); ///esto abre en INFO///
	document.getElementById("badabum-cerrado").style.display = "block";
	document.getElementById("badabum-abierto").style.display = "none";
	document.getElementById("heliantua-cerrado").style.display = "block";
	document.getElementById("heliantua-abierto").style.display = "none";
	var bio = document.getElementById("bio-contenedor");
	if (bio.className === "bio-contenedor abierta") {
		bio.className = "bio-contenedor";
	}/////esto cierra la BIO si estaba abierta///
};

function cerrarHualixto() {
	document.getElementById("hualixto-cerrado").style.display = "block";
	document.getElementById("hualixto-abierto").style.display = "none";
	document.getElementById("badabum-cerrado").style.display = "block";
	document.getElementById("badabum-abierto").style.display = "none";
	document.getElementById("heliantua-cerrado").style.display = "block";
	document.getElementById("heliantua-abierto").style.display = "none";
	var bio = document.getElementById("bio-contenedor");
	if (bio.className === "bio-contenedor abierta") {
		bio.className = "bio-contenedor";
	}/////esto cierra la BIO si estaba abierta///
};

function abrirBadabum() {
	document.getElementById("hualixto-cerrado").style.display = "block";
	document.getElementById("hualixto-abierto").style.display = "none";
	document.getElementById("badabum-cerrado").style.display = "none";
	document.getElementById("badabum-abierto").style.display = "flex";
	verTexto1Badabum();///esto abre en INFO///
	document.getElementById("heliantua-cerrado").style.display = "block";
	document.getElementById("heliantua-abierto").style.display = "none";
	var bio = document.getElementById("bio-contenedor");
	if (bio.className === "bio-contenedor abierta") {
		bio.className = "bio-contenedor";
	}/////esto cierra la BIO si estaba abierta///
};

function cerrarBadabum() {
	document.getElementById("hualixto-cerrado").style.display = "block";
	document.getElementById("hualixto-abierto").style.display = "none";
	document.getElementById("badabum-cerrado").style.display = "block";
	document.getElementById("badabum-abierto").style.display = "none";
	document.getElementById("heliantua-cerrado").style.display = "block";
	document.getElementById("heliantua-abierto").style.display = "none";
	var bio = document.getElementById("bio-contenedor");
	if (bio.className === "bio-contenedor abierta") {
		bio.className = "bio-contenedor";
	}/////esto cierra la BIO si estaba abierta///
};

function abrirHeliantua() {
	document.getElementById("hualixto-cerrado").style.display = "block";
	document.getElementById("hualixto-abierto").style.display = "none";
	document.getElementById("badabum-cerrado").style.display = "block";
	document.getElementById("badabum-abierto").style.display = "none";
	document.getElementById("heliantua-cerrado").style.display = "none";
	document.getElementById("heliantua-abierto").style.display = "flex";
	verTexto1Heliantua();///esto abre en INFO///
	var bio = document.getElementById("bio-contenedor");
	if (bio.className === "bio-contenedor abierta") {
		bio.className = "bio-contenedor";
	}/////esto cierra la BIO si estaba abierta///
};

function cerrarHeliantua() {
	document.getElementById("hualixto-cerrado").style.display = "block";
	document.getElementById("hualixto-abierto").style.display = "none";
	document.getElementById("badabum-cerrado").style.display = "block";
	document.getElementById("badabum-abierto").style.display = "none";
	document.getElementById("heliantua-cerrado").style.display = "block";
	document.getElementById("heliantua-abierto").style.display = "none";
	var bio = document.getElementById("bio-contenedor");
	if (bio.className === "bio-contenedor abierta") {
		bio.className = "bio-contenedor";
	}
};

/////////////ABRIR Y CERRAR MENUS DE CADA LIBRO//////

function verTexto1Hualixto() {
	document.getElementById("id-texto1-hualixto").style.display = "block";
	document.getElementById("id-texto2-hualixto").style.display = "none";
	document.getElementById("id-texto3-hualixto").style.display = "none";
	document.getElementById("id-texto4-hualixto").style.display = "none";
};


function verTexto2Hualixto() {
	document.getElementById("id-texto1-hualixto").style.display = "none";
	document.getElementById("id-texto2-hualixto").style.display = "block";
	document.getElementById("id-texto3-hualixto").style.display = "none";
	document.getElementById("id-texto4-hualixto").style.display = "none";
};


function verTexto3Hualixto() {
	document.getElementById("id-texto1-hualixto").style.display = "none";
	document.getElementById("id-texto2-hualixto").style.display = "none";
	document.getElementById("id-texto3-hualixto").style.display = "block";
	document.getElementById("id-texto4-hualixto").style.display = "none";
};


function verTexto4Hualixto() {
	document.getElementById("id-texto1-hualixto").style.display = "none";
	document.getElementById("id-texto2-hualixto").style.display = "none";
	document.getElementById("id-texto3-hualixto").style.display = "none";
	document.getElementById("id-texto4-hualixto").style.display = "block"
};



function verTexto1Badabum() {
	document.getElementById("id-texto1-badabum").style.display = "block";
	document.getElementById("id-texto2-badabum").style.display = "none";
	document.getElementById("id-texto3-badabum").style.display = "none";
	document.getElementById("id-texto4-badabum").style.display = "none";
};


function verTexto2Badabum() {
	document.getElementById("id-texto1-badabum").style.display = "none";
	document.getElementById("id-texto2-badabum").style.display = "block";
	document.getElementById("id-texto3-badabum").style.display = "none";
	document.getElementById("id-texto4-badabum").style.display = "none";
};


function verTexto3Badabum() {
	document.getElementById("id-texto1-badabum").style.display = "none";
	document.getElementById("id-texto2-badabum").style.display = "none";
	document.getElementById("id-texto3-badabum").style.display = "block";
	document.getElementById("id-texto4-badabum").style.display = "none";
};


function verTexto4Badabum() {
	document.getElementById("id-texto1-badabum").style.display = "none";
	document.getElementById("id-texto2-badabum").style.display = "none";
	document.getElementById("id-texto3-badabum").style.display = "none";
	document.getElementById("id-texto4-badabum").style.display = "block"
};



function verTexto1Heliantua() {
	document.getElementById("id-texto1-heliantua").style.display = "block";
	document.getElementById("id-texto2-heliantua").style.display = "none";
	document.getElementById("id-texto3-heliantua").style.display = "none";
	document.getElementById("id-texto4-heliantua").style.display = "none";
};


function verTexto2Heliantua() {
	document.getElementById("id-texto1-heliantua").style.display = "none";
	document.getElementById("id-texto2-heliantua").style.display = "block";
	document.getElementById("id-texto3-heliantua").style.display = "none";
	document.getElementById("id-texto4-heliantua").style.display = "none";
};


function verTexto3Heliantua() {
	document.getElementById("id-texto1-heliantua").style.display = "none";
	document.getElementById("id-texto2-heliantua").style.display = "none";
	document.getElementById("id-texto3-heliantua").style.display = "block";
	document.getElementById("id-texto4-heliantua").style.display = "none";
};


function verTexto4Heliantua() {
	document.getElementById("id-texto1-heliantua").style.display = "none";
	document.getElementById("id-texto2-heliantua").style.display = "none";
	document.getElementById("id-texto3-heliantua").style.display = "none";
	document.getElementById("id-texto4-heliantua").style.display = "block"
};




//////////////////SLIDE SHOWS///////////

var slideIndex = [1, 1];
var slideId = ["opinion1", "opinion2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
	showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
	var i;
	var x = document.getElementsByClassName(slideId[no]);
	if (n > x.length) {
		slideIndex[no] = 1
	}
	if (n < 1) {
		slideIndex[no] = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex[no] - 1].style.display = "block";
}


///////////////////////BIOGRAFIA//////////

function abrirBio() {

	var bio = document.getElementById("bio-contenedor");

	if (bio.className === "bio-contenedor") {
		bio.className += " abierta";
	} else {
		bio.className = "bio-contenedor";
	}
}
