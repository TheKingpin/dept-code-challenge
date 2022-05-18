import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const menuContainer = document.getElementById("menu-dialog");

interface Props {
  children: JSX.Element;
}

const MenuDialog: React.FC<Props> = ({ children }) => {
  const elementReference = useRef<HTMLDivElement | null>(null);

  if (!elementReference.current) {
    elementReference.current = document.createElement("div");
    elementReference.current.className = "reference-container";
  }

  useEffect(() => {
    menuContainer?.appendChild(elementReference.current as HTMLDivElement);
    return () => {
      menuContainer?.removeChild(elementReference.current as HTMLDivElement);
    };
  }, []);

  return createPortal(<div>{children}</div>, elementReference.current);
};

export default MenuDialog;
