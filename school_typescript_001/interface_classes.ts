interface ICountString{
  valueTxt:string;
  countTxt():number;
}

interface IPrintTxt{
  print(value:string):void;
}

class MyText implements ICountString,IPrintTxt{

  constructor(public valueTxt:string){};  

  print(value: string): void {
    console.log(`Valor: ${value}`);
  }
  
  countTxt(): number {
    return this.valueTxt.length
  };

}

var t = new MyText("jay")
console.log(t.countTxt());
t.print("Test");

interface ICarString{
  name:string;
  getCar():string
}

interface ICarColor{
  color:string;
  getColor():string;
}

interface ICar extends ICarString, ICarColor{
  power:number;
  getPower():number;
}

class NewCar implements ICar {

  constructor(public name:string, public color:string, public power:number){};

  getPower(): number {
    return this.power
  }  
  getCar(): string {
    return this.name
  }
  
  getColor(): string {
    return this.color
  }

}

var Camaro = new NewCar("Camaro", "RED", 45);

console.log(Camaro.getCar(), Camaro.getColor(), Camaro.getPower());

