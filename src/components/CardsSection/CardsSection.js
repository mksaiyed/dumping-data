import React from "react";
import "./../../style.css";
import { CONSTANTS } from "../../utils/constants";

const CardsSection = () => {
    return (
        <>
            <div class="business">
                <div class="up">
                    {CONSTANTS.CARDS_DATA_UP.map((item) => (
                        <div class="boxup">
                            <div class="info">
                                <img id="logopic" src={item.url} alt="" />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="down">
                    {CONSTANTS.CARDS_DATA_DOWN.map((item) => (
                        <div class="boxup">
                            <div class="info">
                                <img id="logopic" src={item.url} alt="" />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardsSection;
