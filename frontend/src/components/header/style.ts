import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.header };
  color: ${({ theme }) => theme.text_secondary };
  > h1 {
    font-weight: 500;
    font-size: 2rem;
  }
  > button {
    color: ${({ theme }) => theme.text_secondary };
    border: 0;
    background: none;
    padding: 0.5rem;
    font-size: 1rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.5);
    }
  }
  @media(max-width: 720px) {
    padding: 1rem 1.5rem;
    > h1 {
      font-size: 1.4rem;
    }
  }
`;