import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Footer />
        </>
    );
}

export default App;
