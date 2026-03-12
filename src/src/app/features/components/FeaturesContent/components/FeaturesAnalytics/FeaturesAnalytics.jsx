import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/analytics/image1.png';
import image2 from '@/app/assets/images/features/analytics/iamge2.png';

import styles from './FeaturesAnalytics.module.scss';

const FeaturesAnalytics = () => {
    return (
        <div className={`${styles.analytics__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
            <div className="main__container">
                <div className="flex flex-col gap-[120px]">
                    <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                        <img src={image1.src} alt="online course platform" />
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='We Help You Improve Performance'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner="Instead of guessing, you'll have access to specific data to determine what is working and what is not so that you can make changes and grow your business's efficiency and profits."
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner='Find out how members progress and what improvements could make your program even more successful.'
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                </div>
                                <div className={styles.btn__wrapper}>
                                    <Link href='/signup'>
                                        <Button
                                            text='Start Free Trial'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.unlock__wrapper} flex items-center gap-6`}>
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='We Help You Unlock Faster Growth'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner="It is much easier to map out a path to greater success when you know what is and is not working. Now you'll have instant access to information and tools that can help you unlock the door to more significant growth. "
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner=" We put vital business data at your fingertips! For instance, you can generate and convert more leads, reduce churn and retain more members, launch new funnels and marketing campaigns with ease, and more."
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                </div>
                                <div className={styles.btn__wrapper}>
                                    <Link href='/signup'>
                                        <Button
                                            text='Start Free Trial'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <img src={image2.src} alt="online course platform" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesAnalytics