import React from "react";
import { Box, IBox } from "../Box/Box";

export interface IGrid extends IBox {
  cols?: number;
  gap?: string | number;
}

export interface IGridChild extends IBox {
  span?: number;
  spanRow?: number;
  spanCol?: number;
}

export const Grid: React.FC<IGrid> = ({ children, style, ...props }) => {
  const { cols, gap, ...rest } = props;

  return (
    <Box
      style={{
        display: "grid",
        gridGap: gap,
        gridTemplateColumns: `repeat(${cols ?? "auto-fill"}, 1fr)`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const GridChild: React.FC<IGridChild> = ({
  children,
  style,
  ...props
}) => {
  const { span, spanCol, spanRow, ...rest } = props;

  return (
    <Box
      style={{
        gridColumn: spanCol ?? "span " + (span ?? 1),
        gridRow: spanRow ?? "auto",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
