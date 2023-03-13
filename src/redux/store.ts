import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: { user: userSlice, auth: authReducer },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch