import {
  GET_ARTICLES_PENDING,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
  GET_ARTICLE_BY_ID_PENDING,
  GET_ARTICLE_BY_ID_SUCCESS,
  GET_ARTICLE_BY_ID_FAILED,
  CREATE_ARTICLE_PENDING,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILED,
  EDIT_ARTICLE_PENDING,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILED,
  DELETE_ARTICLE_PENDING,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILED,
} from '../constants/actions'

// get articles from be
export const getArticlesPending = () => ({ type: GET_ARTICLES_PENDING })
export const getArticlesSuccess = payload => ({ type: GET_ARTICLES_SUCCESS, payload })
export const getArticlesFailed = () => ({ type: GET_ARTICLES_FAILED })
export const getArticleByIdPending = id => ({ type: GET_ARTICLE_BY_ID_PENDING, id })
export const getArticleByIdSuccess = payload => ({ type: GET_ARTICLE_BY_ID_SUCCESS, payload })
export const getArticleByIdFailed = () => ({ type: GET_ARTICLE_BY_ID_FAILED })

// create Article
export const createArticlesPending = payload => ({ type: CREATE_ARTICLE_PENDING, payload })
export const createArticlesSuccess = () => ({ type: CREATE_ARTICLE_SUCCESS })
export const createArticlesFailed = () => ({ type: CREATE_ARTICLE_FAILED })

// edit article
export const editArticlePending = () => ({ type: EDIT_ARTICLE_PENDING })
export const editArticleSuccess = () => ({ type: EDIT_ARTICLE_SUCCESS })
export const editArticleFailed = () => ({ type: EDIT_ARTICLE_FAILED })

// delete article
export const deleteArticlePending = id => ({ type: DELETE_ARTICLE_PENDING, id })
export const deleteArticleSuccess = () => ({ type: DELETE_ARTICLE_SUCCESS })
export const deleteArticleFailed = () => ({ type: DELETE_ARTICLE_FAILED })
