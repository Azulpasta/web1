let x=10;
const y=20;
var z=30;

if (true) {
    let x=100; // diferente do x global
    var z=300; // substitui z global
    const y=200; // diferente do y global
    console.log("Dentro do bloco: ", x, y, z);
}
console.log("Fora do bloco: ", x, y, z);