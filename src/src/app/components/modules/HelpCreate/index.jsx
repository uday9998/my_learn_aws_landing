'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

import { NewText } from "../../elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes, SIZES } from "../../elements/TextWithIcon/TextWithIconProps";
import BaseButton from "../../elements/Button/Button";
import { THEMES as themes } from "../../elements/Button/ButtonProps";
import Modal from "../../elements/Modal/Modal";

import helpCreateImage from '@/app/assets/images/dashboard/help__create__image.png';
import helpCreateImageMobile from '@/app/assets/images/dashboard/help__create__image__mobile.png';
import WatchVideo from '@/app/assets/videos/videoDemo.mp4';

import styles from './helpCreate.module.scss';

const HelpCreate = () => {
    const router = useRouter();
    const [isOpenModalWatch, setIsOpenModalWatch] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };

    const handleWatchVideo = () => {
        setIsOpenModalWatch(true)
    }

    return (
        <div className={styles.help__create__wrapper}>
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
            <div className={styles.help__create__container}>
                <div className={styles.title__wrapper}>
                    <NewText 
                        inner="Let Us Help You Create Your Vision"
                        size={sizes.size_52}
                        type={types.newBold800}
                    />
                </div>
                <div className={styles.info__wrapper}>
                    <div className={styles.info__inner__wrapper}>
                        <div className={styles.inner__title__wrapper}>
                            <NewText
                                inner="Convert Your Followers Into Committed Members"
                                size={sizes.size_40}
                                type={types.newBold800}
                            />
                        </div>
                        <div className={styles.subtitles__wrapper}>
                            <NewText
                                inner="On a platform that's all yours, accessible across all devices."
                                size={sizes.xlarge}
                                style={{
                                    fontWeight: '200',
                                    color: '#444C4B'
                                }}
                            />
                            <NewText 
                                inner="Miestro empowers you to build a community that's not just about views or likes but about real engagement and loyalty."
                                size={sizes.xlarge}
                                style={{
                                    fontWeight: '400',
                                    color: '#444C4B'
                                }}
                            />
                        </div>
                        <div className={styles.buttons__wrapper}>
                            <BaseButton
                                text="Start Free Trial"
                                style={{
                                    height: "56px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    minHeight: '56px',
                                    padding: '21px 24px 19px 24px'
                                }}
                                onClick={handleNavigateToSignUp}
                                theme={themes.new_primary}
                            />
                            <BaseButton
                                text="Watch Tutorials"
                                iconName="WatchDemoM"
                                isIconRight={true}
                                style={{
                                    height: "56px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    minWidth: "186px",
                                    minHeight: '56px',
                                    padding: '21px 24px 19px 24px'
                                }}
                                onClick={handleWatchVideo}
                                theme={themes.new_secondary}
                            />
                        </div>
                    </div>
                    <div className={styles.img__wrapper}>
                        <img className={styles.desktop__img} src={helpCreateImage.src} alt="Commited Members" />
                        <img className={styles.mobile__img} src={helpCreateImageMobile.src} alt="Commited Members" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HelpCreate;