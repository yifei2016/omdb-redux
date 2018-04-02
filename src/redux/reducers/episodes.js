import { SEARCH_EPISODES_REQUEST, SEARCH_EPISODES_SUCCESS, SEARCH_EPISODES_FAILURE } from 'redux/actions';

export const initialState = {loading: false, data: [], error: null};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EPISODE":  
      return state.concat(action.payload);
    case "SET_EPISODES":
      return action.payload;
    case SEARCH_EPISODES_REQUEST:
      return {...state,  loading: true, data: [], error: null} 
    case SEARCH_EPISODES_SUCCESS:   
      return {...state, loading: false, data: action.payload, error: null};
    case SEARCH_EPISODES_FAILURE:
      return {...state, loading: false, data: [], error: action.payload }
    default:
      return state
  }
}

export default reducer;

