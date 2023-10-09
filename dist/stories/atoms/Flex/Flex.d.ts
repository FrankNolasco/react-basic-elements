import React from "react";
import { IBox } from "../Box/Box";
export interface IFlex extends IBox {
    justify?: string;
    items?: string;
    self?: string;
    content?: string;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    gap?: string | number;
}
export declare const Flex: React.FC<IFlex>;
export declare const Column: React.FC<IFlex>;
export declare const Row: React.FC<IFlex>;
//# sourceMappingURL=Flex.d.ts.map