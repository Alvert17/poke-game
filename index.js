

const entrada = document.getElementById("userEntrada");
const botonEnviar = document.getElementById("botonEnviar");
const botonJuego = document.getElementById("botonJugar");
const imagenarda = document.getElementById("imagenBola");
const subtitulo = document.getElementById("mensaje");
const sonido = document.getElementById("miSonido");
const puntardos = document.getElementById("puntaje");

const iconoMankey = document.createElement("img");
iconoMankey.classList.add("claseMono");

const iconoPika = document.createElement("img");
iconoPika.classList.add("clasePika");

const iconoJiggly = document.createElement("img");
iconoJiggly.classList.add("clasePuff");


const iconoEstrella = document.createElement("img");
iconoEstrella.classList.add("estrellita");

let valorObjetoDeRepuesta  ;


function accederAName(objeto){
if(objeto.name.length%2 !==0){

    const array = [
    
{letraUno: objeto.name[0]},

{letraDelMedio: objeto.name[ Math.floor((objeto.name.length)/2)] },

{letraFinal: objeto.name[objeto.name.length - 1]  }


  ] ;
   
   return array 


}
else{
const array = [
    
{letraUno: objeto.name[0]},

{letraDelMedio: objeto.name[ Math.floor((objeto.name.length)/2) ] },

{letraFinal: objeto.name[objeto.name.length - 1]  }


  ] ;
   
   return array 
    
}


    }

    function generadorDeGuiones(numero){
         let cantidadDeGuiones = "";


        for(let i =0
            ; i <= numero; i++){

            cantidadDeGuiones += " _ ";


        }
        
        

         return cantidadDeGuiones;


     
    }



botonJuego.addEventListener("click", () => {
    
     subtitulo.style.textShadow ="5px 4px 3px rgba(100, 100, 100, 1)"
    subtitulo.style.color = "#000"; 
    imagenarda.style.filter = "brightness(0) ";
    subtitulo.classList.remove("superclase");
    mensaje.classList.remove("mensaje");
    mensaje.style.fontSize = "";
    mensaje.style.paddingRight = "";
    subtitulo.style.textShadow ="";
    
    entrada.value = "";
    
fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*100)}`)
.then(respuesta => respuesta.json())
.then((objeto) => {
 
   imagenarda.src = objeto.sprites.other["official-artwork"].front_default;
   
 

valorObjetoDeRepuesta = objeto;


const accesoAString = accederAName(objeto);
let caso = 0

if(objeto.name.length  %2 === 0){
    caso = (Math.floor(objeto.name.length / 2) - 3);

}
else{
     caso = (Math.floor(objeto.name.length / 2) - 2);
}

subtitulo.innerText = ` Pista: ${accesoAString[0].letraUno + generadorDeGuiones((Math.floor(objeto.name.length / 2) - 2)) + accesoAString[1].letraDelMedio + generadorDeGuiones(caso) + accesoAString[2].letraFinal}`;

  
})

.catch(error => console.log(error + "hola"));

});
let sumaPuntos = 0;
botonEnviar.addEventListener("click", () =>{
   
console.log(valorObjetoDeRepuesta)

if(entrada.value.toLowerCase().trim() === valorObjetoDeRepuesta.name){
   entrada.value ="";
    sonido.play();
    imagenarda.style.filter = "none";
    subtitulo.innerText = `¡Felicidades es ${valorObjetoDeRepuesta.name}!`;
    subtitulo.style.color = "rgba(87, 201, 21, 1)"
    subtitulo.style.textShadow ="6px 4px 0px rgba(0, 0, 0, 1)";
    sumaPuntos += 1;
    puntaje.innerText = `Puntos: ${sumaPuntos } pts`;   }
    
    
 
switch(sumaPuntos){
    case 5:
        subtitulo.innerText = "5 puntos? nada mal.."
        subtitulo.style.color = "rgba(199, 70, 10, 1)"
        subtitulo.classList.add("superclase");
       subtitulo.style.textShadow ="5px 4px 0px rgba(0, 0, 0, 1)";
       iconoMankey.src = "mankey.png";
       mensaje.style.fontSize = "40px";
       subtitulo.appendChild(iconoMankey);
        
    break;

    case 10:
        subtitulo.innerText = "¡VAYA!si que sabes de pokemons"
        subtitulo.style.color = "rgba(218, 96, 163, 1)"
        subtitulo.classList.add("superclase");
        iconoJiggly.src = "jiggly.png";
       subtitulo.appendChild(iconoJiggly);
       mensaje.style.paddingRight = "20%";
       subtitulo.style.textShadow ="5px 4px 0px rgba(0, 0, 0, 1)";
       break;
      

    case 15:
        subtitulo.innerText = "15pts? sabes mucho de pokemons"
        subtitulo.style.color = "rgba(218, 126, 7, 1)"
        subtitulo.classList.add("superclase");
        iconoPika.src = "pika.png";
        subtitulo.appendChild(iconoPika);
        mensaje.style.paddingRight = "20%";
        mensaje.style.fontSize = "32px";
        subtitulo.style.textShadow ="5px 4px 0px rgba(0, 0, 0, 1)";
    break;


    case 20:
       subtitulo.style.color ="rgba(245, 181, 6, 1) "; 
       subtitulo.classList.add("superclase");
       mensaje.classList.add("segundaSuperClase"); 
       subtitulo.innerText = `¡ERES UN MAESTRO POKEMON!`
       iconoEstrella.src = "estrella.png";
       subtitulo.appendChild(iconoEstrella);
    
     
    break;
}

 
 
 

})












