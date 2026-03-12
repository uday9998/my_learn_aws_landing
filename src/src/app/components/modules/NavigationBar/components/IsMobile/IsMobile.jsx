import Link from 'next/link';
import { useState } from "react";

import IconNew from '@/app/components/elements/IconNew/IconNew';
import LinksGroup from '../LinksGroup/LinksGroup';
import Button from '@/app/components/elements/Button/Button';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { THEMES as themes } from '@/app/components/elements/Button/ButtonProps';
import { linkGroups as featuresLinks } from '../FeaturesModalContent/FeaturesModalContent';
import Image from 'next/image';
import styles from './IsMobile.module.scss';
import newlogo from '../../../../../assets/images/new/newmiestro.png'

const IsMobile = () => {
    const [isOpenMobileNavbar, setIsOpenMobileNavbar] = useState(false);
    const [isOpenFeatures, setIsOpenFeatures] = useState(false);
    const [isOpenResources, setIsOpenResources] = useState(false);

    return (
        <div className={`${styles.mobile__wrapper} py-[22px] px-4 w-full items-center justify-between select-none`}>
            <div className={styles.home__modal__logo}>
                <Link href='/'>
                    <Image style={{width: '120px'}} src={newlogo} alt="Miestro Logo" />
                </Link>
            </div>
            <div
                className="flex flex-col gap-[6px] cursor-pointer"
                role="presentation"
                onClick={() => setIsOpenMobileNavbar(true)}
            >
                <div className={styles.home__icon__line} style={{ width: "18px" }} />
                <div className={styles.home__icon__line} style={{ width: "8px" }} />
                <div className={styles.home__icon__line} style={{ width: "13px" }} />
            </div>
            <div
                className={`${styles.mobile__navigation__modal} overflow-y-auto pb-4`}
                style={{ right: isOpenMobileNavbar ? "0%" : "-100%" }}
            >
                <div className="flex flex-col px-4">
                    <div className="flex w-full justify-between items-center py-5">
                        <div />
                        <div
                            className="flex items-center cursor-pointer"
                            role="presentation"
                            onClick={() => setIsOpenMobileNavbar(false)}
                        >
                            <IconNew name="ModalClose" />
                        </div>
                    </div>
                    <div className="flex px-4 flex-col items-center justify-center mt-12">
                        <LinksGroup
                            title="Features"
                            links={function () {
                                let res = []
                                featuresLinks.forEach(item => {
                                    res = [...res, ...item]
                                })
                                return res
                            }()}
                            sublink="features"
                            iconName="FeatureModal"
                            iconDivClassName="absolute top-[-30px] left-0 links_group_icon"
                            closeNavBar={() => setIsOpenMobileNavbar(false)}
                            isOpenGroup={isOpenFeatures}
                        />
                        <Link
                            href='/how-it-works'
                            onClick={() => setIsOpenMobileNavbar(false)}
                        >
                            <Text
                                inner="How it Works"
                                type={types.medium150}
                                size={sizes.medium}
                                className="cursor-pointer my-4"
                                style={{ marginTop: '1rem', marginBottom: '1rem' }}
                            />
                        </Link>
                        <LinksGroup
                            title="Resources"
                            links={[
                                {
                                    link: 'https://miestrouniversity.miestro.com/',
                                    label: 'Miestro University',
                                    isOutside: true
                                },
                                {
                                    link: 'https://www.facebook.com/groups/miestro',
                                    label: 'Facebook Community',
                                    isOutside: true
                                },
                                {
                                    link: 'demo',
                                    label: 'Demo',
                                },
                                {
                                    link: 'https://blog.miestro.com/',
                                    label: 'Blog',
                                    isOutside: true
                                },
                                {
                                    link: 'https://training.miestro.com/resources',
                                    label: 'Training',
                                    isOutside: true
                                },
                                {
                                    link: 'https://tools.miestro.net/',
                                    label: 'Tools',
                                    isOutside: true
                                },
                            ]}
                            closeNavBar={() => setIsOpenMobileNavbar(false)}
                            isOpenGroup={isOpenResources}
                        />
                        <Link
                            href='/pricing'
                            onClick={() => setIsOpenMobileNavbar(false)}
                        >
                            <Text
                                inner="Pricing"
                                type={types.medium150}
                                size={sizes.medium}
                                className="cursor-pointer my-4"
                                style={{ marginTop: '1rem', marginBottom: '1rem' }}
                            />
                        </Link>
                        <a
                            href="https://support.miestro.com"
                            target="_blank" rel="noreferrer"
                            onClick={() => setIsOpenMobileNavbar(false)}
                        >
                            <Text
                                inner="Help"
                                className="cursor-pointer my-4"
                                type={types.medium150}
                                size={sizes.medium}
                                style={{ marginTop: '1rem', marginBottom: '1rem' }}
                            />
                        </a>
                        <div className="flex flex-col gap-3 mt-6 w-full">
                            <Link href='/login'>
                                <Button
                                    theme={themes.secondary}
                                    className="w-full"
                                    style={{ padding: "12px 24px", width: '100%' }}
                                    text="Login"
                                />
                            </Link>
                            <Link onClick={() => {
                                setType('signup')
                                setIsOpenMobileNavbar(false)
                            }} href='/signup'>
                                <Button
                                    theme={themes.primary}
                                    style={{ padding: "12px 24px", width: '100%' }}
                                    text="Start Free Trial"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IsMobile;
