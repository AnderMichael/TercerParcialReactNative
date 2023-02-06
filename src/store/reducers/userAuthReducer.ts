const initialState = {
  isLogin: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isLogin: true};
    case 'SIGN_OUT':
      return {...state, isLogin: false};
    default:
      return state;
  }
};
