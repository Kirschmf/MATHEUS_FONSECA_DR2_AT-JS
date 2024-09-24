let idade = Number(prompt("Digite sua idade:"));

// Solicita se o usuário é premium e converte para booleano
let isPremium = prompt("Você é um membro premium? (Sim/Não)").toLowerCase();

if (isPremium === "sim") {
  isPremium = true;
} else if (isPremium === "não") {
  isPremium = false;
} else {
  console.error(
    "Erro: Resposta inválida. Responda apenas usando 'Sim' ou 'Não'."
  );
  throw new Error("Programa finalizado devido a entrada inválida.");
}

let isAcessoConcedido = idade >= 21 && isPremium ? true : false;
console.log(isAcessoConcedido);
