import React, { createContext, useReducer } from "react";
import { ACTIONS } from "./action";
import { initialState } from "./initialState.js";

const exportReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab,
            };
        case ACTIONS.SET_DROPDOWN_VALUE:
            return {
                ...state,
                dropdownValue: action.payload.dropdownValue,
            };
        case ACTIONS.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.searchValue,
            };
        case ACTIONS.RESET_EXPORT_DATA:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

const ExportDataStateContext = createContext(initialState);
const ExportDataDispatchContext = createContext();

const ExportDataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(exportReducer, initialState);

    return (
        <ExportDataStateContext.Provider value={state}>
            <ExportDataDispatchContext.Provider value={dispatch}>
                {children}
            </ExportDataDispatchContext.Provider>
        </ExportDataStateContext.Provider>
    );
};

export {
    ExportDataProvider,
    ExportDataStateContext,
    ExportDataDispatchContext,
};
