import {
  GET_ARTICLES_PENDING,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
  CREATE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from '../constants/actions'

export const getArticlesPending = () => ({ type: GET_ARTICLES_PENDING })
export const getArticlesSuccess = payload => ({ type: GET_ARTICLES_SUCCESS, payload })
export const getArticlesFailed = () => ({ type: GET_ARTICLES_FAILED })

export function createArticle (data) {
  return {
    type: CREATE_ARTICLE,
    payload: data,
  }
}

export function editArticle (newData) {
  return {
    type: EDIT_ARTICLE,
    payload: newData,
  }
}

export function deleteArticle (id) {
  return {
    type: DELETE_ARTICLE,
    payload: id,
  }
}
