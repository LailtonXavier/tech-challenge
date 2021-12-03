import React from 'react';

import { CenterHome } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Erros404() {
  return (
    <Container>
      <CenterHome>
        <h3>Pagina Encontrada amigo</h3>
        <img src="/notfound.png" alt="notfounds" />
      </CenterHome>
    </Container>
  );
}
