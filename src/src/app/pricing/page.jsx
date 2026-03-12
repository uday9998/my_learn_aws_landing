import PricingTop from './components/PricingTop/PricingTop';
import FooterDefault from '../components/modules/Footer/Footer';
import PricingCard from './components/PricingCard/PricingCard';
import Creators from './components/Creators';
import MembershipPlatform from './components/MembershipPlatform';
import PricingSlider from './components/PricingSlider';
import Features from './components/Features';
import GrowEmpire from '../components/modules/GrowEmpire';
import PricingHelpCards from './components/PricingHelpCards';

import styles from './pricing.module.scss';

const pathName = process.env.NEXT_PUBLIC_PATH;

export const metadata = {
    title: 'Pricing | Subscription Platform For Creators Like You',
    description: "Discover Miestro’s pricing plans for video membership. Choose the perfect plan to suit your needs and start creating impactful courses. Try for free!",
    alternates: {
        canonical: `${pathName}/pricing`
    }
}

const Pricing = () => {
    return (
        <div>
            <PricingTop />
            <PricingCard />
            <Creators />
            <MembershipPlatform />
            <PricingSlider />
            <Features />
            <PricingHelpCards />
            <div className={styles.grow__wrapper}>
                <GrowEmpire
                    isWatchDemo={false}
                    title='Launch Your Membership'
                    secondTitle='Today with Miestro'
                    description='Try Miestro free for 14 days and see the difference for yourself!'
                    isPricingPage={true}
                />
            </div> 
            <FooterDefault />
        </div>
    )
};

export default Pricing;
