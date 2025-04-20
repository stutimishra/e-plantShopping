// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Add the selected plant to the cart
      const item = action.payload;
      const exists = state.items.find(i => i.name === item.name);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      // to be implemented
    },
    updateQuantity: (state, action) => {
      // to be implemented
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
