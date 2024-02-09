


alert("Ingrese el radio de un circulo para calcular su area");

let radio = prompt(`Ingrese el radio`);
radio = parseFloat(radio)

console.log(radio);

let area= (Math.PI * (Math.pow(radio,2)));

alert(`El area del circulo de radio ${radio} es de: ${area.toFixed(2)}`);

