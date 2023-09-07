function saludar (nombre){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve ("hola " + nombre) //la promesa se cumple
            //reject ("no se pudo saludar") //la promesa no se cumple
        }, 2000)
        //reject ("no se pudo saludar") //la promesa no se cumple
    })
}

saludar("Miguel").then((respuesta)=>{
    console.log(respuesta);
});

console.log("Hola clase")



//console.log(saludar("diego"));