let nombre = document.getElementById("nombre");
let tlf = document.getElementById("Telefono");
let mail = document.getElementById("email");
let mensaje = document.getElementById("Mensaje")

let btnEnviar = document.getElementById("btnSubmit");
btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    

    if (nombre.value.length >= 12) { //validacion nombre
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else {
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }

    if (
        (tlf.value.length>=10)
        &&
        (! isNaN(tlf.value))
    ){                               //validación Teléfono 
        tlf.classList.remove("is-invalid");
        tlf.classList.add("is-valid");
    }else {
        tlf.classList.remove("is-valid");
        tlf.classList.add("is-invalid");
    }

    if (
        !(mail.validity.typeMismatch) //validación mail
        &&
        (mail.value.length >= 6)
    ){                               
        mail.classList.remove("is-invalid");
        mail.classList.add("is-valid");
    }else {
        mail.classList.remove("is-valid");
        mail.classList.add("is-invalid");
    }

    if (
        (mensaje.value.length >= 15) //validacion mensaje
        && 
        (mensaje.value.length <=140)
    ){ 
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add("is-valid");
    } else {
        mensaje.classList.remove("is-valid");
        mensaje.classList.add("is-invalid");
    }

    if ((nombre.value.length >= 12)
        &&
        (tlf.value.length>=10)
        &&
        (! isNaN(tlf.value))
        &&
        !(mail.validity.typeMismatch)
        &&
        (mail.value.length >= 6)
        &&
        (mensaje.value.length >= 15) //validacion mensaje
        && 
        (mensaje.value.length <=140)
    ) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "mexishopgeneration@gmail.com",
            Password : "406D1B6FBC2FB61ED5E9ECFA9453067FFF4F",
            To : 'mexishopgeneration@gmail.com',
            From : "mexishopgeneration@gmail.com",
            Subject : "Contáctanos Mexishop",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );          
    }
    

});