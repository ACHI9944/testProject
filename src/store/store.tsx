import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './data';
import {setupListeners} from '@reduxjs/toolkit/query';
import {jsonPlaceholderApi} from '../services/jsonPlaceholder';

export const store = configureStore({
  reducer: {
    dataSlice: dataSlice.reducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});
setupListeners(store.dispatch);
