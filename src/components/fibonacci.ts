document.querySelector<HTMLDivElement>('#tp4')!.innerHTML=`
<div>
    <form id="fibonacci">
        <h1>PAREN LOS MEMES</h1>
        <div id="secuencia">

        </div>
        <button type="submit">Fibonacci</button>
    </form>
    </div>
    <div id="tp5"></div>
</div>
`

document.querySelector<HTMLFormElement>('#fibonacci')!.addEventListener('submit', (e)=>{
    e.preventDefault();
    let num1:number = 0;
    let num2:number = 1;
    let nose:number =0

    let html=``

    for (let i=0; i<10; i++) {

        html+=`
        <div>
            <h3>${nose}</h3>
        </div>
        `;

        nose= num1 + num2;
        num2=num1
        num1= nose
       

        const htmlElement= document.querySelector<HTMLDivElement>("#secuencia");
        if(htmlElement){
            htmlElement.innerHTML=html;
        }
        console.log(nose);

    }
});

