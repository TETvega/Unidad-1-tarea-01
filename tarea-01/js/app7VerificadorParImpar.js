

alert(`Verfificador si el termino ingresado es par o impar`);

let num= prompt("INGRESE EL NUMERO AQUI");

verificador();
function verificador() {
    
    switch (true) {
        case num <=0: 
            alert(`El numero es 0 o es menor. Un error al digitar los numero intente de nuevo  `);
            break;
        case num % 2 == 0:
            alert(`El numero ${num} es par `);
            break;
        case num %2 ==!0:
            alert (`El numero ${num} es impar`);
            break;
        default:
            alert(`Un error ecurrio en el programa`);
            break;
    }
}