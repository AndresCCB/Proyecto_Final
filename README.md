# Proyecto_Final

## Idea de negocio

<br />

La idea de negocio es la venta de distintos compuestos y tipos de neumaticos para automoviles y carreras de monoplazas, dado que la gente no suele darse cuenta en la diferencia de los neumaticos y no ven la importancia que tienen los mismos en sus autos.

<br />

## Tecnologias Utilizadas

Este es un proyecto realizado en JavaScrip y Html, junto con CSS para el embellecimiento de la pagina misma, detras tambien se encuentra el uso y funcionamiento de FireBase para guardar la informacionde los neumaticos, viendose en forma de CRUD.

<br />

![image](https://user-images.githubusercontent.com/110188177/203318280-458c605f-de10-49c2-8370-915d115095cf.png)

Inicialmente se utiliza HTML5 para la creacion de todo el apartado grafico, esto en el archivo "index.html", en el cual un contenedor header estatico y flex, que se moverla a lo largo de la pagina mientras se scrollea por la misma, un contenedor para el acceso de informacion, es decir, un panel en el cual se podra ingresar la informacion.

<br />

![image](https://user-images.githubusercontent.com/110188177/203318396-743939a6-e13d-4220-8c7c-a9df5c0f24e7.png)

El uso de CSS es esta aplicacion es para el embellecimiento de la misma, importar fuentes e iconos que se utilizar en todo el modelo, asi mismo el css fue empleado para tener una paleta de colores clara y no divagar en el uso de muchos ccolores distintos.

<br />

![image](https://user-images.githubusercontent.com/110188177/203318344-f5e48527-0405-4008-9f98-0c5692a941c0.png)

JavaScrip se emplea para la conexion de el apartado grafico con la base de datos, asi mismo no es solo para conexion sino tambien para realizar la los metodos de busqueda, edicion, guardado, y actualizacionde datos, modificando asi mismo la base de datos.

<br />

![image](https://user-images.githubusercontent.com/110188177/203318446-91c00595-82dc-4d03-a07c-d323eba9ba39.png)

Es el motor para la base de datos NoSQL un tipo de basse de datos no relacional.

<br />
<br />

## Moldelado NoSQL

<br />

![modelado](https://user-images.githubusercontent.com/110188177/203320343-9ac3b816-3098-40b0-a8eb-cdf545401296.jpeg)

<br />

Este es el modelado NoSQL de la Base de Datos a realizar.

<br />

## Modelado de la App

<br />

<img width="361" alt="image" src="https://user-images.githubusercontent.com/110188177/203322156-03cc8135-d39a-44a6-8785-a24724508271.png">

<br />

Es una CRUD de un modelo empresarial basado en la venta de neumaticos de diferentes tipos y compuestos, la cual permite guardar, listar, eliminar y actualizar informacion de una unica tabla "neumaticos" en una base de datos, esto mediante Firebase, una base de datos NoSQL.

<br />

## Funcionamiento Aplicacion

<br />

La app tiene un primer apartado visual el cual permite ingresar la informacion de los neumaticos, los cuales interiormente se guardaran en la base de datos de nombre "neumaticos", posteriormente tiene el apartado de listado de la informacion, en el cual se encontraran las opciones de eliminar o actualizar los datos segun sea necesario.

<br />

A continuacion se muestra el funcionamiento de manera grafica:

<br />

### Pantalla inicial

![image](https://user-images.githubusercontent.com/110188177/203325018-05d78bb3-17ce-4588-ac33-aab2ef82cf31.png)

<br />

### Agregar informacion a la base de datos.

![image](https://user-images.githubusercontent.com/110188177/203326115-17037437-0272-4bdd-82ad-b7dac08ea51f.png)

<br />

### Visualizacion de la informacion agregada exitosamente en la base de datos.

![image](https://user-images.githubusercontent.com/110188177/203326280-8a89cc3d-03dc-4238-89d7-37493c35d0d7.png)

<br />

### Visualizacion de la informacion en la aplicacion.

![image](https://user-images.githubusercontent.com/110188177/203326648-93a5cbd1-1750-44b7-8317-a78b5515df36.png)

<br />

## Edicion de la informacion

<br />

Se le presiona en el boton amarillo, que tiene un estilo de lapiz, el cual mostrara la informacion en los mismo apartados donde se ingresa inicialmente la informacion, pero esta vez para ser editada y actualizada, en este caso, editaremos el precio, la cantidad en inventario, y las especificaciones, para finalmente darle al boton actualizar.

<br />

Asi:

![image](https://user-images.githubusercontent.com/110188177/203328261-f2d548ee-7102-4fa0-acbf-e98908c1a7db.png)

![image](https://user-images.githubusercontent.com/110188177/203327997-3773e269-5e2f-4d7b-a66b-c822d83e474c.png)

![image](https://user-images.githubusercontent.com/110188177/203327713-3ac590be-2b55-4148-8e4d-c82cb8816fd0.png)

![image](https://user-images.githubusercontent.com/110188177/203328307-8082d982-c9ee-4d42-8a2d-826e44ec1acc.png)

![image](https://user-images.githubusercontent.com/110188177/203328348-65891e21-b262-4985-bfd3-3e169a0bfef5.png)

<br />

### Actualizacion de la informacion en base de datos

![image](https://user-images.githubusercontent.com/110188177/203328481-1409fcec-a9e3-4aa7-9edd-d3ae2d3d6de7.png)

<br />

### Eliminacion de informacion en Aplicacion

<br />

Se le presiona en el boton rojo, que tiene un estilo de basura, el cual eliminara la informacion de la aplicacion y de la base de datos de forma definitiva, en este caso eliminaremos el registro de id 2.

<br />

Asi:

![image](https://user-images.githubusercontent.com/110188177/203328963-c12f3333-ccfd-4bba-8a8a-ab6aabd4ed07.png)

![image](https://user-images.githubusercontent.com/110188177/203329005-851eba3c-6a88-4c18-8e45-d24a3912ea97.png)

<br />

### Eliminacion de informacion en Base de Datos

![image](https://user-images.githubusercontent.com/110188177/203329104-9e145a1d-5a8b-4874-808f-1f97d114e059.png)

<br />
<br />

Es asi el funcionamiento de la base de datos en conjunto de la apliacion web; Este trabajo fue realizado por el estudiante de ingenieria de sistemas Andres Camilo Castro Bravo, como proyecto final para la materia de Bases de Datos.
