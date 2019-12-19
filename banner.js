/*
===========================================================================================================================

        ___ ___              __    
 ___   / _// _/____ ___  ___/ /___ 
/ _ \ / _// _// __// _ \/ _  // -_)
\___//_/ /_/  \__/ \___/\_,_/ \__/ 


==================================
Vanilla JS + GSAP
==================================

1
Generar una funcion que construya una grilla de manera dinámica. Cada elemento de la grilla debe ser un objeto Element de HTML,
los cuales deben ser devueltos dentro de un array al ser ejecutada la funcion. 
Esta funcion espera cuatro parametros: Elemento objetivo, cantidad de filas, cantidad de columnas y un array de colores.

2
Animar la grilla utilizando GSAP (https://greensock.com/) y el array devuelto por la funcion.

En ambos casos, usar como ejemplo el video de referencia.


Reglas básicas:
- NO USAR Librerias externas (Jqery, zepto etc.). Debe ser resuelto exclusivamente con Javascript bajo standard ECMA5 en modo estricto.
- La cantidad de columnas y filas siempre es un numero entero
- El array pude contener n colores.
- El elemento objetivo (target) siempre tiene un ancho y alto definido de antemano.
- Se debe respetar el orden del array de colores como un patron en modo de lectura, de izquierda a derecha y de arriba hacia abajo, 
siguiendo la secuencia del array. Si los colores no alcanzan para cubrir la grilla, esta se reinicia al primer color y continua repitiendo el patron.


Tips:
- Tener en cuenta que el alto y el ancho del modulo depende del alto y ancho de contenedor.
- Se incluye en el html un video para previsualizar el contenido esperado como resultado de las dos ejecuciones de ejemplo.
. GSAP 

===========================================================================================================================
 */



//No eliminar
'use strict';



/**
 * Configuracion estática para manejo de animaciones. Controla los tiempos de alternado y transiciones para uso con GSAP.
 * @type {Object}
 */
var CONFIG = {
    /**
     * Determina el tiempo (en segundos) que dura la transicion de fade in
     * @type {Number}
     */
    secondsTransition:  0.8,

    /**
     * Determina el delay (en segundos) entre cada elemento de la grilla
     * @type {Number}
     */
    secondDelay:        0.4
}

/*Contador para repetir los colores*/
var contadorColores = 1;

/**
 * Dibuja una grilla en el contenedor objetivo.
 * @param  {Element}	targetDom  		Elemento donde dibujar la grilla.
 * @param  {Number}		colInt 	Cantidad de columnas de la grilla.
 * @param  {Number}		rowInt    	Cantidad de filas de la grilla.
 * @param  {Array}		colorArray  	Array de strings, conteniendo los colores en notacion hexadecimal (Ej: #ffffff).
 * @return {array}     	        		Array de Elements (DOM) con todos los rectángulos generados.
 */

function drawGrid(targetDom, colInt, rowInt, colorArray) {

    var items = [];

    for(var i = 0; i < colInt; i++) {
    
        var column = document.createElement('div');
            column.classList.add('columnas');
        
            column.style.height = "100%";
            column.style.width = "100%";
            column.style.display = "flex";
            column.style.justifycontent = "space-around";
            
    
        for(var x = 0; x < rowInt; x++) {
            var row = document.createElement('div');
            row.classList.add('filas');
            row.style.width = "100%";
            row.style.backgroundColor = getColor(colorArray);

            // UTILIZAR GSAP
            gsap.fromTo(row, 1, {duration: CONFIG.secondsTransition ,opacity: 0, y: 50}, {opacity: 1, y: 0}).delay(CONFIG.secondDelay);

            column.appendChild(row);
        }
    
        targetDom.appendChild(column);
        items.push(column);
    }
    
    return items;
}



var columnas = 2;
var filas = 3;
var colores = ['#111d5e','#b21f66','#fe346e','#ffbd69'];


//Crear grillas
var gridAelements = drawGrid(document.getElementById('squareA') , 6, 4,['#7be3ff','#837aff','#c17aff','#ff78fd','#f86e97']);
var gridBelements = drawGrid(document.getElementById('squareB') , 2, 3,['#b4ebba','#010001','#81ccb8','#587d73']);

//fade in the elements using GSAP library.
//
//

//console log de los elementos creados en la grilla
console.log(gridAelements);
console.log(gridBelements);


function getColor(arrcolores){
    var indice = contadorColores;
    while(indice > arrcolores.length){
        indice = indice - arrcolores.length;
    }
    contadorColores++;
    return arrcolores[indice - 1];
}



// ContainerA
// Azul oscuro: #111d5e,
//Rosa vieja: #b21f66,
//Magenta: #fe346e,
//Amarillo Mostaza: #ffbd69.

//ContainerB
