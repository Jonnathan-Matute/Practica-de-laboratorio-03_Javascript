# Practica03 - JavaScript

# OBJETIVO
• Entender y organizar de una mejor manera los sitios de web en Internet

• Diseñar adecuadamente elementos gráficos en sitios web en Internet.

• Crear sitios web aplicando estándares actuales.

#  ACTIVIDADES A DESARROLLAR     
1. Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. A continuación, se muestra un ejemplo de las operaciones que debe realizar la calculadora

![logotipo](https://user-images.githubusercontent.com/34014602/58189810-ce481780-7c80-11e9-9661-e07e2f2261f5.png)

2.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones: 
a.	Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador. 
b.	Se debe validar qué, en el campo del nombre, ingrese únicamente dos nombres y que permita ingresar sólo letras.
c.	Se debe validar qué, en el campo del apellido, ingrese únicamente dos apellidos y que permita ingresar sólo letras. 
d.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números. e.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. 
f.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”. 
Indicaciones: 
•	Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo. 
•	Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. • 	Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintará el campo con un borde rojo que representará que el campo tiene un error. ¡Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, pasaste las validaciones!”. 

3.	Diseñar una interfaz en HTML que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde JavaScript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/) 

![logotipo2](https://user-images.githubusercontent.com/34014602/58190052-51696d80-7c81-11e9-931e-e252de7497d2.jpg)

Indicaciones: 
•	Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”. 
•	La galería de imágenes debe visualizar exclusivamente 5 imágenes.  
•	Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes
•	Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado) 
•	Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar deshabilitado)

# DESARROLLO

1.	Repositorio en GitHub con el nombre “Practica03 – Javascript” 

![1](https://user-images.githubusercontent.com/34014602/58190140-7f4eb200-7c81-11e9-9eea-241b22e6e559.png)

2.	Crear una carpeta para la solución de cada ejercicio antes mencionado 

![2](https://user-images.githubusercontent.com/34014602/58190241-af965080-7c81-11e9-8cd2-54f31c13b307.png)

3.	Realizar un commit y push por cada requerimiento de los puntos antes descritos. 

![3](https://user-images.githubusercontent.com/34014602/58190303-d3599680-7c81-11e9-9943-fd935a654d9d.png)

4.	README del repositorio de GitHub. 

![README](https://user-images.githubusercontent.com/34014602/58190499-4105c280-7c82-11e9-9560-552f7f383bb1.png)

5.	Diseño de las páginas HTML usando CSS. Para lo cual, se puede generar fotografías instantáneas (pantallazos).

a.	Calculadora

![css](https://user-images.githubusercontent.com/34014602/58190549-609ceb00-7c82-11e9-8a8e-d972531f021e.png)

![calculadora con css](https://user-images.githubusercontent.com/34014602/58190575-6f839d80-7c82-11e9-98d2-2a4f7788179c.png)

b.	Formulario

![css_for](https://user-images.githubusercontent.com/34014602/58190614-875b2180-7c82-11e9-8c8b-3e28db648a06.png)

![for_css](https://user-images.githubusercontent.com/34014602/58190628-92ae4d00-7c82-11e9-9b1e-842818f32a6d.png)

c.	Galería

![css_gal](https://user-images.githubusercontent.com/34014602/58190673-a6f24a00-7c82-11e9-919c-8882a7e82274.png)

![gal_css](https://user-images.githubusercontent.com/34014602/58190706-ad80c180-7c82-11e9-9cc0-058daa98f894.png)

6.	Funcionamiento de cada una de las funciones de JavaScript

a.	Calculadora

![fun_cal1](https://user-images.githubusercontent.com/34014602/58190756-cd17ea00-7c82-11e9-9f4d-adb92bf9903b.png)

b.	Formulario

![fun_for_err](https://user-images.githubusercontent.com/34014602/58190797-e3be4100-7c82-11e9-925e-184f343602e5.png)

![fun_for_val](https://user-images.githubusercontent.com/34014602/58190799-e4ef6e00-7c82-11e9-98fd-e8e2cfb4c0d8.png)

c.	Galería

![fun_galer](https://user-images.githubusercontent.com/34014602/58190840-ffc1e280-7c82-11e9-8ca5-e158ff9d2a25.png)

7.	GitHub (usuario y URL del repositorio de la práctica)

•	Usuario: Jonnathan-Matute

•	URL: https://github.com/Jonnathan-Matute/Practica-de-laboratorio-03_Javascript

RESULTADO(S) OBTENIDO(S):

•	Tener el conocimiento suficiente para que el estudiante pueda entender y organizar de una mejor manera los sitios de web y de negocios en Internet

•	Manejo del JavaScript y css más avanzado

CONCLUSIONES:

-	Una página web es un documento estructurado que contiene texto y etiquetas HTML. Gracias a JavaScript podemos acceder a la estructura de la página y modificarla.

-	JavaScript, destaca su capacidad de integrarse a la perfección con el sistema operativo y con la mayoría de los navegadores web, ofreciendo una versatilidad absoluta que muy pocos lenguajes tienen y, al ser ejecutado del lado del cliente, aligerar la carga del servidor creando aplicaciones y sitios web bastante ligeros.

-	JavaScript es uno de esos lenguajes de programación que es necesario conocer, para aumentar considerablemente las capacidades de nuestros sitios web.

RECOMENDACIONES:

•	Probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari

•	Buscar de manera autónoma varias formas de realizar los puntos requeridos.

# Nombre del estudiante: Jonnathan Matute Curillo

# Firma del estudiante: 

![Firma](https://user-images.githubusercontent.com/34014602/58190986-46174180-7c83-11e9-82b0-73f8274b70e8.png)

