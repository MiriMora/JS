function valorTrue(){
    console.log("true")
    
}
valorTrue()

const miPromesa1 = new Promise((resolve,reject) => {
    const i = Math.floor(Math.random() *2)
    
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
   })
   
   miPromesa1
   .then(()=> console.log("Se ha ejecutado de forma correcta"))
   .catch(()=> console.log("Error"))
   .finally(() => console.log("YO ME EJECUTO SIEMPRE"))

   // funciones generadoras
   function* generarId(){
    let id = 0
    while(true){
        id++
        yield id 
        if(id > 10){
            return id
        }
    }
   }
   const gen = generarId()

   console.log(gen.next())
   console.log(gen.next())
   console.log(gen.next())
   console.log(gen.next())
