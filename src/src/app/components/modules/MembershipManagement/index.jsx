import GradientText from "../../elements/GradientText/GradientText";
import { NewText } from "../../elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "../../elements/TextWithIcon/TextWithIconProps";

import styles from './membership.module.scss';

const MembershipManagement = () => {
    return (
        <div className={styles.membership__wrapper}>
            <div className={styles.texts__wrapper}>
                <GradientText  className='gradient__text' text="The Creator's North Star:" />
                <NewText 
                    inner="Guiding Your Business To Prosperity"
                    size={sizes.size_40}
                    type={types.newBold800}
                    styles={{
                        color: '#131F1E'
                    }}
                />
            </div>
            <div className={styles.images__wrapper}>
                    <div className={styles.top__image__wrapper}>
                        <div className={styles.first__block}>
                            <NewText 
                                inner="Expert Guidance:"
                                size={sizes.xxlarge}
                            />
                            <div className={styles.subtitle__wrapper}>
                                <NewText 
                                    inner="Personalized support in business modeling, content strategy, and pricing to elevate your membership."
                                    size={sizes.large}
                                />
                            </div>
                        </div>
                        <div className={styles.second__block}>
                            <NewText 
                                inner="Effortless Setup:"
                                size={sizes.xxlarge}
                            />
                            <div className={styles.subtitle__wrapper}>
                                <NewText 
                                    inner="Intuitive tools and versatile monetization options for a membership setup that aligns with your content."
                                    size={sizes.large}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom__images__wrapper}>
                        <div className={styles.bottom__first__block}>
                            <NewText 
                                inner="Tailored Experiences:"
                                size={sizes.xxlarge}
                            />
                            <div className={styles.subtitle__wrapper}>
                                <NewText 
                                    inner="Customize your membership with our flexible features to uniquely represent your brand identity."
                                    size={sizes.large}
                                />
                            </div>
                        </div>
                        <div className={styles.bottom__second__block}>
                            <NewText 
                                inner="Marketing Insights:"
                                size={sizes.xxlarge}
                            />
                            <div className={styles.subtitle__wrapper}>
                                <NewText 
                                    inner="Leverage helpful tools and analytics for data-driven strategies to optimize engagement and performance."
                                    size={sizes.large}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default MembershipManagement;