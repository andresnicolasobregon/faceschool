let a =0;

function like() {
    a = a + 1;
    document.getElementById("megusta").innerHTML = a + " me gusta";
    document.getElementById("corazon").style.color="red";
}


function registrar() {
    let contenidoboton = document.getElementById("btnregistrar").innerHTML
    if (contenidoboton == "Registrar") {
        document.getElementById("boxconfircontrasena").style.display = "flex";
        document.getElementById("btnlogin").style.display = "none";
        document.getElementById("btnregistrar").innerHTML = "Crear nuevo usuario"
    } else {
        contrasena = document.getElementById("inputcontrasena").value;
        confircontrasena = document.getElementById("inputconfircontrasena").value
        if (contrasena == confircontrasena){
            let usuario = document.getElementById("inputusuario").value;
            let contrasena = document.getElementById("inputcontrasena").value;
            localStorage.setItem(usuario, contrasena)
            alert("Se ha creado un nuevo usuario")
        }else{
            alert("contraseñas incorrectas")
        }
    }
}

function login() {
    let usuario = document.getElementById("inputusuario").value;
    let contrasena = document.getElementById("inputcontrasena").value;
    let contrasenastore = localStorage.getItem(usuario)
    console.log(contrasenastore)
    if (contrasena == contrasenastore) {
        alert("Bienvenido")
    }else{
        alert("Usuario o contraseña incorrecta")
    }
}



let contrasena = "";
let confircontrasena = "";

function vercontrasena() {
    let ojito = document.getElementById("imgojito").src
    if ( ojito.includes("novisible.svg")) {
        document.getElementById("imgojito").src ="visible.svg"
        document.getElementById("inputcontrasena").type = "password"
    } else {
        document.getElementById("imgojito").src ="novisible.svg"
        document.getElementById("inputcontrasena").type = "text"
    }
}
function vercontrasena2() {    
    let ojito2 = document.getElementById("imgojito2").src
    if ( ojito2.includes("novisible.svg")) {
        document.getElementById("imgojito2").src ="visible.svg"
        document.getElementById("inputconfircontrasena").type = "password"
    } else {
        document.getElementById("imgojito2").src ="novisible.svg"
        document.getElementById("inputconfircontrasena").type = "text"
    }
}
