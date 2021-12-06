import styled from 'styled-components';


export const Container = styled.div`
  padding: 1rem;
  > a {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        height: 15rem;
      }
    }
  }
  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9rem;
    > div {
      width: 80%;
      > h1 {
        font-size: 1.1rem;
        margin-top: 1rem;
        font-weight: 500;
      }
      > h2, h3 {
        font-size: 0.9rem;
        margin-top: 0.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.text_terciary }
      }
    }
  }
`;
