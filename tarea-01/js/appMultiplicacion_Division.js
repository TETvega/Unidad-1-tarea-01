

// funcion que multiplica y divide 2 numeros y muestra el resultado
function mensaje() {
    alert('PROGRAMA QUE INGRESA 2 NUMEROS Y muestra el resultado de su division y de su multiplicacion');    
    
    let A = prompt("Introduce el primer valor:");
    let B = prompt("Introduce el segundo valor");

    let resultadoDivision = parseFloat(A) / parseFloat (B);
    let resultadoMultiplicacion = parseFloat(A) * parseFloat (B);

    alert(`El resultado de la Division es: ${resultadoDivision} \nEl resultado de la miltiplicacion es ${resultadoMultiplicacion}`);
}


mensaje();
    
    