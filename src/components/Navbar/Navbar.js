import React from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    return (
        <StyledContainer>
            <StyledLogoWrapper>
                <StyledLogo
                    src={LogoImage}
                    alr="Logo"
                    onClick={() => navigate("/")}
                />
            </StyledLogoWrapper>
            <StyledNavList>
                {CONSTANTS.NAVBAR_ITEMS.map((item) => (
                    <StyledListItem onClick={() => navigate(item.path)}>
                        {item.label}
                    </StyledListItem>
                ))}
            </StyledNavList>
            <StyledActionButton>
                {CONSTANTS.ACTION_BUTTON_TEXT}
            </StyledActionButton>
        </StyledContainer>
    );
};

export default Navbar;
