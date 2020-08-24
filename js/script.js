// let number = 2019
// let nombre = `Viví en Puerto Peñasco Sonora desde el año 2013 a ${number}`


// let div = `
//    <div class="container">
//       ${nombre}
//    </div>
// `


// Array
// let numbers = [1, 2, 4, 8, 16, 32, 64]


// Object
// let data = {
//    name: "Romeo",
//    lastname: "De los Angeles",
//    edad: 54
// }
// console.log(nombre)
// console.log(typeof number)
// console.log(typeof data)
// document.body.innerHTML = div


// Tipos de Datos en Javascript

// PRIMITIVOS
// null
// undefined
// number
// string
// boolean
// symbol

// OBJECT
// object
// null (js bug)
// function
// array


// CAMBIAR TIPO DE DATO ALOJADO EN UNA VARIABLE

// let myVar = 10
// myVar = 'Hola Mundo !'


// TYPE COERTION

// let number = 43
// let number2 = number
// Que pasa si modifico el valor de number2
// number2 = 45
// Al cambiar el valor de number2 se pierde la referencia y number sigue valiendo 43


// let serie = [1,2,3,4]
// let serie2 = serie2
// Pero si serie2.push(5)
// serie va a ser igual a:
// [1, 2, 3, 4, 5]
// En tipos de datos compuestos como
// Array u Objeto cuando cambio la 2da variable también se modifica el la primer variable, eso es llamado referencia.


// OPERADORES DE ASIGNACIÓN
// asignan un valor a un avariable
// let nombre = 'Romeo'

// let edad = 43

// edad += 1
// edad -= 1
// edad *= 2
// edad /= 3

// OPERADORES DE COMPARACIÓN
// devuelven un true ó false
// == Doble igualdad compara valores ejemplo:
// 5 == '5' Evalua diferencia
// true
// === Triple igualdad compara valores más el tipo de dato, ejemplo:
// 5 === '5' Evalua la igualdad
// false


// != Direfencia, ejemplo
// 5 != 5  Evalua diferencia
// true

//  !== Compara valor y tipo de dato
// 5 !== '5' Evalua igualdad

// >
// <
// >=
// <=


// OPERADORES UNARIOS
// requiere solo 1 dato
// typeof tipo dato
// ! negación, solo funcionan con los Boolean

// Binarios requieren dos tipos de datos
// OPERACIÓN

// ARIMÉTICOS
// +
// -
// *
// /
// %
// 10 % 2 === 0
// devuelve true
// 13 % 2 === 0
// devuelve false
// ++
// --

// TERNARIOS

// requiere 3 valores 
// expresión ? si es verdadero : si es falso

// let age = prompt('Dime tu edad: ')
// let Adult = age >= 18
//             ? 'Eres mayor de edad'
//             : 'Aún no alcanzas la   mayoría de edad'

            // expresion que devuelve Boolean
            // ? valor si es true
            // : valor si es false


// alert(Adult)

// OPERADOR CORTO CIRCUITO

// ||
// let d = null || a
//  Evalúa el 1er valor si es true se queda con ese valor, pero si el 1er valor es false se queda con el 2do valor.

// &&
// let e = null && a
// Evalue y si el primer valor es false se queda con el 1er valor, pero si el 1er valor fuera verdadero se queda con el 2do valor.


// NÚMEROS

// MÉTODOS
// toFixed()
// Especifica el número de decimales
// ejemplo:
// number.toFixed(n)

// let number = 5
// number.toFixed(2)
// "5.00"

// Tambíen redondea hacía arriba
// let number2 = 9078.8736218635
// number2.toFixed(3)
// "9078.874"
//  number2.toFixed(2)
// "9078.87"
// number2.toFixed(1)
// "9078.9"

// Convertir texto a número entero
// ParseInt()
// let texto = "20"
// let textToNumber = parseInt(texto,10)
// el 10 es por que usamos el sistema decimal
// parseInt() te permite cambiar a otros sistemas como binario o hexadecimal, etc.


