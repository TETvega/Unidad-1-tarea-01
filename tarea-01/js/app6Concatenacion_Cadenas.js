

function concatenacion() {

    alert(`Programa que pide 2 cadenas de texto y las une`);

    let nombre1 = prompt("INGRESE SU PRIMER Primer NOMBRE");
    let nombre2 = prompt("INGRESE SU segundo Nombre AQUI");
    let apellido1 = prompt("INGRESE SU primer APELLIDO AQUI");
    let apellido2 = prompt("INGRESE SU segundo APELLIDO AQUI");

    let concatenacion = nombre1 + " "+ nombre2 +" "+ apellido1 +" "+ apellido2;
    console.log(concatenacion);
    alert(` ${concatenacion}` )

    
    
}

concatenacion();