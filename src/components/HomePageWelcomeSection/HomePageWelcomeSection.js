import React from "react";
import { CONSTANTS } from "../../utils/constants";

const HomePageWelcomeSection = () => {
    return (
        <>
            <div class="intro">
                <input id="hc" type="checkbox" />
                <h1>{CONSTANTS.HOME_PAGE_WELCOME.TITLE}</h1>
                {CONSTANTS.HOME_PAGE_WELCOME.DESCRIPTION.map((data) => (
                    <p>{data}</p>
                ))}
                <div class="intro2">
                    <h2>{CONSTANTS.HOME_PAGE_WELCOME.SECTION2_TITLE}</h2>
                    <p2>{CONSTANTS.HOME_PAGE_WELCOME.SECTION2_DESCRIPTION}</p2>
                    <ul type="circle">
                        {CONSTANTS.HOME_PAGE_WELCOME.LIST_DATA.map((data) => (
                            <li>{data}</li>
                        ))}
                    </ul>
                    <div class="btn">
                        <label for="hc">Read Less</label>
                        <a href="readmore.html">
                            <button>Next Page</button>
                        </a>
                    </div>
                </div>
                <label for="hc">Read More</label>
            </div>

            <div class="block4">
                {CONSTANTS.HOME_PAGE_WELCOME.CARDS.map((data) => (
                    <>
                        <div class="block">
                            <div class="conte">
                                <img src={data.url} alt="Home cards" />
                                <div class="text5">
                                    <h2>{data.title}</h2>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default HomePageWelcomeSection;
