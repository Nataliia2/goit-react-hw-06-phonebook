import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setContactFilter(state, action) {
          return action.payload;
    },
  },
});

export const { setContactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
