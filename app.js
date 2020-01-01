//asignacion de sonidos en el evento onclick en el documento
let hihat=new Audio();
hihat.src='sonidos/909-bright-ohh.wav';
let midTomb=new Audio();
midTomb.src='sonidos/ambient_tom_1.wav';
let midTomb2=new Audio();
midTomb2.src='sonidos/ambient_tom_2.wav';
let crash=new Audio();
crash.src='sonidos/deepcrash.wav';
let crash2=new Audio();
crash2.src='sonidos/curecrash.wav';
let ride=new Audio();
ride.src='sonidos/CYMRIDE12.wav';
let bombo=new Audio();
bombo.src='sonidos/big-ol-yamaha-kick.wav';
let bombo2=new Audio();
bombo2.src='sonidos/big-ol-yamaha-kick.wav';
let snare=new Audio();
snare.src='sonidos/brass-sd.wav';
let snare2=new Audio();
snare2.src='sonidos/brass-sd.wav';
let lowTomb=new Audio();
lowTomb.src='sonidos/KPR77038.wav';
let lowTomb2=new Audio();
lowTomb2.src='sonidos/KPR77043.wav';
let clap=new Audio();
clap.src='sonidos/balloon-pop.wav';








// se asigna el evento a window porq la interacion va a hacer con el teclado no con un elemento del documento
window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!audio) {
    return;
  } else {
    //regresa a el inicio de track al aplstar la tecla
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
});
//evento para la div de teclas en el documento ya q las clases key fueron para la bateria
window.addEventListener("keydown", function(k) {
  let teclas = document.querySelector(`.tecla[data-key='${k.keyCode}']`);
  if (
    k.keyCode === 81 ||
    k.keyCode === 87 ||
    k.keyCode === 69 ||
    k.keyCode === 82 ||
    k.keyCode === 84 ||
    k.keyCode === 89 ||
    k.keyCode === 85 ||
    k.keyCode === 73 ||
    k.keyCode === 79 ||
    k.keyCode === 80 ||
    k.keyCode === 71 ||
    k.keyCode === 72 ||
    k.keyCode === 32
  ) {
    teclas.classList.add("playing2");
  } else {
    return;
  }
});


//quita clase playing al terminar la transicion de clase
function remover(ke) {
  let k = document.querySelectorAll(".key, .tecla");

  k.forEach(function(x) {
    x.classList.remove("playing");
    x.classList.remove("playing2");
  });
}
//tomar todas las clases .key y .tecla para agregarles un evento final de transicion
let keys = document.querySelectorAll(".key, .tecla");

keys.forEach(function(ke) {
  ke.addEventListener("transitionend", remover);
});
 //agrega la clase playing al dar click en el elemento
let elemento = document.querySelectorAll('.key');
elemento.forEach(function(cli) {
    
  cli.addEventListener("click", function(c) {
    
    c.target.classList.add('playing');
      
          
  });
});