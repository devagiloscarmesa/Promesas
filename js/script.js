function validarNuemero(exito, rechazo){
	setTimeout( () => {
    	const max = 40;
        const min = 10;
        let num_alt = Math.round(Math.random() * (max - min) + min);
        if(num_alt % 2 == 0){
            exito({mensaje:"El número es par!!!!!", statusCode: 200})
        }else{
            rechazo({mensaje:"El número es impar!!!!!", statusCode: 500});
        }
    },Math.round(Math.random() * (1000 - 500) + 500));
}

let mipromesa = new Promise(validarNuemero);
let mipromesa1 = new Promise(validarNuemero);

Promise.all([mipromesa, mipromesa1]).then( (respuesta) => {
	console.log("Se ejecuto correctamente la promesa")
    console.log(respuesta);
} ).catch( (respuesta) => {
    console.log("Se genero un error!!!");
    console.log(respuesta);
} ).finally( () => {
    console.log("Se ejecuto el finally");
} )

console.log("Total de promesas:", Promise.length);