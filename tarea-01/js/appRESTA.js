

// Funcion que pide 2 numeros a usuario y los resta entre si
function RESTA() {

    alert('PROGRAMA QUE INGRESA 2 NUMEROS Y LOS resta ENTRE ELLOS');    
    
    let aResta = prompt("Introduce el primer valor:");
    let bResta = prompt("Introduce el segundo valor");
    
    
    
    // Realizar la suma
    let resultado = parseInt(aResta) - parseInt(bResta);
    
    
    alert(`El resultado de la resta es: ${resultado}`);
    
    }
    
    RESTA();
    