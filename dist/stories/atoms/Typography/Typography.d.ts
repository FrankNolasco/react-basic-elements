import React from "react";
export type T_Typography = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "label" | "p";
export interface ITypography {
    variant?: T_Typography;
    fw?: string;
    color?: string;
    center?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const Typography: React.FC<ITypography>;
export declare const H1: React.FC<ITypography>;
export declare const H2: React.FC<ITypography>;
export declare const H3: React.FC<ITypography>;
export declare const H4: React.FC<ITypography>;
export declare const H5: React.FC<ITypography>;
export declare const H6: React.FC<ITypography>;
export declare const Span: React.FC<ITypography>;
export declare const Label: React.FC<ITypography>;
export declare const P: React.FC<ITypography>;
//# sourceMappingURL=Typography.d.ts.map