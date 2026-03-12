'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Roboto } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation'

import PropTypes from "prop-types";
import { SIZES as btnSizes } from "../../Button/ButtonProps";
import { TYPES as types, SIZES as sizes } from "../../TextWithIcon/TextWithIconProps";
import { resetPasswordUserEmail } from "@/app/utils/hooks/authUser";
import { resetPassword } from "@/app/actions/auth";

import Input from "../../Input/Input";
import { NewText, StaticText } from "../../TextWithIcon/TextWithIcon";
import BaseButton from "../../Button/Button";
import Link from 'next/link';

import memberLoader from '../../../../../../public/memberLoader.svg';

import styles from './ResetPasswordForm.module.scss';

const roboto = Roboto({subsets: ['latin'], weight: ['400']});

const LoginForm = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            Email: '',
            ['New Password']: '',
            ['Confirm Password']: ''
        },
    });
    const [inputType, setInputType] = useState('password');
    const isDisabled = !!watch().Email && !!watch()['New Password'] && !!watch()['Confirm Password'] && watch('New Password') === watch('Confirm Password') ? '' : 'disabled';

    const submitForm = async (data) => {
        const token = pathname.split('/'); 

        const newData = {
            email: data.Email,
            password: data['New Password'],
            password_confirmation: data['Confirm Password'],
            token: token[token.length - 1]
        };

        const resetData = await resetPasswordUserEmail(resetPassword, newData);

        router.push('/password-updated');
    }

    const handleChangeInputType = () => {
        setInputType(prevState => {
            return prevState === 'password' ? '' : 'password';
        })
    }

    return (
        <div className={`${styles.reset__password__wrapper} w-[566px] flex flex-col gap-[15px] p-[50px] mt-[70px]`}>
            <div className="flex flex-col gap-[10px] items-center">
                <StaticText 
                    inner='Password Recovery'
                    type={types.mediumSmall}
                    size={sizes.xxlarge}
                />
                <div className="flex items-center gap-[5px]">
                    <NewText 
                        inner='Please, enter your new password'
                        type={types.regular148}
                        size={sizes.medium}
                        style={{ color: '#444C4B' }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[16px] w-[100%]">
                <form className="flex flex-col gap-[11px]" onSubmit={handleSubmit(submitForm)}>
                    <Input 
                        inputType="text"
                        labelName="Email"
                        placeholder="Your email address"
                        register={register}
                    />
                    <div className="gap-0">
                        <Input 
                            inputType={inputType}
                            labelName="New Password"
                            placeholder="Enter your password"
                            register={register}
                            isPassword={true}
                            handleChangeInputType={handleChangeInputType}
                        />
                        <div className='flex flex-col'>
                            {
                                watch('New Password').length < 6 && <span className={`${styles.input__footer__text} ${roboto.className}`}>The password must be 6 characters or more</span>
                            }
                        
                            {
                                watch('New Password') !== watch('Confirm Password') && <span className={`${styles.input__footer__text} ${roboto.className} ${styles.error_text}`}>The password confirmation does not match.</span>
                            }
                        </div>
                    </div>
                    <Input 
                        inputType={inputType}
                        labelName="Confirm Password"
                        register={register}
                        isPassword={true}
                        handleChangeInputType={handleChangeInputType}
                        placeholder="Enter your confirm password"
                    />

                    <div className="flex flex-col gap-[25px] mt-[10px]">
                        <BaseButton 
                            text='Confirm'
                            disabled={isDisabled}
                            size={ btnSizes.large50 }
                            theme='custom_style'
                            type="submit"
                        />
                    </div>
                    <div className="flex justify-center mt-[15px]">
                        <Link href='/login'>
                            <NewText
                                inner='Back to the Sign In Screen'
                                type={types.mediumLarge}
                                size={sizes.small}
                                onClick={() => goToLogin()}
                                style={{ color: '#24554E', cursor: 'pointer' }}
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

LoginForm.propTypes = {
    inner: PropTypes.string,
    subTitle: PropTypes.string,
}

export default LoginForm;