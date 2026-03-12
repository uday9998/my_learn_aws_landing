import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './MonetizeBlock.module.scss';

const MonetizeBlock = () => {
    return (
        <div
            className={`container pt-[48px]  bg-no-repeat flex items-center flex-col about__block relative gap-[58px] ${styles.wrapper__block}`}
        >
            <div className="w-full text-center flex justify-center">
                <Text
                    inner="Monetize:"
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

export default MonetizeBlock;