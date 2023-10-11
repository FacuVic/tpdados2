function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function simularLanzamientos(veces) {
  const resultados = [];

  for (let i = 0; i < veces; i++) {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;

    if (resultados[suma] === undefined) {
      resultados[suma] = { suma, cantidad: 1 };
    } else {
      resultados[suma].cantidad++;
    }
  }

  return resultados.filter(resultado => resultado !== undefined);
}

function main() {
  const veces = parseInt(prompt("¿Cuántas veces deseas lanzar los dados?"), 10);

  if (isNaN(veces)) {
    console.log("Por favor, introduce un número válido.");
    return;
  }

  const resultados = simularLanzamientos(veces);
  console.table(resultados, ["suma", "cantidad"]);
}

main();