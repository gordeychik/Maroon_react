import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    recentlyViewed: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    addToRecentlyViewed: (state, action) => {
      const itemExists = state.recentlyViewed.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.recentlyViewed.push(action.payload);
      }
      if (state.recentlyViewed.length > 4) {
        state.recentlyViewed.shift(action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, addToRecentlyViewed } = cartSlice.actions;
export default cartSlice.reducer;