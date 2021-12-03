import styled from 'styled-components';

export const CenterFavo = styled.div`
  background: none;
  padding: 1rem;
  margin: auto;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .iconCircle {
    color: red;
    margin: 50% auto;
  }

  .card {
    margin: 4px;

    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
  }

  .card:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }

  .card:hover .favorite {
    opacity: 1;
  }
  img,
  .iconUser {
    width: 200px;
    height: 250px;
    margin: 8px;
  }

  .card:hover .favorite {
    opacity: 1;
  }

  .favorite {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }
`;
