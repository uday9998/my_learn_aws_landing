'use client';

import { useState } from "react";
import { Roboto } from "next/font/google";
import { TYPES as types, SIZES as sizes } from "../../TextWithIcon/TextWithIconProps";
import { SIZES as btnSizes } from "../../Button/ButtonProps";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { ResetPasswordSend } from "@/app/actions/auth";
import { resetPasswordUser } from "@/app/utils/hooks/authUser";

import Link from "next/link";
import Text, { StaticText, NewText } from "../../TextWithIcon/TextWithIcon";
import Input from "../../Input/Input";
import BaseButton from "../../Button/Button";
import IconNew from "../../IconNew/IconNew";

import memberLoader from '../../../../../../public/memberLoader.svg';

import styles from './ForgotPasswordForm.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

const ForgotPasswordForm = ({
    inner,
    subTitle
}) => {
    const { register, handleSubmit, watch } = useForm();
    const isDisabled = !!watch().Email ? '' : 'disabled';
    const [loading, setLoading] = useState(false);
    const [errField, setErrField] = useState(false);

    const submitForm = async (data) => {
        setLoading(true);
        const resetData = await resetPasswordUser(ResetPasswordSend, {
            email: data.Email
        });
        if(!resetData) {
            setErrField(true)
        }
        setLoading(false);
    }

    return (
        <div className={`w-[400px] flex flex-col gap-[15px] ${styles.forgot__pass__wrapper}`}>
            {
                loading && <div className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0">
                                <img src={memberLoader.src} alt="loader" />
                           </div>
            }
            <div className="flex flex-col">
                <StaticText 
                    inner={inner}
                    type={types.mediumSmall}
                    size={sizes.xxlarge}
                />
                <div className="flex items-center gap-[5px] mt-[15px]">
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
                        labelName="Email"
                        placeholder="Your email address"
                        register={register}
                        required={true}
                        err={errField}
                    />
                    <div className="flex flex-col mt-[15px]">
                        <div className="flex items-center">
                        </div>
                        <BaseButton 
                            text='Confirm'
                            disabled={isDisabled}
                            size={ btnSizes.large50 }
                            theme='custom_style'
                            type="submit"
                        />
                        <p className={`${roboto.className} ${styles.form_footer_text} mt-[10px]`}>
                                By providing your email address and clicking 'Start Free Trial' above, you agree to Miestro's
                            <Link
                                href="/information/privacy"
                                target="_blank"
                            >
                                <span> Terms of Service and Privacy Policy.</span>
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
                    // onClick={openGoogleLogin}
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

ForgotPasswordForm.propTypes = {
    inner: PropTypes.string,
    subTitle: PropTypes.string,
}

export default ForgotPasswordForm;