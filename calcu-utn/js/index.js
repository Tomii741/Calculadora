
const suma = () =>{
    let numUno = document.getElementById("numUno").value;
    let numDos = document.getElementById("numDos").value;

    if (numUno == "" || numDos == "") {
        alert("Debes ingresar dos numeros");
    } else {
        let respuesta = parseInt(numUno) + parseInt(numDos);
        document.getElementById("resultado").innerHTML = respuesta;
    }
}

const resta = () =>{
    const numUno = document.getElementById("numUno").value;
    const numDos = document.getElementById("numDos").value;

    if (numUno == "" || numDos == "") {
        alert("Debes ingresar dos numeros")
    } else {
        let respuesta = parseInt(numUno) - parseInt(numDos);
        document.getElementById("resultado").innerHTML = respuesta;
    } 
}

const division = () =>{
    const numUno = document.getElementById("numUno").value;
    const numDos = document.getElementById("numDos").value;
    if (numUno == "" || numDos == "") {
        alert("Debes ingresar dos numeros")
    } else {
        let respuesta = parseInt(numUno) / parseInt(numDos);
        document.getElementById("resultado").innerHTML = respuesta;
    } 
}

const multiplicacion = () =>{
    const numUno = document.getElementById("numUno").value;
    const numDos = document.getElementById("numDos").value;
    if (numUno == "" || numDos == "") {
        alert("Debes ingresar dos numeros");
    } else {
        let respuesta = parseInt(numUno) * parseInt(numDos);
        document.getElementById("resultado").innerHTML = respuesta;
    } 
}