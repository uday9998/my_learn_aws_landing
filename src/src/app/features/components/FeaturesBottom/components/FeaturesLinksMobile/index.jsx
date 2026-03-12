import Link from "next/link";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { FeaturesBlockIcon } from "../FeaturesLinks/FeaturesLinks";

import styles from './FeaturesLinksMobile.module.scss';

const FeaturesLinksMobile = ({
    linkGroups
}) => {
    return (
        <div className={styles.links__wrapper}>
            <div className={styles.icon__wrapper}>
                <FeaturesBlockIcon  isMobile={true} />
            </div>
            {
                linkGroups.map((link, i) => {
                    return link.map((e, i) => {
                        return (
                            <Link key={i} href={`/features/${e.link}`}>
                                <Text
                                    inner={e.label}
                                    type={types.regular148}
                                    style={{ color: '#fff' }}
                                    size={sizes.medium}
                                />
                            </Link>
                        )
                    })
                })
            }
        </div>
    )
};

export default FeaturesLinksMobile;