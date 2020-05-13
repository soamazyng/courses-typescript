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
