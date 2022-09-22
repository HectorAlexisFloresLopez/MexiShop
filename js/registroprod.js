

    let id = document.getElementById("id");
    let nameprod = document.getElementById("nameprducto");
    let img = document.getElementById("imgproduct");
    let cost = document.getElementById("precio");
    let comment = document.getElementById("comentarios");
    let btnagregar = document.getElementById("btnSubmit");


btnagregar.addEventListener("click",function(e){
    e.preventDefault() ;
    
})


btnagregar.addEventListener("click", function(e) {
    e.preventDefault();

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

    let cod = id.value;
    console.log(id.value.length);
    console.log(isNaN(cod));

    if ((id.value.length==4) 
        && 
        (! isNaN(cod))
    ) {
        id.classList.remove("is-invalid");
        id.classList.add("is-valid");
    } else {
        id.classList.remove("is-valid");
        id.classList.add("is-invalid");
    } // ID validacion


    if (nameprod.value.length >=6)  {
        nameprod.classList.remove("is-invalid");
        nameprod.classList.add("is-valid");
    } else {
        nameprod.classList.remove("is-valid");
        nameprod.classList.add("is-invalid");
    } //If Product Name

    if (img.value.length >=10)  {
        img.classList.remove("is-invalid");
        img.classList.add("is-valid");
    } else {
        img.classList.remove("is-valid");
        img.classList.add("is-invalid");
    } //If URL Img

    let price = cost.value;
    console.log(cost.value.length);
    console.log(isNaN(price));

    if ((cost.value.length>=3) 
        && 
        (! isNaN(price))
    ) {
        cost.classList.remove("is-invalid");
        cost.classList.add("is-valid");
    } else {
        cost.classList.remove("is-valid");
        cost.classList.add("is-invalid");
    } // validacion Costo

    if (comment.value.length >=30)  {
        comment.classList.remove("is-invalid");
        comment.classList.add("is-valid");
    } else {
        comment.classList.remove("is-valid");
        comment.classList.add("is-invalid");
    } //If Descripcion

});

