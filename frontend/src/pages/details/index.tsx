import { Link } from 'react-router-dom';
import { FiChevronLeft} from 'react-icons/fi';
import { Container} from './style';
import { Header } from '../../components/header';


export function Details(){ 

  return (
    <Container>
      <Header />
      <Link to="/">
        <FiChevronLeft />
        <p>Voltar</p>
      </Link>
      //colocar a pag da descrição do livro aqui
      
    </Container>
  );
}