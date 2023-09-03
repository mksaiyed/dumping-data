import React from "react";
import Navbar from "../Navbar/Navbar";
import HeaderImage from "../HeaderImage/HeaderImage";
import CardsSection from "../CardsSection/CardsSection";
import HomePageWelcomeSection from "../HomePageWelcomeSection/HomePageWelcomeSection";
import Footer from "../Footer/Footer";

function Dashboard() {
    return (
        <>
            <Navbar />
            <HeaderImage />
            <CardsSection />
            <HomePageWelcomeSection />
            <Footer />
        </>
    );
}

export default Dashboard;
