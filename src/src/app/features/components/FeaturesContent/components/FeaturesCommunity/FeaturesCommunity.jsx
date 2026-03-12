import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/community/image1.png';
import image2 from '@/app/assets/images/features/community/image2.png';

import styles from './FeaturesCommunity.module.scss';

const FeaturesCommunity = () => {
    return (
        <div className={`${styles.community__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
            <div className="main__container">
                <div className="flex flex-col gap-[120px]">
                    <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                        <img src={image1.src} alt="online course platform" />
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Connect Directly With Community Members'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner='We make it easy to interact with chat capability, coaching calls, live video sessions, challenges, accountability tools, and much more.'
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner='Your members will develop a sense of belonging, turning them into loyal customers and strong brand advocates.'
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
                    <div className={`${styles.business__wrapper} flex items-center gap-6`}>
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Give Your Business an Online Headquarters'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner='We make it easy to connect your program, product offerings, and other business elements with your community. As a result, members enjoy a seamless, connected experience allowing you to cross-sell and boost profits across all enterprise divisions.'
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

export default FeaturesCommunity
