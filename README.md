<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://user-images.githubusercontent.com/53301430/73714014-4579ea80-46ee-11ea-9c34-da7069b1265c.png" width="300px" />
</h1>

<p align="center">“Simples! É você que controla a sua mente, se você acreditar e lutar pelo que quer, você conseguirá atingir tudo o que pretende.”</blockquote>

<p align="center">
  <img alt="GitHub count languages" src="https://img.shields.io/badge/languages-3-brightgreen" />
  <img alt="Made by Wallace Ferreira" src="https://img.shields.io/badge/made%20by-Wallace%20Ferreira-green" />
  <img alt="Licence by MIT" src="https://img.shields.io/badge/license-MIT-green" />
</p>

## :rocket: Sobre o Bootcamp
O bootcamp da Rocketseat é composto por fases e módulos. Cada módulo é realizado um desafio para fixação do conteúdo apresentado.

## Instalação
Antes de prosseguir é necessário alguns passo para o projeto funcionar. Após baixar o reposótorio, acesse a pasta e digite no terminal: 
```sh
# npm
$ npm i
# yarn
$ yarn
```
## API
Para que o Front-end funcione corretamente, é necessário instalar a api para o consumo dos dados. [Clique aqui](https://github.com/wallace-sf/bootcamp-gostack-fastfeet-api) para instalar

Crie um container no Docker utilizando uma imagem do PostgreSQL. Para baixar o programa [clique aqui.](https://www.docker.com/products/docker-desktop)
```sh
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Crie outro container utilizando uma imagem do MongoDB:
```sh
$ docker run --name mongobarber -d -t mongo
```

## Scripts
Para iniciar o projeto digite:
```sh
# npm
$ npm start

# yarn
$ yarn start
```

