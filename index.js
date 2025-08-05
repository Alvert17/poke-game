

const entrada = document.getElementById("userEntrada");
const botonEnviar = document.getElementById("botonEnviar");
const botonJuego = document.getElementById("botonJugar");
const imagenarda = document.getElementById("imagenBola");
let valorObjetoDeRepuesta  ; 


botonJuego.addEventListener("click", () => {
    imagenarda.style.filter = "brightness(0) ";
    const subtitulo = document.getElementById("mensaje");
    subtitulo.innerText = `¿Quien es ese pokemon?`;
    entrada.value = "";
    
fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*60)}`)
.then(respuesta => respuesta.json())
.then((objeto) => {
    console.log(objeto)
   imagenarda.src = objeto.sprites.other["official-artwork"].front_default;
   console.log(imagenarda.src);


valorObjetoDeRepuesta = objeto;


   
})

.catch(error => console.log(error));

});

botonEnviar.addEventListener("click", () =>{
    console.log("pito");
console.log(valorObjetoDeRepuesta)
if(entrada.value.toLowerCase().trim() === valorObjetoDeRepuesta.name){
    entrada.value ="";
    imagenarda.style.filter = "none";
    const subtitulo = document.getElementById("mensaje");
    subtitulo.innerText = `¡Felicidades es ${valorObjetoDeRepuesta.name}!`;

    
 }
 

})












