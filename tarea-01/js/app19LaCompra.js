


// La compra:
// Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
// calcule el precio total a pagar por la compra.


alert(`Programa que calcula el Total a pagar de un producto segun su precio y el IVA%`);

let nombre = prompt(`INGRESE EL NOMBRE DEL PRODUCTO`);
let precio = prompt(`Ingrese el pecio del Producto`);
let IVA = prompt(`Ingrese el % del IVA`);


let gravado = parseFloat((parseFloat(precio)*(parseFloat(IVA)/100))).toFixed(2);

let total = parseFloat((parseFloat(precio)+parseFloat(gravado))).toFixed(2);

alert(`FACTURA SYSOUT\nNombre: ${nombre}\n` +
    `Precio: ${precio} L \nIVA ${IVA} % : ${gravado} \n`+
    `Total a Pagar: ${total} L`)
