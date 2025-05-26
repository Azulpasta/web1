const soma = 

function (a, b){
    return a + b;
};

console.log(soma(5, 9));

const multiplica = (a, b) => {
    return a * b;
}
console.log(multiplica(5, 9));



const pessoa = {
    nome: 'Pedro',
    idade: 18,
    profissao: 'estudante',
    saudar: function() {
        return `Oi, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
    
}
console.log(pessoa.nome);
console.log(pessoa.saudar());

