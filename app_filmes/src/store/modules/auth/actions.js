import * as types from '../types';

export function favoritedRequest(payload) {
  return {
    type: types.FAVORITED_REQUEST,
    payload,
  };
}
export function favoritedSuccess(payload) {
  return {
    type: types.FAVORITED_SUCCESS,
    payload,
  };
}
