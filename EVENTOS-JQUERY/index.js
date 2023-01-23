
$(document).ready(()=> {})

$(document).ready(()=> {
    $(".hide-btn").click(() => {
        console.log("Ocultando...")
       
        $("h1").hide()
      
       })
       $(".show-btn").click(() => {
        console.log("Mostrando...")
        
        $("h1").show()
        
       })

       
       $("li").click(() =>{
        $("h1").css({color: "red"})
       })

    
       $("li").dblclick(() =>{
        $("h1").css({color: "blue"})
       })

       
       $(".New-element").click(() => {
        $("ul").append("<li>New Element </li>")
       })
       
       $(".New-element").click(() => {
        $("ul").prepend("<li>New Element </li>")
       })

       

      
 })
