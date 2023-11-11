import { EditorState, TElement, TLayer, TPage } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: EditorState = {
  pages: [],
  focusedPageId: "NULL",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    focusPage: (state: EditorState, action) => {
      state.focusedPageId = action.payload;
    },

    addPage: (state: EditorState) => {
      const element: TElement = {
        animation: {
          type: "easein", /// these values will be given through the actions.payload
        },
        position: {
          x: 30,
          y: 50,
        },
        id: "0",
        width: "300px",
        height: "300px",
        name: "default",
        icon: "",
      };

      const page: TPage = {
        id: `page-${state.pages.length + 1}`,
        layers: [],
        elements: [],
      };
      state.pages = [...state.pages, page];
    },

    mountElement: (state: EditorState, action) => {
      const { pages, focusedPageId } = state;
      const { payload } = action;

      const targetPage = pages.find((e: TPage) => e.id === focusedPageId);
      if (!targetPage) {
        console.error(`PageError: Page with ${focusedPageId} not found!`);
        return;
      }

      const numberOfElements = targetPage.elements.length;

      const element = payload;
      element.id = `element-${numberOfElements}-${focusedPageId}`;

      targetPage.elements.push(element);

      console.log(`Element (${element.name}) mounted`);
    },
  },
});

export const { focusPage, addPage, mountElement } = editorSlice.actions;

export default editorSlice.reducer;
