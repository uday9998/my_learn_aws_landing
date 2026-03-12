'use client';
import { useEffect, useState } from 'react';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import FooterDefault from '@/app/components/modules/Footer/Footer';
import PrivacyHero from '../components/PrivacyHero/PrivacyHero';
import PrivacyContent from '../components/PrivacyContent/PrivacyContent';
import TermsPage from '../components/TermsPage/TermsPage';

import styles from './privacy.module.scss';

const PrivacyTermsPage = ({ params }) => {
    const { pageType: tabType } = params;
    const [ tab, setTab ] = useState(tabType);

    const handleChangeTab = (tabValue) => {
        setTab(tabValue);
    }

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [tabType]);

    return (
        <div className="flex flex-col ">
                <div
                    className={`relative bg-black ${styles.wrapper}`}
                >
                    <title>
                        {
                            tab === 'terms' ? 'Miestro Terms of Service | United States of America' : 'Miestro Privacy Policy | United States of America'
                        }
                    </title>
                    <PrivacyHero tab={tab} handleChangeTab={handleChangeTab} />
                </div>
                <div className="relative">
                    <div className="z-10 relative">
                        {tab === "privacy" && <PrivacyContent />}
                        {tab === "terms" && <TermsPage />}
                        <div className="absolute top-[1%] left-[10%] z-[-1]">
                            <IconNew name="StarS" />
                        </div>
                    </div>
                    <div className={`absolute top-[9%] left-[-20px] z-[-1] ${styles.treat__wrapper}`}>
                        <IconNew name="PrivacyBackground1" />
                    </div>
                    <div className="absolute top-[-2%] right-[0px] z-[-1]">
                        <IconNew name="PrivacyBackground2" />
                    </div>
                    <div className="absolute bottom-[-1%] left-[10%] z-[-1]">
                        <IconNew name="StarS" />
                    </div>
                </div>
                <FooterDefault />
            </div>
    )
};

export default PrivacyTermsPage;
