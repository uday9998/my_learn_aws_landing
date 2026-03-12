import Link from 'next/link';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import styles from './FeaturesModalContent.module.scss';

export const linkGroups = [
    [
        { link: 'capability', label: 'Miestro Ai Capability' },
        { link: 'video-based', label: 'Video-Based Programs' },
        { link: 'quizzes-coupons-certificates', label: 'Quizzes / Coupons / Certificates' }
    ],
    [
        { link: 'membership', label: 'Membership Sites' },
        { link: 'members', label: 'Members' },
        { link: 'landing', label: 'Landing Pages' },
        { link: 'emails', label: 'Emails' }

    ]
    , [
        { link: 'monetization', label: 'Video Monetization' },
        { link: 'payments', label: 'Payments' },
        { link: 'customization', label: 'Customization' },
        { link: 'community', label: 'Community' }

    ]
    , [
        { link: 'analytics', label: 'Analytics' },
        { link: 'integrations', label: 'Integrations' },
        { link: 'automations', label: 'Automations' },
        { link: 'affiliate', label: 'Affiliate Program' }
    ]
]
const FeaturesModalContent = ({ onClose }) => {
    return (
        <div className={`flex relative ${styles['features__modal__content']}`}>
            <div className="absolute top-[-20%] left-[-5%]">
                <IconNew name='FeatureModal' />
            </div>
            <div className="flex gap-6 item-start w-full">
                {linkGroups.map((e, index) => {
                    return (
                        <div key={index} className="flex w-full flex-col gap-4" role='presentation' onClick={() => onClose()}>
                            {e.map((link, i) => {
                                return (
                                    <Link key={i} href={`/features/${link.link}`}>
                                        <Text
                                            inner={link.label}
                                            type={types.regular148}
                                            size={sizes.medium}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className="absolute top-[-10%] right-[-2%]">
                <IconNew name='VectorResources' />
            </div>
        </div>
    )
}

export default FeaturesModalContent