//Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y
// segundos. Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos
// y segundos.


alert(`Dos Atletas recorren la misma distancia y registran sus tiempos `);


let d= prompt(`Ingrese la distancia Recorria en mts`);
let t1= prompt(`Ingrese el tiempo en S -segundos del Primer Atleta`);
let t2= prompt(`Ingrese el tiempo en S -segundos del segundo Atleta`);


d= parseFloat(d);
t1 = parseInt(t1);
t2 = parseInt(t2);

// 
let vel1horas = (d/ ( t1/3600)).toFixed(2);
let vel2horas = (d/ ( t2/3600)).toFixed(2);

let vel1min = (d/ ( t1/60)).toFixed(2);
let vel2min = (d/ ( t2/60)).toFixed(2);

let vel1seg = (d/ ( t1)).toFixed(2);
let vel2seg = (d/ ( t2)).toFixed(2);

console.log( `Velocidad 2 en horas ${vel2horas} m/h\nVelocidad 2 en minutos: ${vel2min} mts/min\nVelocidad 2 en segundos ${vel2seg} m/s`);

alert(`Velocidad 2 en horas ${vel2horas} m/h\nVelocidad 2 en minutos: ${vel2min} mts/min\nVelocidad 2 en segundos ${vel2seg} m/s`);
alert(`Velocidad 1 en horas ${vel1horas} m/h\nVelocidad 1 en minutos: ${vel1min} mts/min\nVelocidad 1 en segundos ${vel1seg} m/s`)