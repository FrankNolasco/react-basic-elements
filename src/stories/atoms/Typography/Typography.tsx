import React, { useEffect, useState } from "react";

export type T_Typography =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "label"
  | "p";
export interface ITypography {
  variant?: T_Typography;
  fw?: string;
  color?: string;
  center?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const sizes = {
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 10,
  h6: 8,
  span: 14,
  p: 15,
  label: 12,
};

const sizesResponsive = {
  h1: 15,
  h2: 11,
  h3: 9,
  h4: 8,
  h5: 5,
  h6: 4,
  span: 7,
  p: 7.5,
  label: 6,
};

const calcularFontSize = (variant?: T_Typography, responsive?: boolean) => {
  let size = 14;
  const sizeVariant = responsive ? sizesResponsive : sizes;
  variant && (size = sizeVariant[variant] ?? 14);
  return `${size}px`;
};

export const Typography: React.FC<ITypography> = ({
  children,
  variant,
  style,
  fw,
  color,
  center,
  ...rest
}) => {
  const [size, setSize] = useState("14px");

  useEffect(() => {
    setSize(calcularFontSize(variant));
    return () => {};
  }, [variant]);

  return (
    <span
      style={{
        fontWeight: fw ?? "normal",
        fontSize: size,
        color: color ?? "inherit",
        textAlign: center ? "center" : "inherit",
        margin: 0,
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
};

export const H1: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h1",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H2: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h2",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H3: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h3",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H4: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h4",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H5: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h5",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const H6: React.FC<ITypography> = ({
  children,
  fw = "bold",
  variant = "h6",
  ...rest
}) => {
  return (
    <Typography variant={variant} fw={fw} {...rest}>
      {children}
    </Typography>
  );
};

export const Span: React.FC<ITypography> = ({
  children,
  variant = "span",
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export const Label: React.FC<ITypography> = ({
  children,
  variant = "label",
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export const P: React.FC<ITypography> = ({
  children,
  variant = "p",
  ...rest
}) => {
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};
