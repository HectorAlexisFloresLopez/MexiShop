if (!localStorage.getItem("catalogo")) {
    window.addEventListener("load", function () {
        getData();
      })
}//if no existe elementos en catálogo

function getData() {
    let promise = fetch("http://127.0.0.1:5500/data.json",{
      method:"GET"
    });//fetch
    promise.then( (response) => {
            response.json().then((data)=>{
                localStorage.setItem("catalogo", JSON.stringify(data))
  
            }).catch( (error) =>{
              console.error(error);
          });
      }).catch((error) =>{
        console.error("Error en la solicitud " + error);
    });
      
}//getData