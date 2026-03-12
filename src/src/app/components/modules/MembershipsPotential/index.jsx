import { NewText } from "../../elements/TextWithIcon/TextWithIcon"; 
import { TYPES as types } from '../../elements/TextWithIcon/TextWithIconProps';

import styles from './MembershipsPotential.module.scss';

const MembershipsPotential = ({
    title,
    subtitle,
    children
}) => {
    return (
       <div className={styles.membership__wrapper}>
         <div className={styles.membership__pot__wrapper}>
            <div className={styles.titles__wrapper}>
                <NewText 
                    inner={title}
                    type={types.bold800}
                    className="gradient__text"
                    style={{
                        fontFamily: true,
                        fontSize: '40px'
                    }}
                />
                <NewText
                    inner={subtitle}
                    type={types.bold900}
                    style={{
                        color: "#131F1E",
                        maxWidth: '1200px',
                        marginBottom: '24px',
                        fontSize: '52px'
                    }}
                    className="text-center z-10"
                />
            </div>
            {
                children
            }
        </div>
       </div>
    )
};

export default MembershipsPotential;