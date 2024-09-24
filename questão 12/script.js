const anoAtual = Number(prompt("qual o ano atual?"));
const mesAtual = Number(prompt("qual o mes atual?"));
const idade = Number(prompt("qual sua idade?"));
const mesesAteAniversario = Number(
  prompt(
    "Quantos meses faltam para seu mês de aniversário. Por exemplo, se é fevereiro (2) e você faz aniversário em abril (4), faltam 2 meses até o seu aniversário). Utilize um número negativo caso o mês do seu aniversário já tenha passado (por exemplo, se é junho (6) e você fez aniversário em fevereiro (`2`), a entrada deve ser -4."
  )
);
let anoNascimento = anoAtual - idade;
let mesNascimento = 0;
if (mesesAteAniversario > 0) {
  mesNascimento = mesAtual + mesesAteAniversario;
} else {
  mesNascimento = mesAtual - mesesAteAniversario;
}
alert(
  `o ano de nascimento é ${anoNascimento} e o mes de nascimento é ${mesNascimento}`
);
