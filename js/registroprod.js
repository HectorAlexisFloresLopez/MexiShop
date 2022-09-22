let btn = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    let id = document.getElementById("id");
    console.log(id.value)
    let nameprod = document.getElementById("nameprducto");
    console.log(nameprod.value)
    let img = document.getElementById("imgproduct");
    console.log(img.value)
    let cost = document.getElementById("precio");
    console.log(cost.value)
    let comment = document.getElementById("comentarios");
    console.log(comment.value)


    console.log(typeof(id.value), typeof(nameprod.value), typeof(img.value), 
                typeof(cost.value), typeof(comment.value));
    console.log(id.value.length, nameprod.value.length, img.value.length, cost.value.length, comment.value.length);


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
