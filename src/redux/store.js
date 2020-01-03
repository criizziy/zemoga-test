import {createStore, applyMiddleware, compose} from 'redux';
import { AsyncStorage } from 'AsyncStorage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    // Root?
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    blacklist: [
        'rulings',
    ],
};

const persistReduce = persistReducer(persistConfig,reducers);


let middleware = [thunk];


export default ()=>{
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(
        persistReduce,
        composeEnhancer(
            applyMiddleware(...middleware), /* enhancer(middleware) */
        )
    );
    let persistor = persistStore(store);
    return {store, persistor }
};
