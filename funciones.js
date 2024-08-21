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