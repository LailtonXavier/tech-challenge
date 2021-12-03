import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CenterMovies } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Movies({ names }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // data movies
  const [title, setTitles] = useState('');
  const [year, setYears] = useState('');
  const [imdbid, setImdbIDs] = useState('');
  const [type, setTypes] = useState('');
  const [poster, setPosters] = useState('');
  const [ind, setInd] = useState(0);
  const dispatch = useDispatch();

  // avaliar
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=925eba28&s=${names}`
      );
      setMovies(response.data.Search);
    };

    getData();
  }, [names]);

  useEffect(() => {
    favorites.forEach((value, index) => {
      // if (ind !== index) return;

      setTitles(value.Title);
      setYears(value.Year);
      setImdbIDs(value.imdbID);
      setTypes(value.Type);
      setPosters(value.Poster);

      setInd(index);
    });

    const sending = () => {
      let errors = false;
      if (title.length < 1) errors = true;

      if (errors) return;

      dispatch(
        actions.favoritedRequest({ title, year, imdbid, type, poster, ind })
      );
    };

    sending();
  }, [dispatch, favorites, imdbid, ind, poster, title, type, year]);

  // add Favorite
  const handleFavorite = (e, movie) => {
    const newFavorites = [...favorites, movie];
    const icon = e.currentTarget.nextSibling;
    icon.setAttribute('display', 'block');
    e.currentTarget.remove();
    setFavorites(newFavorites);
  };

  return (
    <CenterMovies>
      {movies &&
        movies.map((values, index) => (
          <div className="card" key={String(index)}>
            <img src={values.Poster} alt={values.Title} />
            <div className="favorite">
              <FaRegHeart
                className="iconHeart"
                onClick={(e) => handleFavorite(e, values)}
              />
              <FaHeart className="iconHeartFull" display="none" />
            </div>
          </div>
        ))}
    </CenterMovies>
  );
}

Movies.propTypes = {
  names: PropTypes.string.isRequired,
};
