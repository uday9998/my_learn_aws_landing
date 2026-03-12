import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps'

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/automation/image1.png';
import image2 from '@/app/assets/images/features/automation/image2.png';

import styles from './FeaturesAutomation.module.scss';

const FeaturesAutomation = () => {
    return (
        <div className={`${styles.automation__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
            <div className="main__container">
                <div className="flex flex-col gap-[120px]">
                    <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                        <img src={image1.src} alt="online course platform" />
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Save Time'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner='Creating a program on your own can take a lot of time. First, you have to come up with the content, then there is the learning system and how you will present that content, and then there is all the marketing to get people to sign up. It can all quickly become overwhelming.'
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner='At Miestro, we have cracked the code for video-based program creation and built a system that simplifies and automates the process so that you can get your program up and running and earning profits much faster than through other methods.'
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
                    <div className={`${styles.save__wrapper} flex items-center gap-6`}>
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Save Money'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner='Marketing is frequently a trial-and-error exercise that few win. The good news is we have taken our real-world experience of creating successful programs and membership sites and created a proven-effective process filled with automation that makes it even easier.'
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner='Now you can automate many creation and marketing processes – saving you lots of money that you would have spent “going down the wrong road.”'
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

export default FeaturesAutomation
