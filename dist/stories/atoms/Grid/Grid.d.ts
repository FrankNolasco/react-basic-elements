import React from "react";
import { IBox } from "../Box/Box";
export interface IGrid extends IBox {
    cols?: number;
    gap?: string | number;
}
export interface IGridChild extends IBox {
    span?: number;
    spanRow?: number;
    spanCol?: number;
}
export declare const Grid: React.FC<IGrid>;
export declare const GridChild: React.FC<IGridChild>;
//# sourceMappingURL=Grid.d.ts.map