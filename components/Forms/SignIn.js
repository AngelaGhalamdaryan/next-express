import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Button from '../uiDetails/Button';
import InputPassword from '../uiDetails/InputPassword';
import InputField from '../uiDetails/Input';
import { MdFingerprint } from "react-icons/md";


const FormWrapper = styled.div`
    > button {
        text-transform: capitalize;
    }
`;

const Title = styled.h5`
    font-size: 38px;
    margin: 30px 0;
    text-transform: capitalize;
    // color: #a25200;
`



const SignIn = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [data, setData] = useState({ 
        email: { value: "", error: null, valid: false },
        password: { value: "", error: null, valid: false }
    })

    const validEmail = (v) => {
        setData({ ...data, email: { ...data.email, valid: v } });
    };
    const validPassword = (v) => {
        setData({ ...data, password: { ...data.password, valid: v } });
    };

    const setErrorField = (field) => {
        switch(field) {
            case "email":
                if (data.email.valid) {
                    return setData({ ...data, email: { ...data.email,  error: null } });
                    break
                }
                else {
                    return setData({ ...data, email: { ...data.email,  error: "Invalid email address." } });
                    break
                }
            case "password":
                if (data.password.valid) {
                    return setData({ ...data, password: { ...data.password,  error: null } });
                    break
                }
                else {
                    return setData({ ...data, password: { ...data.password,  error: "Password must be at least 6 characters long" } });
                    break
                }
            
        }
    }
    console.log(data);
    return (
        <FormWrapper className={className}>
            <Title>{t('sign in')}</Title>
            <InputField
                inpProps={{
                    size: "xs",
                    placeholder: t('email'),
                    type: "email",
                    name: "email",
                    value: data.email.value,
                    onChange: (e) => setData({ ...data, email: { ...data.email, value: e.target.value }}),
                    required: true,
                    onBlur: () => setErrorField("email")
                }}
                label={t('email')}
                icon={<MdFingerprint />}
                valid={validEmail}
                error={data.email.error}
            />
            <InputPassword
                inpProps={{ 
                    size: "xs",
                    placeholder: t('password'),
                    required: true,
                    value: data.password.value,
                    onChange: (e) => setData({ ...data, password: { ...data.password, value: e.target.value }}),
                    onBlur: () => setErrorField("password")
                }}
                label={t('password')}
                valid={validPassword}
                error={data.password.error}
            />
            <Button>
                {t('sign in')}
            </Button>
        </FormWrapper>
    )
};

export default SignIn;
