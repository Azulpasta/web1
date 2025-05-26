function saudar(event){
    event.preventDefault(); //importante para não recarregar a página

    const form = event.target; //captura dos valores do formulário

    const nome = form.nome.value.trim(); //captura o valor do campo nome //trim remove os espaços em branco

    const idade = form.idade.value.trim(); //captura o valor do campo idade

    const mensagem = `Olá, meu nome é ${nome} e minha idade é ${idade} anos.`; //monta a mensagem de saudação

    const resultadoDiv = document.getElementById('resultado'); //captura a div onde será exibido o resultado

    resultadoDiv.textContent = mensagem; //exibe a mensagem na div resultado
}