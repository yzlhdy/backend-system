import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types'

const INITIAL_STATE: RepositoriesState = {
    data: [
        {
            id: 1, name: 'yizhiyang '
        },
        {
            id: 22, name: 'yizhiyang '
        },
        {
            id: 3, name: 'yizhiyang3 '
        },
        {
            id: 4, name: 'yizhiyang4 '
        },
    ],
    loading: false,
    error: false
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case RepositoriesTypes.LOAD_SUCCCES:
            return {
                ...state, loading: false, error: false, data: action.payload.data,
            };
        case RepositoriesTypes.LOAD_FAILURE:
            return {
                ...state, loading: false, error: true, data: [],
            };
        default:
            return state;
    }
}


export default reducer;