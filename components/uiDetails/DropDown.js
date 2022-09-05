import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from 'styled-components';
import { AiOutlineDown } from "react-icons/ai";

import Link from 'next/link';

const WrapperDropDown = styled.div`
    position: relative;
    cursor: pointer;
`;

const Title = styled.span`
    color: white;
    margin: 0 0 0 12px;
    display: flex;
    align-items: center;
    padding: 10px 0
`;

const CustomLink = styled.a`
    display: flex;
    align-items: center;
    text-transform: capitalize;
`

const DownIconWrapper = styled.span`
    color: white;
    font-size: 12px;
    margin-left: 8px;
    transition: 0.2s;
    ${({ open }) => !!open && (
        css `
            transform: rotate(180deg);       
        `
    )}}
`
const DownPopupWrapper = styled.div`
    position: absolute;
    right: 0;
    min-width: 200px;
    background: #fff;
    border-radius: 10px;
    padding: 6px;
    z-index: 2;
`

const DownPopupItem = styled.div`
    display: block;
    // font-size: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    background-color: #fff;
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    border-radius: 10px;
    transition: 0.2s;
    &:hover {
        background-color: black;
        color: white;
    }
`

const SubMenuIconItem = styled.span`
    margin-right: 10px;
    display: flex;
    align-items: center;
`

const DropDown = (props) => {
    const { title, titleHref, childs, className, open, hoverEffect, onClick } = props;
    const [visibl, setVisibl] = useState(open);
    return (
        <WrapperDropDown
            className={className}
            onMouseMove={() => !!hoverEffect && setVisibl(true)}
            onMouseLeave={() => !!hoverEffect && setVisibl(false)}
            onClick={(e) => !hoverEffect && onClick(e)}
        >
            <Title>
                {!!titleHref && (
                    <Link href={titleHref}>
                        <CustomLink>
                            {title}
                        </CustomLink>
                    </Link>
                )}
                {!titleHref && title}
                {!!childs.length && (
                    <DownIconWrapper open={visibl} >
                        <AiOutlineDown/>
                    </DownIconWrapper>
                )}
            </Title>
            {!!visibl && !!childs.length && (
                <DownPopupWrapper>
                    {childs.map((item, index) => {
                        const { title, href, icon } = item;
                        return (
                                <Link href={href} key={index.toString()}>
                                    <DownPopupItem>
                                        <CustomLink>
                                            <SubMenuIconItem>
                                                {icon}
                                            </SubMenuIconItem>
                                            {title}
                                        </CustomLink>
                                    </DownPopupItem>
                                </Link>
                        )
                    })}
                </DownPopupWrapper>
            )}
        </WrapperDropDown>
    )
}

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    childs: PropTypes.array,
    className: PropTypes.string,
    open: PropTypes.bool,
    hoverEffect: PropTypes.bool,
    onClick: PropTypes.func,
    titleHref: PropTypes.string,
};

DropDown.defaultProps = {
    childs: [],
    className: '',
    open: false,
    hoverEffect: true,
    onClick: () => {},
    titleHref: null,
};

export default DropDown;