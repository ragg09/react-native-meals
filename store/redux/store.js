import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './features/favorites';
export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer
  }
});
