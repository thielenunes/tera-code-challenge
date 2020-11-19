# Tera Code Challenge

Olá, bora pro desafio? :dancers:

O nosso desafio proposto é uma aplicação de uma livraria.

Neste design do Figma [aqui]()

## O Desafio


Vou separar a explicação em partes pra ficar mais fácil: Funcionalidades do App, Funcionalidades por página, Integração, Avaliação e Como entregar.


## Funcionalidades do App


Dark Mode, clicável ali na Navbar.

Like, a iteração com ele deve ser feita localmente.


## Funcionalidades por Página


Temos só duas páginas neste desafio, página de Listagem, a de Descrição.


### Página de Listagem

Na tela de listagem temos as seguintes funcionalidades:

- Listagem dos Livros
- Pesquisa por Nome
- Filtros de pesquisa:
  - Melhores Avaliados
  - Em estoque
  - Ordem Alfabética
  - Livros curtidos (Os que você deu curtiu)
  - Por categoria* (abre outro input para pesquisar por nome da categoria)
- Páginação da listagem
- Curtir um livro (clique no coração)


### Página de Descrição

Na tela de descrição temos as seguintes funcionalidades:

- Botão de Voltar
- Curtir um livro (clique no coração)

## Integração

Liberamos uma API para que vocês possam consumir e ter acesso aos livros

[https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge](https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge)

Ela só aceita GET e retorna um Array de objetos, esse é o schema do objeto:

```
{
  "name": String,
  "author": String,
  "description": String, 
  "cover_picture": String,
  "category": String,
  "stock": Integer,
  "users_who_liked": Array
}
```


## Avaliação

A avaliação vai ser feita no todo do que for entregue, mas existem alguns pontos que vão chamar mais atenção.

- Componentização
- Organização do código
- Resiliência da aplicação

Apreciamos também:

- Transições
- Fidelidade com o Design proposto

## Como entregar

Pedimos para que vocês clonem esse repositório e façam um pull request com o código, com um README.md com como rodar o projeto

Desejamos boa sorte, e muito obrigado!
