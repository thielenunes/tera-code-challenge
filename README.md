# Tera Code Challenge

Olá, bora pro desafio? :dancers:

O nosso desafio proposto é uma aplicação de uma livraria, com o design da aplicação que mandei no email, que deve ser feito com Vuejs.

Vou separar a explicação em partes pra ficar mais fácil: **Integração**, **Funcionalidades do App**, **Funcionalidades por página**, **Avaliação** e **Como entregar**.


## Integração

Liberamos uma API para que você possa consumir e ter acesso aos livros

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
  "users_who_liked": Array<String>
}
```

## Funcionalidades do App


Dark Mode, clicável ali na Navbar.

Curtir, o gerenciamento desse estado deve ser feito localmente.


## Funcionalidades por Página


Temos só duas páginas neste desafio, página de Listagem, a de Descrição.


### Página de Listagem

Na tela de listagem temos as seguintes funcionalidades:

- Listagem dos Livros
- Pesquisa por Nome
- Filtros de pesquisa:
  - Melhores Avaliados (Com mais curtir)
  - Em estoque
  - Ordem Alfabética
  - Livros curtidos (Os que você deu curtir)
  - Por categoria* (abre outro input para pesquisar por nome da categoria)
- Páginação da listagem
- Curtir um livro (clique no coração)


### Página de Descrição

Na tela de descrição temos as seguintes funcionalidades:

- Botão de Voltar
- Curtir um livro (clique no coração)


## Avaliação

A avaliação vai ser feita no todo do que for entregue, mas existem alguns pontos que vão chamar mais atenção.

- Componentização
  - A maneira em que as peças do sistema foram pensadas e abstraidas.
- Organização do código
  - Como você pensou e organizou seu código, desde a estrutura das pastas até o código escrito.
- Resiliência da aplicação
  - Não importa até onde você conseguiu chegar, o que importa é que o seu entregavel esteja funcionando sem quebrar e com qualidade.

Apreciamos também:

- Transições
  - Deixe a livraria bonita, como se fosse sua :sunglasses:
- Fidelidade com o Design proposto

## Como entregar

Pedimos para que você crie um Fork desse repositório e faça um pull request com o código e com um README.md descrevendo como rodar o projeto

Desejamos boa sorte, e muito obrigado!
