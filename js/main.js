//Reloj principal
function reloj () {
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();

	//Agregar cero delante a numeros con 1 solo digito
	if (hora<10) hora = "0"+hora;
	if (minutos<10) minutos = "0"+minutos;

	$("#hora").text(hora);
	$("#min").text(minutos);


    //Cambio de Background segun hora del dia
	if(hora >= 6 && hora <12 ){
		$(".horalocal").addClass("dia");
	}
	if(hora >= 12 && hora <19 ){
		$(".horalocal").addClass("tarde");
	}
	if(hora >= 19 && hora <6 ){
		$(".horalocal").addClass("noche");
	}
}
// Avance de hora
reloj();
var intervalo = setInterval(reloj, 1000);	


//Fecha
var fecha = new Date();
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
$("#fecha").html(diasSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()]);


//Horas Ciudades
//Debe haber otro metodo mas adecuado, pero en fin...
function ciudades () {
	var fecha = new Date();
	var horaLocal = fecha.getHours();
	var chicago = horaLocal - 1;
	var saopaulo = horaLocal + 1;
	var mex = horaLocal - 1;
	var caracas = horaLocal;
	var brasilia = horaLocal + 1;
	var quito = horaLocal - 1;
	var guayaquil = horaLocal - 1;
	var staMarta = horaLocal - 1;
	var bogota = horaLocal - 1;
	var minutos = fecha.getMinutes();

	//Agregar cero delante a numeros con 1 solo digito
	if (horaLocal<10) horaLocal = "0"+horaLocal;
	if (minutos<10) minutos = "0"+minutos;

	$(".chicago").text(chicago);
	$(".saopaulo").text(saopaulo);
	$(".mex").text(mex);
	$(".caracas").text(caracas);
	$(".brasilia").text(brasilia);
	$(".quito").text(quito);
	$(".guayaquil").text(guayaquil);
	$(".staMarta").text(staMarta);
	$(".bogota").text(bogota);
	$(".minutos").text(minutos);
}
// Avance de hora
ciudades();
var intervalo = setInterval(ciudades, 1000);	

$("#ciudades").hide();

$("button").click(function(){
    $("#ciudades").slideToggle();
});

//Recarga de Doc
$(document).ready(function() {
	reloj();
	ciudades();
});