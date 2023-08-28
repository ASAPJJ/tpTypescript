import { mostrarResultado } from "./calculadora";

document.querySelector<HTMLDivElement>('#tp6')!.innerHTML = `
<div>
    <form id='wordCounter'>
        <h1>Contador de Palabras</h1>
        <label for="inputSentence">Ingrese una oración:</label>
        <input type='text' name="inputSentence" placeholder='Ingrese la oración'></input>
        <button type="submit">Contar Palabras</button>
        <div id="cont"></div>
    </form>
   
</div>
`;

document.querySelector<HTMLFormElement>('#wordCounter')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget! as HTMLFormElement);
    const inputSentence = formData.get('inputSentence');
    contarPalabras(inputSentence);
});

function contarPalabras(inputSentence: FormDataEntryValue | string | null) {
    const sentence = inputSentence?.toString() ?? "";
    const wordCount = sentence.trim().split(/\s+/).length;

    mostrarResultado(
        document.getElementById('cont'),
        `La cantidad de palabras en la oración es: ${wordCount}`
    );
}
