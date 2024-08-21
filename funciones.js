let a =0;

function like() {
    a = a + 1;
    document.getElementById("megusta").innerHTML = a + " me gusta";
    document.getElementById("corazon").style.color="red";
}


function registrar() {
    document.getElementById("boxconfircontrasena").style.display = "flex";
    document.getElementById("btnlogin").style.display = "none";
    document.getElementById("btnregistrar").innerHTML = "Crear nuevo usuario"
}

let contrasena = "";
let confircontrasena = "";

function confirmarcontrasena(){
    contrasena = document.getElementById("inputcontrasena").value;
    confircontrasena = document.getElementById("inputconfircontrasena").value
    if (contrasena == confircontrasena){
        alert("contraseñas iguales")
    }else{
        alert("contraseñas incorrectas")
    }
}


function vercontrasena() {
    let ojito = document.getElementById("imgojito").src

    if ( ojito.includes("novisible.svg")) {
        document.getElementById("imgojito").src ="visible.svg"
        document.getElementById("inputcontrasena").type = "text"
    } else {
        document.getElementById("imgojito").src ="novisible.svg"
        document.getElementById("inputcontrasena").type = "password"
    }
}