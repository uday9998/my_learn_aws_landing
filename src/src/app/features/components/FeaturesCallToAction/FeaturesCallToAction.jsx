import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Button from '@/app/components/elements/Button/Button';
import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text, { NewText, TextColumn, NewTextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import Background from "@/app/assets/images/footer.png";

import styles from './FeaturesCallToAction.module.scss';

const StartButton = () => {
    return (
        <div className={`${styles.start__button__wrapper} relative mt-[20px] z-[2]`} style={{ transform: 'rotate(2deg)' }}>
            <div className="absolute top-[-35%] left-[-5%]">
                <IconNew name='FooterButtonAnimatedBlur'
                />
            </div>
            <div className={styles.start__button}>
                <Link href='/signup'>
                    <Button
                        text='Start Free Trial'
                        className='footer__start__button'
                        style={{ height: '60px', maxHeight: '60px' }}
                    />
                </Link>
            </div>
        </div>
    )
}

const AiContent = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <div className={styles.ai__content__title__wrapper}>
                    <TextColumn
                        texts={["Start Creating Your Video Membership", 'Website from Our All-in-One,', 'AI-Backed Platform']}
                        type={types.bold}
                        alignItems='start'
                        size={sizes.size_40}
                        style={{ color: '#fff', lineHeight: '130%' }}
                    />
                </div>
                <div className={`${styles.footer__text__wrapper} flex flex-col gap-2`}>
                    <Text
                        inner='We offer everything you need to build, market, and get paid for your content in one easy-to-use platform.'
                        type={types.regular153}
                        size={sizes.large}
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    />
                    <Text
                        inner='Quickly create a scalable asset that you can sell again and again and again … without wasting time or money.'
                        type={types.regular153}
                        size={sizes.large}
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    />
                </div>
            </div>
            <StartButton />
        </div>
    )
}


