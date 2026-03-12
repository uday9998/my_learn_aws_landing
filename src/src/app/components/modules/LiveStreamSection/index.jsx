'use client';
import { useRouter } from 'next/navigation';

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import BaseButton from '../../elements/Button/Button';
import { THEMES as themes } from '../../elements/Button/ButtonProps';

import livestreamImage from '@/app/assets/images/dashboard/livestream__image.png';

import styles from './LiveStreamSection.module.scss';


const LiveStreamSection = () => {
    const router = useRouter();

    const handleNavigateToSignUp = () => {
        router.push('/signup');
    };

    return (
        <div className={styles.livestream__section__wrapper}>
            <div className={styles.livestream__section__container}>
                <div className={styles.image__wrapper}>
                    <img src={livestreamImage.src} alt="Livestream To Your Members" />
                </div>
                <div className={styles.texts__wrapper}>
                    <div className={styles.title__wrapper}>
                        <p><span>Go Global</span> With Miestro</p>
                    </div>
                    <div className={styles.footer__wrapper}>
                        <p className={styles.text__wrapper}>
                            We've enhanced Miestro by integrating multiple payment gateways, allowing you to receive payments from anywhere in the world effortlessly. Our platform now supports local payment methods, including <span>PayPal</span>, <span>Stripe</span>, and <span>Paystack</span>.
                        </p>
                        <NewText
                            inner="This ensures that all your international customers can make payments without any hassle."
                            size={sizes.xlarge}
                            style={{
                                color: '#444C4B',
                                fontWeight: '500'
                            }}
                        />
                    </div>
                    <div className={styles.button__wrapper}>
                        <BaseButton
                            text="Start Free Trial"
                            style={{
                                height: "56px",
                                fontSize: "16px",
                                fontWeight: "500",
                                minHeight: '56px',
                                padding: '21px 24px 19px 24px'
                            }}
                            onClick={handleNavigateToSignUp}
                            theme={themes.new_primary}
                        />
                    </div>
                </div>
            </div>
        </div>
        // <div className={styles.livestream__section__wrapper}>
        //     <div className={styles.livestream__section__container}>
        //         <div className={styles.image__wrapper}>
        //             <img src={livestreamImage.src} alt="Livestream To Your Members" />
        //         </div>
        //         <div className={styles.texts__wrapper}>
        //             <div className={styles.title__wrapper}>
        //                 <p><span>Livestream</span> To Your Members</p>
        //             </div>
        //             <div className={styles.footer__wrapper}>
        //                 <NewText
        //                     inner='Go live effortlessly with our Livestream feature! Create, customize, and schedule streams from the product tab. Choose your audience, test your setup, and decide when to broadcast - instantly or scheduled. Craft email notifications for your viewers.'
        //                     size={sizes.xlarge}
        //                     style={{
        //                         color: '#444C4B',
        //                         fontWeight: '400'
        //                     }}
        //                 />
        //                 <NewText
        //                     inner="It's live streaming made simple!"
        //                     size={sizes.xlarge}
        //                     style={{
        //                         color: '#444C4B',
        //                         fontWeight: '500'
        //                     }}
        //                 />
        //             </div>
        //             <div className={styles.button__wrapper}>
        //                 <BaseButton
        //                     text="Start Your Free Trial"
        //                     style={{
        //                         height: "56px",
        //                         fontSize: "16px",
        //                         fontWeight: "500",
        //                         minHeight: '56px',
        //                         padding: '21px 24px 19px 24px'
        //                     }}
        //                     onClick={handleNavigateToSignUp}
        //                     theme={themes.new_primary}
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
};

export default LiveStreamSection;
