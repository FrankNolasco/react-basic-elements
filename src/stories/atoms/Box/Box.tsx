import React from "react";

export interface IBox {
  width?: string | number;
  padding?: string | number;
  margin?: string | number;
  border?: string | number;
  responsive?: boolean;
  height?: string | number;
  addShadow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Box: React.FC<IBox> = ({ children, style, ...rest }) => {
  const {
    width,
    padding,
    margin,
    border,
    height,
    addShadow,
    ...restProps
  } = rest;
  return (
    <div
      style={{
        width,
        padding,
        margin,
        border,
        height,
        boxShadow: addShadow
          ? "0px 2px 16px 3px rgba(85,109,235,0.29)"
          : "none",
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