// ParseFloat()
// Convertir texto a numero con decimales
// ejemplo
// let texto2 = '777.777'
// texto2.parseFloat(texto2)
// 777.777


// NaN
//  Valor que se devuelve cuando intentamos hacer una operación con números pero no podemos devolver un numero
// 5 * 'Hola'
// NaN

// Math
// .floor() redondea hacía abajo
// .ceil() redondea hacía arriba
// .round() redondea según el valor
// .random() devuleve un número aleatorio entre cero y 1

// Math.ceil(Math.random() * 10)
// Función que devuelve un número entre cero y 10

// STRINGS

// PROPIEDADES DE LOS STRINGS
// .length
// Devuelve cuantos caracteres tiene nuestro texto
// 'Romeo'.length
// 5
// let yoSoy = 'Romeo'
// yoSoy.length
// 5

// METODOS DE LAS STRINGS
// .trim()
// '   Hola   '.trim()
// Quita los espacios en blanco


// .toUpperCase() Convierte a Mayúsculas
// .toLowerCase()Convierte a Minúsculas

// ejemplo
// let answer = prompt('¿Cuál es la capital de Guerrero? ').toUpperCase().trim()
// let message = answer === 'CHILPANCINGO'
// ? 'Correcto'
// : 'Te equivocaste la respuesta es CHILPANCINGO'
// alert(message)


// Encontrar caracteres
// let name = 'romeodelosangeles'
// name.indexOf('r')

// Encuentra caracteres pero empieza a contar de atrás hacia adelante
// name.lastIndexOf('e')

// pregunta si el texto incluye cierta cadena de texto
// includes(string)
// ejemplo
// 'https://romeodelosangeles.io/blog'.includes('blog')
// true

// startsWith(string)
// Pregunta si comienza con determinado texto
// ejemplo
// 'https://romeodelosangeles.io/blog'.startsWith('https://romeodelosangeles')
// true

// endsWith(string)
// Pregunta como termina un texto


// MÉTODOS PARA MANIPULAR STRINGS

// replace
// toma un texto y lo reemplaza por otro
// 'Hola mundo'.replace('Hola','Romeo')
// "Hola Romeo"
// Necesita dos textos el 1er texto el texto original, y el 2do es el texto que va a reemplazar al original


// .split()
// divide strings
// ejemplo
// 'Romeo'.split('')
// 'Hola Mundo'.split(' ')


// substring()
// 'Hola Mundo'.substring(4)
// extrae el texto desde la posición indicada
// ejemplo
// ' Mundo'
// ó También desde la posición inicial a la posición final indicada
// 'Hola Mundo'.substring(2,5)
// "la "


// .substr()
// 'Hola mundo'.substr(2,5)
// "la mu"
// 'Hola mundo'.substr(-2)
// "do"
// 'Hola mundo'.substr(-2)
// "undo"

// .slice(start[end])
// 'Hola mundo'.slice(-5,-2)
// "mun"
// ó también
// 'Hola mundo'.slice(1,-1)
// "ola mund"


// CONDICIONALES Y CICLOS

// Condiciones en una sola línea
// if(5 > 2) console.log('Hola mundo')
// if('a' === 'b') console.log('Hola Romeo')

// Condiciones en Bloque
// if('a' === 'b') {
//  console.log('Hola mundo')
// }
// Bloque es necesario cuando tenemos más de una línea de ejecución
// ejemplo
// if('a' === 'a') {
//  console.log('Hola mundo')
//  console.log('Hola mundo otra vez')
// }


// Con más condiciones
// if('a' === 'a') {
//  console.log('Pasó la condición')
// } else {
//  console.log('No pasó la condición')
// }
//  

// if(5 > 3){
//    console.log('Pasó la condición')
// } else if (3 > 2) {
//    console.log('Pasó la condición 2')
// } else if (10 > 2) {
//    console.log('Pasó la condición 3')
// }
// 
// resultado
// Pasó la condición
// Al cumplirse la primer condición las otras dos condiciones ya no se ejecutan, solo se ejecuta la primera

