'use client';

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

import { SIZES as btnSizes } from "../../Button/ButtonProps";
import { TYPES as types, SIZES as sizes } from "../../TextWithIcon/TextWithIconProps";
import { authUser } from "@/app/utils/hooks/authUser";
import { login } from "@/app/actions/auth";

import Link from "next/link";
import Input from "../../Input/Input";
import Text, { NewText, StaticText } from "../../TextWithIcon/TextWithIcon";
import CheckBox from "../../CheckBox/CheckBox";
import BaseButton from "../../Button/Button";
import ReCAPTCHA from 'react-google-recaptcha';
import IconNew from "../../IconNew/IconNew";

import memberLoader from '../../../../../../public/memberLoader.svg';

import styles from './LoginForm.module.scss';
import { toast } from "react-toastify";

const LoginForm = ({ inner, subTitle }) => {
    const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY;
    const recaptchaRef = useRef(null);
    const router = useRouter();
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            Email: '',
            Password: ''
        }
    });
    const [isRemember, setIsRemeber] = useState(false);
    const [inputType, setInputType] = useState('password');
    const isDisabled = !!watch().Email && !!watch().Password ? '' : 'disabled';
    const [loading, setLoading] = useState(false);
    const [fieldError, setFieldError] = useState(false);
    const [recaptchaToken, setRecapthcaToken] = useState(null)
    const handleChangeCheckBox = () => {
        setIsRemeber(prevState => !prevState);
    }

    const submitForm = async (data) => {
        setLoading(true);

        if(!recaptchaToken) {
            toast.error('Please complete reCAPTCHA')
            setLoading(false);
            return;
        }

        const userLoginData = {
            email: data.Email,
            password: data.Password,
            isRemember,
            'g-recaptcha-response': recaptchaToken
        };

        const resData = await authUser(login, userLoginData);

        if (!resData) {
            if(recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
            setFieldError(true);
        } else {
            router.push(resData);
        }

        setLoading(false);
    }

    const handleChangeInputType = () => {
        setInputType(prevState => (prevState === 'password' ? '' : 'password'));
    }

    const openGoogleLogin = () => {
        window.open(`${window.location.protocol}//${window.location.hostname}/redirectToProviderGoogle`);
    }

    const handleChangeRecaptcha = (token) => {
        setRecapthcaToken(token)
    }

    return (
        <div className={`w-[400px] flex flex-col gap-[15px] ${styles.form__wrapper}`}>
            {loading && (
                <div className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0">
                    <img src={memberLoader.src} alt="loader" />
                </div>
            )}
            <div className="flex flex-col gap-[10px]">
                <StaticText
                    inner={inner}
                    type={types.mediumSmall}
                    size={sizes.xxlarge}
                />
                <div className="flex items-center gap-[5px]">
                    <NewText
                        inner={subTitle}
                        type={types.regular148}
                        size={sizes.small}
                        style={{ color: '#444C4B' }}
                    />
                    <Link href='/signup' className='hover:bg-[#E8F2F1] ease-in duration-200 rounded-[12px]'>
                        <NewText
                            inner="Sign Up"
                            style={{ cursor: 'pointer', color: '#24554E', padding: '6px 8px' }}
                            type={types.medium}
                            size={sizes.small}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <form className="flex flex-col gap-[11px]" onSubmit={handleSubmit(submitForm)}>
                    <Input
                        inputType="text"
                        labelName="Email"
                        placeholder="Your email address"
                        register={register}
                        err={fieldError}
                    />
                    <Input
                        inputType={inputType}
                        labelName="Password"
                        placeholder="Enter your password"
                        register={register}
                        isPassword={true}
                        handleChangeInputType={handleChangeInputType}
                        err={fieldError}
                    />
                    <div className="flex flex-col gap-[25px] mt-[10px]">
                        <div className="flex justify-between items-center">
                            <CheckBox
                                name='isRemember'
                                label='Remember me'
                                labelPosition='right'
                                checked={isRemember}
                                onChange={handleChangeCheckBox}
                            />
                            <Link href='/forgotpassword' className='hover:bg-[#E8F2F1] ease-in duration-200 rounded-[12px]'>
                                <NewText
                                    inner='Forgot Password'
                                    type={types.medium}
                                    size={sizes.small}
                                    style={{ color: '#24554E', cursor: 'pointer', padding: '6px 8px' }}
                                />
                            </Link>
                        </div>
                        <ReCAPTCHA
                            sitekey={SITE_KEY}
                            onChange={handleChangeRecaptcha}
                            ref={recaptchaRef}
                        />
                        <BaseButton
                            text='Login'
                            disabled={isDisabled}
                            size={ btnSizes.large120 }
                            theme='custom_style'
                            type="submit"
                            style={{fontSize: '16px'}}
                        />
                    </div>
                </form>
            </div>
            <div className="flex flex-col gap-[23px] mt-[8px]">
                <div className="flex gap-4 items-center">
                    <div className="w-full h-[1px]" style={{ background: '#E7E9E9' }}></div>
                    <Text
                        inner="or"
                        type={types.regularDefault}
                        style={{ color: '#727978' }}
                        size={sizes.small}
                    />
                    <div className="w-full h-[1px]" style={{ background: '#E7E9E9' }}></div>
                </div>
                <div className={`hover:bg-[#E8F2F1] ease-in duration-200 ${styles.google__button}`} role='presentation' onClick={openGoogleLogin}>
                    <IconNew name='GoogleSvgM' />
                    <Text
                        inner='Login With Google'
                        type={types.mediumLarge}
                        size={sizes.small}
                        style={{ color: '#24554E' }}
                    />
                </div>
            </div>
        </div>
    )
};

LoginForm.propTypes = {
    inner: PropTypes.string,
    subTitle: PropTypes.string,
}

export default LoginForm;
