const initialState = {
    set: new Set(),
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case 'ADD':
        return {...state, set.add(action.payload) };
      case 'VERIFY':
        return {...state, set.has(action.payload)};
      default:
        return state;
    }
  };
  