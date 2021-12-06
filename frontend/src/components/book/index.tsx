import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
//biblioteca de icones que o Fe indicou, o FI é o nome dela e o {fiheart} o id do icone coração

import {  Container, } from './style';
// importar o botão da pagina de estilo 




type BooksData = {
  author: string;
  category: string;
  cover_picture: string;
  name: string;
  users_who_liked?: string[];
  me_like: boolean;
}
// infos do desafio para o get, fe deu a dica do boleando v/f para o curtido pq ou é curtido ou não
// coloicar o "me_like" como uma boleando pq é um y/n
export function Book({
  author,
  category,
  cover_picture,
  name,
  
}: BooksData){
//o get

 

  return (
    <Container>
      <Link to={`/details/${name}`}>
        <div>
          <img src={cover_picture} alt={name}/>
        </div>
      </Link>
 
      <section>
        <div>
          <h1>{name}</h1>
          <h2>{author}</h2>
          <h3>{category}</h3>
        </div>

        
      </section>
    </Container>
  );
}

//botão de like ta sumindo no dark mode não sei pq caralhos