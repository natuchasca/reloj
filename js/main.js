//Obtengo fecha en una variable para luego extraer lo que necesito
var fecha = new Date();


//Reloj principal
function reloj () {
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();

	//Agregar cero delante a numeros con 1 solo digito
	if (hora<10) hora = "0"+hora;
	if (minutos<10) minutos = "0"+minutos;

	$("#hora").html(hora);
	$("#min").html(minutos);

	//setTimeout("reloj()",1000); 
	//setInterval(reloj, 1000);
}
	
	

	
//Fecha principal
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
$("#fecha").html(diasSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()]);


/*
// Al hacer click en mas aparecen las opciones de ciudades
function horas () {
	var utc = fecha.getUTCHours();
	var chicago =
	var saopaulo =
	var mex = 
	var caracas = 
	var brasilia =
	var quito = 
	var guayaquil =
	var staMarta = 
	var bogota =

	$(".horas").
}
*/

$(document).ready(function() {
	reloj();
});