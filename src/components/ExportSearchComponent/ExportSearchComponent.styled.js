import styled, { keyframes } from "styled-components";
import { CONSTANTS } from "../../utils/constants";

const ding = keyframes`
    0% {
        opacity: 0;
        margin-left: -300px;
    }
    100% {
        opacity: 1;
        margin-left: 0px;
    }
`;

export const StyledContainer = styled.div`
    background: linear-gradient(to bottom, #9c9e9f 0%, #fc6b44 100%);
    padding: 100px;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledTitle = styled.h2`
    text-align: center;
    font-size: 50px;
    color: #000000;
    margin-bottom: 5px;
    /* animation: ${ding} 4s forwards; */
    /* opacity: 0; */
    /* transition-timing-function: cubic-bezier(0.785, 0.14, 0.2, 0.98); */
`;

export const StyledTabWrapper = styled.div`
    display: flex;
    margin: auto;
    margin-top: 25px;
    transition: all 0.3s;
`;

export const StyledTab = styled.div`
    width: 100px;
    font-size: 14px;
    cursor: pointer;
    height: 33px;
    text-transform: capitalize;
    display: flex;
    text-align: center;
    color: white;
    justify-content: center;
    align-items: center;
    border-top-left-radius: ${({ item }) =>
        item === CONSTANTS.TABS[0] && "10px"};
    border-bottom-left-radius: ${({ item }) =>
        item === CONSTANTS.TABS[0] && "10px"};
    border-top-right-radius: ${({ item }) =>
        item === CONSTANTS.TABS[1] && "10px"};
    border-bottom-right-radius: ${({ item }) =>
        item === CONSTANTS.TABS[1] && "10px"};
    background: ${({ isActive }) => (isActive ? "#0b0b68" : "#646464")};
`;

export const StyledSearchWrapper = styled.form`
    display: flex;
    border: 2px solid #646464;
    background: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    width: 66%;
    margin: auto;
    margin-top: 20px;
`;

export const StyledDropdown = styled.div`
    border-right: 2px solid #646464;
    width: 25%;
`;

export const StyledSearchInput = styled.div`
    width: 70%;
    padding-left: 10px;
    input:-webkit-autofill {
        -webkit-text-fill-color: unset;
        -webkit-background-color: unset;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    padding: 5px;
    outline: none;
`;

export const StyledSearchIcon = styled.button`
    height: 50px;
    display: flex;
    width: 50px;
    background: #646464;
    border-radius: 8px;
    cursor: pointer;
    justify-content: center;
    &:hover {
        background: #0b0b68;
    }

    svg {
        width: 25px;
        height: 25px;
    }
`;
