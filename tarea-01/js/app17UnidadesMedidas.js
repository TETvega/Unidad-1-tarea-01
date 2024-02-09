


// unidades de medida

// Dada una cantidad expresada en pies, y otra en metros. Determinar la suma pero
// convertida a pulgadas, a yardas, a metros y a millas por separado. Considere las
// siguientes equivalencias.
// 1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas.


alert(`Programa que Dada una cantidad expresada en pies y otra en metros, Determinar la suma pero `+
`convertida a pulgadas, a yardas, a metros y a millas por separado`);


let pies = prompt(`Ingrese la cantidad de Pies`);
let metros =prompt(`Ingrese la cantida en metros`);

pies = parseFloat(pies);
metros = parseFloat(metros);

let sumaPulg = (( pies*12) + (metros / 0.0254)).toFixed(2);
let sumaYard= (( pies/3) + ((metros / 0.0254)/3)).toFixed(2);
let sumaMetros = (((pies*12)*0.0254)+ (metros)).toFixed(2);
let sumaMillas = ((((pies*12)*0.0254)/1609) + (metros/1609)).toFixed(3);

alert(`La suma de ${pies} ' y ${metros} mtr es de:\n`+
     `En PULGADAS: ${sumaPulg}"  \nEn YARDAS: ${sumaYard} yar\n`+
     `En METROS: ${sumaMetros} mtr \nEn MILLAS ${sumaMillas} milla` );


     
