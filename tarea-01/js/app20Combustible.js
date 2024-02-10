// El combustible:
// Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
// por su carro y el número de litros consumidos . El script debe mostrar el consumo de
// combustible por kilómetro.


alert(`Programa que calcula el combustible gastado / km `);

let km = prompt(`INGRESE LOS KM recorridos`);
let ltr = prompt(`Ingrese los Litros de combustible usados`);

let litrosPerKilometro =  parseFloat(ltr)/(parseFloat(km) ).toFixed(2);

alert(`El consumo de Litros por kilometro es de: ${litrosPerKilometro} ltr/km`);