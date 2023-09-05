import styled, { keyframes } from "styled-components";

const rotation = keyframes`
0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
`;

export const StyledLoader = styled.div`
    display: block;
    margin: auto;
    height: 40px;
    width: 40px;
    border: 3px solid rgba(0, 174, 239, 0.2);
    border-top-color: rgba(0, 174, 239, 0.8);
    border-radius: 50%;
    animation: ${rotation} 0.6s infinite linear;
`;
