# Anotações Gerais

## Dependência de todo o projeto com TypeScript

Instalar o próprio Typescript.

```
yarn add typescript -D
```

## Habilitando as configurações do Typescript

Todo projeto Typescript precisa de um arquivo de configurações na raíz do projeto que vai traduzir toda a forma de compilação do typescript.

Para criar um arquivo de configuração de forma rápida.

```
yarn tsc --init
```

Ao fazer esta configuração para rodar projetos Typescript basta utilizar o comando

```
yarn tsc
```

## Pacotes de declaração de tipos

Quando você não utiliza o Typescript e importa um módulo de forma automática o VSCode sugere as funções que tem para cada módulo.

Exemplo com Express

Ao digitar app. ele vai sugerir algumas funções.

Isso quem faz é o VSCode.

Porém, a partir do momento que você for utilizar o Typescript o VSCode perde esta opção de sugestão, mas agora ao importar um módulo ele mostra três pontos brancos perto do nome do módulo importado sugerindo qual o pacote de declaração que você deve instalar no projeto para que as sugestões voltem a funcionar dentro do VSCode.

Isso serve para todos os pacotes que forem instalados dentro do VSCode.

Esta instalação sempre deve ser feita como dependência de *desenvolvimento* de @types/NOME DO PACOTE.

Exemplo utilizando os tipos do Express

```
yarn add -D @types/express
```

## Rodando o projeto

Com o arquivo de configurações na raiz do projeto

```
yarn tsc
```


