import React from "react";
import "./../../style.css";
import { CONSTANTS } from "../../utils/constants";
import HeroImage from "../../images/hero_section.jpg";
import ExportSearchPage from "../ExportSearchPages/ExportSearchPages";
import ExportSearchComponent from "../ExportSearchComponent/ExportSearchComponent";
import { useNavigate } from "react-router-dom";

const HeaderImage = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/search-data");
    };

    return (
        <>
            {/* <div class="heading-after-navbar">
                <h2>{CONSTANTS.HERO_SECTION_TITTLE}</h2>
            </div> */}
            <ExportSearchComponent handleSearch={handleSearchClick} />
            {/* <ExportSearchPage /> */}
            <div class="pic">
                <img src={HeroImage} alt="Ship" class="img" />
            </div>
        </>
    );
};

export default HeaderImage;
