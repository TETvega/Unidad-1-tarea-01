
function areaTriangulo() {
    alert(`Programa que calcula el area de un triangulo mediante la base y altura ingresadas`);

    let base=parseFloat(prompt("Ingrese el valor de la base :"));
    let altura = parseFloat(prompt("Ingrese el valor de la altura"));


    if (base>0  && altura>0 )  {
        let area = (base*altura)/2;

        alert(`El area del triangulo de base ${base} y de altura ${altura} es de ${area}`);
    }else{
        alert("Alguno de los datos es 0 o negativo y el programa no funciono correctamente")
    }

}

areaTriangulo();