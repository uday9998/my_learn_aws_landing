import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './BusinessBlock.module.scss';

const BusinessBlock = () => {
    return (
        <div
            className={`container flex pt-[48px] pl-[48px] gap-[48px] ${styles.about__block}`}
        >
            <div className="w-full">
                <Text
                    inner="Manage Your Business"
                    type={types.bold900}
                    className="netflix__gradient__text"
                    style={{
                        lineHeight: "110%",
                        fontSize: "52px"
                    }}
                />
            </div>
        </div>
    );
};

export default BusinessBlock;