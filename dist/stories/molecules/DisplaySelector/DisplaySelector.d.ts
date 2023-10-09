import React from "react";
export interface IDispSelect {
    type: "grid" | "flex" | "column" | "row" | "row-wrap" | undefined;
    gap?: string;
    cols?: number;
    children?: React.ReactNode;
}
export declare const DisplaySelector: React.FC<IDispSelect>;
//# sourceMappingURL=DisplaySelector.d.ts.map