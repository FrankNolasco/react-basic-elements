import React from "react";
import { Grid } from "../../atoms/Grid/Grid";
import { Column, Flex, Row } from "../../atoms/Flex/Flex";

export interface IDispSelect {
  type: "grid" | "flex" | "column" | "row" | "row-wrap" | undefined;
  gap?: string;
  cols?: number;
  children?: React.ReactNode;
}

export const DisplaySelector: React.FC<IDispSelect> = ({
  type,
  gap = "10px",
  cols = 2,
  children,
  ...rest
}) => {
  switch (type) {
    case "grid":
      return (
        <Grid gap={gap} cols={cols} {...rest}>
          {children}
        </Grid>
      );

    case "flex":
      return (
        <Flex gap={gap} {...rest}>
          {children}
        </Flex>
      );

    case "column":
      return (
        <Column gap={gap} {...rest}>
          {children}
        </Column>
      );

    case "row":
      return (
        <Row gap={gap} {...rest}>
          {children}
        </Row>
      );
    case "row-wrap":
      return (
        <Row gap={gap} wrap="wrap" {...rest}>
          {children}
        </Row>
      );
    default:
      return (
        <Row gap={gap} {...rest}>
          {children}
        </Row>
      );
  }
};
