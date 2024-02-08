

alert(`Verfificador si el termino ingresado es par o impar`);

let num= prompt("INGRESE EL NUMERO AQUI");

verificador();
function verificador() {

    console.log(parseFloat(num));
    
    if( typeof(num) == typeof(1)){
    switch (true) {
        case parseFloat(num) ===0: 
            alert(`El numero es 0 o es menor. Un error al digitar los numero intente de nuevo  `);
            break;
        case parseFloat(num) % 2 === 0:
            alert(`El numero ${num} es par `);
            break;
        case parseFloat(num)%2 !==0:
            alert (`El numero ${num} es impar`);
            break;
        default:
            alert(`Un error ecurrio en el programa`);
            break;
     }
    }else{
        alert(`No se ha ingresado un numero`);
    }
}