// otro ejemplo
// if(2 > 3){
//    console.log('Pasó la condición 1')
// } else if (3 > 2) {
//    console.log('Pasó la condición 2')
// } else if (10 > 2) {
//    console.log('Pasó la condición 3')
// }
// resultado
// Pasó la condición 2


// CONDICIONALES MULTIPLES Y ANIDADAS
// condiciones múltiples
// && (y) Ambas condiciones deben cumplirse para ser true
// || (o) Con que se cumpla solo una de las condiciones sera true


// anidadas
// if (4 > 3) {
//    console.log('Pasó la condición 1')
//    if(5 > 3) {
//       console.log('Pasó la condición 1.1.')
//    }
// } else if (3 > 2 ){
//    console.log('Pasó la condición 2')
// } else if (10 > 2 ){
//    console.log('Pasó la condición 3')
// }

// Ejemplo con condiciones
// let age = parseInt(prompt('Dame tu edad'),10)
// Validar el dato de entrada
// if(age) {
//    if(age >= 18) {
//       alert('Eres mayor de Edad')
//    } else {
//       alert('Aún no tienes la mayoría de edad')
//    }
// } else {
//    let age = parseInt(prompt('Dame tu edad'),10)
//    if(age) {
//       alert('Gracias') 
//    }
// }


// let message = age >= 18
//             ? 'Eres mayor de edad'
//             : 'No cumples la mayoria de edad'
// alert(message)


// Truthy and falsy values
// Falsy
   // 0
   // ""
   // NaN
   // undefined
   // null
// Truthy
   // string no vacio
   // Número diferente de 0
   // arrays
   // objetos


   // SWITCH
   // Cuando queremos comparar un valor con una serie de valores, se utiliza switch

   // ejemplo 

   // let answer = prompt('Escoge un número del 1 al 3: ')
   // switch (answer) {
   //    case '1':
   //       alert("Eres tímido")
   //       break;
   //       case '2':
   //       alert("Eres extrovertido")
   //       break;
   //       case '3':
   //       alert("Eres muy feliz")
   //       break;
   //    default:
   //       alert("Por favor, ingresa un numero del 1 al 3")
   //       break;
   // }

   // otro ejemplo de switch
   // let answer = prompt(`La Capital de México es 
   // a. Bogotá
   // b. Madrid
   // c. Bangladesh
   // d. Caracas
   // e. CDMX
   // Escribe la letra de tu respuesta 
   // `).toUpperCase().trim()

   // switch (answer) {
   //    case 'A':
   //       alert('Respuesta incorrecta')
   //       break;
   //    case 'B':
   //       alert('Respuesta incorrecta')
   //       break;
   //    case 'C':
   //       alert('Respuesta incorrecta')
   //       break;
   //    case 'D':
   //       alert('Respuesta incorrecta')
   //       break;
   //    case 'E':
   //       alert('Respuesta Correcta !')
   //       break;
   //    default:
   //       alert('Opción No válida !')
   //       break;
   // }

   //  Ciclos

   // for(let i = 0; i <= 10; i++) {
   //    console.log(i)
   // }

   // for(let i = 1; i <= 10; i += 2) {
   //    console.log(i)
   // }

   // ejemplo
   // encontrar todos los multiplos de 7 entre 0 y 100
   // de forma ascendente
   // for(let i = 1; i <= 100; i++) {
   //    if(i % 7 === 0) console.log(i)
   // }
   // de forma descendente
   // for(let i = 100; i > 0; i--) {
   //    if(i % 7 === 0) console.log(i)
   // }

   // Break y Continue
   // No imprimas los multiplos de 7
   // for(let i = 0; i <= 100; i++) {
   //    if(i % 7 === 0) continue
   //       console.log(i)       
   // }

   // Imprime los 5 primeros multiplos de 7
   // ejemplo
   // let x = 0
   // for(let i = 1; i <= 100; i++) {
   //    if(i % 7 === 0) {
   //       console.log(i)
   //       x++
   //    }
   //    if(x >= 5) break
   // }

   // Ciclo While
   // Mientras esta condición se cumpla
   // while(condicion) {
      // Se va a ejecutar este código
   // }
   // ejemplo
   // let i = 0
   // while(i < 10) {
   //    console.log(i)
   // }

