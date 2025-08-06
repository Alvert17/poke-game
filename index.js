

const entrada = document.getElementById("userEntrada");
const botonEnviar = document.getElementById("botonEnviar");
const botonJuego = document.getElementById("botonJugar");
const imagenarda = document.getElementById("imagenBola");
const subtitulo = document.getElementById("mensaje");
const sonido = document.getElementById("miSonido");
const puntardos = document.getElementById("puntaje");
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
   
    
    
    entrada.value = "";
    
fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*60)}`)
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
    subtitulo.style.color = "rgba(74, 190, 7, 1)"
    subtitulo.style.textShadow ="6px 4px 1px rgba(0, 0, 0, 1)";
    sumaPuntos += 1;
    
    
}

else if(entrada.value.toLowerCase().trim() == "" ){
    sumaPuntos += 0;
    
}
     
 puntaje.innerText = `Puntos: ${sumaPuntos } pts`;
 

})












