const fs = require('fs');



const crearArchivo= async(base = 5,listar=false) =>{


   
    


    let salida='';

    for ( let i = 1; i<=10; i++){
        salida+= `${base}* ${i} = ${base*i}\n `;
    
    }
    if(listar){
        console.log('==================='.green)
    console.log(`Tabla del ${base}`)
    console.log('===================')
    console.log(salida);

    }
   
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    return `tabla-${base}.txt`


}

module.exports ={
   crearArchivo
}