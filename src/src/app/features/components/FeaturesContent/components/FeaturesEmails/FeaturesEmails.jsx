import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps'

import { NewText, NewTextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/emails/image1.png';
import image2 from '@/app/assets/images/features/emails/image2.png';
import background from '@/app/assets/images/features/emails/background.png';

import styles from './FeaturesEmail.module.scss';

const FeaturesEmails = () => {
    return (
        <div className="flex flex-col relative">
            <img src={background.src} className='absolute' alt="online course platform" />
            <div className={`${styles.learning__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
                <div className="main__container">
                    <div className="flex flex-col gap-[120px]">
                        <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Shorten Your Learning Curve Dramatically'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner="Thanks to Miestro, you don’t have to go through trial and error to determine what will work and what won’t work when it comes to getting people to sign up for your program."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner="We have done all the study and analysis for you and created an email marketing program that works."
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
                            <img className={styles.learning__img} src={image1.src} alt="online course platform" />
                        </div>
                        <div className={`${styles.customize__wrapper} flex items-center gap-6`}>
                            <img src={image2.src} alt="online course platform" />
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Customize Your Emails'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner='This is not a one-size-fits-all marketing program. We understand each client and each program is different and thus offer a wide variety of templates and customization options so that you can tailor a program to your particular goals.'
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner='You can send one-time marketing blasts or multi-touch auto-responder sequences to drive conversions and boost your profits.'
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

export default FeaturesEmails
