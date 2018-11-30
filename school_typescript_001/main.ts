var test:boolean = true;
var id:number = 2;

var decimal:number = 5.4;
var hex:number = 0xf00d;
var binary:number = 0b1010;
var octal: number = 0o744;

var nome:string = "J";
var text = ` <p> Nome: ${nome} </p>`;

document.body.innerHTML = text;

var fruits:string[] = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);

var fruits2:Array<string> = ["Apple", "Watermelon", "Lemon"];

enum Color {Red=1,Green,Blue};

console.log(Color[2]);

// any traz a flexibilidade do javascript, não tipando a variável
var list:any = 23;
console.log(list);
list = "23";

// :void diz que a função não retorna nada
function printNumber(num:number) : void {
  alert(num)
}

printNumber(32);