import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import * as actionCreator from './actions/articles'
import * as actionTypes from './constants/actions'

const getArticlesRequest = function * () {
  try {
    const response = yield axios('http://localhost:8080/api/articles')
    yield put(actionCreator.getArticlesSuccess(response.data.data))
  } catch (error) {
    yield put(actionCreator.getArticlesFailed())
  }
}

const DataWatcher = function * () {
  yield takeEvery(actionTypes.GET_ARTICLES_PENDING, getArticlesRequest)
}

export default DataWatcher
