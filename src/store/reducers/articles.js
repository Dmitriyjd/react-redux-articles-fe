import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILED,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
  GET_ARTICLE_BY_ID_SUCCESS,
  GET_ARTICLE_BY_ID_FAILED,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILED,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILED,
} from '../constants/actions'

const initialState = { articles: [] }
function articles (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      }
    case GET_ARTICLES_FAILED:
      return state

    case GET_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        article: action.payload,
      }
    case GET_ARTICLE_BY_ID_FAILED:
      return state

    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      }
    case CREATE_ARTICLE_FAILED:
      return state

    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      }
    case EDIT_ARTICLE_FAILED:
      return state

    case DELETE_ARTICLE_SUCCESS:
      return state
    case DELETE_ARTICLE_FAILED:
      return state

    default: return state
  }
}

export default articles
