'use client';
import { useEffect, useState } from "react";

import { TYPES as types, SIZES as sizes } from "../../elements/TextWithIcon/TextWithIconProps";
import links from '@/app/resources/footer-links.json';

import { NewText } from "../../elements/TextWithIcon/TextWithIcon";
import IconNew from "../../elements/IconNew/IconNew";
import LinkGroup from "./components/LinkGroup/LinkGroup";
import logo from '../../../assets/images/new/miestrofooter.png'

import styles from './Footer.module.scss';
import Image from "next/image";

export const openSocialPage = type => {
    let url = "";
    switch (type) {
        case "instagram":
            url = "https://www.instagram.com/miestro_hq/";
            break;
        case "twitter":
            url = "https://twitter.com/miestrohq";
            break;
        case "youtube":
            url = "https://www.youtube.com/channel/UCRI1UCy_HZzhMTAjm7yL0qQ";
            break;
        default:
            url = "https://www.facebook.com/miestrohq";
    }
    window.open(url, "_blank");
};


const FooterDefault = ({ type }) => {
    const [isMobile, setIsmobile] = useState(typeof window !== 'undefined' && window.innerWidth < 1024);

    const socialIconNames = ['Facebook', 'Instagram', 'Twitter', 'Youtube'];

    const handleResize = () => {
        setIsmobile(window?.innerWidth < 1024)
    }

    useEffect(() => {
        window?.addEventListener('resize', handleResize);
    }, [])

    return (
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__container}>
                <div className={styles.logo__wrapper}>
                    <div className={styles.icon__wrapper}>
                        {/* <IconNew name={isMobile ? 'MobileMiestroLogo' : 'MiestroLogo'} /> */}
                        <Image className="footer-logo" src={logo} />
                    </div>
                    <div className={styles.description__wrapper}>
                        <NewText 
                            inner="Build and grow your video membership and community effortlessly with Miestro, the intuitive platform designed for seamless connection and sharing."
                            size={sizes.xlarge}
                            style={{
                                color: '#F0F2F2',
                                fontWeight: '400'
                            }}
                        /> 
                    </div>
                    <div className={styles.social__icons__wrapper}>
                        {
                            socialIconNames.map((socialIcons, index) => {
                                return (
                                   <span onClick={() => openSocialPage(socialIcons.toLowerCase())}>
                                        <IconNew key={index} name={socialIcons} />
                                   </span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.navigation__wrapper}>
                    {links.map((e, index) => {
                        return (
                            <LinkGroup
                                groupTitle={e.title}
                                key={index}
                                links={e.links}
                            />
                        )
                    })}
                </div>
            </div>
                <div className={styles.copyright__section}>
                    <NewText 
                        inner="Copyrights © 2025 Miestro. All Rights Reserved"
                        size={sizes.small}
                        style={{
                            color: '#F0F2F2',
                            fontWeight: '400'
                        }}
                    /> 
                </div>
        </div>
    )
}

export default FooterDefault;