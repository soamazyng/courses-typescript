## Instalação

```bash
$ npm i typescript -g

# or, using Yarn:
$ yarn global add typescript
```

## Criar arquivo de configuração

Depois é necessário ter o arquivo de configurações na pasta que quero o projeto Typescript, desta forma cria-se um arquivo chamado tsconfig.json

```bash
tsc --init
```

## Execução manual

Para executar um arquivo typescript basta digitar no terminal

```bash
tsc nomedoarquivo.ts
```

Desta forma será criado um arquivo Javascript e para executar o arquivo javascript utilizar o Node.

```bash
node nomedoarquivo.js
```

## Monitorar os arquivos alterados .TS

```bash
tsc -w
```

Instalando o Lite-server

Após instalar o package.json na pasta, basta instalar

```bash
yarn add -D lite-server
```

Dentro do package.json criar um comando start com o seguinte comando:

```bash
"start": "lite-server"
```

Depois basta digitar no terminar: `yarn start`

## Opções interessantes para configurar no arquivo tsconfig.json

```json
"noEmitOnError": true,
```
Habilitando esta opção se o seu código TS tiver algum bug ele não compila ***nada***.

```json
"sourceMap": true,
```

Habilita o map do código typescript, utilizado para debug tanto dentro do navegador como no Visual Studio Code.

## Constructor
Quando você está herdando uma class que já tem um construtor, dentro do construtor herdado é preciso chamar uma função chamada: ***super();*** desta forma tudo que está no constructor da classe pai vai ser chamado na classe filho.
