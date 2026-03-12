'use client'
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import axios from "axios";

import { TYPES as types, SIZES as sizes } from "../../TextWithIcon/TextWithIconProps";
import { SIZES as btnSizes } from "../../Button/ButtonProps";
import { Roboto } from "next/font/google";
import ReCAPTCHA from 'react-google-recaptcha';

import Link from "next/link";
import Text, { StaticText, NewText } from "../../TextWithIcon/TextWithIcon";
import Input from "../../Input/Input";
import BaseButton from "../../Button/Button";
import IconNew from "../../IconNew/IconNew";

import styles from './RegistrationForm.module.scss';
import { toast } from "react-toastify";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

// API URL following the existing pattern
const apiUrl = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

const RegistrationForm = ({
    inner,
    secondInner,
    subTitle,
    onShowSaveCreditCard
}) => {
    const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY;
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecapthcaToken] = useState(null)
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            password: ''
        }
    });

    const [inputType, setInputType] = useState('password');
   
    const [loading] = useState(false);
  

    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const planId = localStorage.getItem("plan_id");

        if(planId && planId !== 'undefined') {
            setShowText(true)
        }

        return () => {
            // Don't clear plan_id on component unmount - SaveCreditCard still needs it
            // localStorage.removeItem('plan_id')
        }
    }, [])

    //Disable recaptcha

    const submitForm = async (data) => {
        if(!recaptchaToken) {
            toast.error('Please complete reCAPTCHA')
            return;
        }

        try {
            // Check if email already exists following the existing pattern
            const response = await axios.post(
                `${apiUrl}/auth/check-email`, 
                { email: data.email }
            );

            if (response.data.exists) {
                toast.error('Email already exists.');
                return;
            }

            const userData = {
                name: data.fullName,
                email: data.email,
                password: data.password,
                recaptchaToken: recaptchaToken
            };
            
            // Call the parent function to show SaveCreditCard
            onShowSaveCreditCard(userData);
        } catch (error) {
            toast.error('Error validating email. Please try again.');
        }
    }


    const handleChangeInputType = () => {
        setInputType(prevState => {
            return prevState === 'password' ? '' : 'password';
        })
    }

    const openGoogleLogin = () => {
        window.open(`${window.location.protocol}//${window.location.hostname}/redirectToProviderGoogle`)
    }

    const handleChangeRecaptcha = (token) => {
        setRecapthcaToken(token)
    }


    return (
        <div className={`w-[400px] flex flex-col gap-[15px] ${styles.registartion__wrapper}`}>
            {
                loading && <div className={`${styles.loading__wrapper} flex items-center justify-center absolute top-0 right-0 bottom-0 left-0 z-10`}>
                                <p className={roboto.className}>
                                    Please Wait While Your Miestro Account Is Being Set Up!
                                </p>
                           </div>
            }
            <div className="flex flex-col">
                <StaticText 
                    inner={inner}
                    type={types.mediumSmall}
                    size={sizes.xxlarge}
                />
                {
                    showText && <StaticText 
                        inner={secondInner}
                        type={types.mediumSmall}
                        size={sizes.xxlarge}
                    />
                }
                
                <div style={{
                    marginTop: showText ? '15px' : 0
                }} className="flex items-center gap-[5px] mt-[15px]">
                    <NewText 
                        inner={subTitle}
                        type={types.regular160}
                        size={sizes.medium}
                        style={{ color: '#444C4B' }}
                    />
                    <br />
                    <Link href='/login' className='hover:bg-[#E8F2F1] ease-in duration-200 rounded-[12px]'>
                        <NewText
                            inner="Login"
                            style={{ cursor: 'pointer', color: '#24554E', padding: '6px 8px', fontWeight: '500' }}
                            type={types.regular160}
                            size={sizes.medium}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <form
                    className="flex flex-col gap-[11px]" 
                    onSubmit={handleSubmit(submitForm)}
                >
                    <Input 
                        inputType="text"
                        labelName="Full Name"
                        name="fullName"
                        placeholder="Enter your first and last name"
                        register={register}
                        required={true}
                        err={!!errors.fullName}
                        customError={errors.fullName?.message}
                    />
                    <Input 
                        inputType="text"
                        labelName="Email"
                        name="email"
                        placeholder="Your email address"
                        register={register}
                        required={true}
                        err={!!errors.email}
                        customError={errors.email?.message}
                    />
                    <Input 
                        inputType={inputType}
                        labelName="Password"
                        name="password"
                        placeholder="Enter your password"
                        register={register}
                        isPassword={true}
                        handleChangeInputType={handleChangeInputType}
                        required={true}
                        err={!!errors.password}
                        customError={errors.password?.message}
                    />

                    <div className="flex flex-col">
                        <div className="flex items-center">
                        </div>
                        <ReCAPTCHA
                            sitekey={SITE_KEY}
                            onChange={handleChangeRecaptcha}
                            ref={recaptchaRef}
                        />
                        <BaseButton 
                            text={showText ? 'Start Free Trial' : 'Start Free Trial'}
                            disabled={!isValid || !recaptchaToken}
                            size={ btnSizes.large50 }
                            theme='custom_style'
                            type="submit"
                            style={{
                                marginTop: '10px'
                            }}
                        />
                        <p className={`${styles.form_footer_text} ${roboto.className} mt-[10px]`}>
                                By providing your email address and clicking 'Start Free Trial' above, you agree to Miestro's
                            <Link
                                href="/information/privacy"
                                target="_blank"
                            >
                                <span> Terms of Service and Privacy Policy. </span>
                             </Link> 
                            You can change your communication preferences anytime.
                        </p>
                        
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
                <div 
                    className={`hover:bg-[#E8F2F1] ease-in duration-200 ${styles.google__button}`}
                    role='presentation' 
                    onClick={openGoogleLogin}
                >
                    <IconNew name='GoogleSvgM' />
                    <Text
                        inner='Sign Up With Google'
                        type={types.mediumLarge}
                        size={sizes.small}
                        style={{ color: '#24554E' }}
                    />
                </div>
            </div>
        </div>
    )
};

RegistrationForm.propTypes = {
    inner: PropTypes.string,
    subTitle: PropTypes.string,
    secondInner: PropTypes.string,
    onShowSaveCreditCard: PropTypes.func.isRequired
}

export default RegistrationForm