document.querySelector<HTMLDivElement>("#tp3")!.innerHTML = `
<div>
    <h1>SALSA Y PICANTE</h1>
    <p>Tabla de multiplicar</p>
    <form id="tablaMultiplicar">
        <input type="number" name="multi" placeholder="Ingrese el multiplo">
        <button type="submit">Multiplicar, y no fuimo</button>
    </form>
    <div id='tabla'></tabla>
    <div id= 'tp4'></div>
</div>
`;

document
  .querySelector<HTMLFormElement>("#tablaMultiplicar")
  ?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget! as HTMLFormElement);
    console.log(formData);
    const multi = formData.get("multi");
    tablaMulti(multi);
  });
function tablaMulti(multi: FormDataEntryValue | string | null) {
  let tablaHTML = ``;
  multi = multi?.toString() ?? "0";
  for (let i = 0; i <= 10; i++) {
    let tabla = parseInt(multi) * i;
    tablaHTML += `
            <div>
                <h3>${multi} x ${i} = ${tabla}</h3>
            </div>
            `;
  }
  const tablaElement = document.querySelector<HTMLDivElement>("#tabla");
  if (tablaElement) {
    tablaElement.innerHTML = tablaHTML;
  }
}
