import HeroSection from '@/app/components/modules/HeroSection/HeroSection';
import Welcome from '@/app/components/modules/Welcome/Welcome';
import FirstHomeSection from '@/app/components/modules/FirstHomeSection/FirstHomeSection';
import ImageAndText from './components/modules/ImageAndText';
import MembershipsPotential from './components/modules/MembershipsPotential';
import ImageAndTextsBlock from './components/modules/ImageAndTextsBlock';
import DragAndDropSection from './components/modules/DragAndDropSection';
import LiveStreamSection from './components/modules/LiveStreamSection';
import CalculateSection from './components/modules/CalculateSection';
import PersonsSection from './components/modules/PersonsSection';
import MembershipManagement from './components/modules/MembershipManagement';
import HelpCards from './components/modules/HelpCards';
import HelpCreate from './components/modules/HelpCreate';
import CommunityAround from './components/modules/CommunityAround';
import JoinCreators from './components/modules/JoinCreators';
import SliderSection from './components/modules/SliderSection';
import TransformPlatformSection from './components/modules/TransformPlatformSection';
import GrowEmpire from './components/modules/GrowEmpire';
import FooterDefault from './components/modules/Footer/Footer';

import membershipImage from '@/app/assets/images/dashboard/member__ship__image.png';
import marketingTools from '@/app/assets/images/dashboard/marketing__tools.png';
import affilateImage from '@/app/assets/images/dashboard/illustratuion.png';
import InteractiveCreatorPlatform from './components/modules/InteractiveCreatorPlatform/InteractiveCreatorPlatform';
import CreatorPromo from './components/modules/CreatorPromo/CreatorPromo';
import PlatformFeatures from './components/modules/PlatformFeatures/PlatformFeatures';

const pathName = process.env.NEXT_PUBLIC_PATH

export const metadata = {
  title: 'Miestro | Professional Video Membership Platform For Creators',
  description: 'Discover Miestro, the leading platform for video membership. Create and manage your online courses effortlessly with our comprehensive tools.',
  alternates: {
    canonical: `${pathName}/`
  }
}

const Home = () => {
  return (
    <div className="flex flex-col home">
        <HeroSection />
        <Welcome />
        {/* <FirstHomeSection /> */}
        <InteractiveCreatorPlatform />
        {/* <ImageAndText
          imageName={membershipImage}
          title='Create a'
          subtitle='Video Membership'
          footerText="That's Uniquely Yours"
        /> */}
        {/* <ImageAndText
          imageName={marketingTools}
          title='Grow With'
          subtitle='Marketing Tools & Analytics'
          marginBottom='60px'
          column={true}
        />

        {/* <MembershipsPotential
          title='Maximize Your'
          subtitle="Membership's Potential:"
        >
          <ImageAndTextsBlock
            firstTitle='Boost Your Earnings'
            secondTitle='With Your Own'
            lastTitle='Affiliate Program'
            imageName={affilateImage}
            buttonText='Start Free Trial'
            firstFooterText='Maximize your earnings with our Affiliate Program! Add your video memberships and courses, along with promotional materials, and generate unique links. Anyone can promote your products and earn a percentage from each sale.'
            lastFooterText='Join now to expand your reach and reward your promoters!'
            gradientTextSize='52px'
            textWidth='805px'
            mobileAffilate={true}
          />
        </MembershipsPotential> */}
        {/* <DragAndDropSection /> */}
        {/* <LiveStreamSection /> */}
        <CalculateSection />
        <PersonsSection />
        <MembershipManagement />
        <HelpCards />
        <PlatformFeatures />
        <CreatorPromo />
        {/* <HelpCreate /> */}
        {/* <CommunityAround /> */}
        {/* <JoinCreators /> */}
        <SliderSection />
        <TransformPlatformSection />
        <GrowEmpire />
        <FooterDefault />
    </div>
  )
}

export default Home;

