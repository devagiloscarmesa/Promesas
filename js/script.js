/*let p = new Promise( (resolve, rechazar) => {
	setTimeout( () => {
    resolve("la promesa se ejecuto correctamenta");
    }, 3000);
});

p.then( (mensaje) => {
    console.log(mensaje)
});

//Promesa
//NPM
//NODE JS

*/


function validarNumero(){
    return new Promise((resolver, rechazar) => {
      window.setTimeout(() => {
        const b = 40;
        const a = 10;
        let numero = Math.round(Math.random()*(b-a)+parseInt(a))
        if(numero%2 == 0){
          resolver("Fue par "+numero);
        }else{
          rechazar("Fue impar "+numero)
        }
      }, 100);
    });
  }
  
  async function llamarFuncion(){
    let m = await validarNumero();
  
    console.log(m);
  }
    
  llamarFuncion();
