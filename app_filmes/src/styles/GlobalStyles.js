import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

  }
  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button {
    font: 400 1.5rem ;
  }
  button {
    cursor: pointer;
  }


  a {
    text-decoration: none;
  }
  li {
    list-style: none;


  }
  html{
    background: #002233;
  }


  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.success};
    color: white;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.error};
    color: white;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: auto;
`;
