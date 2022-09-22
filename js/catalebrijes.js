
const itemsCont1 = document.getElementById("list-items1");
const itemsCont2 = document.getElementById("list-items2");
const itemsCont3 = document.getElementById("list-items3");

function addItem(div, item){
    const itemHTML = `<div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5> 
                <p class="card-text">${item.description.slice(0,20)}...<br>
                <strong>$ ${item.precio} (MXN)</strong></p>   
                <button type="button" class="btn" data-toggle="modal" data-target="#modalItem_${item.id}">
                 Ver más 
                </button>
                <a href="#" class="btn">Añadir a carrito</a> 
            </div> 
        </div> 
        <br/>
        <!-- Modal -->
<div class="modal fade" id="modalItem_${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      ${item.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn">Añadir a carrito</button>
      </div>
    </div>
  </div>
</div>`
    div.innerHTML += itemHTML;
}

addItem(itemsCont1, {'id':'1001','name':'Alebrije Gato Auriazul',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663790867/Alebrijes/alebrije12_gbruhd.jpg',
    'description':'Pieza de cerámica representativa de artesanos Oaxaqueños, decorada destacando los colores verde, azul, rosa, blanco, negro, naranja. Mide 80 cm. de alto. Peso: 5kg.',
    'precio':'16,700'
});
addItem(itemsCont1, {'id':'1002','name':'El Perro Loco',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788272/Alebrijes/alebrijes3_nds9i2.png',
    'description':'Perrito multicolor , con hermosas alas y cuerpo pintados a mano. Altura: 65 cm. Peso: 4.300 kg','precio':'18,250'});

addItem(itemsCont1, {'id':'1003','name':'Conejo Orejas de Zafiro',
'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788232/Alebrijes/alebrijes10_i6zrud.png',
'description':'Pieza de cerámica de colores rosa,azul y amarillo, hipnotizante a la vista. Altura: 45 cm. Peso: 2Kg.', 'precio':'8,250'});

addItem(itemsCont2, {'id':'1004','name':'Jaguar turquesa',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788276/Alebrijes/alebrijes4_nex3xo.png',
    'description':'Impresionante trabajo de cerámica con shakiras incrustadas en el cuerpo. Altura:35 cm. Peso: 2.400 kg.','precio':'11,500'});

addItem(itemsCont2, {'id':'1005','name':'Conejo Cuerpo de Maíz Azul',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788234/Alebrijes/alebrijes7_r9rcxo.png',
    'description':'Conejo que hace alusión a los colores del maíz azul y rosa, hipnotizante a la vista. Altura: 45 cm. Peso: 2Kg.', 'precio':'8,250', 'precio':'8,250'});

addItem(itemsCont2, {'id':'1006','name':'Gato Floreado',
'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788279/Alebrijes/alebrijes2_l0h1wy.png',
'description':'Alebrije hecho de madera copal por artesanos de Oaxaca. La técnica es un proceso largo. Se talla la pieza en madera de copal sobre todo y se tiene que dejar secando por un tiempo a veces hasta de un año para permitir que la madera se seque completamente antes de pintarla. Una vez la pieza seca se procede a pulirla de manera que la pintura, que normalmente es elaborada con pigmentos naturales, se aplique a la pieza. Altura:65cm. ', 'precio':'25,050'});


addItem(itemsCont2, {'id':'1007','name':'Búho del Cenit',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788233/Alebrijes/alebrijes9_m3ogql.png',
    'description':'Impresionante trabajo de cerámica con shakiras incrustadas en el cuerpo. Altura:35 cm. Peso: 2.400 kg.','precio':'11,500'});

addItem(itemsCont3, {'id':'1008','name':'Gato Fino Multicolor',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788267/Alebrijes/alebrijes5_yjspbk.png',
    'description':'Hermoso alebrije de madera con forma de gato, tallado y decorado a mano por artesanos oaxaqueños. Medidas: 24cm x 30cm x 17cm. Color: Verde, azul, rosa, blanco, negro, naranja. Altura:60 cm. Peso:4.5 kg','precio':'17,900'});

addItem(itemsCont3, {'id':'1009','name':'Dragón Atardecer',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788553/Alebrijes/alebrije11_gzgxez.png',
    'description':'Hermosa cerámica con colores de los atardeceres de Chiapas. Altura: 80cm. Peso: 5kg.', 'precio':'37,200'});

addItem(itemsCont3, {'id':'1010','name':'Jaguar Atardecer',
'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663788479/Alebrijes/alebrije10_etlze0.jpg',
'description':'Jaguar multicolor, un atardecer para que puedas deleitarte. Altura:40 cm. Peso: 4.800 kg', 'precio':'26,400'});