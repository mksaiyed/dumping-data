import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { ExportDataProvider } from "./context/Export";
import { initialState } from "./context/Export/initialState";
import SearchExportPage from "./components/SearchExportPage/SearchExportPage";

function App() {
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <BrowserRouter>
                    <ExportDataProvider value={initialState}>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route
                                path="/search-data"
                                element={<SearchExportPage />}
                            />
                        </Routes>
                    </ExportDataProvider>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
