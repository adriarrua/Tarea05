(function(){
	//3- Declarar una funcion anónima autoejecutable que imprima en la consola el texto 'Hola Mundo'
		(function(){
			console.log('Hola Mundo');

        //4- Crear una variable del tipo array
		})();
		var ciudad_paraguay  = [];

        //5- Crear una variable del tipo string
		var ciudad_asuncion= 'Contenido de la variable tipo string';
		console.log(ciudad_asuncion);

        //6- Crear una variable del tipo numerico
		var numero_ciudad = '1';
		console.log(numero_ciudad);

	    //7- Añadir dos elementos del tipo string dentro del array
		ciudad_paraguay.push('Salto del Guaira');
		ciudad_paraguay.push('Ciudad del Este');

	    //8-Imprimir en consola el valor del array
		console.log(ciudad_paraguay);
		
		//9Crear una variable del tipo object
		var obj_canindeyu= {};

		//10Añadir los atributos descripcion y cantidad a la variable del tipo object
		obj_canindeyu.capital='Salto del Guaira';
		obj_canindeyu.poblacion='31.477';
		obj_canindeyu.fundada='3 de marzo de 1959';
		obj_canindeyu.superficie= 'es de 1565 km';
		

		console.log(obj_canindeyu);
	

	})();
