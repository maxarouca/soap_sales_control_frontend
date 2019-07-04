import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Reducers } from './rootReducers'

const persistConfig = {
  key: 'inova@2019',
  storage,
  // whitelist: [],
  // blacklist: [],
}

const persistedReducer = persistReducer(persistConfig, Reducers)
const store = createStore(persistedReducer, composeWithDevTools())
const persistor = persistStore(store)

export { store, persistor }
