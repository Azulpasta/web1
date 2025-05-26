function saudar() {
        const nome = document.getElementById('nome').value.trim();
        const idade = document.getElementById('idade').value.trim();


        if(nome && idade){

            document.getElementById('mensagem').innerText = `Olá meu nome é ${nome} e eu tenho ${idade} anos.`;


        }
        else{
            document.getElementById('mensagem').innerText = 'Preencha todos os campos.';
        }
}

function calcular(){
    soma.value = parseInt(valor1.value) + parseInt(valor2.value);
}