import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    total: null
  },

  reducers: {
    incrementItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        item.quantity++;
        state.total += price;
      } else {
        state.cart.push({ image, id, price, name, quantity: 1 });
        state.total += price;
      }
    },
    decrementItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item && item.quantity > 0) {
        item.quantity--;
        state.total -= price;
      }
    },
    removeItem: (state, action) => {
      const { id, price, quantity } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.total -= price * quantity;
    }
  }
});
export default cartSlice.reducer;
export const { incrementItem, decrementItem, removeItem } = cartSlice.actions;
export const cartSelector = (state) => state.cartSlice.cart;
export const totalSelector = (state) => state.cartSlice.total;
/*    addItem:(state, action) =>{
      let doesItemExist = false;
      const newState = state.map((item) => {
        if (item.Id === action.payload.Id) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return newState;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }   */
