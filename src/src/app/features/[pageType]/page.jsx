import FeaturesTop from "../components/FeaturesTop/FeaturesTop";
import FeaturesContent from "../components/FeaturesContent/FeaturesContent";
import FeaturesCallToAction from "../components/FeaturesCallToAction/FeaturesCallToAction";
import FeaturesBottom from "../components/FeaturesBottom/FeaturesBottom";
import FooterDefault from '@/app/components/modules/Footer/Footer';

const titleText = {
    capability: 'Capability | Reliable Video Membership Website',
    'video-based': "Video-Based Courses | Monetize Your Video Content",
    'quizzes-coupons-certificates': "Engage Your Audience with Quizzes, Coupons & Certificates",
    membership: "Membership | Affordable Video Content Subscription",
    members: "Members | Top Online Video Membership Platform",
    landing: "Create Stunning Landing Pages with Miestro Today",
    emails: "Automate your Businesses Email Campaigns with Miestro",
    monetization: "Monetization | Best Platform to Monetize Videos",
    payments: "Check Seamless Payment Integration with Miestro",
    customization: "Customize Your Platform | Video Content Monetization",
    community: "Community | Online Video Membership Community",
    analytics: "Track Performance with Miestro's Analytics Tools",
    integrations: "Integrations | Top Video Content Monetization",
    automations: "Automate Tasks with Miestro's Automation Tools",
    affiliate: "Grow Your Business with Miestro's Affiliate Program"
}

const descriptionTexts = {
    capability: "Explore Miestro's capabilities for video membership. From course creation to delivery, we provide everything you need for online success. Try for free!",
    'video-based': "Leverage video-based learning with Miestro, the top choice for video membership. Engage your audience with high-quality and interactive content.",
    'quizzes-coupons-certificates': "Enhance your courses with quizzes, coupons, and certificates. Miestro offers robust features for video membership to keep learners motivated.",
    membership: "Manage memberships effortlessly with Miestro. Perfect for video membership, our platform supports various membership models and access levels.",
    members: "Track and manage your members with ease. Miestro provides comprehensive tools for video membership, ensuring seamless user management. Try for free!",
    landing: "Create stunning landing pages with Miestro. Optimize your video membership with professional and customizable landing page designs. Try for free!",
    emails: "Automate email campaigns with Miestro. Enhance your video membership by keeping your audience engaged with targeted email communications. Try for free!",
    monetization: "Maximize your revenue with Miestro’s monetization features. Ideal for video membership, our tools help you monetize your content effectively.",
    payments: "Simplify payments with Miestro’s integrated solutions. Ensure secure and efficient transactions for your video membership Try it for free now!",
    customization: "Customize your courses and platform with Miestro. We tailor your video membership to reflect your brand and meet your unique needs. Try for free!",
    community: "Build a community with Miestro! Let us help you foster interaction and engagement among members in maximizing your video membership. Try for free!",
    analytics: "Leverage analytics with Miestro to track performance. Optimize your video membership in Africa by understanding user behavior and course effectiveness.",
    integrations: "Integrate Miestro with your favorite tools. Streamline your video membership with seamless integrations for a smooth workflow. Try for free!",
    automations: "Automate tasks with Miestro to save time and effort. Enhance your video membership with efficient and automated processes. Try it for free today.",
    affiliate: "Boost your reach with Miestro’s affiliate program. Promote your video membership and increase enrollments through affiliate marketing. Try for free!"
}

export const generateMetadata = ({ params }) => {
    const { pageType } = params;
    const pathName = process.env.NEXT_PUBLIC_PATH;

    return {
        title: titleText[pageType],
        description: descriptionTexts[pageType],
        alternates: {
            canonical: `${pathName}/features/${pageType}`
        }
    }
}

const PageType = ({ params }) => {
    const { pageType } = params;

    return (
        <div className="flex flex-col">
            <FeaturesTop type={pageType} />
            <FeaturesContent type={pageType} />
            <FeaturesCallToAction type={pageType} />
            <FeaturesBottom type={pageType} />
            <FooterDefault isFeaturePage={true} type={pageType} />
        </div>
    )
};

export default PageType;
