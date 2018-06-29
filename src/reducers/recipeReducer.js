import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_COMPLETE,
  FETCH_RECIPES_FAIL,
  NEW_RECIPE,
  SEARCH_RECIPE,
  RESET_SEARCH,
  ERROR_NETWORK
} from '../actions/types';

const initialState = {
  isFetchingData: false,
  items: [],
  item: {},
  suggestions: [],
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        isFetchingData: true
      };
    case FETCH_RECIPES_COMPLETE:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_RECIPES_FAIL:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    case NEW_RECIPE:
      return {
        ...state,
        item: action.payload
      };

    case SEARCH_RECIPE:
      return {
        ...state,
        suggestions: Object.keys(state.items)
          .map(item => state.items[item])
          .filter(item =>
            item.name.toLowerCase().includes(action.payload.toLowerCase())
          )
      };

    case RESET_SEARCH:
      return {
        ...state,
        suggestions: []
      };

    case ERROR_NETWORK:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
