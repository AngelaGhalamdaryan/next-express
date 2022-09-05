import React, { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AiOutlineUser, AiOutlineDown } from "react-icons/ai";
import Button from '../../uiDetails/Button';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';


const Wrapper = styled.div`
    position: relative;
`;

const PaddingWrapper = styled.div`
    padding: 10px 0;
`;
const AvatarWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 40%;
    cursor: pointer;
    border: 2px solid #ff8100;
    box-shadow: 0px 8px 16px rgb(226 115 0 / 16%);
`;

const Avatar = styled.div`
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff8100;
    width: 100%;
    height: 40px;
    img {
        object-fit: contain;
    }
`;

const DownPopUpWrapper = styled.div`
    position: absolute;
    right: 0;
    min-width: 200px;
    background: #fff;
    border-radius: 10px;
    padding: 20px 6px;
    z-index: 2;
`;

const BtnGroupSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px 0 0;
    button {
        display: block;
        width: calc(50% - 5px);
        min-width: calc(50% - 3px);
        height: 35px;
        font-size: 12px;
        text-transform: capitalize;
    };
    
    ${({ userAuth }) => !!userAuth && (
        css`
            button {
                width: 100%;
            }
        `
    )};

`;

const ChangeLangWrapper = styled.div`
    cursor: pointer;
    padding: 7px 0;
    border-bottom: 1px solid #0000002e;
    border-top: 1px solid #0000002e;
    
`;
const ChangLangSelectedTitleWrapper = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    user-select: none;
`;
const LengSelectedTitle = styled.div`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-size: 14px;
    // font-family: "Space-Grotesk-Regular";
`;
const FlugImg = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    object-fit: contain;
`;
const WrapperDownIcon = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    transition: 0.2s;
    ${({ open } ) => open && (
        css`
            transform: rotate(180deg);
        `
    )}
`;

const WrapperLanguageList = styled.div`
    padding: 10px 6px;
    user-select: none;
`;

const WrapperLanguageItemInList = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    column-gap: 10px;
    &:hover {
        background-color: black;
        color: white;
    }

`;
const LanguageItemTitleInList = styled.div`
    user-select: none;

`;


const languageMapData = {
    en: {
        title: "English",
        flug: "/flugs/united-states.png"
    },
    ru: {
        title: "Русский",
        flug: "/flugs/russia.png"
    },
    am: {
        title: "Հայերեն",
        flug: "/flugs/armenia.png"
    }
}

const UserDropDown = (props) => {
    const { userAuth } = props;
    const [open, setOpen] = useState(false);
    const [languageListBool, setLanguageListBool] = useState(false);
    const myRef = useRef();
    const { t, i18n } = useTranslation();
    const router = useRouter();

    const handleClickOutside = (e) => {
      if (!myRef.current?.contains(e.target)) {
        setLanguageListBool(false);
      }
    };

    const clickChangeRoute = (link) => {
        router.push(link);
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguageListBool(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [myRef]);


    return (
        <Wrapper 
            onMouseMove={() => setOpen(true)}
            onMouseLeave={() => {
                setOpen(false);
                setLanguageListBool(false);
            }}
        >
            <PaddingWrapper>
            <AvatarWrapper>
                <Avatar>
                    {!userAuth && <AiOutlineUser />}
                </Avatar>
            </AvatarWrapper>
            </PaddingWrapper>
            {open && (
                <DownPopUpWrapper>
                        <ChangeLangWrapper ref={myRef}>
                            <ChangLangSelectedTitleWrapper onClick={(e) => setLanguageListBool(!languageListBool)}>
                                <LengSelectedTitle>
                                    <FlugImg src={languageMapData[i18n.language].flug} loading="lazy" />
                                    {languageMapData[i18n.language].title}
                                </LengSelectedTitle>
                                <WrapperDownIcon open={languageListBool}>
                                    <AiOutlineDown />
                                </WrapperDownIcon>
                            </ChangLangSelectedTitleWrapper>
                            {!!languageListBool && (
                                <WrapperLanguageList>
                                    {Object.keys(languageMapData).filter(elem => elem !== i18n.language).map((elem, index) => {
                                        const lang = languageMapData[elem];
                                        return (
                                            <WrapperLanguageItemInList
                                                onClick={() => changeLanguage(elem)}
                                                key={index.toString()}
                                            >
                                                <FlugImg src={lang.flug} />
                                                <LanguageItemTitleInList>{lang.title}</LanguageItemTitleInList>
                                            </WrapperLanguageItemInList>
                                        )
                                    })}
                                </WrapperLanguageList>
                            )}
                        </ChangeLangWrapper>
                        <BtnGroupSection userAuth={userAuth}>
                            {!userAuth && (
                                <>
                                    <Button
                                        size="xs"
                                        outline
                                        onClick={() => clickChangeRoute("sign-in")}
                                    >
                                        {t("sign in")}
                                    </Button>
                                    <Button
                                        size="xs"
                                        onClick={() => clickChangeRoute("sign-up")}
                                    >
                                        {t("sign up")}
                                    </Button>
                                </>
                            )}
                            {userAuth && <Button size="xl" outline>{t("sign out")}</Button>}
                        </BtnGroupSection>                        
                </DownPopUpWrapper>
            )}
        </Wrapper>
    )
};

UserDropDown.propTypes = {
    userAuth: PropTypes.bool,
};

UserDropDown.defaultProps = {
    userAuth: false,
};

export default UserDropDown;