function validarNuemero(resolver, rechazar){
	setTimeout( () => {
    	const max = 40;
        const min = 10;
        let num_alt = Math.round(Math.random() * (max - min) + min);
        if(num_alt % 2 == 0){
            resolver({mensaje:"El número es par!!!!!", statusCode: 200})
        }else{
            rechazar({mensaje:"El número es impar!!!!!", statusCode: 500});
        }
    },500);
    
}

let mipromesa = new Promise(validarNuemero);
console.log(mipromesa);
mipromesa.then( (respuesta) => {
	console.log("Se ejecuto correctamente la promesa")
    console.log(respuesta);
} ).catch( (respuesta) => {
    console.log("Se genero un error!!!");
    console.log(respuesta);
} ).finally( () => {
    console.log("Se ejecuto el finally");
} )
