

alert(`Programa que compara si 2 cadenas son iguales`);

let cadena1 = prompt(`Ingrese su primer cadena aqui`);
let cadena2 = prompt(`Ingrese su segunda cadena aqui`);

cadena1 = cadena1.toString();
cadena2 = cadena2.toString();

if( cadena1 === cadena2){

    alert(`Las cadenas son iguales:\n${cadena1}\n${cadena2}`);
}else{
    alert(`Las cadenas no son iguales:\n${cadena1}\n${cadena2}`)
}