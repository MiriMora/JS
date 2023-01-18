const listaPeliculas =[
    {titulo: "Balto" ,director:"Gunnar", año: 1995 },
    {titulo:"Avatar", director: "James Cameron",año: 2009 },
    {titulo:"Avatar: the way of water", director:"James Cameron", año:2022 }

]
console.log(listaPeliculas)

const listaPeliculas1 =[
    {titulo: "Balto" ,director:"Gunnar", año: 1995 },
    {titulo:"Avatar", director: "James Cameron",año: 2009 },
    {titulo:"Avatar: the way of water", director:"James Cameron", año:2022 }

]
const newArray = listaPeliculas1.map((valor,director)=>{
    console.log(director)
    return `1- ${valor}`
})
console.log(newArray)

const listaPeliculas2 =[
    {titulo: "Balto" ,director:"Gunnar", año: 1995 },
    {titulo:"Avatar", director: "James Cameron",año: 2009 },
    {titulo:"Avatar: the way of water", director:"James Cameron", año:2022 }

]
const newArray1 = listaPeliculas1.map((valor,titulo)=>{
    console.log(titulo)
    return `1- ${valor}`
})
const listaPeliculas3 =[
    {titulo: "Balto" ,director:"Gunnar", año: 1995 },
    {titulo:"Avatar", director: "James Cameron",año: 2009 },
    {titulo:"Avatar: the way of water", director:"James Cameron", año:2022 }

]
const pelis = listaPeliculas3.filter(film => film.año < 2010)
console.log(pelis)

