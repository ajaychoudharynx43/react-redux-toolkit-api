import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartSlice from '../features/products/cartSlice';
import productApiSlice from '../features/products/productApiSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
    products:productApiSlice
  },
});

export default store;


