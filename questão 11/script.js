let valorDoProduto = Number(prompt("Digite o valor do produto:"));

let isPromocao = prompt("O produto está em promoção? (Sim/Não)").toLowerCase();

isPromocao = isPromocao === "sim" ? true : false;

let categoria;

if (valorDoProduto < 200 && !isPromocao) {
  categoria = "Barato";
} else if (valorDoProduto >= 200 && valorDoProduto <= 3000 && isPromocao) {
  categoria = "Moderado";
} else if (valorDoProduto > 3000)
  alert(`A categoria do produto é: ${categoria}`);
