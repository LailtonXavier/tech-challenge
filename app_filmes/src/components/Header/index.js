import React from 'react';
import { FaHeart, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Containe } from './styled';

export default function Heade() {
  return (
    <Container>
      <Containe>
        <div>
          <Link to="/">
            <FaHome className="iconHome" size={40} />
          </Link>
          <Link to="/favorites/">
            <FaHeart size={40} />
          </Link>
        </div>
      </Containe>
    </Container>
  );
}
