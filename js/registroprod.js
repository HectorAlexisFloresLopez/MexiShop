
    let tabla = document.getElementById("tabla");
    let id = document.getElementById("id");
    let nameprod = document.getElementById("nameproducto");
    let img = document.getElementById("imgproduct");
    let cost = document.getElementById("precio");
    let comment = document.getElementById("comentarios");
    let btnagregar = document.getElementById("btnSubmit");

    tabla.innerHTML += `<thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>`

    let inventario = [];

btnagregar.addEventListener("click", function(e) {
    e.preventDefault();

let item = {"id":"", 
        "name":"",
        "img": "",
        "description":"",
        "precio": ""
       }

         item.name = nameprod.value;
         item.id = id.value;
         item.img = img.value;
         item.description = comment.value;
         item.precio = cost.value;    

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

    //mandar información a localstorage
    inventario.push(item)
    localStorage.setItem("catalogo", JSON.stringify(inventario))

});

