import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps'

import { NewText, NewTextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/integrations/image1.png';
import image2 from '@/app/assets/images/features/integrations/image2.png';

import styles from './FeaturesIntegrations.module.scss';

const FeaturesIntegrations = () => {
    return (
        <div className="flex flex-col">
            <div className={`${styles.integrations__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
                <div className="main__container">
                    <div className="flex flex-col gap-[120px]">
                        <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                            <img src={image1.src} alt="online course platform" />
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Payment Integration'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner="Miestro's payment system integrates with Stripe and PayPal, allowing you to accept payments via two of the Internet's most popular payment platforms."
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
                        <div className={`${styles.marketing__integrations__wrapper} flex items-center gap-6`}>
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Marketing Integration'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner='Miestro makes connecting your program easy with your various marketing campaigns, including emails, videos, content, and more. '
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
            <div className={styles.with__miestro__wrapper} style={{ background: '#fff' }}>
                <div className="container px-[80px] py-[140px]">
                    <div className="flex flex-col gap-[48px] items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <div className={styles.title__wrapper}>
                                <NewText
                                    inner='With Miestro'
                                    type={types.bold800}
                                    style={{ fontSize: '32px', lineHeight: '140%' }}
                                    className='gradient__text'
                                />
                            </div>
                            <div className={styles.subtitle__wrapper}>
                                <NewText
                                    inner='You Get All of the Following Integrations to Make Growing Your Streaming Video Program Even Easier:'
                                    type={types.bold900}
                                    style={{ fontSize: '54px', textAlign: 'center' }}
                                    lato={true}
                                />
                            </div>
                        </div>
                        <div className={`${styles.checklist__wrapper} w-full flex gap-10 justify-center`}>
                            <div className="flex flex-col gap-4">
                                <div className={styles.list__wrapper}>
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Dashboard'
                                        size={sizes.xlarge}
                                    />
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Subscription Metrics'
                                        size={sizes.xlarge}
                                    />
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Net Revenue'
                                        size={sizes.xlarge}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className={styles.list__wrapper}>
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Page Views'
                                        size={sizes.xlarge}
                                    />
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Class Progress'
                                        size={sizes.xlarge}
                                    />
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Transactions (Stripe, Paypal, & More)'
                                        size={sizes.xlarge}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className={styles.list__wrapper}>
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Refunds'
                                        size={sizes.xlarge}
                                    />
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Video Metrics'
                                        size={sizes.xlarge}
                                    />
                                    <NewTextWithIcon
                                        iconName='IntegrationsCheckboxSvg'
                                        type={types.medium160}
                                        inner='Emails (Mailchimp, Aweber, & More)'
                                        size={sizes.xlarge}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesIntegrations
