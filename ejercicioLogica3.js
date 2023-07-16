/*Crear un programa en `JavaScript` que realice lo siguiente:

- Input
  - Solicitar por prompt o input un número.
  
- Output
  - Imprimir por consola o DOM el factorial del número recibido.

Input: 5

Output: 120


Consideraciones
- Identificar si los números ingresados son de tipo `number`, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
- El `factorial` de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número, ejemplo 4! = 1x2x3x4=24.
- Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
- Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo `HTML` y enlazar tu script.*/


let numero = parseInt(prompt("Ingrese un numero: "));


//Validar que sean números
if(isNaN(numero)){
//Mensaje, si lo ingresado es diferente a algún número
    alert("Por favor ingrese valores numéricos :) ");
//Si es un número
}else{    

//Función factorial (un parámetro)
function factorial(numero){
    //Inicializar la variable resultado que empiece en 1
    let resultado = 1;

    //Inicializar i en 1, y hasta que 1 sea menor o igual al numero (ingresado), entonces i++
    for(let i =1; i <= numero; i++){
        //Multiplicar cada número con el resultado actual y lo acumula
         resultado *= i;
    }

    //Retornar el resultado
    return resultado;

}
//Imprimir en Consola                                  
//Invocar la funcion
console.log("El factorial de " + numero + "!" + " es " + factorial(numero));

}   //Cierre del else de la validación