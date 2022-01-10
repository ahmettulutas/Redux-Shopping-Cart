import { createSlice } from "@reduxjs/toolkit";

const searchTermReducer = createSlice({
  name: "searchTermReducer",
  initialState: "",
  reducers: {
    setTerm: (state, action) => {
      state = action.payload;
      return state;
    },
    resetTerm: (state, action) => {
      state = "";
      return state;
    }
  }
});
export default searchTermReducer.reducer;
export const { setTerm, resetTerm } = searchTermReducer.actions;

//selectors
export const selectSearchTerm = (state) => state.searchTermReducer;
