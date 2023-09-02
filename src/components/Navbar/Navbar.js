import React from "react";
import { CONSTANTS } from "../../utils/constants";
import LogoImage from "./../../images/logo.jpg";
import {
    StyledActionButton,
    StyledContainer,
    StyledListItem,
    StyledLogo,
    StyledLogoWrapper,
    StyledNavList,
} from "./Navbar.styled";

const Navbar = () => {
    return (
        <StyledContainer>
            <StyledLogoWrapper>
                <StyledLogo src={LogoImage} alr="Logo" />
            </StyledLogoWrapper>
            <StyledNavList>
                {CONSTANTS.NAVBAR_ITEMS.map((item) => (
                    <StyledListItem>{item}</StyledListItem>
                ))}
            </StyledNavList>

            <StyledActionButton>
                {CONSTANTS.ACTION_BUTTON_TEXT}
            </StyledActionButton>
        </StyledContainer>
    );
};

export default Navbar;
