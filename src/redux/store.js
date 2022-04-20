
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'

import  AuthReducer from 'redux/auth/AuthReducer';

const rootReducer = combineReducers({
   AuthReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["AuthReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
 // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

const persistor = persistStore(store)

export { store, persistor }

