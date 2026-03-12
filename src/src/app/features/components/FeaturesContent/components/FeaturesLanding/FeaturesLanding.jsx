import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/landing/image1.png';
import image2 from '@/app/assets/images/features/landing/image2.png';

import styles from './FeaturesLanding.module.scss';

const FeaturesLanding = () => {
    return (
        <div className="flex flex-col">
            <div className={`${styles.avoid__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
                <div className="main__container">
                    <div className="flex flex-col gap-[120px]">
                        <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                            <img src={image1.src} alt="online course platform" />
                            <div className={`${styles.img__text__inner__wrapper} flex flex-col gap-8 pl-[35px]`}>
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Avoid Working With Costly, Frustrating Designers'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            lato={true}
                                            style={{ lineHeight: '150%' }}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner="Instead of paying high design and coding fees and experiencing frustrating project delays, you can launch highly effective landing pages with a few clicks of a mouse, thanks to Miestro."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner="We’ve done the research and worked with the best designers to ensure you have the landing pages you need to put members in your program’s virtual seats."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner="Thanks to our expertise, you can rest assured that you are marketing your program in the best possible way instead of wondering if another approach would be better."
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
                        <div className={`${styles.enjoy__wrapper} flex items-center gap-6`}>
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex px-10 flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Enjoy Full Customization & Integration'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner="Our landing pages all feature customizable design and copy elements so that you can match your branding and establish consistency across your marketing campaigns."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner="We also make it easy to connect your pages to other elements of your marketing campaigns, such as emails, websites, offers, promotions, and more."
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
        </div>
    )
}

export default FeaturesLanding
