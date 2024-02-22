import { configureStore } from '@reduxjs/toolkit';
import { registerApi } from 'app/providers/store/api/registration/registration';
import { carApi } from '../api/catalog/catalog';

export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
    [carApi.reducerPath]: carApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    registerApi.middleware,
    carApi.middleware
  ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;