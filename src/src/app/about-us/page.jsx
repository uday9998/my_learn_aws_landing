import AboutUsHero from './components/AboutUsHero/AboutUsHero';
import AboutUsTop from './components/AboutUsTop/AboutUsTop';
import AboutWhoUse from './components/AboutWhoUse/AboutWhoUse';
import AboutCustomers from './components/AboutCustomers/AboutCustomers';
import FAQ from '../features/components/FeaturesBottom/components/FAQ/FAQ';
import FooterDefault from '../components/modules/Footer/Footer';
import AboutUsWhoUseMobile from './components/AboutUsWhoUseMobile';

import styles from './about-us.module.scss';

const pathName = process.env.NEXT_PUBLIC_PATH

export const metadata = {
    title: 'Miestro: Video Membership & Course Platform For Creators',
    description: 'Miestro: The Ultimate Video Membership and Course Platform that helps creators scale their businesses and create online courses, memberships, and communities.',
    alternates: {
        canonical: `${pathName}/about-us`
    }
}

const AboutUs = () => {
    return (
        <div className={`flex flex-col ${styles.about__us__wrapper}`}>
            <div className="flex flex-col w-full">
                <AboutUsHero />
            </div>
            <AboutUsTop />
            <div className={styles.mobile__wrapper}>
                <AboutUsWhoUseMobile />
            </div>
            <div className={styles.desktop__wrapper}>
                <AboutWhoUse />
            </div>
            <AboutCustomers />
            <FAQ
                items={[
                    {
                        title: 'Do I need to have experience as an instructor?',
                        description: 'No. Thanks to our optimized, AI-utilizing system, anyone can create a video-based program without experience. Our tools make the process easy. You are going to be amazed at what is possible.'
                    },
                    {
                        title: 'Are video-based programs popular right now?',
                        description: 'Yes, exceptionally so. This is an ideal time for content creation. People today seek knowledge like never before, and to get that knowledge, they are turning to the Internet like never before. In fact, in the United States and Canada, content creation by individual creators has increased by 691% as knowledge-holders look to meet the escalating demand.'
                    },
                    {
                        title: 'Are content membership sites profitable?',
                        description: 'Yes! Recent world events (such as the Pandemic) have highlighted how important it can be to our financial welfare to have broader knowledge that will allow us to create multiple income streams. Creating video content is a great way to not only do that for yourself but it could also allow you to create a revenue generator that even enables you to quit your “day job” and become your own boss.'
                    },
                    {
                        title: 'Are there other benefits to creating a video-based program?',
                        description: 'Creating video content allows you to become a coach or a teacher. You’ll gain respect and authority as an expert in your niche, and, as a result, your profits may rise even higher.'
                    }
                ]}
            />
            <FooterDefault type='home' />
        </div>
    )
};

export default AboutUs;