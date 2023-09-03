import React, { useContext } from "react";
import { ExportDataStateContext } from "../context/Export";
export function useExportData() {
    const context = useContext(ExportDataStateContext);
    if (!context) {
        throw new Error(
            "useExportData must be within ExportDataStateContext provider"
        );
    }
    return context;
}
