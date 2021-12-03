import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { FaTimesCircle, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { CenterFavo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Favorited() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDate = async () => {
      setIsLoading(true);

      const { data } = await axios.get('/favorites');

      setFavorites(data);
      setIsLoading(false);
    };
    getDate();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);

      await axios.delete(`/favorites/${id}`);
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
      toast.success('Filme deletado com sucesso');

      setIsLoading(false);
    } catch (er) {
      const status = get(er, 'response.status', 0);

      if (status === 401) toast.success('Ocorreu algum erro ao excluir');
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <CenterFavo>
        <Loading isLoading={isLoading} />

        {favorites &&
          favorites.map((values, index) => (
            <div className="card" key={String(index)}>
              {get(values, 'poster', false) ? (
                <img src={values.poster} alt={values.title} />
              ) : (
                <FaUserCircle className="iconUser" size={150} />
              )}
              <div className="favorite">
                <FaTimesCircle
                  size={50}
                  className="iconCircle"
                  onClick={(e) => handleDelete(e, values.id, index)}
                />
              </div>
            </div>
          ))}
      </CenterFavo>
    </Container>
  );
}
