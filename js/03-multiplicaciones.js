/*unction tablaMultiplicar(numero) {
    // Validamos que el usuario ingrese un número
    if (isNaN(numero)) {
      console.error("Por favor, ingresa un número válido.");
      return;
    }
  
    // Iteramos del 1 al 10
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} * ${i} = ${resultado}`);
    }
  }
  
  // Pedimos al usuario que ingrese un número
  const numeroIngresado = prompt("Ingrese un número para generar la tabla de multiplicar:");
  
  // Convertimos el valor ingresado a un número
  const numero = Number(numeroIngresado);
  
  // Llamamos a la función para generar la tabla
  tablaMultiplicar(numero);

  document.write(tablaMultiplicar)*/


  const num1 = (parseInt(prompt("introduce un numero para tu tabla de multiplicar"),0));
  const titulo = `La tabla de multiplicar del ${num1} es:`;
  document.getElementById("h1").innerHTML = titulo;


  for (let i = 0; i <= 10; i++){

    console.log(`${num1} * ${i} = `, num1 * i );
    const multiplicaciones = num1 * i;
    document.write("El resultado de Multiplicar  " +num1+ " x " + i + "  es igual a " +multiplicaciones, "</br>");
  }
