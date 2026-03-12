'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import { THEMES as themes } from '../../elements/Button/ButtonProps';
import { usePathname, useRouter } from 'next/navigation';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text, { TextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';
import FeaturesModalContent from './components/FeaturesModalContent/FeaturesModalContent';
import ResourcesModalContent from './components/ResourcesModalContent/ResourcesModalContent';
import IsMobile from './components/IsMobile/IsMobile';
import Image from 'next/image';
import newlogo from '../../../assets/images/new/newmiestro.png'

import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpenFeatures, setIsOpenFeatures] = useState(false);
    const [isOpenResources, setIsOpenResources] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    const handleOpenFeatures = () => {
        setIsOpenFeatures(prevState => !prevState);
    }

    const handleNavigateToLogin = () => {
        router.push('/login');
    }

    const handleNavigateToSignUp = () => {
        router.push('/signup');
    }

    const handleCloseModals = () => {
        setIsOpenFeatures(false);
        setIsOpenResources(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsFixed(window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        const storageKey = Boolean(localStorage.getItem('openMenu'));

        if (!scrollY && storageKey) {
            setIsOpenFeatures(storageKey)
            localStorage.removeItem('openMenu')
        }
    }, [scrollY])

    return (
        <>
            {!pathname.includes('login') && !pathname.includes('signup') && !pathname.includes('forgotpassword') && <IsMobile />}
            {
                !pathname.includes('login') && !pathname.includes('signup') && !pathname.includes('forgotpassword') ? <>
                    <div className={`${styles.resoucres__modal} ${isOpenResources ? styles.resoucres__modal__open : ''}`}>
                        {
                            isOpenResources && (
                                <ResourcesModalContent onClose={() => setIsOpenResources(false)} />
                            )
                        }
                    </div>
                    <div className={`${styles['resoucres__modal']} ${isOpenFeatures ? styles['resoucres__modal__open'] : ''}`}>
                        <FeaturesModalContent onClose={handleOpenFeatures} />
                    </div>
                    {(isOpenFeatures || isOpenResources) && (
                        <div className={styles["resoucres__modal__close"]}
                            role="presentation"
                            onClick={() => {
                                setIsOpenFeatures(false)
                                setIsOpenResources(false)
                            }}
                        ></div>
                    )}
                    <div className={`align-middle ${styles.navigation} ${isFixed ? styles.fixed : ''} justify-between w-full p-[20px] container`}>
                        <div className="flex align-middle items-center z-[100]" role="presentation">
                            <Link href='/'>
                                <Image src={newlogo} alt="Miestro Logo" />
                            </Link>
                        </div>
                        <div className={`flex align-middle ${styles['navbar']} items-center`}>
                            <div className={`relative flex ${isOpenFeatures ? styles['navbar__active'] : ''}`}>
                                <TextWithIcon
                                    inner="Features"
                                    type={types.medium150}
                                    generalStyles={{ cursor: 'pointer' }}
                                    size={sizes.medium}
                                    iconName="ResoucresDropDown"
                                    isIconRight={true}
                                    className={`cursor-pointer`}
                                    iconProps={{
                                        style: { transform: `rotate(${!isOpenFeatures ? 180 : 0}deg)`, transition: '0.3s easy' }
                                    }}
                                    onClick={() => {
                                        setIsOpenFeatures(!isOpenFeatures)
                                        setIsOpenResources(false)
                                    }}
                                />
                            </div>
                            <Link onClick={handleCloseModals} className={pathname.includes('how-it-works') && !isOpenFeatures && !isOpenResources ? styles.active : ''} href='/how-it-works'>
                                <Text
                                    inner="How it Works"
                                    type={types.medium150}
                                    size={sizes.medium}
                                    className="cursor-pointer"
                                />
                            </Link>
                            <div className={`relative flex ${isOpenResources ? styles['navbar__active'] : ''}`}>
                                <TextWithIcon
                                    inner="Resources"
                                    type={types.medium150}
                                    generalStyles={{ cursor: 'pointer' }}
                                    size={sizes.medium}
                                    iconProps={{
                                        style: { transform: `rotate(${!isOpenResources ? 180 : 0}deg)`, transition: '0.3s easy' }
                                    }}
                                    iconName="ResoucresDropDown"
                                    isIconRight={true}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setIsOpenResources(!isOpenResources)
                                        setIsOpenFeatures(false)
                                    }}
                                />
                            </div>
                            <Link onClick={handleCloseModals} className={pathname.includes('pricing') && !isOpenFeatures && !isOpenResources ? styles.active : ''} href='/pricing'>
                                <Text
                                    inner="Pricing"
                                    type={types.medium150}
                                    size={sizes.medium}
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href="https://support.miestro.com" target="_blank" rel="noreferrer">
                                <Text
                                    inner="Help"
                                    className="cursor-pointer"
                                    type={types.medium150}
                                    size={sizes.medium}
                                />
                            </Link>
                        </div>
                        <div className={`${styles.button__wrapper} flex gap-4 z-[100]`}>
                            <div className="relative inline-block rounded-md">
                                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#006838] to-[#96CF24]"></div>

                                <Button
                                    theme={themes.secondary}
                                    style={{
                                        padding: "12px 24px 12px 24px",
                                        margin: '2px',
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: 'inherit',
                                        background: '#fff',
                                        border: 'none',
                                        height: '35px'
                                    }}
                                    text="Login"
                                    onClick={handleNavigateToLogin}
                                />
                            </div>
                            <Button
                                theme={themes.primary}
                                style={{ padding: "15px 24px 13px 24px", background: 'linear-gradient(to right, #006838, #96CF24)' }}
                                text="Start Free Trial"
                                onClick={handleNavigateToSignUp}
                            />
                        </div>
                    </div>
                </> : null
            }
        </>
    )
}

NavigationBar.propType = {
    isMobile: PropTypes.bool
}

export default NavigationBar;