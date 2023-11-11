import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./editor/pageSlice";
import editorReducer from "./editor/editorSlice";

export default configureStore({
  reducer: {
    editor: editorReducer,
    page: pageReducer,
  },
});
