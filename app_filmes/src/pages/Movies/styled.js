import styled from 'styled-components';

export const CenterMovies = styled.div`
  background: none;
  padding: 1rem;
  width: 100%;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  img {
    width: 300px;
    height: 450px;
    border-radius: 10px;
  }

  .iconHeart {
    color: red;
  }
  .iconHeartFull {
    color: red;
  }

  .card {
    margin: 4px;

    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .card:hover .favorite {
    opacity: 1;
  }

  .favorite {
    position: absolute;
    background: rgba(10, 10, 10, 0.5);
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }
`;
