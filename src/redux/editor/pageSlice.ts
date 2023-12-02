import { PageState, TElement, TLayer, TPage } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PageState = {};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
});

export const {} = pageSlice.actions;

export default pageSlice.reducer;
