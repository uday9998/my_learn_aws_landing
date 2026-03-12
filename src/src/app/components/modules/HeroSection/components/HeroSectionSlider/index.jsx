import { heroCardsImages } from '@/app/utils/hooks/heroCardsImages';
import Image from 'next/image';

import styles from './heroSectionSlider.module.scss';

const HeroSectionSlider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slide__track}>
                {
                    heroCardsImages.topCards.map(item => {
                        return (
                            <Image width={item.width} height={item.height} key={item} src={item.src} alt="slider" />
                        )
                    })
                }
            </div>
            <div className={styles.slide__track__center}>
                {
                    heroCardsImages.centerCards.map(item => {
                        return (
                            <Image width={item.width} height={item.height} key={item} src={item.src} alt="slider" />
                        )
                    })
                }
            </div>
            <div className={styles.slide__track}>
                {
                    heroCardsImages.bottomCards.map(item => {
                        return (
                            <Image width={item.width} height={item.height} key={item} src={item.src} alt="slider" />
                        )
                    })
                }
            </div>
        </div>
    )
};



export default HeroSectionSlider;