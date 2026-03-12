import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import FeaturesCard from './components/FeaturesCard';

import styles from './Features.module.scss';

const Features = () => {
    return (
        <div className={styles.features__wrapper}>
            <div className={styles.features__container}>
                <div className={styles.title__wrapper}>
                    <Text 
                        inner='Instant Setup with Ready-to-Use Features'
                        size={sizes.size_52}
                        type={types.new_bold}
                    />
                    <Text
                        inner='Embrace the power of efficiency with our comprehensive suite of features crafted to speed up your launch and streamline your business operations.'
                        size={sizes.xlarge}
                    />
                </div>
                <div>
                    <FeaturesCard />
                </div>
            </div>
        </div>
    )
};

export default Features;