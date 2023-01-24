

const parrafos = document.querySelectorAll(".parrafo")

console.log(parrafos)


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () => {
 console.log("Inicio de arrastre")
 
 
 console.log("Estoy arrastrando el parrafo" + parrafo.innerText)

 console.log(parrafo.innerText)
 
 parrafo.classList.add("dragging")
 event.dataTransfer.setData("id",parrafo.id)
 const elemento_fantasma = document.querySelector(".imagen-fantasma")
 event.dataTransfer.setDragImage(elemento_fantasma,0,0)

    })
    parrafo.addEventListener("dragend", () =>{
        console.log("He terminado de arrastrar")

    })
})

const secciones = document.querySelectorAll(".seccion")
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", () => {
        console.log("Drag over")
    })

    
    seccion.addEventListener("drop",()=> {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")

       const parrafo = document.getElementById(id_parrafo)
       seccion.appendChild(parrafo)
    })
})
