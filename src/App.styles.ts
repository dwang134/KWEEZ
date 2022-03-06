import styled, {createGlobalStyle} from 'styled-components';
import bgImage from './images/greenLand.jpg';

export const GlobalStyle= createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-sizing: 'Roboto Slab', sans-serif;
    }

    html{
        height: 100%;
    }

    body {
        background-image: url(${bgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p{
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        font-family: 'Playfair Display', sans-serif;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
      }

      .start {
        max-width: 200px;
      }


`