const AffiliateProgram = () => {
    return (
        <div className={`${styles.affiliate__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Start Your Own Sales-", "Generating Affiliate Program", "Today"]}
                    type={types.bold}
                    size={sizes.size_40}
                    alignItems='start'
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={`${styles.btn__wrapper} flex`}>
                <StartButton />
            </div>
        </div>
    )
}

const Automations = () => {
    return (
        <div className={`${styles.automations__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Get More Done While Working Less", "With Miestro’s Automation!"]}
                    type={types.bold}
                    size={sizes.size_40}
                    alignItems='start'
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={`${styles.btn__wrapper} flex`}>
                <StartButton />
            </div>
        </div>
    )
}


const Integrations = () => {
    return (
        <div className={`${styles.integrations__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Miestro’s Payment & Marketing", "Integrations Make it Even Easier", "for You to Succeed!"]}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Analytics = () => {
    return (
        <div className={`${styles.analytics__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Access the Business Data You", "Need to Grow Faster With", "Miestro!"]}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Community = () => {
    return (
        <div className={`${styles.community__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={['Build a Community of ‘Raving', 'Fans’ With Miestro!']}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Customization = () => {
    return (
        <div className={`${styles.customization__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={[`Customize Your Program &`, 'Marketing With Miestro!']}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Payments = () => {
    return (
        <div className={`${styles.payments__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Start Accepting Payments Right", "Away With Miestro!"]}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const items = ['Digital Products', 'Email', 'Membership Sites', 'Landing Pages']
const items2 = ['Payment System', 'Funnels', 'Analytics', 'And More']

const Monetization = () => {
    return (
        <div className={`${styles.mon__wrapper} flex gap-8 w-full flex-col items-start`}>
            <div className="flex w-full items-center gap-6">
                <div className={styles.monetization__title__wrapper}>
                    <TextColumn
                        texts={["With Miestro,", "You Get All of", "the Following:"]}
                        type={types.bold}
                        alignItems='start'
                        size={sizes.size_40}
                        style={{ color: '#fff', lineHeight: '130%' }}
                    />
                </div>
                <div className={`${styles.list__wrapper} flex flex-col gap-4 w-full`}>
                    {items.map((e, i) => {
                        return (
                            <NewTextWithIcon
                                iconName='MonetizationCheckSvg'
                                iconGap='16'
                                inner={e}
                                key={i}
                                style={{ color: "#fff" }}
                                type={types.medium160}
                                size={sizes.large}
                            />
                        )
                    })}
                </div>
                <div className={`${styles.list__wrapper} flex flex-col gap-4 w-full`}>
                    {items2.map((e, i) => {
                        return (
                            <NewTextWithIcon
                                iconName='MonetizationCheckSvg'
                                iconGap='16'
                                inner={e}
                                key={i}
                                style={{ color: "#fff" }}
                                type={types.medium160}
                                size={sizes.large}
                            />
                        )
                    })}
                </div>
            </div>
            <StartButton />
        </div>
    )
}


const Emails = () => {
    return (
        <div className={`${styles.emails__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Take Your Email Marketing to a", " New Level With Miestro!"]}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Landings = () => {
    return (
        <div className={`${styles.landings__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Ensure Your Landing Pages Grab", "Attention & Spur Visitors to Sign", "Up With Miestro!"]}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Members = () => {
    return (
        <div className={`${styles.faster__wrapper} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Get the Impactful List You ", "Need to Grow Faster With", "Miestro!"]}
                    type={types.bold}
                    alignItems='start'
                    size={sizes.size_40}
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={styles.btn__wrapper}>
                <StartButton />
            </div>
        </div>
    )
}

const Membership = () => {
    return (
        <div className={`${styles.lets__up} flex gap-6 justify-between items-center`}>
            <div className={styles.title__wrapper}>
                <TextColumn
                    texts={["Let's Set Up A", "Membership Site Now"]}
                    type={types.bold}
                    size={sizes.size_40}
                    alignItems='start'
                    style={{ color: '#fff', lineHeight: '130%' }}
                />
            </div>
            <div className={`${styles.btn__wrapper} flex`}>
                <StartButton />
            </div>
        </div>
    )
}

const QuizesCouponsCertificates = () => {
    return (
        <div className={`${styles.quizzes__wrapper} flex flex-col gap-6`}>
            <div className={`${styles.title__wrapper} flex flex-col gap-3`}>
                <div className={styles.mobile__text__wrapper}>
                    <NewText
                        inner='To Tap into Our Quizzes, Coupons, & Certificates to Grow Your Program Profits & Increase Member Satisfaction … Sign Up Now'
                        type={types.bold}
                        alignItems='start'
                        size={sizes.size_40}
                        style={{ color: '#fff', lineHeight: '130%' }}
                    />
                </div>

                <div className={styles.desktop__text__wrapper}>
                    <TextColumn
                        texts={["To Tap into Our Quizzes, Coupons, &", "Certificates to Grow Your Program Profits &", "Increase Member Satisfaction … Sign Up Now"]}
                        type={types.bold}
                        alignItems='start'
                        size={sizes.size_40}
                        style={{ color: '#fff', lineHeight: '130%' }}
                    />
                </div>
            </div>
            <StartButton />
        </div>
    )
}

const VideoBased = () => {
    return (
        <div className={`${styles.maximize__wrapper} flex gap-6 justify-between items-center`}>
            <TextColumn
                texts={["Maximize the Impact of Your", "Video Training With Miestro!"]}
                type={types.bold}
                alignItems='start'
                size={sizes.size_40}
                style={{ color: '#fff', lineHeight: '130%' }}
            />
            <StartButton />
        </div>
    )
}


const getContentByType = (type) => {
    switch (type) {
        case 'capability':
            return AiContent;
        case 'video-based':
            return VideoBased;
        case 'quizzes-coupons-certificates':
            return QuizesCouponsCertificates;
        case 'membership':
            return Membership
        case 'members':
            return Members
        case 'landing':
            return Landings
        case 'emails':
            return Emails
        case 'monetization':
            return Monetization
        case 'payments':
            return Payments
        case 'customization':
            return Customization
        case 'community':
            return Community
        case 'analytics':
            return Analytics
        case 'automations':
            return Automations
        case 'integrations':
            return Integrations

        default:
            return AffiliateProgram
    }
}

const FeaturesCallToAction = ({ type }) => {
    const Component = getContentByType(type)
    return (
        <div
            style={{
                background: `url(${Background.src})`,
                backgroundSize: "cover"
            }}
            className={styles.call__to__action__wrapper}
        >
            <div className="privacy__container py-[100px]">
                <div className="features__call__to" >
                    <div className="features__call__to__content">
                        <Component />
                    </div>
                    <div className="absolute features__call__to__vector">
                        <IconNew name='FeatureBlockSvg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCallToAction
