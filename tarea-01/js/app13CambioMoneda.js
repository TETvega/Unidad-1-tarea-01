


alert(`Programa que pide una cantidad en $Dolares y la combierte a L lempiras`);

let dolares = prompt(`Ingrese la Cantidad de Dolares  $ 0.00`)

dolares = parseFloat(dolares).toFixed(2)

// $ 1  = 24.62 L

let lempiras = (24.62*dolares).toFixed(2);

alert(`${dolares}  en lempiras es de L ${lempiras}`)