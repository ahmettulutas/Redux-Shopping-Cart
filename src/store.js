import { configureStore } from "@reduxjs/toolkit";
import allCardsSlice from "./features/loadCards/loadCardsSlice";
import cartSlice from "./features/shoppingCart/cartSlice";
import searchTermReducer from "./features/searchBar/searchBarSlice";
const store = configureStore({
  reducer: {
    allCardsSlice: allCardsSlice,
    cartSlice: cartSlice,
    searchTermReducer: searchTermReducer
  }
});
export default store;
