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
    justify-content: center;
    margin-top: 3rem;
    
    > p{
        padding-top: 2rem;
        color: #fff;
        font-size: 30px;
    }

    .score {
        color: white;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 10px;
        text-shadow: 1px 1px 2px grey;
    }

    h1{
        font-family: 'Playfair Display', sans-serif;
        font-size: 40px;
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