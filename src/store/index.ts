import { createStore, applyMiddleware } from 'redux'
import rootReducer from './users/rootReducer'
import { RepositoriesState } from './users/repositories/types'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './users/rootSaga'


export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;

