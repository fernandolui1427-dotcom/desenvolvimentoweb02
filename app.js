"use strict";

/* =====================================================================
   BLOCO 1 – FUNDAMENTOS E VARIÁVEIS
   ===================================================================== */
console.log("===== BLOCO 1 – FUNDAMENTOS E VARIÁVEIS =====");

// 1.1 let: valor pode ser reatribuído
let pontos = 50;
pontos += 10; // adiciona 10 na linha seguinte
console.log("Pontos:", pontos); // 60

// 1.2 const: não pode ser reatribuída
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // gera TypeError
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  // Motivo: 'const' cria uma ligação (binding) imutável. Depois de
  // inicializada, o identificador não pode apontar para outro valor.
}

// 1.3 Tipos primitivos e typeof
const texto = "Olá, JavaScript";
const numero = 42;
const verdadeiro = true;
let indefinida; // sem valor => undefined
const nula = null;

console.log("typeof string:   ", typeof texto);       // "string"
console.log("typeof number:   ", typeof numero);      // "number"
console.log("typeof boolean:  ", typeof verdadeiro);  // "boolean"
console.log("typeof undefined:", typeof indefinida);  // "undefined"
console.log("typeof null:     ", typeof nula);        // "object" (bug histórico da linguagem!)

// 1.4 Template Literals vs concatenação
const nome = "Ana";
const idade = 20;

const fraseTemplate = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
const fraseConcatenada = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";

console.log("Template Literal:", fraseTemplate);
console.log("Concatenação:    ", fraseConcatenada);
console.log("Resultados iguais?", fraseTemplate === fraseConcatenada); // true

/* =====================================================================
   BLOCO 2 – FUNÇÕES
   ===================================================================== */
console.log("\n===== BLOCO 2 – FUNÇÕES =====");

// 2.1 Função declarada: sofre hoisting (pode ser chamada antes da declaração)
console.log("Hoisting (declarada) – ehMaiorDeIdade(20):", ehMaiorDeIdade(20)); // true

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log("ehMaiorDeIdade(15):", ehMaiorDeIdade(15)); // false

// 2.2 Função de expressão: NÃO sofre hoisting utilizável
try {
  console.log(ehMaiorDeIdadeExpressao(20)); // ReferenceError
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  // A const existe no escopo, mas está na "zona morta temporal" (TDZ)
  // até a linha da declaração ser executada.
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log("Depois da declaração – ehMaiorDeIdadeExpressao(18):", ehMaiorDeIdadeExpressao(18)); // true

// 2.3 dobro em três formas
function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2; // forma curta: retorno implícito

console.log("dobroDeclarada(4):", dobroDeclarada(4)); // 8
console.log("dobroExpressao(4):", dobroExpressao(4)); // 8
console.log("dobroArrow(4):    ", dobroArrow(4));     // 8

// 2.4 Parâmetro com valor padrão
const dobroPadrao = (n = 1) => n * 2;

console.log("dobroPadrao(5):", dobroPadrao(5)); // 10
console.log("dobroPadrao():", dobroPadrao());   // 2 (usa n = 1)

/* =====================================================================
   BLOCO 3 – CONTROLE DE FLUXO
   ===================================================================== */
console.log("\n===== BLOCO 3 – CONTROLE DE FLUXO =====");

// 3.1 classificarNota com if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 7:", classificarNota(7)); // Aprovado
console.log("Nota 6:", classificarNota(6)); // Aprovado
console.log("Nota 4:", classificarNota(4)); // Reprovado

// 3.2 switch com corSemaforo
const corSemaforo = "amarelo";

switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3.3 Tabuada do 5 com for
console.log("\nTabuada do 5 (for):");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 3.4 Contagem regressiva com while
console.log("\nContagem regressiva (while):");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--; // condição de parada: evita loop infinito
}

// 3.5 Par ou ímpar de 1 a 20 – com for
console.log("\nPar ou ímpar (for):");
for (let n = 1; n <= 20; n++) {
  console.log(`${n} é ${n % 2 === 0 ? "par" : "ímpar"}`);
}

// 3.5 Par ou ímpar de 1 a 20 – com while
console.log("\nPar ou ímpar (while):");
let m = 1;
while (m <= 20) {
  console.log(`${m} é ${m % 2 === 0 ? "par" : "ímpar"}`);
  m++;
}

// 3.6 diaDaSemana com switch
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido (use de 1 a 7)";
  }
}

console.log("\nDia da semana:");
console.log("diaDaSemana(1):", diaDaSemana(1)); // Domingo
console.log("diaDaSemana(4):", diaDaSemana(4)); // Quarta-feira
console.log("diaDaSemana(7):", diaDaSemana(7)); // Sábado
console.log("diaDaSemana(9):", diaDaSemana(9)); // inválido