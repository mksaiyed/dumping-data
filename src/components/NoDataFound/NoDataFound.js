import React from "react";
import { CONSTANTS } from "../../utils/constants";
import { StyledContainer } from "./NoDataFound.styled";

const NoDataFound = ({ message = CONSTANTS.NO_DATA_FOUND }) => {
    return <StyledContainer>{message}</StyledContainer>;
};

export default NoDataFound;
