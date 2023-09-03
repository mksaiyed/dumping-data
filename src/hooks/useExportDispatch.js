import React, { useContext } from "react";
import { ExportDataDispatchContext } from "../context/Export";
export function useExportDispatch() {
    const context = useContext(ExportDataDispatchContext);
    if (!context) {
        throw new Error(
            "useExportDispatch must be within ExportDispatchContext provider"
        );
    }
    return context;
}
