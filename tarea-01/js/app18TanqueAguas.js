// Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas
// cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
// 25% se dedica al riego. Diseñe un programa que haga lo siguiente:
// Determine la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.
// Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
// en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
// 1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27 pies cubicos



alert(`Programa que calcula los porcentajes de agua utilizados de 2 tanques de agua segun los datos ingresados\n`+
        `75% para uso Domestico, 25% para riego`);

let tanque1 = prompt(`Ingrese la capidad maxima de litros del tanque 1`);
let tanque2 = prompt(`Ingrese la capidad maxima de Yardas cubicas del tanque 2`);


let tanque1Metros3 = (parseFloat(tanque1)/1000).toFixed(2);

let tanque2Metros3 = (parseFloat(tanque2)*27*0.0283).toFixed(2);

let Domestico1= (parseFloat(tanque1Metros3)*0.75).toFixed(2);
let Domestico2 = (parseFloat(tanque2Metros3)*0.75).toFixed(2);

let riego1 = (parseFloat(tanque1Metros3)*0.25).toFixed(2);
let riego2 = (parseFloat(tanque2Metros3)*0.25).toFixed(2);


alert(`LA capacidad del tanque 1 es de : ${tanque1Metros3} m^3\n`+
        `Uso para riego 25% : ${riego1} m^3\n`+
        `Uso domestico 75% : ${Domestico1} m^3`)

alert(`LA capacidad del tanque 2 es de : ${tanque2Metros3} m^3\n`+
        `Uso para riego 25% : ${riego2} m^3\n`+
        `Uso domestico 75% : ${Domestico2} m^3`)