import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../uiDetails/Button';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 88px);
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
`;

const WrapperChild = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Column = styled.div`
    width: 50%;
`;

const Title = styled.h1`
    font-family: "Ruso-Title";
    color: white;
    letter-spacing: 5px;
    font-size: 58px
`;

const HintText = styled.p`
    margin: 30px 0 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    color: hsla(0,0%,100%,.6);
    max-width: 475px;
`
const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    button {
        margin-right: 10px;
    }
`

const Welcome = (props) => {
    const { title, hintText, firstBtn, lastBtn  } = props;
    return (
        <Wrapper>
            <WrapperChild>
                <Column className="column--left">
                    <Title>{title}</Title>
                    <HintText>{hintText}</HintText>
                    {(!!firstBtn || !!lastBtn) && (
                        <BtnWrapper>
                            {!!firstBtn && <Button {...firstBtn} />}
                            {!!lastBtn && <Button {...lastBtn} />}
                        </BtnWrapper>
                    )}

                </Column>
                <Column className="column--right">
                </Column>
            </WrapperChild>
        </Wrapper>
    )
};

Welcome.propTypes = {
    title: PropTypes.string,
    hintText: PropTypes.string,
    firstBtn: PropTypes.object,
    lastBtn: PropTypes.object,
};

Welcome.defaultProps = {
    title: "Welcome To Mantissa LLC",
    hintText: "Launch your own community-driven NFT universe baked with social tools, media services, and distribution - underpinned by the native $XYZ token.",
    firstBtn: null,
    lastBtn: null,
}


export default Welcome;