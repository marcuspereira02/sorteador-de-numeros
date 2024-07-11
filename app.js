function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value); //usando o document eu consigo buscar no html pelo id que está entre ()
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if( de > ate || quantidade > (ate - de)){
        
        alert('Por favor, veja se você inseriu os números corretamente.');

    } else {
        for(let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de , ate);

            while(sorteados.includes(numero)){ //conferindo se tem numero dentro de sorteados
                numero = obterNumeroAleatorio(de, ate);
            } 
            sorteados.push(numero);
        }
    }

    let resultado = document.getElementById('resultado');
    let palavraNumero = quantidade > 1 ? 'Números' : 'Número';
    let palavraSorteado = quantidade > 1 ? 'sorteados' : 'sorteado';
    resultado.innerHTML = `<label class="texto__paragrafo">${palavraNumero} ${palavraSorteado}: ${sorteados.sort(compararNumeros)} </label>`;

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

    let botaoSortear = document.getElementById('btn-sortear');
    if (botaoSortear.classList.contains('container__botao')){
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    } else {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}

function compararNumeros(a, b) {
    return a - b;
}
    