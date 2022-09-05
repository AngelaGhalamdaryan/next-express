import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HOME_PAGE } from '../../../constants/routes';
import DropDown from '../../uiDetails/DropDown';
import navData from './navbarData';
import UserDropDown from './UserDropDown';
import { useTranslation } from 'react-i18next';

const Header = styled.header`
    min-height: 88px;
    background-color: black;
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    position: relative;
    top: 0;
    padding: 11.5px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Image = styled.img``

const Span = styled.span`
    color: white;
    font-family: "Subrayada-Bold";
    letter-spacing: 3px;
    font-size: 20px;
`
const CustomLink = styled.a`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
`
const NavWrapperRightBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 40px;
`;

const NavigateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
        margin: 0 10px;
    }
    .navbar--item {
        > div {
            min-width: 250px;
        }
    }
`


const Desktop = () => {
    const { t } = useTranslation();
    return (
        <Header>
            <LogoWrapper>
                <Link href={HOME_PAGE}>
                    <CustomLink>
                        <Image src="/icons/orangeSmall.png" loading="lazy"/>
                        <Span>Mantissa</Span>
                    </CustomLink>
                </Link>
            </LogoWrapper>
            <NavWrapperRightBlock>
                <NavigateWrapper>
                    {navData.map((menuItem, index) => {
                        const { title, submenu, href } = menuItem;
                        const translateSubmenu = submenu.map((elem) => { 
                            return { ...elem, title: t(`${elem.title}`) }
                        })
                        return (
                            <DropDown
                                title={t(`${title}`)}
                                titleHref={href}
                                childs={translateSubmenu}
                                key={index.toString()}
                                className="navbar--item"
                            />
                        )
                    })}
                </NavigateWrapper>
                <UserDropDown />
            </NavWrapperRightBlock>
        </Header>
    )
};

export default Desktop;