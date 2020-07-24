import { createStore } from 'redux'
import rootReducer from './users/rootReducer'
import { RepositoriesState } from './users/repositories/types'


export interface ApplicationState {
    repositories: RepositoriesState
}

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer)

export default store;

