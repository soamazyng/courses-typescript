// string type
let pedido = "teste";

// array type
let array1: [string, string] = ["teste", "teste2"];

let array2: Array<string | number> = ["teste", "teste2", 123];

// union types
let nota: number | string = 10;
nota = "10";

// object type
let obj: { sobrenome: string } = { sobrenome: "Benedicto" };

let obj1: Array<{ nome: string; sobrenome: string; idade: number }> = [
  {
    nome: "teste",
    sobrenome: "teste",
    idade: 10,
  },
  {
    nome: "teste2",
    sobrenome: "teste1",
    idade: 11,
  },
];

console.log(array1);
console.log(array2);
console.log(obj);
console.log(obj1);
console.log(`Minha nota é ${nota}`);

// Never
// Utilizado para ficar em loop que só vão parar se der erro
const error = (): never => {
  throw new Error("Erro");
};

const loop = (): never => {
  while (true) {
    console.log("loop");
  }
};

// aliases
// podemos apelidar os types e utilizar em outros lugares
type alphanumeric = string | number;

let teste: alphanumeric = 10;
let teste1: alphanumeric = "teste";

console.log(teste);
console.log(teste1);

// String Literal Types
// podemos definir o valor que a string pode ter
let mouseEvent: "click" | "dblclick";
mouseEvent = "click";

// optional
// podemos definir que o atributo é opcional
const fn = (nome: string, idade?: number): string => {
  if (!idade) return `Meu nome é ${nome}`;

  return `Meu nome é ${nome} e minha idade é ${idade}`;
};

const pessoa: { nome: string; idade?: number } = { nome: "Jaqueline" };

console.log(fn("Jaqueline", 10));
console.log(fn("Jaqueline"));
console.log(pessoa);

// Enums

enum Emes {
  Janeiro = "JAN",
  Fevereiro = "FEV",
  Marco = "MAR",
  Abril = "ABR",
}

console.log(Emes);

enum Emes2 {
  Ferereiro,
  Marco,
}

console.log(Emes2);
