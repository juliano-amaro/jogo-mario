const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')

let scores = 0

window.addEventListener('keyup', function(e) {
  var codigoTecla = e.which || e.keyCode || 0;
  if (codigoTecla == 32){
      mario.classList.add('jump')
    
      setTimeout (() => {
    
        mario.classList.remove('jump')
    
      }, 500)
    
  }
});

const jump = () => {
  mario.classList.add('jump')

  setTimeout (() => {

    mario.classList.remove('jump')

  }, 500)
}

function changeText() {
  document.querySelector('#texto').innerText = `Score: ${scores}`
}

const score = setInterval(() => {
  changeText()

  scores++
}, 100  )

const loop = setInterval(() => {

  const cloudPosition = cloud.offsetLeft
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 45 ) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`
    mario.style.left = `${marioPosition}px`

    mario.src = 'mario_morto.png'
    mario.style.width = '50px'
    mario.style.marginLeft = '75px'

    cloud.style.animation = 'none'
    cloud.style.left = `${cloudPosition}px`

    document.getElementById("imagem").innerHTML = "<img src='perdeu.png'>"

    document.getElementById("reiniciar").innerHTML = "<button type='buttom' id='btnvoltar'>Reiniciar</button>"
    document.querySelector('#btnvoltar').addEventListener('click', function(){
      window.location.reload(true);
    })

    clearInterval(score)
    clearInterval(loop)
  }
  
}, 10)

