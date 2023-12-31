/*Escribir un programa que cuente y muestre la cantidad de números pares e impares en
un rango dado. - Tabla de Multiplicar*/

import { mostrarResultado } from "./calculadora";

// no null - no undefined aserción
document.querySelector<HTMLDivElement>("#tp2")!.innerHTML = `
    <div>
        <p>Elija el rango de números</p>
        <form id="parImpar">
            <input type="number" name="min"></input>
            <input type="number" name="max"></input>
            <button type="submit">Check</button>
        </form>
        <h3 id="par"></h3>
        <h3 id="impar"></h3>
        <div id="tp3"></div>
    </div>
`;

document
  .querySelector<HTMLFormElement>("#parImpar")!
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget! as HTMLFormElement);
    const min = parseInt(formData.get("min")!.toString());
    const max = parseInt(formData.get("max")!.toString());
    papu(min, max);
  });

function papu(min: number, max: number) {
  const contadorParImpar = {
    par: 0,
    impar: 0,
  };

  for (let number = min; number <= max; number++) {
    number % 2 === 0 && number != 0 ?  contadorParImpar.par++ : contadorParImpar.impar++;
    //utilizo el operador MOD y realizo un contador dependiendo del resultado
  }

  mostrarResultado(
    document.getElementById("par"),
    `Pares ${contadorParImpar.par}`
  );
  mostrarResultado(
    document.getElementById("impar"),
    `Impares ${contadorParImpar.impar}`
  );
}
