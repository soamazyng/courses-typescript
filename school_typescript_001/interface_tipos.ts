interface IPerson{
  name:string;
  age:number;
}

function person (value:IPerson):void{
  console.log(value);
}

person({
  name: "J",
  age: 33
});

function person2(name:string, age:number):IPerson{
  return {name:name, age:age};
}