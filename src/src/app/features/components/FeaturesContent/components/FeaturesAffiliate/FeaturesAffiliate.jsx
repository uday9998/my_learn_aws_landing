import Link from "next/link";

import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps"

import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import Button from "@/app/components/elements/Button/Button";

import image1 from '@/app/assets/images/features/affiliate/image1.png';
import image2 from '@/app/assets/images/features/affiliate/image2.png';

import styles from './FeaturesAffiliate.module.scss';

const FeaturesAffiliate = () => {
    return (
        <div className={`${styles.affiliate__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
            <div className="main__container">
                <div className="flex flex-col gap-[120px]">
                    <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                        <img src={image1.src} alt="online course platform" />
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='How It Works'
                                        type={types.bold900}
                                        className='ml-[58px]'
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className={`${styles.icon__wrapper} min-w-[34px] h-[34px] flex items-center justify-center rounded-[12px]`} style={{ background: '#2585EB' }}>
                                        <div className={styles.title__wrapper__icon}>
                                            <NewText
                                                inner='1'
                                                type={types.medium}
                                                style={{ lineHeight: '125%', color: "#fff" }}
                                                size={sizes.xxlarge}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner='We will provide you with all the tools your affiliates will need - including a referral link and attractive banner ads, compelling articles, email promotions, text links, and a list of popular keywords.'
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className={`${styles.icon__wrapper} min-w-[34px] h-[34px] flex items-center justify-center rounded-[12px]`} style={{ background: '#9747FF' }}>
                                        <div className={styles.title__wrapper__icon}>
                                            <NewText
                                                inner='2'
                                                type={types.medium}
                                                style={{ lineHeight: '125%', color: "#fff" }}
                                                size={sizes.xxlarge}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner='Your affiliates can use as many or as few of these tools as they like. As an affiliate program member, visitors who click on one of their links will be tracked, and they will receive a commission (that you determine) on everyone who signs up for your program.'
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.btn_wrapper}>
                                    <Link href='/signup'>
                                        <Button
                                            className='ml-[58px]'
                                            text='Start Free Trial'
                                            style={{
                                                fontWeight: 800
                                            }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.offers__wrapper} flex items-center gap-6`}>
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className="flex flex-col gap-6">
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='An Affiliate Program Offers Enormous Passive Income Potential!'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%' }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.subtitle__wrapper}>
                                    <NewText
                                        inner='With an army of affiliates, you can really get word out about your program. For example, your affiliates could place attractive banners on their websites. '
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner='They could place attention-grabbing ads on search engines.'
                                        type={types.regular160}
                                        size={sizes.large}
                                        style={{ color: '#727978' }}
                                    />
                                    <NewText
                                        inner='They could also send out email promotions and more.'
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

export default FeaturesAffiliate
