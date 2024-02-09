

//Calculadora simple

alert(`Esta es una Calculadora que Permite Hacer\nOperaciones basicas como : SUMAR , RESTAR , MULTIPLICAR o DIVIDIR`);

let op = prompt(`Ingrese la Oprecion que desea hacer\n 1-SUMA    2-RESTA    3-MULTIPLICAR   4--DIVIDIR`);


let numero1 = prompt(`Ingrese el primer numero`);
let numero2 = prompt(`Ingrese el segundo numero`);

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let resultado;

switch (parseInt(op)) {
    //SUMA
    case 1:
        resultado = numero1 + numero2;
        alert(`SUMA :  ${numero1} + ${numero2} = ${resultado}`)
        break;

    //resta
    case 2:
        resultado = numero1 - numero2;
        alert(`RESTA :  ${numero1} - ${numero2} = ${resultado}`)
        break;

    //MULTIPLICACION
    case 3:
        resultado = numero1 * numero2;
        alert(`MULTIPLICACION :  ${numero1} x ${numero2} = ${resultado}`)
        break;

    //DIVISION
    case 4:
        resultado = numero1 / numero2;
        alert(`DIVISION :  ${numero1} / ${numero2} = ${resultado}`)
        break;

    default:

    alert(`Opcion Invalida`)        
        break;
}