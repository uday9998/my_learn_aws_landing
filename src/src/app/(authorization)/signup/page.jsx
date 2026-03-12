'use client'
import { useState } from "react";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import { NewTextWithIcon, NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import Link from "next/link";
import RegistrationForm from "@/app/components/elements/Form/RegistrationForm/RegistrationForm";
import SaveCreditCard from "@/app/components/modules/SaveCreditCard/SaveCreditCard";
import Portal from "@/app/components/elements/Portal/Portal";
import { registerUser } from "@/app/utils/hooks/authUser";
import { registerStepOne } from "@/app/actions/auth";

import styles from './signup.module.scss';

const pathName = process.env.NEXT_PUBLIC_PATH

const SignUp = () => {
    const [showSaveCreditCard, setShowSaveCreditCard] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);
    const [registrationPromise, setRegistrationPromise] = useState(null);

    const handleShowSaveCreditCard = (userData) => {
        setRegistrationData(userData);
        setShowSaveCreditCard(true);
        
        // Start registration in background
        const planType = localStorage.getItem('plan_id');
        const userRegisterData = {
            agree: true,
            email: userData.email,
            name: userData.name,
            password: userData.password,
            plan_id: planType && planType !== 'undefined' ? planType : 'miestro-starter',
            'g-recaptcha-response': userData.recaptchaToken
        }
        
        const regPromise = registerUser(registerStepOne, userRegisterData);
        setRegistrationPromise(regPromise);
        
        regPromise.then((newData) => {
            
            if(!newData) {
                setShowSaveCreditCard(false);
                // Let RegistrationForm handle the error
            } else {
                setRegistrationData({
                    ...userData,
                    ...newData,
                    isRegistrationComplete: true
                });
                // Don't clear plan_id here - SaveCreditCard component still needs it
                // localStorage.removeItem('plan_id');
            }
        }).catch((error) => {
            setShowSaveCreditCard(false);
            // Let RegistrationForm handle the error
        });
    };

    const handleRegistrationComplete = async () => {
        if (registrationPromise) {
            try {
                const result = await registrationPromise;
                return result;
            } catch (error) {
                throw error;
            }
        }
        return registrationData;
    };

    const handleBackToRegistration = () => {
        setShowSaveCreditCard(false);
        setRegistrationData(null);
        setRegistrationPromise(null);
    };

    // Show SaveCreditCard as full page portal if active
    if (showSaveCreditCard) {
        return (
            <Portal>
                <SaveCreditCard 
                    user={registrationData} 
                    onRegistrationComplete={handleRegistrationComplete}
                />
            </Portal>
        );
    }

    return (
        <div className={`flex flex-col justify-center items-center gap-[75px] ${styles.signup__wrapper}`}>
            <RegistrationForm
                inner='Create Your Account Below'
                secondInner="Start Your 14 Day Trial Today!"
                subTitle="Already have an account?"
                onShowSaveCreditCard={handleShowSaveCreditCard}
            />
            <div className="flex flex-col items-center mb-[15px]">
                <NewText
                    inner='Need Help?'
                    type={types.regularDefault}
                    size={sizes.small}
                    style={{ color: '#727978' }}
                />
                <Link href='mailto: support@miestro.com'>
                    <NewTextWithIcon
                        iconName='MailContactS'
                        isIconRight={false}
                        inner='support@miestro.com'
                        type={types.regularDefault}
                        size={sizes.small}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>
        </div>
    )
};

export default SignUp;