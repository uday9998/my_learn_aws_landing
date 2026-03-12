import PropTypes from 'prop-types'

import FooterDefault from '../components/modules/Footer/Footer';
import HowWorksHero from './components/HowWorksHero/HowWorksHero';
import HowWorksContent from './components/HowWorksContent/HowWorksContent';
import CommingSoon from './components/CommingSoon/CommingSoon';
import HowWorksFooter from './components/HowWorksFooter/HowWorksFooter';

const pathName = process.env.NEXT_PUBLIC_PATH;

export const metadata = {
    title: 'How Miestro Works | Subscription Platform for Creators',
    description: 'Learn how Miestro works to support your video membership. Our easy-to-follow guide helps you get started and succeed online. Try for free today!',
    alternates: {
        canonical: `${pathName}/how-it-works`
    }
}

const HowWorksPage = () => {
    return (
        <div className="flex flex-col">
        <div className="flex flex-col w-full" style={{ backgroundColor: '#fff' }}>
            <HowWorksHero />
        </div>
        <HowWorksContent />
        <CommingSoon />
        <HowWorksFooter />
        <FooterDefault type='home' />
    </div>
    )
}

HowWorksPage.propTypes = {
    isMobile: PropTypes.bool
}

export default HowWorksPage
