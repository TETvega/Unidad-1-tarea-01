
console.log(20);
const contrasenaP = 'traka';

alert(`Programa que compara la contraseña ingresada con la predefinida:\n ${contrasenaP}`);

let password = prompt(`Ingrese la contrasena`);

if( contrasenaP===password){
    alert(`USUARIO LOGEADO BIENVENIDO SENIOR STARK`);

}else{
    alert(`ERROR PASSWORD\nBorrando Datos del Usuario`);
}
