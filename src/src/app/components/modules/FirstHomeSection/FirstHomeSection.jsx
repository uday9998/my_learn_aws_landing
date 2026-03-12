'use client'

import { useEffect, useState } from 'react';

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types } from '../../elements/TextWithIcon/TextWithIconProps';

import commHomeImage from '@/app/assets/images/dashboard/comm__home__image.png';
import connectingImage from '@/app/assets/images/dashboard/first__section__create__screen.png';
import commImage from '@/app/assets/images/dashboard/first__section__comm__screen.png';
import memberImage from '@/app/assets/images/dashboard/first__section__member.png';
import createYourOwnRooms from '@/app/assets/images/dashboard/create__your__own__rooms.png';

import styles from './FirstHomeSection.module.scss';

const FirstHomeSection = () => {
    const [changeImage, setChangeImage] = useState(typeof window !== 'undefined' && window.innerWidth <= 1440 && window.innerWidth > 1024);

    const handleResize = () => {
        setChangeImage(window.innerWidth <= 1440 && window.innerWidth > 1024);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className={styles.first__home__section__wrapper}>
            <div className={styles.top__section__wrapper}>
                <div className={styles.texts__wrapper}>
                    <div className={styles.first__title__text}>
                        <p>Combining <span>Smart Tools</span> with <span>Powerful Features</span></p>
                    </div>
                </div>
                <div className={styles.footer__text__wrapper}>
                    <NewText
                        inner='Easily create engaging and futuristic video memberships your audience will love.'
                        type={types.bold900}
                        style={{
                            color: "#444C4B",
                            fontSize: '20px',
                            fontWeight: '400'
                        }}
                        className="text-center z-10"
                    />
                </div>
            </div>
            <div className={styles.info__section}>
                <div className={styles.first__section__wrapper}>
                    <div className={styles.build__wrapper}>
                        <NewText 
                            inner='Build a Connected'
                            type={types.bold800}
                            className="gradient__text"
                            style={{
                                fontFamily: true,
                                fontSize: '40px'
                            }}
                        />
                        <NewText 
                            inner='Community'
                            type={types.bold800}
                            style={{
                                fontFamily: true,
                                fontSize: '52px',
                                color: '#131F1E'
                            }}
                        />
                        <div className={styles.bottom__text__wrapper}>
                            <NewText 
                                inner='Fostering unity, empowering individuals, and cultivating lasting relationships within our connected community.'
                                type={types.bold800}
                                style={{
                                    fontFamily: true,
                                    fontSize: '20px',
                                    color: '#444C4B',
                                    fontWeight: '400',
                                    lineHeight: '170%'
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.images__wrapper} id={styles.top__images__wrappers}>
                        <img src={commHomeImage.src} alt="commHomeImage" />
                        <NewText 
                            inner='Community home screen'
                            type={types.bold800}
                            style={{
                                fontFamily: true,
                                fontSize: '14px',
                                color: '#444C4B',
                                fontWeight: '400',
                                lineHeight: '170%'
                            }}
                        />
                    </div>
                    <div className={styles.images__wrapper} id={styles.top__images__wrappers}>
                        <img src={changeImage ? createYourOwnRooms.src : connectingImage.src} alt="commHomeImage" style={{
                            marginTop: '25px'
                        }} />
                        <NewText 
                            inner='Create your own rooms'
                            type={types.bold800}
                            style={{
                                fontFamily: true,
                                fontSize: '14px',
                                color: '#444C4B',
                                fontWeight: '400',
                                lineHeight: '170%'
                            }}
                        />
                    </div>
                </div>
                <div className={styles.bottom__section__wrapper}>
                    <div className={styles.bottom__image__wrapper} id={styles.bottom__images__wrappers}>
                        <img src={memberImage.src} alt="member image"/>
                        <NewText 
                            inner='Connecting with your product'
                            type={types.bold800}
                            style={{
                                fontFamily: true,
                                fontSize: '14px',
                                color: '#444C4B',
                                fontWeight: '400',
                                lineHeight: '170%',
                                marginLeft: '8px'
                            }}
                        />
                    </div>
                    <div className={styles.bottom__image__wrapper} id={styles.bottom__images__wrappers}>
                        <img src={commImage.src} alt="community image" style={{marginTop: '45px'}} />
                        <NewText 
                            inner='Member management'
                            type={types.bold800}
                            style={{
                                fontFamily: true,
                                fontSize: '14px',
                                color: '#444C4B',
                                fontWeight: '400',
                                lineHeight: '170%',
                                marginLeft: '8px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FirstHomeSection;


