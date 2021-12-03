import React, { useEffect, useRef, useState } from 'react';
import { CenterHome } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Movies from '../Movies';

export default function Home() {
  const [search, setSearch] = useState('');
  const [names, setNames] = useState('');
  const focus = useRef();

  useEffect(() => {
    focus.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNames(search);
    setSearch('');
  };

  return (
    <Container>
      <CenterHome>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={focus}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <Movies names={names} />
      </CenterHome>
    </Container>
  );
}
