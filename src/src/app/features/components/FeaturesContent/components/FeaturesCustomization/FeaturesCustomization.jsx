import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/customization/image1.png'
import image2 from '@/app/assets/images/features/customization/image2.png';

import styles from './FeaturesCustomization.module.scss';

const FeaturesCustomization = () => {
    return (
        <div className={`${styles.customization__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
            <div className="main__container">
                <div className="flex flex-col gap-[120px]">
                    <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                        <img src={image1.src} alt="online course platform" />
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Content Customization'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <span style={{ color: '#727978' }}>
                                        Your content doesn't have to be the only thing unique about your program. You can also utilize our <span className={styles.bold__text}>customization features to give your members a one-of-a-kind online learning experience.</span>
                                    </span>
                                    <NewText
                                        inner="For example, you can customize your virtual classroom appearance, your program presentation and format, and more."
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
                    <div className={`${styles.marketing__wrapper} flex items-center gap-6`}>
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Marketing Customization'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner='We also make it easy to customize your marketing materials. From your landing pages to emails and much more, you can ensure your marketing campaigns match your branding and program vision.'
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

export default FeaturesCustomization