### OFFCODE

# Vanilla JS + GSAP

## 1
Generar una funcion que construya una grilla de manera dinámica. Cada elemento de la grilla debe ser un objeto Element de HTML,
los cuales deben devueltos dentro de un array al ser ejecutada la funcion. 
Esta funcion espera cuatro parametros: Elemento objetivo, cantidad de filas, cantidad de columnas y un array de colores.

## 2
Animar la grilla utilizando [GSAP](https://greensock.com/) y el array devuelto por la funcion.

En ambos casos, usar como ejemplo el video de referencia.


### Reglas básicas:
* NO USAR Librerias externas (Jqery, zepto etc.). Debe ser resuelto exclusivamente con Javascript bajo standard ECMA5 en modo estricto.
* La cantidad de columnas y filas siempre es un numero entero
* El array pude contener n colores.
* El elemento objetivo (target) siempre tiene un ancho y alto definido de antemano.
* Se debe respetar el orden del array de colores como un patron en modo de lectura, de izquierda a derecha y de arriba hacia abajo, siguiendo la secuencia del array. Si los colores no alcanzan para cubrir la grilla, esta se reinicia al primer color y continua repitiendo el patron.


### Tips:
* Tener en cuenta que el alto y el ancho del modulo depende del alto y ancho de contenedor.
* Se incluye en el html un video para previsualizar el contenido esperado como resultado de las dos ejecuciones de ejemplo.

### Comentarios
Vas a encontrar mas información en el archivo `banner.js`