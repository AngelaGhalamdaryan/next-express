import React from "react";
import PropTypes from 'prop-types';
import Mobile from "./Headers/Mobile";
import Desktop from "./Headers/Desktop";

const Header = (props) => {
    const { isMobile } = props;

    return (
        <>
            {isMobile ? (
                <Mobile />
            ) : (
                <Desktop />
            )}
        </>
    )
};

export default Header