'use client'

import { helpCardsData } from '@/app/constants';
import Text, { TextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import BaseButton from '@/app/components/elements/Button/Button';
import { THEMES as themes } from '@/app/components/elements/Button/ButtonProps';

import styles from './PricingHelpCards.module.scss';

const PricingHelpCards = () => {
    const handleNavigate = (url) => {
        window.open(url, '_blank')
    };

    return (
        <div className={styles.cards__wrapper}>
            <div className={styles.inner__card__container}>
                <div className={styles.top__title__wrappar}>
                    <Text 
                        inner='Maximize Your Potential with Miestro:'
                    />
                </div>
               <div className={styles.inner__cards__wrapper}>
                {
                        helpCardsData.map(card => {
                            return (
                                <div onClick={() => handleNavigate(card.navigateSrc)} className={styles.card}>
                                    <img src={card.imgSrc.src} alt="" />
                                    <div className={styles.title__wrapper}>
                                        <Text
                                            inner={card.title}
                                        />
                                    </div>
                                    <div className={styles.description__wrapper}>
                                        <Text 
                                            inner={card.description}
                                        />
                                    </div>
                                    <div className={styles.button__wrpaper}>
                                        <TextWithIcon
                                            iconName="ArrowRightMini"
                                            inner={card.buttonText}
                                            type={types.mediumLarge}
                                            size={sizes.small}
                                            generalStyles={{ cursor: "pointer", gap: "8px" }}
                                            style={{ color: "#24554E" }}
                                            isIconRight={true}
                                        />
                                    </div>
                                </div>
                            )
                        })
                }
               </div>
            </div>
        </div>
    )
};

export default PricingHelpCards;