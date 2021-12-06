import { useEffect, useState } from 'react';
import { Container, Content } from './style';
import { useGlobalContext } from '../../context';
import { Header } from '../../components/header';
import { Book } from '../../components/book';


type BooksData = {
  author: string;
  category: string;
  cover_picture: string;
  description: string;
  name: string;
  stock: number;
  users_who_liked: string[];
}

type BooksDataFormatted = BooksData & {
  me_like: boolean;
}

export function Home() {
  let [searchBooks, setSearchBooks] = useState<BooksDataFormatted[]>([]);
  let [isCategoryFilter, setIsCategoryFilter] = useState(false);
  let [totalBooks, setTotalBooks] = useState(0);


  let { booksFormatted } = useGlobalContext();

  useEffect(() => {
    let allBooks = [...booksFormatted];
    
    let firstPageItems = allBooks.slice(0, 8);
    
    setSearchBooks(firstPageItems);
    setTotalBooks(booksFormatted.length);
  }, [booksFormatted]);

  function handleSearch(search: string, type: string) {
    if (type === 'name') {
      if (search !== '') {
        const filteredResults = booksFormatted.filter(
          book => (book.name.toLowerCase()).includes(search.toLowerCase())
        );
    
        setSearchBooks(filteredResults);
        setTotalBooks(filteredResults.length);
      } else {
        setSearchBooks(booksFormatted);
        setTotalBooks(booksFormatted.length);
      }
    }

    if (type === 'category') {
      if (search !== '') {
        let filteredResults = booksFormatted.filter(
          book => (book.category.toLowerCase()).includes(search.toLowerCase())
        );
    
        setSearchBooks(filteredResults);
        setTotalBooks(filteredResults.length);
      } else {
        setSearchBooks(booksFormatted);
        setTotalBooks(booksFormatted.length);
      }
    }
  }

  function handleFilter(filterValue: string) {
    let allBooks = [...booksFormatted];

    switch(filterValue) {
      
      case 'stock': 
      let stockFiltered = allBooks.filter(book => book.stock > 0);

      let stockSort = stockFiltered.sort((a, b) => {
          return a.stock > b.stock ? -1 
            : a.stock < b.stock ? 1 : 0;
        });

        setSearchBooks(stockSort);
        setIsCategoryFilter(false);
        setTotalBooks(stockSort.length);
        break;
      case 'alfabetic': 
      let alfabeticSort = allBooks.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });

        setSearchBooks(alfabeticSort);
        setIsCategoryFilter(false);
        setTotalBooks(alfabeticSort.length);
        break;
      
      case 'categories': 
        setSearchBooks(booksFormatted);
        setIsCategoryFilter(true);
        setTotalBooks(booksFormatted.length);
        break;
      default:
        setSearchBooks(booksFormatted);
        setIsCategoryFilter(false);
        setTotalBooks(booksFormatted.length);
    }
  }

  return (
    <Container>
      <Header />
      <header>
        <input 
          placeholder="Procure por um livro"
          onChange={e => handleSearch(e.target.value, 'name')}
          disabled={isCategoryFilter}
        />

        <div>
          {isCategoryFilter && (
            <input 
              placeholder="Nome da Categoria"
              onChange={e => handleSearch(e.target.value, 'category')}
              autoFocus
            />
          )}

          <select onChange={e => handleFilter(e.target.value)}>
            <option value="none">Filtros</option>
            <option value="stock">Em estoque</option>
            <option value="alfabetic">Ordem Alfabética</option>
            <option value="categories">Por Categoria</option>
          </select>
        </div>
      </header>

      <section>Total: {totalBooks}</section>

      <Content>
        <div>
          {searchBooks.map(book => (
            <Book
              key={book.name}
              author={book.author}
              category={book.category}
              cover_picture={book.cover_picture}
              name={book.name} me_like={false}            />
          ))}
        </div>
      </Content>
</Container>
      
  );
}