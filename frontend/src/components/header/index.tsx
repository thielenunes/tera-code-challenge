import React from 'react';

import { useGlobalContext } from '../../context';

import {
  Container,
} from './style';

export function Header(){
  const { theme, setTheme } = useGlobalContext();

  function handleChangeTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <Container>
      <h1>Livraria do cowboy</h1>
      {theme === 'light' 
        ? (
          <button onClick={() => handleChangeTheme('dark')}>
            Dark 
          </button>
        ) : (
          <button onClick={() => handleChangeTheme('light')}>
            Light 
          </button>
        )
      }
    </Container>
  );
}