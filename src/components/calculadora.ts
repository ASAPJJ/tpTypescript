document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>Mucho calculo</p>
    <form id="Calculadora">
      <input type="number" name="a"></input>
        <select id="Operaciones" name="Operaciones">
          <option value="1">+</option>
          <option value="2">-</option>
          <option value="3">x</option>
          <option value="4">/</option>
        </select>
        <input type="number" name="b"></input>
      <button type="Submit">Calcular</button>
    </form>
    <p id="resultado"></p>
    <div id="tp2"></div>
  </div>
`;
document
  .querySelector<HTMLFormElement>("#Calculadora")
  ?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget! as HTMLFormElement);
    console.log(formData);
    const a = formData.get("a");
    const b = formData.get("b");
    const operacion = formData.get("Operaciones");
    Calculo(a, b, operacion);
  });

export function mostrarResultado(
  elemento: HTMLElement | null,
  mensaje: string
) {
  elemento!.innerText = mensaje;
}
export function Calculo(
  a: FormDataEntryValue | string | null,
  b: FormDataEntryValue | string | null,
  operacion: FormDataEntryValue | null
) {
  a = a?.toString() ?? "0";
  b = b?.toString() ?? "0";
  let resultado: number = 0;
  switch (operacion) {
    case "1":
      resultado = parseFloat(a) + parseFloat(b);
      mostrarResultado(document.getElementById("resultado"), `${resultado}`);
      break;
    case "2":
      resultado = parseFloat(a) - parseFloat(b);
      mostrarResultado(document.getElementById("resultado"), `${resultado}`);
      break;
    case "3":
      resultado = parseFloat(a) * parseFloat(b);
      mostrarResultado(document.getElementById("resultado"), `${resultado}`);
      break;
    case "4":
      resultado = parseFloat(a) / parseFloat(b);
      mostrarResultado(document.getElementById("resultado"), `${resultado}`);
      break;
  }

  console.log(a, b, operacion);
}
