let email = document.getElementById("email")
let password = document.getElementById("contra")
let button = document.getElementById("btnSubmit")

cont=0

button.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value.length==0){
        email.classList.add(is-invalid)
        email.classList.remove(is-valid)
    }
    
    
    if (password.value.length==0){
        password.classList.add(is-invalid)
        password.classList.remove(is-valid)
    }

    if ((password.value.length==0)
        &&
        (email.value.length==0)
        ) {
        cont++;
    }
})


