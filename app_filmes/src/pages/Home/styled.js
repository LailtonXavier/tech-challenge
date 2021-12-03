import styled from 'styled-components';

export const CenterHome = styled.div`
  background: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  input {
    width: 500px;
    height: 50px;
    border-radius: 20px 0px 0px 20px;
    padding-left: 1rem;
    border-right: none;
  }

  button {
    height: 50px;
    border-radius: 0 20px 20px 0;
    border-left: none;
    padding: 0.5rem 2rem;
    background: #0066ff;
    color: white;
  }
`;
