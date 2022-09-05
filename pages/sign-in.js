import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Container from '../components/Wrapper/Container';
import Button from '../components/uiDetails/Button';
import SignInForm from '../components/Forms/SignIn';

const SignInWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 88px);
    padding: 0 60px;
    // background: rgb(0,0,0);
    // background: linear-gradient(165deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(244,244,244,1) 35%, rgba(242,242,242,1) 100%);
    .sign--in--container {
        position: relative;
        z-index: 1;
        display: flex
    }
`;

const ClipPathBlock = styled.div`
    clip-path: polygon(0 0, 0 100%, 100% 0);
    width: 60%;
    height: calc(100% - 88px);
    position: absolute;
    left: 0;
    background-color: black;
`;

const LeftBlackBlock = styled.div`
    width: 50%;
    height: calc(100vh - 88px);
    padding: 5% 0 0;
    button {
        text-transform: capitalize;
    }
`;

const LeftBlackBlockTitle = styled.h1`
    color: white;
    margin: 0;
    font-family: "Ruso-Title";
    letter-spacing: 5px;
    font-size: 48px;
`;
const LeftBlackBlockHintText = styled.p`
    width: 60%;
    color: hsla(0,0%,100%,.6);
    font-size: 34px;
`;

const RightBlockSignInForm = styled.div`
    width: 30%;
    position: relative;
    top: 10vw;
    h1 {
        color: black;
    }
`



const SignIn = () => {
    const { t } = useTranslation();
    return (
        <SignInWrapper>
            <ClipPathBlock />
            <Container className={"sign--in--container"}>
                <LeftBlackBlock>
                    <LeftBlackBlockTitle>{t("Welcome To Back")}</LeftBlackBlockTitle>
                    <LeftBlackBlockHintText>{t("Create your account it's totally free")}</LeftBlackBlockHintText>
                    <Button outline size="xm">{t("sign up")}</Button>
                </LeftBlackBlock>
                <RightBlockSignInForm>
                    <SignInForm />
                </RightBlockSignInForm>
            </Container>
        </SignInWrapper>
    )
};

export default SignIn;