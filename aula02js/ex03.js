function saudacao(){
    return "Pedro!";
}

console.log("ola, " +saudacao()+ " Seja bem vindo!");


function saudacao2(nome){
    return "ola, " + nome + " Seja bem vindo!";
}
console.log(saudacao2("Pedro"));



function operacao(a, b){

    console.log("soma: " + (a + b));
    console.log("subtracao: " + (a - b));   
    console.log("multiplicacao: " + (a * b));
    console.log("divisao: " + (a / b));
    console.log("resto: " + (a % b));
    console.log("potencia: " + (a ** b));
}
operacao(10, 20);