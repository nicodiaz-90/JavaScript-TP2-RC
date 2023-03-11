/*
    Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
    salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
    guión

*/

let confirmacion = true;
let texto = "";
let cadena = "";

while (confirmacion !== false) {
    texto = prompt("Por favor ingrese un texto");
    confirmacion = confirm("Desea continuar?");
    cadena += texto + "-";
}

document.write(cadena);