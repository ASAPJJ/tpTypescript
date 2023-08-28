import { mostrarResultado } from "./calculadora";
document.querySelector<HTMLDivElement>('#tp5')!.innerHTML=`
<div>
    <form id='temp'>
    <h1>Convertidor de Temperatura</h1>
    <input type='number' name="a" placeholder='Ingrese la temperatura'></input>
    <p>Ingrese la escala a transformar</p>
        <select id='escala' name='escala'>
            <option value="1">C°</option>
            <option value="2">F°</option>
        </select>
        <button type="submit">Transformar</button>
    </form>
    <div id="result"></div>
</div>
<div id='tp6'></div>
`
document.querySelector<HTMLFormElement>('#temp')?.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget! as HTMLFormElement)
    const a = formData.get('a');
    const escala = formData.get('escala');
    transformar(a,escala);

});

function transformar(
    a: FormDataEntryValue|string|null,
    escala: FormDataEntryValue|string|null){
        a = a?.toString() ?? "0";
        let resultado:number = 0;
        if(escala==="1"){
            resultado=(parseFloat(a)*(9/5))+32
            console.log(resultado);
            mostrarResultado(
                document.getElementById('result'),
                `La temperatura en grados C° es de ${resultado}`,
                );
        }else{
            resultado=(parseFloat(a)-32)*(5/9)
            console.log(resultado)
            mostrarResultado(
                document.getElementById('result'),
                    `La temperatura en grados F° es de ${resultado}`,
                    );
        }
        }
        