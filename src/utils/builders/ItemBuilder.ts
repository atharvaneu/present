import { TAnimation, TElement, TElementPosition } from "@/shared/types";
import { ReactNode } from "react";

class ItemBuilder {
  private item: TElement;
  private pageId: string;

  constructor(name: string, icon: string | ReactNode, pageId: string) {
    this.pageId = pageId;
    this.item = {
      animation: {
        type: "",
      },
      position: {
        x: 0,
        y: 0,
      },
      id: "0",
      width: "0px",
      height: "0px",
      name,
      icon,
    };
  }

  withIcon(icon: string | ReactNode): ItemBuilder {
    this.item.icon = icon;
    return this;
  }

  withPosition(position: TElementPosition): ItemBuilder {
    this.item.position = position;
    return this;
  }

  withAnimation(animation: TAnimation): ItemBuilder {
    this.item.animation = animation;
    return this;
  }

  withSize(width: string, height: string): ItemBuilder {
    this.item.width = width;
    this.item.height = height;
    return this;
  }

  build(): TElement {
    return this.item;
  }
}

export default ItemBuilder;
