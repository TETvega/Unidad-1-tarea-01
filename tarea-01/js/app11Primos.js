

alert(`Verificacion de un numero primo`);

let numerox = prompt(`Ingrese su numero aqui`);

numerox= parseInt(numerox);

function verificadorNumerosPrimos(numero) {

    //si es 1 o menor a uno === falso

    if (numero <= 1) {
        return false;

    // si el numero es 2 o 3 es primo
    } else if ((numero === 2) ||( numero === 3)) {
        return true;

    // si el numero es divisor de 2 es falso    
    } else if (numero % 2 === 0) {
        return false;
    } else if (numero %3 ===0 ){
        return false;
    }
     // esta parte de aqui si busque en internet por que no encontre una mnera eficiente 
     // Hace comprobacion mediante la formula  6K±1  en el cual k es el numero a comparar
     // solo se comprueba divisibilidad por numeros de la forma numero/i , numero / (i+2)
     // en cada iteracion hasta que se llega al numero o este sobrepasa el numero 
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;

}


if (verificadorNumerosPrimos(numerox)) {
    alert(`El numero ${numerox} es primo`);
}else{
    alert(`El numero ${numerox} no es primo`);
}