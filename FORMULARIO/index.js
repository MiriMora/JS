const f = document.getElementById("formulario")
console.log(f)

// vamos a hacer qeu cada vez que hay un "submit",me ejecutes la funcion
f.addEventListener("submit",evento => {
console.log(evento)
evento.preventDefault()

})