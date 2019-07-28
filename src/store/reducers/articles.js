import {
  CREATE_ARTICLE,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from '../constants/actions'

const initialState = { articles: [] }
function counter (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      }
    case GET_ARTICLES_FAILED:
      return state
    case CREATE_ARTICLE:
      return {
        ...state,
        articles: action.payload,
      }
    case EDIT_ARTICLE:
      return {
        ...state,
        articles: action.payload,
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: action.payload,
      }
    default: return state
  }
}

export default counter
