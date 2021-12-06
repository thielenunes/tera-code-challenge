import styled from 'styled-components';


export let Container = styled.div`
  width: 100%;
   a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 3rem 0;
    color: ${({ theme }) => theme.text_terciary };
   p {
      margin-left: 0.2rem;
      font-weight: 500;
    }
  }
  @media(max-width: 720px) {
     a {
      padding: 1rem 1rem 0;
    }
  }
`;


