import React from "react";
import { CONSTANTS } from "../../utils/constants";

const Footer = () => {
    return (
        <>
            <div class="cont">
                <div class="contact-info">
                    {CONSTANTS.CONTACT_DATA.map((data) => (
                        <>
                            <div class="contact">
                                <img src={data.url} alt={data.title} />
                                <div class="contact-details">
                                    <h2>{data.title}</h2>
                                    {data.isLink ? (
                                        <p>
                                            <a href={data.link}>{data.data}</a>
                                        </p>
                                    ) : (
                                        <p>{data.data}</p>
                                    )}
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <div class="company-name">
                    <h1 id="dd">{CONSTANTS.COMPANY_NAME}</h1>
                    <h4 id="ugo">{CONSTANTS.COMPANY_DESCRIPTION}</h4>
                    <ul class="list2" id="list2">
                        {CONSTANTS.NAVBAR_ITEMS.map((item) => (
                            <li>
                                <a href={item.path}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="company-text">
                    {CONSTANTS.COMPANY_TEXT.map((data) => (
                        <p>{data}</p>
                    ))}
                </div>
                <div class="follow-us">
                    <div class="social-media">
                        <a href="#" class="facebook"></a>
                        <a href="#" class="instagram"></a>
                        <a href="#" class="youtube"></a>
                    </div>
                </div>
                <div class="copy">
                    <p>{CONSTANTS.COMPANY_COPYRIGHT}</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
