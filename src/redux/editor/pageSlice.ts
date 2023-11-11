import { StatePage, TElement, TLayer, TPage } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: StatePage = {};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
});

export const {} = pageSlice.actions;

export default pageSlice.reducer;
