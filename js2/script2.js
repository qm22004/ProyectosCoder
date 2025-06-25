let suma = 0;

while (true) {
  let entrada = prompt("Ingresá un número (cancelar o valor inválido para salir):");
  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("Entrada inválida. Saliendo...");
    break;
  }

  suma += numero;
  alert("La suma actual es: " + suma);
}