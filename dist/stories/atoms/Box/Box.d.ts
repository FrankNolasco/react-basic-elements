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
export declare const Box: React.FC<IBox>;
//# sourceMappingURL=Box.d.ts.map