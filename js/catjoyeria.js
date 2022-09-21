
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
                <button type="button" class="btn" data-toggle="modal" data-target="#modalItem">
                 Ver más 
                </button>
                <a href="#" class="btn">Añadir a carrito</a> 
            </div> 
        </div> 
        <br/>
        <!-- Modal -->
<div class="modal fade" id="modalItem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <button type="button" class="btn" data-dismiss="modal">Close</button>
        <button type="button" class="btn">Añadir a carrito</button>
      </div>
    </div>
  </div>
</div>`
    div.innerHTML += itemHTML;
}

addItem(itemsCont1,{'name':'Collar agave azul',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783977/Joyeria/collar2_zmfqtc.png',
    'description':'Collar de malaquita con agave de plata y al centro una gota de ámbar de Chiapas. Plata .925. Medidas: 45 cm x 3.3 cm  x 3.6 cm.', 'precio':'5,400'
});
addItem(itemsCont2,{'name':'Collar corazón de Frida',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/collar4_sj1ntm.png',
    'description':'Dije de corazón de plata .925, de este cuelgan un corazón tallado en ámbar de Chiapas color miel y dos gotas de ámbar color cognac.  Medida total del dije: 7 cm de largo.', 'precio':'11,590'
});
addItem(itemsCont3,{'name':'Collar canto de la vida',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/collar3_wikapi.png',
    'description':'Collar de charoita, granate y amatista con dije especial de corazón con aves y flores. Plata .925. Medida total dije central: 8 cm largo X 5 cm ancho.', 'precio':'14,860'
});
addItem(itemsCont1,{'name':'Collar espléndido azul',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783992/Joyeria/collar1_pukrdv.png',
    'description':'Collar de lapislázuli, kianita, citrina, rubí estrella y cornalina con dije de colibríes y flores. Plata .925. Medida total dije central: 9 cm largo X 6 cm ancho.', 'precio':'18,540'
});
addItem(itemsCont1,{'name':'Collar corazón de talavera',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/collar5_tavqg5.png',
    'description':'Dije de corazón de talavera, cadena de oro de 18k y perlas. Medida total del dije: 5 cm.', 'precio':'6,138'
});
addItem(itemsCont2,{'name':'Aretes Guadalupe',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783992/Joyeria/aretes4_tgjegg.png',
    'description':'Aretes de virgen de Guadaupe con rosas y gemas de lapislázuli y hematita. Plata .925. Medida total: 3 cm.', 'precio':'1,680'
});
addItem(itemsCont3,{'name':'Aretes Sol y Luna',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/aretes3_lqgy2w.png',
    'description':'Aretes de sol y luna con monedas de ámbar de Chiapas colgando. Plata .925. Medida total: 6 cm.', 'precio':'2,920'
});
addItem(itemsCont1,{'name':'Aretes tres agaves',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/aretes2_wcmjt1.png',
    'description':'Aretes de tres agaves y una marquesa de dioptasa. Plata .925. Medida total: 6.5 cm.', 'precio':'2,420'
});

addItem(itemsCont2,{'name':'Aretes corazón de Puebla',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/aretes1_lemmxp.png',
    'description':'Aretes de corazón con rosa de oro de 18k. Medida total: 5.5 cm.', 'precio':'4,820'
});
addItem(itemsCont3,{'name':'Pulsera piñata',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/pulsera2_mjfm62.png',
    'description':'Pulsera de perlas con un dije de piñata. Plata.925. Medida total: 18 cm.', 'precio':'1,621'
});
addItem(itemsCont1,{'name':'Pulsera agaves azul',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783991/Joyeria/pulsera1_v0bhlc.png',
    'description':'Pulsera de un hilo de lapislázuli con 3 agaves. Plata.925. Medida total: 18 cm.', 'precio':'1,823'
});
addItem(itemsCont2,{'name':'Brazalete México lindo y querido',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783977/Joyeria/pulsera4_ouwgjd.png',
    'description':'Brazalete de plata con 2 corazones. Plata.925. Medida total: 18 cm.', 'precio':'3,853'
});
addItem(itemsCont3,{'name':'Pulsera banca del parquecito',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783978/Joyeria/Group_2_2_q8hodz.png',
    'description':'Pulsera de banquita y corazón con 24 hilos de pirita.  Plata.925. Medida total: 20 cm.', 'precio':'5,363'
});
addItem(itemsCont2,{'name':'Pulsera gotas de lluvia',
    'img':'https://res.cloudinary.com/dozr3yk7l/image/upload/v1663783977/Joyeria/pulsera3_xcwmkf.png',
    'description':'Pulsera de cuatro hilos de turquesa con un equipal, una silla, jarrón de flores y al centro una fuente con flores, acompañados de tres biseles de turquesa. Plata.925. Medida total: 19 cm.', 'precio':'6,523'
});

