'use client';

import { Lato } from "next/font/google";
import { useState, useEffect, useRef } from "react";

import IconNew from "@/app/components/elements/IconNew/IconNew";
import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { heroAnimation } from "@/app/helpers/animations";
import Animation from '@/app/assets/jsons/problemAnimation.json';
import AnimationMobile from '@/app/assets/jsons/problemAnimationMobile.json';

import styles from './ProblemSection.module.scss';

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const ProblemSection = () => {
    const [ isMobile, setIsMobile ] = useState(false);
    const isRendered = useRef(null);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(!isRendered.current) {
            heroAnimation(document.querySelector("#problem-image"), isMobile ? AnimationMobile : Animation);
            isRendered.current = true;
        }
    }, [isMobile])

    return (
        <div className={`${styles.problem__section__top__wrapper} ${styles.problem__section}`}>
            <div className={ `${styles.problem__section__top__wrapper__inner} ${styles.problem__section__left}`}>
                <div className={styles.desktop__wrapper}>
                    <div className={`absolute ${styles.proble__star}`}>
                        <IconNew name="StarProble" />
                    </div>
                    <IconNew name="TheProblemSection" />
                </div>
                <div className={styles.mobile__wrapper}>
                    <IconNew name="ProblemSvgMobile" />
                </div>
                <div className={`${styles.desktop__wrapper} absolute ${styles.start__problem}`}>
                    <IconNew name="StarGreenProblem" />
                </div>
                <div className={`${styles.mobile__wrapper} absolute top-[60px] left-[-90px] z-0`}>
                    <IconNew name="AttentionMobile" />
                </div>
                <div 
                    className={ `${lato.className} ${styles.only__text__mobile} z-[1] ${styles.only__text} mt-[36px]` }
                >
                    Only <span>10%</span> of Your Customers Online Complete
                    Online Programs.
                </div>
                <div className={styles.footer__text__wrapper}>
                    <NewText
                        inner="But Most Platforms Only Address the Surface Level Problems Such as More Features…"
                        style={{
                            fontWeight: "500",
                            fontFamily: true
                        }}
                        className="mt-[24px]"
                    />
                </div>
            </div>
            <div 
                id="problem-image" 
                className={styles.problem__image} 
            />
        </div>
    )
};

export default ProblemSection;