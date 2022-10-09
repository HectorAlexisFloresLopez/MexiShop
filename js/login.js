let email = document.getElementById("email")
let password = document.getElementById("contra")
let button = document.getElementById("btnSubmit")
let btnLink = document.getElementById("registro")

let arr=[]
let flag =0;

btnLink.addEventListener("click", function (i) {
    i.preventDefault();

    window.location.assign("http://127.0.0.1:5500/pages/registrousuario.html")
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

    if (localStorage.getItem("users")) {
    let tmp=JSON.parse(localStorage.getItem("users")) 
        tmp.forEach(element => {
        if ((element.email==email.value) && (element.contrasena==password.value)) {
 
              flag++;
        }
    });//forEach
    if (flag>0) {
        setTimeout(window.location.assign("http://127.0.0.1:5500/index.html"),8000)
        window.addEventListener("load", function(){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Has accedido a tu cuenta',
                showConfirmButton: false,
                timer: 1500,
                background: '#282F36', 
                color: '#C2943F'
              })
        })
    } else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, ingrese los datos completos y correctos de nuevo',
            showConfirmButton: false,
            timer: 1500,
            background: '#282F36', 
            color: '#C2943F'
          })

    }

    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario no registrado',
            showConfirmButton: false,
            timer: 1500,
            background: '#282F36', 
            color: '#C2943F'
          })
    }
})//addEventListener


