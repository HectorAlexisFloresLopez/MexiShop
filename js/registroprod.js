
    let tabla = document.getElementById("tabla");
    let id = document.getElementById("id");
    let nameprod = document.getElementById("nameproducto");
    let img = document.getElementById("imgproduct");
    let cost = document.getElementById("precio");
    let comment = document.getElementById("comentarios");
    let btnagregar = document.getElementById("btnSubmit");

    tabla.innerHTML += `<thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">PRODUCTO</th>
      <th scope="col">IMAGEN</th>
      <th scope="col">PRECIO</th>
      <th scope="col">COMENTARIOS</th>
    </tr>
  </thead>`

    let inventario = [];
    if (localStorage.getItem("catalogo")) {
        let tmp = JSON.parse(localStorage.getItem("catalogo"))
        tmp.forEach(element => {
            tabla.innerHTML += `<tbody>
            <tr>
              <th scope="row">${element.id}</th>
              <td>${element.name}</td>
              <td>${element.img}</td>
              <td>${element.precio}</td>
              <td>${element.description}</td>
            </tr>`
            
        });
        
    }

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

    if ((id.value.length==4) 
        && 
        (! isNaN(id.value))
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

    if ((cost.value.length>=3) 
        && 
        (! isNaN(cost.value))
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

    if ((id.value.length==4) 
        && 
        (! isNaN(id.value))
        &&
        (nameprod.value.length >=6)
        &&
        (img.value.length >=10)
        &&
        (cost.value.length>=3) 
        && 
        (! isNaN(cost.value))
        &&
        (comment.value.length >=30)) {
        //mandar información a localstorage
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha añadido producto a la lista',
            showConfirmButton: false,
            timer: 1500
          })
    
    inventario.push(item)
    localStorage.setItem("catalogo", JSON.stringify(inventario))

    let tmp = JSON.parse(localStorage.getItem("catalogo"))
        tmp.forEach(element => {
            tabla.innerHTML += `<tbody>
            <tr>
              <th scope="row">${element.id}</th>
              <td>${element.name}</td>
              <td>${element.img}</td>
              <td>${element.precio}</td>
              <td>${element.description}</td>
            </tr>`
        
       
            
        });
    }//if de validacion
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, ingrese los datos completos y correctos de nuevo',
            showConfirmButton: false,
            timer: 1500
          })
    }

    

});// btn Agregar

