
let name = document.getElementById("nameproducto");
let idItem = document.getElementById("id");
let image = document.getElementById("imgproduct");
let desc = document.getElementById("comentarios");
let price = document.getElementById("precio");
let btnagregar = document.getElementById("btnSubmit");


btnagregar.addEventListener("click",function(e){
    e.preventDefault() ;
    let item = {"id":"", 
        "name":"",
        "img": "",
        "description":"",
        "precio": ""
       }

         item.name = name.value;
         item.id = idItem.value;
         item.img = image.value;
         item.description = desc.value;
         item.precio = price.value;    
})
