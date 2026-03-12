'use client';
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import { NewText } from "../../elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "../../elements/TextWithIcon/TextWithIconProps";
import BaseButton from "../../elements/Button/Button";
import { THEMES as themes } from "../../elements/Button/ButtonProps";
import PropTypes from 'prop-types';
import Modal from "../../elements/Modal/Modal";
import HeroSectionSlider from "./components/HeroSectionSlider";


import WatchVideo from '@/app/assets/videos/videoDemo.mp4';

import styles from './HeroSection.module.scss';
import GradientText from "../../elements/GradientText/GradientText";
import './style.css'

const HeroSection = () => {
    const router = useRouter();
    const [isOpenModalWatch, setIsOpenModalWatch] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);


    const handleNavigateToSignUp = () => {
        router.push('/signup')
    };

    const handleWatchVideo = () => {
        setIsOpenModalWatch(true)
    }

    useEffect(() => {
        const script = document.createElement('script');
            script.async = true;
            script.defer = true;
            script.src = 'https://app.visitortracking.com/assets/js/tracer.js';
            script.onload = () => {
            init_tracer();
        };

        document.body.appendChild(script);

        function init_tracer() {
            var tracer = new Tracer({
            websiteId : "412bf040-4b17-4449-8dd1-9330a901376f",
            async : true,
            debug : false });
        }

        const addAp3Script = () => {
          try {
            const ap3ScriptDoc = document.getElementById('ap3_script');
            if (ap3ScriptDoc) return;

            const ap3cScript = document.createElement('script');
            ap3cScript.setAttribute('id', 'ap3_script');
            ap3cScript.setAttribute('bid', '6672d2c9182dcab49bfab2c5');
            ap3cScript.async = true;
            ap3cScript.src = 'https://cdn.usemevo.com/mevo-sdk.min.js';
            document.head.append(ap3cScript);
            if (document.getElementById('ap3-talk-widget-ui')) {
              document.getElementById('ap3-talk-widget-ui').style.display = 'inline-flex';
            }
          } catch (error) {
          }
        };

        // addAp3Script();
      }, []);

    return (
        <div className={styles.hero__section__wrapper}>
            {isOpenModalWatch && (
                <Modal
                    isHaveCloseIcon={false}
                    closeModal={() => {
                        setIsOpenModalWatch(false);
                        setIsVideoLoaded(false);
                    }}
                >
                    <video
                        src={WatchVideo}
                        controls
                        autoPlay
                        onLoadedData={() => setIsVideoLoaded(true)}
                        style={{ display: isVideoLoaded ? "block" : "none" }}
                    />
                </Modal>
            )}
            <div className={styles.hero__section__container}>
                <div className={styles.hero__section__info}>
                    <div className={styles.texts__wrapper}>
                        <NewText
                            inner='Build, Grow, and Scale Your Membership Business'
                            size={sizes.size_54}
                            type={types.newBold800}
                            lexend={true}
                            style={{
                                color: '#131F1E',
                            }}
                        />
                    </div>
                    <div className={styles.footer__text__wrapper}>
                        <NewText
                            inner='The complete platform where smart tools meet powerful AI to help you create exclusive content, grow your community, and maximize revenue—all in one place.'
                            size={sizes.xxlarge}
                            style={{
                                fontWeight: '400',
                                color: '#444C4B',
                                maxWidth: '600px'
                            }}
                        />
                    </div>
                    <div className={styles.buttons__wrapper}>
                        <div className="banner-button">
                        <BaseButton
                            text="Start Free Trial"
                            style={{
                                minHeight: '56px',
                                fontSize: "16px",
                                fontWeight: "500",
                                padding: '21px 24px 19px 24px',
                                 background: 'linear-gradient(to right, #006838, #96CF24)',
                                 width: '228px',
                               
                            }}
                            onClick={handleNavigateToSignUp}
                            theme={themes.new_primary}
                        />
                        {/* <p className="flex justify-center" style={{fontSize:  '14px', color: '#444C4B', paddingTop: '5px', fontWeight: '300', textAlign: 'center'}}>No credit card required to get started</p> */}

                        </div>
                       
                        <Link href='https://training.miestro.com/demo' target="_blank">
                        <div className='relative inline-block rounded-md'>
                                {/* Gradient border background */}
                                <div  className='absolute inset-0 rounded-md bg-gradient-to-r from-[#006838] to-[#96CF24]'></div>

                                {/* Button with transparent border and background */}
                                <button
                                    style={{ width: '228px', height: '50px' }}
                                    className='relative px-4 sm:px-6 py-3 sm:py-4 text-teal-800 hover:bg-gray-100 transition-colors font-medium rounded-md flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base m-[2px] bg-white'
                                >
                                    
                                    <GradientText
                                        className='fontSize'
                                        text='Book A Demo'
                                    />
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <HeroSectionSlider />
            </div>
        </div>
    )
};

HeroSection.propTypes = {
    isMobile: PropTypes.bool
};

export default HeroSection;
