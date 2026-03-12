'use client';
import { useRouter } from 'next/navigation';

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import BaseButton from '../../elements/Button/Button';
import { THEMES as themes } from '../../elements/Button/ButtonProps';

import image from '@/app/assets/images/dashboard/illustratuion__second.png';
import mobileImage from '@/app/assets/images/dashboard/mobile__illustration.png';

import styles from './draganddrop.module.scss';

const DragAndDropSection = () => {
    const router = useRouter();

    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };

    return (
        <div className={styles.drag__and__drop__wrapper}>
            <div className={styles.drag__and__drop__container}>
                <div className={styles.texts__wrapper}>
                    <div className={styles.title__wrapper}>
                        <NewText
                            inner='Drag and Drop Customization'
                            size={sizes.size_40}
                            type={types.newBold800}
                            className='gradient__text'
                        />
                    </div>
                    <div className={styles.subtitle__wrapper}>
                        <NewText 
                            inner='To Create Easy Video Memberships'
                            size={sizes.size_52}
                            type={types.newBold800}
                            style={{
                                color: '#131F1E'
                            }}
                        />
                    </div>
                    <div className={styles.footer__wrapper}>
                        <NewText 
                            inner='Create your perfect landing page: empower your business with our intuitive landing page builder. Effortlessly customize every detail to reflect your brand and convert visitors into customers.'
                            size={sizes.xlarge}
                            style={{
                                color: '#444C4B',
                                fontWeight: '400'
                            }}
                        />
                    </div>
                    <div className={styles.button__wrapper}>
                        <BaseButton
                            text="Start Free Trial"
                            style={{
                                minHeight: '56px',
                                fontSize: "16px",
                                fontWeight: "500",
                                padding: '21px 24px 19px 24px'
                            }}
                            onClick={handleNavigateToSignUp}
                            theme={themes.new_primary}
                        />
                    </div>
                </div>
                <div className={styles.image__wrapper}>
                    <img className={styles.desktop__image} src={image.src} alt="vibes pass" />
                    <img className={styles.mobile__image} src={mobileImage.src} alt="vibes pass" />
                </div>
            </div>
        </div>
    )
};

export default DragAndDropSection;