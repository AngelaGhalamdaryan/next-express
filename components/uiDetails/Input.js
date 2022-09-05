import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { emailValidator, numberValidator } from '../../utils/validatorInputFields';

const getSize = (size) => {
    switch(size) {
        case 'xs':
            return "width: 100%; height: 38px;";
            break;
        case 'xm' :
            return "width: 100%; height: 48px;";
            break;
        default:
            return "width: 100%; height: 48px;"
    }
};

const InputWrapper = styled.div`
    position: relative;
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    padding: 10px 0;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: bold;
`;

const Input = styled.input`
    background-color: white;
    outline: none;
    border: 1px solid #ff8100;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-weight: bold;
    ::placeholder {
        text-transform: capitalize;
        color: #ff8100b5;
    }
    ${({ size }) => getSize(size)};
    ${({ error }) => !!error && (
        css`
            outline: none;
            border: 1px solid red;
            -webkit-box-shadow: 0px 0px 5px -1px #ED0E00; 
            box-shadow: 0px 0px 4px 1px #ED0E00;
        `
    )};
`;

const IconWrapper = styled.span`
    position: relative;
    right: 9px;
    font-size: 20px;
    height: 20px;
    bottom: 29px;
    float: right;
    cursor: pointer;
    color: #ff6000;
`;

const RequireSpan = styled.span`
    color: #ff8100;
`



const InputField = (props) => {
    const { className, inpProps, label, icon, valid, error } = props;
    const myRef = useRef();
    useEffect(() => {
        if (inpProps.value) {
            switch (inpProps.type) {
                case ("email"):
                    return valid(emailValidator(inpProps.value));
                    break;
                case ("number"): 
                    return valid(numberValidator(inpProps.value));
                    break;
                
            }

        }
    }, [inpProps?.value])
    return (
        <InputWrapper className={`input--password--wrapper ${className}`} >
            {label && (
                <Label htmlFor="input--field">
                    {label}
                    {!!inpProps.required && <RequireSpan> *</RequireSpan>}
                </Label>
            )}
            <Input
                id="input--field"
                ref={myRef}
                {...inpProps}
                error={error}
            />
            <IconWrapper onClick={() => !!myRef.current && myRef.current.focus() }>
                {!!icon && icon}
            </IconWrapper>
        </InputWrapper>
    )
};

InputField.propTypes = {
    valid: PropTypes.func,
};

InputField.defaultProps = {
    valid: () => {},
}

export default InputField;