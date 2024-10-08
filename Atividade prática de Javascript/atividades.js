function atividade1() {
  console.log(" == ATIVIDADE 1 == ");

  const readline = require("readline-sync");

  let nota1 = readline.questionFloat("Digite a primeira nota: ");
  let nota2 = readline.questionFloat("Digite a segunda nota: ");
  let nota3 = readline.questionFloat("Digite a terceira nota: ");
  let nota4 = readline.questionFloat("Digite a quarta nota: ");

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  console.log("A média das notas é: " + media);
}

function atividade2() {
  console.log(" == ATIVIDADE 2 == ");

  const readline = require("readline-sync");

  let salarioAumento, salarioFinal, descINSS;
  let nome = readline.question("Informe seu nome");
  let salarioInicial = readline.questionFloat(
    "Olá, " + nome + "! Informe seu salário base: R$"
  );

  salarioAumento = salarioInicial + salarioInicial * 0.2;
  salarioFinal = salarioAumento - salarioAumento * 0.08;
  descINSS = salarioAumento - salarioFinal;

  console.log("##");
  console.log("##");

  console.log(" == CALCULO INSS ==");
  console.log("-> Salário inicial: R$" + salarioInicial);
  console.log("-> Aumento de 20%: R$" + salarioAumento);
  console.log("-> Salário final com desconto INSS: R$" + salarioFinal);
  console.log("**Valor do desconto: R$" + descINSS);
}

function atividade3() {
  console.log(" == ATIVIDADE 3 == ");

  const readline = require("readline-sync");

  let alunos = [];
  let op = true;

  while (op) {
    let nome = readline.question("Informe o nome do aluno: ");
    let matricula = readline.question("Informe a matrícula do aluno: ");
    let nota1 = readline.questionFloat("Informe a primeira nota: ");
    let nota2 = readline.questionFloat("Informe a segunda nota: ");

    let media = (nota1 + nota2) / 2;

    let aluno = {
      nome: nome,
      matricula: matricula,
      nota1: nota1,
      nota2: nota2,
      media: media,
    };
    alunos.push(aluno);

    op = readline.question("Deseja adicionar mais um aluno? (s/n): ").toLowerCase() === "s";
  }

  console.log("\n == MÉDIA == ");

  let somaMedias = 0;
  alunos.forEach((aluno, index) => {
    console.log(`Aluno ${index + 1}:`);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Matrícula: ${aluno.matricula}`);
    console.log(`Nota 1: ${aluno.nota1}`);
    console.log(`Nota 2: ${aluno.nota2}`);
    console.log(`Média: ${aluno.media.toFixed(2)}\n`);

    somaMedias += aluno.media;
  });

  let mediaGeral = somaMedias / alunos.length;
  console.log(`MÉDIA GERAL DA TURMA: ${mediaGeral.toFixed(2)}`);
}

function atividade4() {
  console.log(" == ATIVIDADE 4 == ");

  const readline = require("readline-sync");

  let quantPequeno, quantMedio, quatGrande;

  let valorTotalPeq, valorTotalMed, valorTotalGra, valorTotalVenda;

  console.log(" =============== NOVA VENDA ===============");
  console.log("Informe a quantidade de camisetas por tamanho:");
  quantPequeno = readline.questionInt("- PEQUENO (R$10/un): ");
  quantMedio = readline.questionInt("- MÉDIO (R$12/un): ");
  quatGrande = readline.questionInt("- GRANDE (R$15/un): ");

  valorTotalPeq = quantPequeno * 10;
  valorTotalMed = quantMedio * 12;
  valorTotalGra = quatGrande * 15;

  valorTotalVenda = valorTotalPeq + valorTotalMed + valorTotalGra;

  console.clear();

  console.log(" =============== NOVA VENDA ===============");
  console.log(" - P: R$" + valorTotalPeq);
  console.log(" - M: R$" + valorTotalMed);
  console.log(" - G: R$" + valorTotalGra);
  console.log("Valor total arrecadado: R$" + valorTotalVenda);
}

function atividade5() {
  console.log(" == ATIVIDADE 5 == ");

  const readline = require("readline-sync");

  let totalConta = readline.questionFloat("Qual o valor total da conta? R$");

  let pagamentoCarlosAndre = parseInt(totalConta / 3);
  let pagamentoFelipe = totalConta - parseFloat(pagamentoCarlosAndre * 2);

  console.log(" == CONTA == ");
  console.log("Carlos: R$" + pagamentoCarlosAndre.toFixed(2));
  console.log("André: R$" + pagamentoCarlosAndre.toFixed(2));
  console.log("Felipe: R$" + pagamentoFelipe.toFixed(2));
}

module.exports = { atividade1, atividade2, atividade3, atividade4, atividade5 };
