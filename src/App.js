import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SearchExportPage from "./components/SearchExportPage/SearchExportPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicePage from "./components/ServicePage/ServicePage";
import ContactPage from "./components/ContactPage/ContactPage";
import { ExportDataProvider } from "./context/Export";
import { initialState } from "./context/Export/initialState";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicePage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route
                                path="/search-data"
                                element={<SearchExportPage />}
                            />
                        </Routes>
                        <Footer />
                    </ExportDataProvider>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
