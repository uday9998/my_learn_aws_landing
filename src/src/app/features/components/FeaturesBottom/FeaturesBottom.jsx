'use client'
import { usePathname } from 'next/navigation';

import faqFeatures from '@/app/resources/features-faq.json';
import { linkGroups } from '@/app/components/modules/NavigationBar/components/FeaturesModalContent/FeaturesModalContent';

import FeaturesLinks from './components/FeaturesLinks/FeaturesLinks';
import FAQ from './components/FAQ/FAQ';
import FeaturesLinksMobile from './components/FeaturesLinksMobile';

import styles from './FeturesBottom.module.scss';

const FeaturesBottom = ({ type }) => {
    const faqs = faqFeatures[type];
    const pathname = usePathname();
    const newLinksGroup = linkGroups.map(links => {
        return links.filter(link => {
            return !pathname.includes(link.link)
        })
    });

    return (
        <div className="flex flex-col">
            {faqs && (
                <FAQ
                    background='#fff'
                    items={faqs}
                />
            )}
            <div className={styles.mobile__wrapper}>
                <FeaturesLinksMobile
                    linkGroups={newLinksGroup}
                />
            </div>
            <div className={styles.desktop__wrapper}>
                <FeaturesLinks />
            </div>
        </div>
    )
}

export default FeaturesBottom