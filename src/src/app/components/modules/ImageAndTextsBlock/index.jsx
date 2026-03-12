'use client'
import { useRouter } from 'next/navigation';
import { Roboto } from "next/font/google";

import { NewText } from '../../elements/TextWithIcon/TextWithIcon'; 
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import Button from '@/app/components/elements/Button/Button';
import { THEMES as themes } from '../../elements/Button/ButtonProps';
import mobileAffilateImage from '@/app/assets/images/dashboard/membership__image.png';

import styles from './MembershipPotential.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['900'] })

const ImageAndTextsBlock = ({
    imageName,
    buttonText,
    firstFooterText,
    lastFooterText,
    lastTitle,
    secondTitle, 
    firstTitle,
    mobileAffilate
}) => {
    const router = useRouter();
    
    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.image__wrapper}>
                    <img className={mobileAffilate ? styles.desktop__image: ''} src={imageName.src} alt="Affilate Program Dashboard" />
                    <img className={mobileAffilate ? styles.mobile__image: ''} src={mobileAffilateImage.src} alt="Affilate Program Dashboard" />
                </div>
                <div className={styles.texts__wrapper}>
                    <div className={styles.title__text__wrapper}>
                        <p className={roboto.className}>{firstTitle} {secondTitle} <span>{lastTitle}</span></p>
                    </div>
                    <div className={styles.subtitle__wrapper}>
                        <NewText 
                            inner={firstFooterText}
                            size={sizes.xlarge}
                            style={{
                                fontWeight: '400',
                                color: '#444C4B'
                            }}
                        />
                        <NewText 
                            inner={lastFooterText}
                            size={sizes.xlarge}
                            style={{
                                fontWeight: '500',
                                color: '#444C4B',
                            }}
                        />
                    </div>
                    <div className={styles.button__wrapper}>
                        <Button
                            theme={themes.new_primary}
                            style={{ padding: "21px 24px 19px 24px", minHeight: '56px', fontSize: '16px' }}
                            text={buttonText}
                            onClick={handleNavigateToSignUp}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImageAndTextsBlock;