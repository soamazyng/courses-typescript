class Car{

  constructor(
        public name:string, 
        public color:string, 
        public power:number
  ){};

  printCar():void{
    console.log(this.name, this.color, this.power);
  }

}

var camaro = new Car("Camaro", "Blue", 45);
camaro.printCar();

class Car2{

  private _name:string;
  private _color:string;
  private _power:number;
  public static list:Array<string> = ["jay"];

  get name():string{
    return this._name
  }

  set name(value:string){
    this._name = value;
  }

  constructor(name:string, color:string, power:number){
    
    this._name = name;
    this._color = color;
    this._power = power;
    Car2.list.push(name);

  };  

}

var ferrari = new Car2("Ferrari", "Red", 50);
console.log(ferrari);
console.log(Car2.list);

var camaro2 = new Car2("Camaro2", "Black", 56);
console.log(Car2.list);

ferrari.name = "Jay1111";
console.log(ferrari);