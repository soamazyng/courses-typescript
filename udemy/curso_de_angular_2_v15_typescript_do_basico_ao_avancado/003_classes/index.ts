namespace Classes {
  abstract class Olhos {
    abstract cor: string;

    public abstract corDosOlhos(cor: string): string;
  }

  interface IPessoa {
    altura: string;
  }

  class Pessoa extends Olhos implements IPessoa {
    private _nome: string;
    private _idade: number;
    altura: string;

    constructor(nome: string, idade: number, altura: string) {
      super();
      this._nome = nome;
      this._idade = idade;
      this.altura = altura;
    }

    public comer(comida: string): string {
      return `${this.nome} está comendo ${comida}`;
    }

    get nome() {
      return this._nome;
    }

    set nome(nome: string) {
      this._nome = nome;
    }

    get idade() {
      return this._idade;
    }

    set idade(idade: number) {
      this._idade = idade;
    }

    // abstract class

    public corDosOlhos(cor: string): string {
      return `a sua cor dos olhos é ${cor}`;
    }

    cor: string = "castanho";
  }

  class ContaCorrente extends Pessoa {
    private _saldo: number;
    private readonly _limite: number;

    constructor(nome: string, idade: number, altura: string, saldo: number) {
      super(nome, idade, altura);
      this._saldo = saldo;
      this._limite = 100;
    }

    set saldo(saldo: number) {
      this._saldo = saldo;
    }

    get saldo() {
      return this._saldo;
    }

    get limite() {
      return this._limite;
    }
  }

  class Utils {
    static cloneObject(object: Array<{}>): Array<{}> {
      return JSON.parse(JSON.stringify(Object.assign(object)));
    }
  }

  const pessoa1 = new Pessoa("teste", 10, "1.80");

  console.log(pessoa1);
  console.log(pessoa1.nome);
  console.log(pessoa1.idade);

  console.log(pessoa1.comer("arroz"));

  console.log("--------------------------------------------------");

  const pessoa2 = new ContaCorrente("teste", 10, "1.80", 100);

  console.log(pessoa2);
  console.log(pessoa2.corDosOlhos("azul"));

  console.log("--------------------------------------------------");

  const tenis: { tamanho: number; cor: string } = {
    tamanho: 10,
    cor: "azul",
  };

  // exemplo static
  console.log(Utils.cloneObject([pessoa1, pessoa2, tenis]));

  console.log("--------------------------------------------------");

  // exemplo interface sem classe
  interface ICarro {
    cor: string;
    modelo: string;
    ano: number;
    enabled(): boolean;
  }

  const carro: ICarro = {
    cor: "teste",
    modelo: "teste",
    ano: 2020,
    enabled: () => true,
  };

  console.log(carro);
}
