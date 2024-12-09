
function cambiarDom(){
    const titulo1 = document.getElementById('titulo1');
    const titulo2 = document.getElementById('titulo2');
    const parrafo = document.getElementById('parrafo1');
    const parrafo2 = document.getElementById('parrafo2');
    console.log(parrafo1)

    titulo1.textContent = "nuevotitulo"
    parrafo1.innerHTML = "<h1>titulo de innerthml</h1> <p>parrafo de html</p>"

}

function otrafuncion(){
    const contenedor2 = document.getElementById("contenedor2")
    contenedor2.innerHTML = "<h1 id='titulo3'>titulo de innerthtml</h1>  <p>parrafo2</P>"
}

function cambiarRuta(){
    const enlace = document.querySelector("a")
    enlace.setAttribute("href", "https://vanguardia.com")
}