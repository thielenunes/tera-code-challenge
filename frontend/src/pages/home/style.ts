import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 3rem 1rem;
    > input {
      padding: 0.5rem 1rem;
      width: 25rem;
      background: ${({ theme }) => theme.input };
      color: ${({ theme }) => theme.text };
      border: 1px solid ${({ theme }) => theme.text};
      &::placeholder {
        color: ${({ theme }) => theme.text };
      }
      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
    > div {
      > input {
        padding: 0.5rem 1rem;
        width: 15rem;
        background: ${({ theme }) => theme.input };
        color: ${({ theme }) => theme.text };
        margin-right: 1rem;
        border: 1px solid ${({ theme }) => theme.text};
        &::placeholder {
          color: ${({ theme }) => theme.text };
        }
      }
      > select {
        padding: 0.5rem;
        width: 7.5rem;
        background: ${({ theme }) => theme.input };
        color: ${({ theme }) => theme.text };
        border: 1px solid ${({ theme }) => theme.text};
      }
    }
  }
  > section {
    width: 100%;
    padding: 1rem 3rem 0;
    color: ${({ theme }) => theme.text_terciary };
  }
  @media(max-width: 1080px) {
    > header {
      flex-direction: column;
      padding: 2rem 1.5rem 1rem;
      justify-content: center;
      > input {
        width: 100%;
        order: 2;
        margin-top: 1rem;
      }
      > div {
        display: flex;
        align-items: center;
        width: 100%;
        order: 1;
        > input {
          width: 70%;
        }
        > select {
          display: flex;
          flex: 1;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  > div {
    margin: 0 auto;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2.5rem;
  }
  
  @media(max-width: 720px) {
    > div {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(8, 1fr);
    }
  }
`;