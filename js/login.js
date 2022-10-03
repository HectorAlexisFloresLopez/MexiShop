let email = document.getElementById("email")
let password = document.getElementById("contra")
let button = document.getElementById("btnSubmit")

let arr=[]

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
    let tmp=JSON.parse(localStorage.getItem("users")) 
        tmp.forEach(element => {
        if ((element.email==email.value) && (element.contrasena==password.value)) {
            console.log((element.email==email.value) && (element.contrasena==password.value))
            //Aqui se reedirecciona
        }
    });

})


