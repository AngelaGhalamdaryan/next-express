import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const getSize = (size) => {
    switch(size) {
        case 'xs':
            return "min-width: 150px; height: 40px;";
            break;
        case 'xm' :
            return "min-width: 150px; height: 48px;";
            break;
        default:
            return "min-width: 100%; height: 48px;"
    }
}

const getColor = (color) => {
    switch(color) {
        case "blue":
            return { bg: "#40a9ff", bgTransparent: "#bae7ff69", shadow: "#c8e5f561" };
            break
        case "green":
            return { bg: "#389e0d", bgTransparent: "#d9f7be", shadow: "rgb(218 253 183)" };
            break
        case "red": 
            return { bg: "#FF4339", bgTransparent: "#ff69611a", shadow: "rgb(255 67 57 / 16%)" };
            break;
        case "orange": 
            return { bg: "#ff8100", bgTransparent: "#ff81001f", shadow: "rgb(226 115 0 / 16%)" };
            break;
        default:
            return { bg: "#ff8100", bgTransparent: "#ff81001f", shadow: "rgb(226 115 0 / 16%)" };

    }
}

const CustomButton = styled.button`
    background-color: ${({ color }) => getColor(color).bg};
    border: none;
    color: white;
    height: 48px;
    font-size: 14px;
    box-shadow: 0px 8px 16px ${({ color }) => getColor(color).shadow};
    align-items: center;
    font-weight: 700;
    border-radius: 4px;
    transition: 0.2s;
    cursor: pointer;
    letter-spacing: 1px;
    &:hover {
        opacity: 0.9;
    }
    ${({ size }) => getSize(size)};
    ${({ outline, color }) => !!outline && (
        css `
            background-color: #00000000;
            border: 1px solid ${getColor(color).bg};
            color: ${getColor(color).bg};
            &:hover {
                background-color: ${getColor(color).bgTransparent};
                opacity: 1;
            }
        `
    )};
    ${({ noneShadow }) => !!noneShadow && (
        css `
            box-shadow: none;
        `
    )}
    ${({ capitalize }) => !!capitalize && (
        css`
            text-transform: capitalize;
        `
    )}
`;

const Button = (props) => {
    return (
        <CustomButton {...props} />
    )
};

export default Button;