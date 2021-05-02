import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { authReducer } from '../AplicacionesModulos/Auth/reducer/authReducer';
import { loadingReducer } from '../AplicacionesModulos/Loading/reducer/loadingReducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pool_reducers = combineReducers({
    auth: authReducer,
    loading: loadingReducer
})

export const StoreProvider = createStore(
    pool_reducers,
    composeEnhancers(
        applyMiddleware(ReduxThunk)
    )
);
