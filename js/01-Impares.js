
    // Obtener los números del usuario
    const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
    const numeroFinal = parseInt(prompt("Ingrese el número final:"));

    // Iterar desde el número inicial hasta el final y mostrar los impares
    ///console.log("Los números impares entre " + numeroInicial + " y " + numeroFinal + " son:");

    function mostrarImparesEntreNumeros() {
      for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    }

    function mostrarImparesEntreNumeros() {
      for (let i = numeroInicial; i => numeroFinal; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    }

    if (numeroInicial < numeroFinal){
      mostrarImparesEntreNumeros()
    }

    else if(numeroInicial === numeroFinal){
      console.log("Intruduce dos numeros diferentes")
    }

    else{
      console.log("si el numero 1 es mayor que el numero 2")
    }


  
  
  