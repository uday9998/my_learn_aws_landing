'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import BaseButton from '../../elements/Button/Button';
import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import { THEMES as themes } from '../../elements/Button/ButtonProps';
import Modal from '../../elements/Modal/Modal';

import WatchVideo from '@/app/assets/videos/videoDemo.mp4';

import styles from './growEmpire.module.scss';

const GrowEmpire = ({
    title='Grow Your Empire By',
    secondTitle='Unlocking Membership Potential',
    description='Our tools are designed for creators who dream big. From flexible membership models to insightful analytics, we provide everything you need to grow your audience and revenue.',
    isWatchDemo=true,
    isPricingPage
}) => {
    const [isOpenModalWatch, setIsOpenModalWatch] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const router = useRouter();
    const handleNavigateToSignUp = () => {
        router.push('/signup')
    };

    const handleWatchVideo = () => {
        setIsOpenModalWatch(true)
    }

    return (
        <div className={styles.grow__empire__wrapper}>
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
            <div className={`${styles.title__wrapper}`}>
                {/* <p className={styles.price__title}>Launch Your Membership Today with Miestro</p> */}
                <NewText 
                    inner={title}
                    size={sizes.size_54}
                    type={types.newBold800}
                    style={{
                        color: '#fff'
                    }}
                    className={isPricingPage ? styles.price__page__title__wrapper : ''}
                />
                <div className={`${styles.inner__wrapper} ${isPricingPage ? styles.second__title__wrapper : ''}`}>
                    <NewText 
                        inner={secondTitle}
                        size={sizes.size_54}
                        type={types.newBold800}
                        style={{
                            color: '#fff'
                        }}
                    />
                </div>
            </div>
            <div className={styles.subtitle__wrapper}>
                {
                    isPricingPage ? <p className={styles.description__text}>Try Miestro free <span>for 14 days</span> and see the difference for yourself!</p> : <NewText 
                        inner={description}
                        size={sizes.xlarge}
                        style={{
                            color: '#F0F2F2',
                            fontWeight: '400'
                        }}
                    />
                }
            </div>
            <div className={`${styles.buttons__wrapper} ${isPricingPage ? styles.price__page__button : ''}`}>
                <div onClick={handleNavigateToSignUp} className={styles.radial__button__wrapper}>
                    <div className={styles.background__wrapper}>
                        <div className={styles.button__wrapper}>
                            <span>Start Free Trial</span>
                        </div>
                    </div>
                </div>
                {
                    isWatchDemo && <Link href='https://demo.miestro.com/' target='_blank'>
                        <BaseButton 
                            text='Watch a Demo'
                            theme={themes.new_secondary}
                            iconColor='#fff'
                            iconName="WatchDemoM"
                            isIconRight={true}
                            style={{
                                border: '1px solid #fff',
                                color: '#fff',
                                padding: '27px',
                                background: '#becbcf',
                                minHeight: '56px'
                            }}
                        />
                    </Link>
                }
            </div>
        </div>
    )
};

export default GrowEmpire;