import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchBar/searchBarSlice";

export const loadAllCards = createAsyncThunk(
  "allCards/loadAllCards",
  async () => {
    const response = await fetch(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    );
    const json = await response.json();
    return json;
  }
);

const allCardsSlice = createSlice({
  name: "allCards",
  initialState: {
    success: false,
    loading: false,
    failed: false,
    allCards: []
  },
  reducers: {},
  extraReducers: {
    [loadAllCards.pending]: (state, action) => {
      state.loading = true;
    },
    [loadAllCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.allCards = action.payload;
    },
    [loadAllCards.pending]: (state, action) => {
      state.loading = false;
      state.failed = true;
    }
  }
});
export default allCardsSlice.reducer;

export const selectAllCards = (state) => state.allCardsSlice.allCards;
export const filteredCardsSelector = (state) => {
  const searchTerm = selectSearchTerm(state);
  const allCards = selectAllCards(state);
  return allCards.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export const loadingSelector = (state) => state.allCardsSlice.loading;
export const successSelector = (state) => state.allCardsSlice.success;
