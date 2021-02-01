# Tera Code Challenge - Fullstack

Olá, bora pro desafio? :dancers:

O nosso desafio proposto é uma aplicação de uma livraria, composto de uma API, um FrontEnd e um banco de dados, usando o design da aplicação que está aqui no repositório. A stack deve ser Nodejs e Vuejs. 

O teste precisa estar hospedado em algum lugar (ex: Firebase, Heroku, Github Hosting, etc...).

Vou separar a explicação em partes pra ficar mais fácil: **Banco de Dados**, **Funcionalidades do App**, **Funcionalidades por página**, **Avaliação** e **Como entregar**.


## Banco de Dados

Aqui no repositório, tem um arquivo chamado, ```db.json``` para que você possa ter acesso aos dados dos livros

[https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge](https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge)

Esse é o schema dos objetos:

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


Listar todos os livros

Atualizar um livro

Adicionar um livro

Remover um livro

Curtir, o gerenciamento desse estado deve ser feito localmente.

Dark Mode, clicável ali na Navbar.


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
- Páginação da listagem
- Curtir um livro (clique no coração)


### Página de Formulário

Na tela de formulário temos as seguintes funcionalidades:

- Botão de Voltar
- Curtir um livro (clique no coração)

No caso de um livro novo

- Adicionar um livro

No caso de um livro já existente

- Atualizar um livro
- Remover um livro (caso seja essa rota)


## Avaliação

A avaliação vai ser feita no todo do que for entregue, mas existem alguns pontos que vão chamar mais atenção.

- Organização do código
  - Como você pensou e organizou seu código, desde a estrutura das pastas até o código escrito.
- Resiliência da aplicação
  - Não importa até onde você conseguiu chegar, o que importa é que o seu entregavel esteja funcionando sem quebrar e com qualidade.
- Compartilhamento de código
  - Conseguir usar códigos compartilhados entre o backend e o frontend.

Apreciamos também:

- Fidelidade com o Design proposto


## Como entregar

Pedimos para que você crie um Fork desse repositório e faça um pull request com o código e com um README.md descrevendo que tenha a url de onde acessar seu app

Desejamos boa sorte, e muito obrigado!
