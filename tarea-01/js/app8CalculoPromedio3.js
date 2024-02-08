


alert(`Calculador de Promdeio de 3 numeros`);

let num1= prompt("INGRESE EL PRIMER NUMERO AQUI");
let num2= prompt("INGRESE EL SEGUNDO NUMERO AQUI");
let num3= prompt("INGRESE EL TERCER NUMERO AQUI");

if ( (typeof(parseFloat(num1)) == typeof (parseFloat(num2)) ) 
&&(  typeof(parseFloat(num3)) == typeof(1)) && (typeof(parseFloat(num1))== typeof(parseFloat(num3)))){

    num1= parseFloat(num1);
    num2= parseFloat(num2);
    num3 = parseFloat(num3);
    
    let promedio= parseFloat((num1+num2+num3)/3).toFixed(2);


    alert(`El peromdeio de los numeros ${num1} , ${num2} , ${num3} es de ${promedio}`);

}else{

    alert(`Alguno de los datos ingresados no es un numero`);
}

