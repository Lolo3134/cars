import { configureStore } from '@reduxjs/toolkit';
import { registerApi } from 'app/providers/store/api/registration/registration';

export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    registerApi.middleware,
  ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;