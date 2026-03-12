import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import image1 from '@/app/assets/images/features/topImages/image1.png'
import image2 from '@/app/assets/images/features/topImages/image2.png'
import image3 from '@/app/assets/images/features/topImages/image3.png'
import image4 from '@/app/assets/images/features/topImages/image4.png'
import image5 from '@/app/assets/images/features/topImages/image5.png'
import image6 from '@/app/assets/images/features/topImages/image6.png'
import image7 from '@/app/assets/images/features/topImages/image7.png'
import image8 from '@/app/assets/images/features/topImages/image8.png'
import image9 from '@/app/assets/images/features/topImages/image9.png'
import image10 from '@/app/assets/images/features/topImages/image10.png'
import image11 from '@/app/assets/images/features/topImages/image11.png'
import image12 from '@/app/assets/images/features/topImages/image12.png'
import image13 from '@/app/assets/images/features/topImages/image13.png'
import image14 from '@/app/assets/images/features/topImages/image14.png'
import image15 from '@/app/assets/images/features/topImages/image15.png'

import styles from './FeaturesTop.module.scss';

const AiContent = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className={`${styles.texts__wrapper} flex flex-col gap-4`}>
                <NewText
                    inner='Miestro AI Platform'
                    type={types.bold900}
                    size={sizes.size_54}
                    style={{ color: '#fff' }}
                />
                <NewText
                    inner='Welcome to the Future of Digital Content Creation'
                    type={types.medium160}
                    size={sizes.xlarge}
                    style={{ color: '#fff' }}
                />
            </div>
            <div className={styles.subtitle__wrapper}>
                <NewText
                    inner='Utilizing the latest AI technology, our all-in-one platform makes it easy to create engaging video-streaming programs and membership sites … and market them to your best potential customers.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const AffiliateProgram = () => {
    return (
        <div className={`${styles.affiliate__wrapper} flex flex-col gap-6`}>
            <div className={`${styles.title__wrapper} flex flex-col gap-4`}>
                <NewText
                    inner='Affiliate Program'
                    type={types.bold900}
                    size={sizes.size_54}
                    style={{ color: '#fff' }}
                    lato={true}
                />
                <NewText
                    inner='Cash In on Your Content in Another Way!'
                    type={types.medium160}
                    size={sizes.xlarge}
                    style={{ color: '#fff' }}
                />
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='The popularity of digital content is exploding worldwide … and creating an affiliate program is a terrific opportunity to create another income stream around your video-based program.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner='We make it easy to set up your own affiliate program that will help ensure your program is noticed by many more people.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Automations = () => {
    return (
        <div className={`${styles.automations__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Automations'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                        lato={true}
                    />
                    <NewText
                        inner='Get More Done While Working Less'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='We have automated numerous processes to make it easier for you to succeed. We understand how busy entrepreneurs are and have tailored our system so that you can get “More Rewards with Less Work!”'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner='For example, you can easily create automatic triggers based on customer behavior and then customize experiences to boost engagement.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Integrations = () => {
    return (
        <div className={`${styles.integrations__wrapper} flex flex-col gap-6`}>
            <div className={`${styles.title__wrapper} flex flex-col gap-4`}>
                <NewText
                    inner='Integrations'
                    type={types.bold900}
                    size={sizes.size_54}
                    style={{ color: '#fff' }}
                    lato={true}
                />
                <NewText
                    inner='Connect and Grow!'
                    type={types.medium160}
                    size={sizes.xlarge}
                    style={{ color: '#fff' }}
                />
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='Unlike programs that force you to do everything one way (aka their way), Miestro offers integration options that take its convenience and growth capabilities to even higher levels.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Analytics = () => {
    return (
        <div className={`${styles.analytics__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Analytics'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                        lato={true}
                    />
                    <NewText
                        inner='We Help You Grow'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='With Miestro, you gain fast, easy access to important information you can use to make better, data-driven decisions and guide your business to higher profits.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner='For instance, you can generate reports on user forecasting, customer progress, and engagement, allowing you to optimize your content.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner='We also offer a complete suite of marketing and automation tools to help you launch and grow your business and retain your members.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Community = () => {
    return (
        <div className={`${styles.community__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Community'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                        lato={true}
                    />
                    <NewText
                        inner='Build & Monetize Your Own Community'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='Miestro provides everything you need to create a vibrant community of followers. You can offer community access free to current members or start a subscription model for recurring revenue.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner='From live calls to challenges to chats and more, you’ll have access to a wide variety of tools that you can use to drive engagement and boost your profits even higher!'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Customization = () => {
    return (
        <div className={`${styles.customization__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Customization'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                    />
                    <NewText
                        inner='Turn Your Vision into Reality'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='Miestro is not a "cookie-cutter," one-size-fits-all program. Instead, we offer a variety of customization options that allow you to let your style and vision shine through in your digital content.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner="You won't feel limited with Miestro. Instead, you'll be excited about the options available to you. And don't worry about feeling overwhelmed; our expert guidance helps you determine the best path forward."
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Payments = () => {
    return (
        <div className={`${styles.payments__wrapper} flex flex-col gap-6`}>
            <div className={`${styles.title__wrapper} flex flex-col gap-4`}>
                <NewText
                    inner='Payments'
                    type={types.bold900}
                    size={sizes.size_54}
                    style={{ color: '#fff' }}
                    lato={true}
                />
                <NewText
                    inner='Get Paid Your Way'
                    type={types.medium160}
                    size={sizes.xlarge}
                    style={{ color: '#fff' }}
                />
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='Our convenient payment system allows you to offer one-time plans, trial payment plans, subscription plans, or a combination of all three. You can also profit from upsells, downsells, and order bumps, among many other cash-generating options.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner="Plus, our system easily integrates with trusted gateways, and setup only takes a few minutes!"
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Monetization = () => {
    return (
        <div className={`${styles.monetization__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Video Monetization'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff', maxWidth: '360px', width: '100%' }}
                    />
                    <NewText
                        inner='Monetize Your Video Content'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.video__subtitle__wrapper}>
                <NewText
                    inner='Miestro makes it easy to monetize your videos thanks to its proprietary CMS (Content Management System), Video Player, and themes and customizations.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <span>You can create <span className={styles}>upsells</span> and <span className={styles}>downsells</span></span>
                <NewText
                    inner="You’ll have everything you need to get paid – again and again – for your video content – including a seamless payment system. This is your chance to get videos that look amazing and effectively entertain and educate your target audience."
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}


const Emails = () => {
    return (
        <div className={`${styles.emails__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Emails'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                        lato={true}
                    />
                    <NewText
                        inner='Excel at Email Marketing With Miestro'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='The truth is email marketing is still one of the most effective marketing methods available to entrepreneurs – and will likely continue to be that way long into the future.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner="The truth is email marketing is still one of the most effective marketing methods available to entrepreneurs – and will likely continue to be that way long into the future."
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Landings = () => {
    return (
        <div className={`${styles.landing__top__section__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}> 
                    <NewText
                        inner='Landing Pages'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                    />
                    <NewText
                        inner='Stand Out With Optimized Landing Pages
                        That Engage Your Target Market'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='Building a high-quality program is just half of the battle. You also need to market and sell that program to your target prospects.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner="At Miestro, we help you with that by providing professionally designed, highly customizable landing pages that get your prospects to take action!"
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Members = () => {
    return (
        <div className={`${styles.portable__list__wrapper} flex flex-col gap-6`}>
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Members'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                        lato={true}
                    />
                    <NewText
                        inner='Create a Profitable List'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.members__subtitle__wrapper}>
                <NewText
                    inner='Another great thing about Miestro is that we allow you to create and manage a list of members and contacts.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner="One of the biggest keys to long-term Internet success is having a highly responsive list, and we allow you to build that list quickly and easily."
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const Membership = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Membership Sites'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                        lato={true}
                    />
                    <div className={styles.sites__subtitle__wrapper}>
                        <NewText
                            inner='Create a Membership Site & Enjoy Recurring Revenue'
                            type={types.medium160}
                            size={sizes.xlarge}
                            style={{ color: '#fff' }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.membership__sites__subtitle__wrapper}>
                <NewText
                    inner='One of the great things about Miestro’s website builder is that it allows you to create a membership site and unlock the benefits of recurring revenue.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <NewText
                    inner="With recurring revenue, you'll have a certain amount of income that you can count on receiving each month. This can ease income uncertainty and the stress it causes while giving you a solid foundation from which to grow."
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const QuizesCouponsCertificates = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className={`${styles.title__wrapper} flex flex-col gap-4`}>
                <div className={styles.mobile__wrapper}>
                    <NewText 
                        inner='Quizzes, Coupons, Certificates'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                    />
                </div>
                <div className={styles.desktop__wrapper}>
                    <TextColumn
                        texts={['Quizzes,', 'Coupons,', 'Certificates']}
                        type={types.bold900}
                        alignItems='start'
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
        </div>
    )
}

const VideoBased = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Video-Based Programs'
                        type={types.bold900}
                        size={sizes.size_54}
                        style={{ color: '#fff' }}
                    />
                </div>
                <div className={styles.video__subtitle__wrapper}>
                    <NewText
                        inner='No matter your area of expertise, Miestro offers a complete CMS (Content Management System)  that allows you to turn your specialized knowledge into a profitable asset.'
                        type={types.medium160}
                        size={sizes.xlarge}
                        style={{ color: '#fff' }}
                    />
                </div>
            </div>
            <div className={styles.footer__text__wrapper}>
                <NewText
                    inner='This is your chance to join the red-hot e-learning market by creating, marketing, and selling in-demand content. No experience is required. Our AI-backed system allows you to do everything from one easy-to-use dashboard.'
                    type={types.regular153}
                    size={sizes.large}
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
            </div>
        </div>
    )
}

const getImageByType = (type) => {
    switch (type) {
        case 'capability':
            return image1;
        case 'video-based':
            return image2;
        case 'quizzes-coupons-certificates':
            return image3;
        case 'membership':
            return image4
        case 'members':
            return image5
        case 'landing':
            return image6
        case 'emails':
            return image7
        case 'monetization':
            return image8
        case 'payments':
            return image9
        case 'customization':
            return image10
        case 'community':
            return image11
        case 'analytics':
            return image12
        case 'integrations':
            return image13
        case 'automations':
            return image14
        default:
            return image15
    }
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

const FeaturesTop = ({ type }) => {
    const Component = getContentByType(type);

    return (
        <div className={`flex px-[80px] ${styles.features__top__wrapper}`} style={{
            paddingTop: '49px',
            paddingBottom: type === 'landing' ? 0 : '100px'
        }} >
            <div className="container px-[110px]">
                <div className={`${styles.top__section__wrapper} flex justify-around gap-10 w-full items-center`}>
                    <div style={{
                        maxWidth: '530px',
                        width: '100%'
                    }}>
                        <Component />
                    </div>
                    <div>
                        <img src={getImageByType(type).src} alt="online course platform" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturesTop;