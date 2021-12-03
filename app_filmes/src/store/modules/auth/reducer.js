import * as types from '../types';

const initialState = {
  favorited: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FAVORITED_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.FAVORITED_SUCCESS: {
      const newState = { ...state };
      newState.favorited = action.payload.favorited;
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
