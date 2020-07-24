import { call, put } from 'redux-saga/effects'

import api from '../../../services/api'


import { loadSuccess, loadFailure } from './actions'


export function* load() {
  try {
    const reponse = yield call(api.get, "api.php?amount=20&category=12")

    yield put(loadSuccess(reponse.results))
  } catch (error) {
    yield put(loadFailure())
  }
}