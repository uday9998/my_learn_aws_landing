import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import PricingOptionStatus from '../PricingOptionStatus/PricingOptionStatus';

import styles from './PricingSection.module.scss';

const PricingSection = ({ title, options }) => {
    return (
        <div className="flex w-full flex-col">
            <div className={`${styles.section__top} w-full py-3 px-4`} style={{ backgroundColor: '#E7E9E9' }}>
                <Text
                    inner={title}
                    type={types.medium160}
                    size={sizes.xlarge}
                    style={{ color: '#24554E' }}
                />
            </div>    
                {
                    options.map((e, index) => {
                        return (
                            <div
                                style={{ borderBottom: index === options.length - 1 ? 'none' : '1px solid #E7E9E9' }}
                                key={index} className={`${styles.section__option} w-full py-3 px-4`}
                            >
                                <div className="section__option__title">
                                    <Text
                                        inner={e.title}
                                        type={types.regular148}
                                        size={sizes.large}
                                        style={{ color: '#24554E' }}
                                    />
                                </div>
                                <div className="section__option__status">
                                    <PricingOptionStatus
                                        type='essential'
                                        status={e.essential}
                                    />
                                </div>
                                <div className="section__option__status">
                                    <PricingOptionStatus
                                        type='surge'
                                        status={e.surge}
                                    />
                                </div>
                                <div className="section__option__status">
                                    <PricingOptionStatus
                                        type='infinity'
                                        status={e.infinity}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
};

export default PricingSection;