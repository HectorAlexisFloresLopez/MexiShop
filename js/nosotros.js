let btn = document.getElementsByClassName("btn"); //Llamando todos los elementos botones de "Nosotros"
buttons = Array.from(btn); //Generando un array

buttons.forEach(element => { //forEach para aplicar función a cada boton
    element.addEventListener("click", function(e){ //acción cuando se hace click a botón
        let arr = Array.from(document.getElementsByClassName("collapse")); //arreglo de los elementos collapse
        arr.shift(); //eliminar el elemento collapse de navBar
        for (let i = 0; i < arr.length; i++) { //for para buscar cada elemento distinto al que se hace click
            if (i!=buttons.indexOf(element)) { //condición de no mostrar collapse si no se hace click
                arr[i].style.display = "none"            
            } else{ //if
                arr[i].style.display = "block" //condición de mostrar collapsa si se hace click
            } //else
        }//for
}); //addEventListener
}) //forEach