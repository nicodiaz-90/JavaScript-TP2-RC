/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.

 */


let confirmacion = true;
let num;
let suma = 0;

while (confirmacion !== false) {
    num = parseInt(prompt("Ingrese números"));

    if (isNaN(num)) {
        alert("Porfavor ingrese números");
        num = parseInt(prompt("Ingrese números"));
    } else {

    }

    confirmacion = confirm("Desea continuar");
    suma = suma + num;
}

document.write(suma);


