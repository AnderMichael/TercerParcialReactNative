import {action} from '../../interfaces/action';

const initialState = {
  user: null,
};

export default (state = initialState, action: action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {...state, user: action.payload};
    case 'LET_USER':
      return {...state, user: null};
    default:
      return state;
  }
};
