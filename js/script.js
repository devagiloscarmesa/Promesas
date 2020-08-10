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

function llamarPromesa(){
    return new Promise(validarNuemero);
}

let funcionDeLlamado = async() => {
    let resultado = await llamarPromesa();
    console.log(resultado);
}

let mipromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
            for (let index = 0; index < 50; index++) {
                console.log(index);
            }
            reject("Whoops!");
            //resolve('Termino de ejecutar la promesa 1');
    }, 100);
});

mipromesa.then((x) => {
    console.log('Then',x)
}).catch((r) => {
    console.log('Catch',r);
})



let mipromesa2 = new Promise(() => {
	setTimeout(() => {
          console.log("Esta es la promesa 2")
    }, 100);
})

console.log("Se ejecuto linea de codigo 30");
/*
mipromesa.then( (respuesta) => {
	console.log("Se ejecuto correctamente la promesa")
    console.log(respuesta);
} ).catch( (respuesta) => {
    console.log("Se genero un error!!!");
    console.log(respuesta);
} ).finally( () => {
    console.log("Se ejecuto el finally");
} ) */

//funcionDeLlamado();