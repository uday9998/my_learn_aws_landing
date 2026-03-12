'use client';
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import rightBackground from '@/app/assets/images/pricing/right__background__image.png';
import leftBackground from '@/app/assets/images/pricing/left__background__image.png';

import styles from './PricingTop.module.scss';

const PricingTop = () => {
    return (
        <div style={{
            backgroundImage: `url(${rightBackground.src}), url(${leftBackground.src})`,
            backgroundPosition: `calc(100% - 16%) 60%, 200px 276px`, 
            backgroundRepeat: `no-repeat, no-repeat`
        }} className={styles.pricing__top__wrapper}>
            <div className={styles.texts__section__wrapper}>
                <div className={styles.title__wrapper}>
                    <Text
                        inner='Explore New Pricing Options!'
                        type={types.bold800}
                        className='gradient__text'
                        fontFamily='lato'
                        isTitle={ true }
                    />
                </div>
                <div className={styles.subtitle__wrapper}>
                    <Text
                        inner='Choose the perfect plan to power your membership experience.'
                        type={types.bold900}
                        fontFamily='lato'
                        isSubtitle={ true }
                    />
                </div>
                <div className={styles.description__wrapper}>
                    <Text
                        inner='Enjoy features like video hosting, community engagement and apps—designed to become more valuable as you grow.'
                        type={types.bold400}
                    />
                </div>
            </div>
        </div>
    )
};

export default PricingTop;