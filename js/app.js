// Alvaro Cortes Tellez

var Calculadora = {
	//1. Declaración de variables
	existeOperacion: "no",
	ultimaOperacion: "",
	cadenaTexto: "",
	//2. Método de inicialización
	init: function(){
		this.asignEventButton('teclado')
	},

	//3. Metodos tecla de efectos de tecla.
	asignEventButton: function(selector){
		var keyB = document.querySelectorAll('.' + selector + ' img')
		for(i=0;i<keyB.length;i++){
			keyB[i].onclick = this.eventPressKey
			keyB[i].onmouseleave = this.eventFreeKey
		}
	},

	//Metodo para llamar funcion de Botones
	eventPressKey: function(event){
		if(event.target.id == "1" || event.target.id == "2" || event.target.id == "3"
			|| event.target.id == "4" || event.target.id == "5" || event.target.id == "6"
			|| event.target.id == "7" || event.target.id == "8" || event.target.id == "9"
			|| event.target.id == "0") {
			showNumber(event.target.id)
		}

		if(event.target.id == "on"){
			cleanScreen()
		}

		if(event.target.id == "punto"){
			addPoint()
		}

		if(event.target.id == "sign"){
			addSign()
		}

		if(event.target.id == "mas"){
			sumValues()
		}

		if(event.target.id == "menos"){
			restValues()
		}

		if(event.target.id == "por"){
			multValues()
		}

		if(event.target.id == "dividido"){
			divValues()
		}

		if(event.target.id == "igual"){
			showResultado()
		}

		disminuirTamanoTecla(event.target)

	},

	eventFreeKey: function(event){
		aumentarTamanoTecla(event.target)
	}

}

// 4 operaciones básicas
// 4.1 Suma
function sumValues(){
	if(Calculadora.cadenaTexto == 'XXX'){
		Calculadora.cadenaTexto = ""
		Calculadora.existeOperacion = "no"
	}
	if(Calculadora.existeOperacion == "no"){
		Calculadora.cadenaTexto = document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "+"
	} else {
		Calculadora.cadenaTexto = Calculadora.cadenaTexto + Calculadora.existeOperacion + document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "+"
	}
	document.getElementById('display').innerHTML = ""
}
// 4.2 Resta
function restValues(){
	if(Calculadora.cadenaTexto == 'XXX'){
		Calculadora.cadenaTexto = ""
		Calculadora.existeOperacion = "no"
	}
	if(Calculadora.existeOperacion == "no"){
		Calculadora.cadenaTexto = document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "-"
	} else {
		Calculadora.cadenaTexto = Calculadora.cadenaTexto + Calculadora.existeOperacion + document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "-"
	}
	document.getElementById('display').innerHTML = ""
}
// 4.3 Multiplicación
function multValues(){
	if(Calculadora.cadenaTexto == 'XXX'){
		Calculadora.cadenaTexto = ""
		Calculadora.existeOperacion = "no"
	}
	if(Calculadora.existeOperacion == "no"){
		Calculadora.cadenaTexto = document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "*"
	} else {
		Calculadora.cadenaTexto = Calculadora.cadenaTexto + Calculadora.existeOperacion + document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "*"
	}
	document.getElementById('display').innerHTML = ""
}
// 4.4 División
function divValues(){
	if(Calculadora.cadenaTexto == 'XXX'){
		Calculadora.cadenaTexto = ""
		Calculadora.existeOperacion = "no"
	}
	if(Calculadora.existeOperacion == "no"){
		Calculadora.cadenaTexto = document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "/"
	} else {
		Calculadora.cadenaTexto = Calculadora.cadenaTexto + Calculadora.existeOperacion + document.getElementById('display').innerHTML
		Calculadora.existeOperacion = "/"
	}
	document.getElementById('display').innerHTML = ""
}

function showResultado(){
	if(Calculadora.cadenaTexto == ""){
		document.getElementById('display').innerHTML = "0"
	} else if(Calculadora.cadenaTexto == 'XXX'){
			Calculadora.cadenaTexto = document.getElementById('display').innerHTML + Calculadora.ultimaOperacion
			document.getElementById('display').innerHTML = actualizarResultado()
			Calculadora.cadenaTexto = 'XXX'
	} else {
				Calculadora.cadenaTexto = Calculadora.cadenaTexto + Calculadora.existeOperacion + document.getElementById('display').innerHTML
				Calculadora.ultimaOperacion = Calculadora.existeOperacion + document.getElementById('display').innerHTML
				document.getElementById('display').innerHTML = actualizarResultado()
				Calculadora.cadenaTexto = 'XXX'
	}
}

function actualizarResultado(){
	resultado = 0
	resultado = eval(Calculadora.cadenaTexto)
	return resultado.toPrecision(4)
}

function addSign(){
	var pantalla = document.getElementById('display')
	if(pantalla.innerHTML[0] = "-"){
		pantalla.innerHTML[0] = ""
	}
	if(pantalla.innerHTML.length<7 && pantalla.innerHTML != "0"){
		pantalla.innerHTML = "-" + pantalla.innerHTML
	}
}

function addPoint(){
	var existe = "1"
	var pantalla = document.getElementById('display')
	for(i=0;i<pantalla.innerHTML.length;i++){
		if (pantalla.innerHTML[i] == "."){
			existe = "0"
		}
	}
	if(existe == "1" && pantalla.innerHTML.length < 6){
		pantalla.innerHTML = pantalla.innerHTML + "."
	}
}

function cleanScreen(){
	var pantalla = document.getElementById('display')
	pantalla.innerHTML = "0"
	Calculadora.cadenaTexto = ""
	Calculadora.existeOperacion = "no"
}

function showNumber(numero){
	var pantalla = document.getElementById('display')
	if (pantalla.innerHTML.length < 8){
		if(pantalla.innerHTML == "0" && numero != "0"){
			pantalla.innerHTML = numero
		} else if(pantalla.innerHTML != "0"){
			pantalla.innerHTML = pantalla.innerHTML + numero
		}
	}
}

function aumentarTamanoTecla(elementoDOM){
	elementoDOM.style.padding = "0px"
}

function disminuirTamanoTecla(elementoDOM){
	elementoDOM.style.padding = "1px"
}

Calculadora.init()
