import { createStore } from "redux";
import { stringReducer } from "../reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
}
const persistedReducer = persistReducer(persistConfig, stringReducer)
export const store = createStore( persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
export const persistor = persistStore(store)