// let password = 'Romeo'
// let pass
// do {
//    pass = prompt('Ingresa el password')
// } while (pass !== password);


// FUNCIONES

//  Una función es un segmento de código reutilizable

// Como funciona
// input => función => output
// input => función => output1 => función => output2 => función => output3...
// input => argumentos
// output => valor de retorno
// Las funciones sin valor de retorno devuelven Undefined

// Ejecutar una función
// nombreFunción(argumento1, argumento2, argumento3)
// numbreFunción() SI es que no requiere datos de entrada
// Una función puede ser método de un objeto
// objeto.nombreFunción(argumentos)
// ejemplo
// 'Hola mundo'.slice(3)

// Formas de declarar una función
// function nombreFunción(parámetros) {
//    instrucciones de la función
//    return valor
// }

// function hello(person) {
//    return `hello ${person}`
// }

// console.log(hello('Romeo'))
// console.log(hello('Maria Teresa'))
// console.log(hello('Mamá Tere'))


// Ahora con un segundo parámetro
// function hello(person, sex) {
//    let greet = sex === 'h'.toUpperCase().trim()
   
//                    ? 'Bienvenido'
//                    : 'Bienvenida'
//    return `${greet}, ${person}`
// }

// console.log(hello('Romeo', 'H'))
// console.log(hello('Maria Teresa', 'M'))
// console.log(hello('Mamá Tere', 'M'))

// FUNCIONES FLECHA

// const hello = (person, gender) => {

//    let greet = gender === 'h'.toUpperCase().trim()
//                        ? 'Bienvenido'
//                        : 'Bienvenida'

//    return `${greet} a Acapulco, ${person}`
// }

// console.log(hello('Romeo', 'H'))
// console.log(hello('Maria Teresa', 'M'))
// console.log(hello('Mamá Tere', 'M'))

// SI LA FUNCION FLECHA RETORNA DIRECTAMENTE UN VALOR SIN INSTRUCCIONES ADICIONALES , LA SINTAXIS SE REDUCE, EJEMPLO:

// const suma = (x, y) => (x+y)

// console.log(suma(4,3))

// UTILIZANDO LA SINTAXIS ANTERIOR

// function sum(a, b) {
//    return a + b
// }

// console.log(sum(2, 3))
   
//    PARÁMETROS Y ARGUMENTOS



// PARÁMETROS SPREAD (SPREAD OPERATOR)

// ejemplo 1
// const sumarTodos = (...numeros) => {
//    console.log(numeros)
// }

// sumarTodos(1,2,3,4,5,6,7,8,9)

// ejemplo2 

// const sumarTodos = (...numeros) => {
//    let resultado = 0
   
//    for(let i = 0; i < numeros.length; i++) {
//       console.log(resultado)
//       resultado = resultado + numeros[i]      
//    }
//    return resultado   
// }

// console.log(sumarTodos(1,2,3,4,5,6,7,8,9))


// FUNCIONES COMO CIUDADANOS DE PRIMERA CLASE

// Indica que una función es un valor en javascript

// Pueden ser almacenadas en variables y constantes
// Función por expresión const c = console.log

// Pueden ser pasadas como argumentos de otra función(callbacks)
// Pueden ser retornadas por otra función (closures)
// Pueden tener métodos o propiedades (POO)

// Ejemplo
// const c = console.log
// const plus = (x, y) => x * y
// c(plus(4, 5))

console.log("Hola Mundo !")


