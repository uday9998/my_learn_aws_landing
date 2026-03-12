import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import classNames from "classnames";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import styles from './SwitchPricing.module.scss';

const SwitchPricing = ({ value, onChange, className }) => {
    return (
        <div className={`flex ${styles.pricing__switch} mt-8`}>
            <div role='presentation' onClick={() => onChange('monthly')} className={classNames(`pricing__switch__item`, {
                ['pricing__switch__item__active']: value === 'monthly',
                [className]: className
            })}>
                <Text
                    inner='Monthly'
                    type={types.regular148}
                    size={sizes.medium}
                />
            </div>
            <div role='presentation' onClick={() => onChange('annual')} className={classNames('pricing__switch__item', {
                ['pricing__switch__item__active']: value !== 'monthly',
                [className]: className
            })}>
                <Text
                    inner='Annual (Save up to 20%)'
                    type={types.regular148}
                    size={sizes.medium}
                />
            </div>
        </div>
    )
};

export default SwitchPricing;