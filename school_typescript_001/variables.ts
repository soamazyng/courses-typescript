var car:string = "ferrari";

function getCar(value:string):string{
  var car = value;
  return car;
}

console.log(getCar("Camaro"));

function testA(){
  var a = 1;
  a=2;
  var b = testB();
  a=3;
  return b;

  function testB(){
    return a;
  }
}

console.log(testA());

function f(value:boolean){
  let a = 100;
  if(value){
    let b = a + 1;
  }
  //return b;

}

function g(condition:boolean, x:number) : number{
  if(condition){
    let x = 100;
    //return x;
  }
  return x;
}

console.log(g(true,0));

