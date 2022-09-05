import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

const Container = (props) => {
    const { children, className } = props;
    return (
        <CustomContainer className={className}>
                {children}
        </CustomContainer>
    );
};

export default Container;