let numeroCentro = Number(prompt("Digite um número"));
let distancia = Number(prompt("Digite outro número"));

let random =
  Math.floor(Math.random() * (distancia * 2 + 1)) + (numeroCentro - distancia);
console.log(random);

