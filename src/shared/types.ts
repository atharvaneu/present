import { ReactNode } from "react";

export interface TPage {
  id: string;
  elements: TElement[];
  layers: TLayer[];
}

export interface TLayer {
  id: string;
  elements: TElement[];
}

export interface TElement {
  id: string;
  name: string;
  icon: string | ReactNode;
  position: TElementPosition;
  animation: TAnimation;
  width: string;
  height: string;
}

export interface TElementPosition {
  x: number;
  y: number;
}

export interface TAnimation {
  type: string | null;
  duration?: string;
}

export interface TElementDropResult {
  item: any;
  x: number | undefined;
  y: number | undefined;
}

/**
 * State types
 */
export interface PageState {}

export interface EditorState {
  pages: TPage[];
  focusedPageId: string;
}

export interface ContextMenuState {
  visible: boolean;
  top: string;
  left: string;
}
