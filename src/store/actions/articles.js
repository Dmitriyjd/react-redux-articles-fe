import {
  GET_ARTICLES,
  CREATE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from '../constants/actions'

export function getArticles () {
  return {
    type: GET_ARTICLES,
  }
}

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
