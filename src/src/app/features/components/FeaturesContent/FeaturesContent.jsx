import FeaturesAffiliate from "./components/FeaturesAffiliate/FeaturesAffiliate";
import FeaturesAi from "./components/FeaturesAi/FeaturesAi";
import FeaturesAnalytics from "./components/FeaturesAnalytics/FeaturesAnalytics";
import FeaturesAutomation from "./components/FeaturesAutomation/FeaturesAutomation";
import FeaturesCommunity from "./components/FeaturesCommunity/FeaturesCommunity";
import FeaturesCustomization from "./components/FeaturesCustomization/FeaturesCustomization";
import FeaturesEmails from "./components/FeaturesEmails/FeaturesEmails";
import FeaturesIntegrations from "./components/FeaturesIntegrations/FeaturesIntegrations";
import FeaturesLanding from "./components/FeaturesLanding/FeaturesLanding";
import FeaturesMembers from "./components/FeaturesMembers/FeaturesMembers";
import FeaturesMonetization from "./components/FeaturesMonetization/FeaturesMonetization";
import FeaturesOther from "./components/FeaturesOther/FeaturesOther";
import FeaturesPayments from "./components/FeaturesPayments/FeaturesPayments";
import FeaturesMembership from "./components/FeaturesMembership/FeaturesMembership";
import FeaturesVideo from "./components/FeaturesVideo/FeaturesVideo";

const getContentByType = (type) => {
    switch (type) {
        case 'capability':
            return FeaturesAi;
        case 'video-based':
            return FeaturesVideo;
        case 'quizzes-coupons-certificates':
            return FeaturesOther;
        case 'membership':
            return FeaturesMembership
        case 'members':
            return FeaturesMembers
        case 'landing':
            return FeaturesLanding
        case 'emails':
            return FeaturesEmails
        case 'monetization':
            return FeaturesMonetization
        case 'payments':
            return FeaturesPayments
        case 'customization':
            return FeaturesCustomization
        case 'community':
            return FeaturesCommunity
        case 'analytics':
            return FeaturesAnalytics
        case 'automations':
            return FeaturesAutomation
        case 'integrations':
            return FeaturesIntegrations

        default:
            return FeaturesAffiliate
    }
};

const FeaturesContent = ({ type }) => {
    const Component = getContentByType(type)
    return (
        <Component />
    )
}

export default FeaturesContent;