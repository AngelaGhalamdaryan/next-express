import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { passwordValidator } from '../../utils/validatorInputFields';

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
    padding: 0.25rem 0.75rem;
    outline: none;
    border: 1px solid #ff8100;
    font-weight: bold;
    border-radius: 4px;
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



const InputPassword = (props) => {
    const { className, inpProps, label, valid, error } = props;
    const [lockPassword, setLockPassword] = useState(true);
    useEffect(() => {
        if (inpProps.value) {
            valid(passwordValidator(inpProps.value))
        }
    }, [inpProps?.value])
    return (
        <InputWrapper className={`input--password--wrapper ${className}`} >
            {label && (
                <Label htmlFor="input--password">
                    {label}
                    {!!inpProps.required && <RequireSpan> *</RequireSpan>}
                </Label>
            )}
            <Input
                id="input--password"
                type={lockPassword ? "password" : "text"}
                {...inpProps}
                name="password"
                error={error}
            />
            <IconWrapper onClick={() => setLockPassword(!lockPassword)}>
                {lockPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </IconWrapper>
        </InputWrapper>
    )
};

InputPassword.propTypes = {
    valid: PropTypes.func,
};

InputPassword.defaultProps = {
    valid: () => {},
}

export default InputPassword;