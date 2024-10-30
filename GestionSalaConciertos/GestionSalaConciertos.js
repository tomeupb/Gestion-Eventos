/*

Dividir Ingresos con el Artista:
Función: calcularDivisionIngresos(ingresoTotal, porcentajeArtista)
Descripción: Calcula la cantidad destinada al artista basada en un porcentaje (por ejemplo, 60% para el artista y 40% para la sala).
Entrada: ingresoTotal y porcentajeArtista
Salida: Cantidad destinada al artista.

*/

/*
Validar Entrada de Texto para Nombre del Artista:
Función: validarNombreArtista(nombre)
Descripción: Valida que el nombre del artista esté bien formateado, eliminando espacios extras.
Entrada: nombre
Salida: Nombre sin espacios adicionales.
*/

/*
////(Objeto Number): Funciones de manejo de entradas y costos por asistente
Generar ID Único del Concierto:
Función: generarIDConcierto(fechaConcierto, precioBase)
Descripción: Genera un ID único para el concierto combinando la fecha y el precio del ticket.
Entrada: fechaConcierto y precioBase
Salida: ID único del concierto (número).

*/


/*

//Objeto Date()
/*
Calcular Días de Antelación para Recordatorio de Venta de Tickets:
Función: calcularDiasAntelacion(fechaConcierto, fechaVenta)
Descripción: Calcula cuántos días antes del concierto debe iniciar la venta de tickets.
Entrada: fechaConcierto y fechaVenta
Salida: Número de días de antelación.

*/









function login(event){
    event.preventDefault();

    document.getElementById("gestion").style.display = "none";
    document.getElementById("cliente").style.display = "none";

  let usuario = document.getElementById("usuario").value
  let contraseña = document.getElementById("contraseña").value

  if(usuario === "admin" && contraseña === "admin"){
    document.getElementById("gestion").style.display="block"
  }else{
    document.getElementById("cliente").style.display="block"
  }


}







function calcularGestor(event){
    event.preventDefault();


    //funcion para  Cantidad destinada al artista.
let ingresoTotal = document.getElementById("ingresoTotal").value
let porcentajeArtista = document.getElementById("porcentajeArtista").value
let nombre = document.getElementById("validarNombreArtista").value
let beneficioArtista= Math.round((ingresoTotal*porcentajeArtista)/100); //sacamos los beneficios del artita ingresostotales*porcentaje artista/100 primero realizamos el calculo luego redondeamos
   


nombre = nombre.toLowerCase();; //convertimos el nombre del artista a minusculula

for(let i =0; i<nombre.length ; i++){

  nombre = nombre.replace(" ", "");
}



   
 //imprimir Cantidad destinada al artista

 let NombreCantidadArtista = document.createElement("p");
 NombreCantidadArtista.innerText = "Los beneficios del artista "+nombre+ " son :  "+ beneficioArtista +" euros";
 document.getElementById("resultado").appendChild(NombreCantidadArtista);




}





function calcularCliente(event){
    event.preventDefault();

 //funcion para validar nombre 

let nombre = document.getElementById("nombre").value
nombre = nombre.toLowerCase();; //convertimos el nombre del artista a minusculula

for(let i =0; i<nombre.length ; i++){

  nombre = nombre.replace(" ", "");
}


//funcion precio base

let precioBase = document.getElementById("preciobase").value

//funcion para generar ID
let fecha =  new Date(document.getElementById("fechaConcierto").value)

let dias = fecha.getTime() / (1000 * 60 * 60 * 24); //pasamos a dias

let random1 = Number.parseInt(Math.random()*precioBase); //Hacemos un numero random desde el precio base
let random2 = Number.parseInt(Math.random()*dias);  //Hacemos un numero random desde los dias de la fecha de concierto

id = Math.abs(random2-random1);     // Usamos Math.abs para que sea siempre positivo  y restamos los dos valores y sacamos la ID unica


//funcion calcular dias de antelacion

//let fecha =  new Date(document.getElementById("fechaConcierto").value)
//let dias = fecha.getTime() / (1000 * 60 * 60 * 24); //pasamos a dias
let hoy = new Date();
let diferencia = fecha-hoy;
let diferenciaH =  Math.ceil(diferencia / (1000 * 60 * 60 * 24)); //redondeamos hacia arriba con math ceil

if(diferencia<0){//si el concierto ya ha passado  lo dejamos a 0
  diferenciaH=0;

}



//immprimir Nombre

let NombreArtista = document.createElement("p");
    NombreArtista.innerText = "El nombre del artista es: " + nombre;
    document.getElementById("resultado").appendChild(NombreArtista);

//immprimir ID
    let NombreID = document.createElement("p");
    NombreID.innerText = "Tu ID única es: " + id;
    document.getElementById("resultado").appendChild(NombreID);

//imprimir Dias de antelacion

    let NombreAntelacion = document.createElement("p");
    NombreAntelacion.innerText = "Para abrir la  compra de tickets faltan : "+diferenciaH + " dias";
    document.getElementById("resultado").appendChild(NombreAntelacion);





}














