'use client';

import { useEffect, useRef, useState } from "react";
import { heroAnimation } from "@/app/helpers/animations";

import AnimationSignUp from '@/app/assets/jsons/AnimationSignInUp.json';
import AnimationImage from '@/app/assets/images/animation__image.png'

import styles from './AnimationCard.module.scss';

const AnimationCard = () => {
    const [isSafari, setIsSafari] = useState(false);
    const isRendered = useRef(null);

    useEffect(() => {
        let anim;
        if(!isRendered.current) {
            anim = heroAnimation(document.getElementById('animation__container'), AnimationSignUp);
            isRendered.current = true;
        };
        const userAgent = navigator.userAgent;

        if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
            setIsSafari(true); 
        }
    }, []);

    return (
        <>
            {
                true ? <img id='animation__container' className={styles.safari__animation__container} src={AnimationImage.src} alt="" /> : <div id='animation__container' className={styles.animation__container}/>
            }
        </>
    )
};

export default AnimationCard;