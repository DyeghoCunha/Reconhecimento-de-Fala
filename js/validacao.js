function verificaSeOChutePossuiUmValorValido(chute){
    const numero = + chute //só de somar ele converta para numero

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML+= '<div>Valor Inválido</div>';
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML+=`<div>Valor Inválido, o número está entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
        `<h2 class="h2__jogo"> Você Acertou!! </h2>
        <h3 class="h3__jogo">O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`

    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
    


}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', event =>{
    if(event.target.id=='jogar-novamente'){
        window.location.reload()
    }
})