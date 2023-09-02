import styled from "styled-components";
import LogoImage from "./../../images/logo.jpg";

export const StyledContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 11%;
    background-image: linear-gradient(rgba(3, 12, 19, 255), #030c13);
    opacity: 0.86;
    position: fixed;
    /* z-index: 1; */
`;

export const StyledNavList = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`;

export const StyledListItem = styled.div`
    color: white;
    text-transform: capitalize;
    height: 100%;
    padding: 0 20px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const StyledLogoWrapper = styled.div`
    text-align: center;
    /* background-image: url(${LogoImage}); */
`;

export const StyledLogo = styled.img`
    width: 250px;
    height: auto;
`;

export const StyledActionButton = styled.div`
    padding: 10px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: blue;
`;
