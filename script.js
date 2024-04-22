
let jugadas = 6 //cantidad de jugadas
let verde = '#1f7d45'
let amarillo = '#F4CD0A'
let gris = '#7A7975'
let diccionario = ['ASADOR', 'ABUELA','ALTURA','PERRO', 'FRASCO', 'ANHELO','AVISAR', ] //PARA QUE SELECCIONE PALABRA AL AZAR//
let palabraOculta = diccionario[Math.floor(Math.random() * diccionario.length)]; //para que funcione, debe ir debajo del array?//

//hacer que fucione el boton
const BUTTON = document.getElementById('guess-button')
BUTTON.style.color = 'black, bold'
BUTTON.addEventListener('click', intentar)

//aca insertar lo del bloc de notas

function intentar (){
    const INTENTO = document.getElementById('guess-input').value.toUpperCase () //reconoce la palabra que ingresa el jugador
    jugadas--;
    if(jugadas==0){
     terminar ('Perdiste &#129402')
    } //if (palabraOculta==INTENTO){
     //terminar ('Ganaste :)')
   // }
    else {
     let fila = document.createElement ('div')
     fila.className = 'row'
     
    for (const i in INTENTO){
         let letra = document.createElement ('span')
         letra.className = 'letter'
         letra.innerText = INTENTO [i]
         fila.appendChild(letra)
         console.log (fila)
         if (INTENTO [i] == palabraOculta [i]){
             //console.log (INTENTO[0], 'verde')
             letra.style.background = verde
        } else if (palabraOculta.includes (INTENTO [i])){
             //console.log (INTENTO[i], 'amarillo')
             letra.style.background = amarillo
        } else {
             letra.style.background = gris //console.log(INTENTO [i], 'gris')
    } if (palabraOculta==INTENTO){
            terminar ('¡Ganaste! &#129395;')
    }
        }  
     let grilla = document.getElementById('grid')
     grilla.appendChild(fila)
 }
 }


function terminar (mensaje){
    const INPUT = document.getElementById('guess-input');
    //DESABILITAR BOTONES CUANDO YA SE GANA O SE PIERDE
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let p = document.getElementById('guesses')
    p.innerHTML = '<h1>' + mensaje + '</h1>'
    //mensaje que sale al final
    
}





//ANOTACIONES//
//if (palabraOculta == intento){
 //   console.log ("ganamos")
//} else {
  //  for (let i=0; i<5; i++) {//bucle//
  //  comparar (i)
  //  }
   // for (const i in intento) {//bucle//
   //     comparar (i)S
   // }
//}
    
//anotacion otra forma de hacer;
//  else {
    //if (intento [0] == palabraOculta [0] ){
    //    console.log (intento[0], 'verde')
    //} else if (palabraOculta.includes (intento [0]))
    //    console.log (intento[0, 'amarillo'])
    //else console.log(intento [1], 'gris')

//function comparar (i) {
 //   if (intento [i] == palabraOculta [i] ){
   //     console.log (intento[0], 'verde')
   // } else if (palabraOculta.includes (intento [i]))
  //      console.log (intento[i], 'amarillo')
  //  else console.log(intento [i], 'gris')
//}




