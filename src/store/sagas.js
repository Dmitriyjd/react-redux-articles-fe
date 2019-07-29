import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import * as actionCreator from './actions/articles'
import * as actionTypes from './constants/actions'

const getArticlesRequest = function * () {
  try {
    const response = yield axios.get('http://localhost:8080/api/articles')
    yield put(actionCreator.getArticlesSuccess(response.data.data))
  } catch (error) {
    yield put(actionCreator.getArticlesFailed())
  }
}

const getArticleByIdRequest = function * (action) {
  console.log('action', action)
  const { id } = action
  console.log('saga', id)
  try {
    const response = yield axios.get(`http://localhost:8080/api/articles/${id}`)
    console.log('response', response.data)
    yield put(actionCreator.getArticleByIdSuccess(response.data))
  } catch (error) {
    yield put(actionCreator.getArticleByIdFailed())
  }
}

const createArticleRequest = function * (action) {
  try {
    yield axios.post('http://localhost:8080/api/articles', action.payload)
    yield put(actionCreator.createArticlesSuccess())
  } catch (error) {
    yield put(actionCreator.createArticlesFailed())
  }
}

const deleteArticleRequest = function * (action) {
  const { id } = action
  console.log('action', action)
  try {
    console.log('try')
    const response = yield axios.delete(`http://localhost:8080/api/articles/${id}`)
    console.log('after deleting')
    yield put(actionCreator.deleteArticleSuccess(response.data.data))
  } catch (error) {
    yield put(actionCreator.deleteArticleFailed())
  }
}

const DataWatcher = function * () {
  yield takeEvery(actionTypes.GET_ARTICLES_PENDING, getArticlesRequest)
  yield takeEvery(actionTypes.DELETE_ARTICLE_PENDING, deleteArticleRequest)
  yield takeEvery(actionTypes.CREATE_ARTICLE_PENDING, createArticleRequest)
  yield takeEvery(actionTypes.GET_ARTICLE_BY_ID_PENDING, getArticleByIdRequest)
}

export default DataWatcher
