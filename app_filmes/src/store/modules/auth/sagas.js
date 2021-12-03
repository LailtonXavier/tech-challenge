import { get } from 'lodash';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';

function* favoritedRequest({ payload }) {
  const { ind, title, year, imdbid, type, poster } = payload;

  try {
    yield call(axios.post, '/favorites', {
      title,
      year,
      imdbid,
      type,
      poster,
    });
    toast.success('Filme Add com sucesso');
    yield put(
      actions.favoritedSuccess({ title, year, imdbid, type, poster, ind })
    );
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', []);

    if (status === 400) {
      errors.map((er) => toast.error(er));
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error.message));
    } else {
      toast.error('Erro desconhecido');
    }
  }
}

export default all([takeLatest(types.FAVORITED_REQUEST, favoritedRequest)]);
