// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido
// indicarlo en un mensaje

let edad = parseInt(prompt("Por favor ingrese su edad")); 

if(edad >= 18){
    document.write("Usted puede conducir")
} else if(edad < 18){
    document.write("Usted no puede conducir")
} else{
    document.write("Usted no ingreso un numero")
}