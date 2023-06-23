// Escribe tu código aquí.
var myArray =[];

function largestStrings (string1, arrayString ){
    string1.length 
    for ( var i=0; i< arrayString.length; i++ ) {
        var lengthWord= arrayString[i].length

        if (lengthWord > string1.length){

            myArray.push(arrayString[i]);
        }

    }

    console.log(myArray);
}

const myAddArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const word = "corazon"

largestStrings (word,myAddArray);



//Obtener los elementos del HTML para guardarlos en variables

//Almaceno el lugar de destino de mi tarjeta en una constante
const product_image_modal = document.getElementById("lista");
const imageProductButton = document.getElementById("imageButton");





function imageButtons() {

    
//Guardo los valores de mis inputs



    //1Creo el elemento

    lista.innerHTML = `

    <div >
    <li></li>

    </div>
   

`;


}

//Creamos el botón de escucha
imageProductButton.addEventListener("click", imageButtons);
