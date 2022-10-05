let email = document.getElementById("email")
let password = document.getElementById("contra")
let button = document.getElementById("btnSubmit")
let btnLink = document.getElementById("registro")

let arr=[]
let flag =0;

btnLink.addEventListener("click", function (i) {
    i.preventDefault();

    window.location.assign("http://127.0.0.1:5503/pages/registrousuario.html")
});

button.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value.length==0){
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
    } else {
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
    }
    
    
    if (password.value.length==0){
        password.classList.add("is-invalid")
        password.classList.remove("is-valid")
    } else{
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
    }

  
    let tmp=JSON.parse(localStorage.getItem("users")) 
        tmp.forEach(element => {
        if ((element.email==email.value) && (element.contrasena==password.value)) {
 
              flag++;
        }
    });
    if (flag>0) {
        setTimeout(window.location.assign("http://127.0.0.1:5503/index.html"),8000)
        window.addEventListener("load", function(){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Has accedido a tu cuenta',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
})


