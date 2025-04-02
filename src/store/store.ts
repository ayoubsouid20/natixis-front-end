import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from '../features/products/store/productSlice'
import authSliceReducer from '../features/authentication/store/authenticationSlice'

export const store = configureStore({
  reducer: {
    product: productSliceReducer,
    auth: authSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
