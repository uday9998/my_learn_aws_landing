import SliderSection from "@/app/components/modules/SliderSection";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import styles from './PricingSlider.module.scss';

const PricingSlider = () => {
    return (
        <div className={styles.slider__wrapper}>
            <div className={styles.title__wrapper}>
                <Text 
                    inner='Creators Who Love Miestro:'
                    size={sizes.size_36}
                    type={types.new_bold}
                    style={{
                        color: '#36796F'
                    }}
                />
            </div>
            <SliderSection
                backgroundColor='#f7fcfc'
            />
        </div>
    )
};

export default PricingSlider;