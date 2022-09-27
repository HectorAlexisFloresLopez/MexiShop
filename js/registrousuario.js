let nombre = document.getElementById ("nombre");
let Telefono = document.getElementById("Telefono");
let email = document.getElementById("email");
let contra = document.getElementById("contra");
let contracof = document.getElementById("contraconf");
let btnRegistrar = document.getElementById("btnSubmit");

btnRegistrar.addEventListener("click", function(e){
     e.preventDefault();

    let cont = 0;
    let password = contra.value.split("")
    let signs = ["/", "@", "_", ":", "~", "$", "#", "*", "^", ".", "-"]
    signs.forEach(element => {
        if (password.includes(element)) {
            cont++;
        }
    });

//Validadciones
if ((nombre.value.length>=3) 
        && 
        (isNaN(nombre.value))
    ) {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else {
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    } // If nombre 


    if (email.value.length >=12)  {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    } else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
    } //If email

    if (Telefono.value.length >=10)  {
        Telefono.classList.remove("is-invalid");
        Telefono.classList.add("is-valid");
    } else {
        Telefono.classList.remove("is-valid");
        Telefono.classList.add("is-invalid");
    } //If telefono

    if ((contra.value==contracof.value) 
        && 
        (cont>0)
        &&
        (contra.value.length >=8)
    ) { 
        contra.classList.remove("is-invalid");
        contra.classList.add("is-valid");

        contracof.classList.remove("is-invalid");
        contracof.classList.add("is-valid");
    } else {
        contra.classList.remove("is-valid");
        contra.classList.add("is-invalid");

        contracof.classList.remove("is-valid");
        contracof.classList.add("is-invalid");
    } //If validacion contraseña


    let item = {"nombre": nombre.value, 
        "telefono": Telefono.value,
        "email": email.value,
        "contrasena":contra.value
       }


});//addEventListener