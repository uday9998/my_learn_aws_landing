'use client';

import { useState, useEffect, useRef } from 'react';
import { heroAnimation } from '@/app/helpers/animations';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text, { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Animation from '@/app/assets/jsons/PoweredByMiestroAnimation.json';
import AnimationMobile from '@/app/assets/jsons/PoweredByMiestroAnimationMobile.json';

import styles from './PoweredBySection.module.scss';

const PoweredBySection = () => {
    const [ isMobile, setIsMobile ] = useState(false);
    const [ isMobileRendered, setIsMobileRendered ] = useState(false);
    const isRendered = useRef(null);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(!isRendered.current && !isMobile) {
            heroAnimation(document.getElementById("mean-animation"), isMobile ? AnimationMobile : Animation)
            isRendered.current = true;
            setIsMobileRendered(false);
        }

        if(isMobile && !isMobileRendered) {
            heroAnimation(document.getElementById("mean-animation"), isMobile ? AnimationMobile : Animation)
            setIsMobileRendered(true);
            isRendered.current = false;
        }
    }, [isMobile]);

    return (
        <div
            className={ `${styles.powered__by__section__wrapper} relative overflow-hidden` }
        >
            <div className="container flex relative">
                {
                    !isMobile && (
                        <div id="mean-animation" />
                    )               
                }
                <div 
                    className={`${styles.header__texts__wrapper} flex relative flex-col`}
                >
                    <div className={styles.title__text__wrapper}>
                        <NewText
                            inner="Here’s What We Mean:"
                            type={types.bold900}
                            style={{
                                lineHeight: "150%",
                                fontFamily: true
                            }}
                            className={`mb-6 ${ isMobile ? "" : "mt-[101px]" }`}
                        />
                    </div>
                    <div className={styles.subitle__wrapper}>
                        <Text
                            inner="The World’s First Platform That Allows You To Build Your Program Using AI."
                            className="mb-8"
                        />
                    </div>
                    <div className={styles.second__title__wrapper}>
                        <Text
                            inner="Powered By Miestro AI"
                            style={{
                                fontWeight: "600",
                                lineHeight: "140%",
                                fontFamily: true
                            }}
                            className="mb-6 netflix__gradient__text"
                        />
                    </div>
                    <div className={styles.second__subtitle__wrapper}>
                        <Text
                            inner="Introducing Miestro AI- Now, as you build out the program, you can come up with the name of your community, program, or masterclass at the click of a button. "
                            className={`mb-8 ${ isMobile ? '' : 'z-10' }`}
                        />
                    </div>
                </div>
                <div
                    className={`${styles.desktop__icon} absolute z-0`}
                    style={{ bottom: "-15%", right: "0%" }}
                >
                    <IconNew name="WhatWeMean" />
                </div>
            </div>

            <div 
                className={`${styles.background__shadow__wrapper} absolute`} 
            >
                <IconNew name="BackgroundShadow" />
            </div>
            {
                isMobile && (
                    <div id="mean-animation" />
                )
            }
        </div>
    )
};

export default PoweredBySection;