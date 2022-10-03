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

addItem(itemsCont1,{'id':'3001','name':'Calendario Azteca',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787081/barro%20y%20cer%C3%A1mica/barroyceramica2_zdtxyq.jpg',
    'description':'Calendario Azteca tallado en Piedra con detalles en colores, perfecto para colgarse en pared. ', 'precio': '1800'});

addItem(itemsCont2,{'id':'3002','name':'Quetzalcoatl',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787081/barro%20y%20cer%C3%A1mica/barroyceramica10_fc39te.jpg',
    'description':'Hermoso Quetzalcoatl tallado en ceramica, para uso decorativo con un tamaño de 10".', 'precio': '3700'});

addItem(itemsCont3,{'id':'3003','name':'Alcancía de Cerdito',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787081/barro%20y%20cer%C3%A1mica/barroyceramica1_cjlyv6.jpg',
    'description':'Cerdito tallado en Barro Negro de Oaxaca, con uso común de alcancía.', 'precio':'800'});

addItem(itemsCont1,{'id':'3004','name':'Juego de 3 tasas',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787080/barro%20y%20cer%C3%A1mica/barroyceramica9_n6j598.jpg',
    'description':'Juego de 3 tasas, talladas en barro negro, medida de 255ml.','precio':'899'});

addItem(itemsCont2,{'id':'3005','name':'Catrina',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787080/barro%20y%20cer%C3%A1mica/barroyceramica3_akzvux.jpg',
    'description':'Catrina tallada en barro negro super detallada, para uso decorativo con un tamaño de 10".','precio':'2900'});

addItem(itemsCont3,{'id':'3006','name':'Olla Tipo Jade',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787080/barro%20y%20cer%C3%A1mica/barroyceramica4_bwnmnn.jpg',
    'description':'Olla de Barro Negro, detallada y pintada en color jade.','precio':'1300'});

addItem(itemsCont1,{'id':'3007','name':'Juego 6 pzas Platos',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787080/barro%20y%20cer%C3%A1mica/barroyceramica6_stozva.jpg',
    'description':'Platos de ceramica, coloreados estilo dia de muertos, incluye 6 piezas de diferentes diseños y colores','precio':'1200'});

addItem(itemsCont2,{'id':'3008','name':'Juego Platos y Jarra',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787079/barro%20y%20cer%C3%A1mica/barroyceramica8_g5ztcl.jpg',
    'description':'Juego de platos plano, largo, ondo y jarra de ceramica negra, con detalle minimalista','precio':'2200'});

addItem(itemsCont3,{'id':'3009','name':'Juego Jarra y tazas',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787080/barro%20y%20cer%C3%A1mica/barroyceramica7_fn31qo.jpg',
    'description':'Juego de 4 tazas con jarra, realizadas en ceramica negra, medida de jarra 2.0Lt y tamaño de tazas 255ml.','precio':'1900'});

addItem(itemsCont2,{'id':'3010','name':'Jarron para maseta',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663787080/barro%20y%20cer%C3%A1mica/barroyceramica5_viuiaj.jpg',
    'description':'Jarron alto de ceramica, pintado en color blanco con detalle azul, diseñado para usar como maseta en exteriores o interiores.','precio':'1300'});
