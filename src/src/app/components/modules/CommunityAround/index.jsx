import Link from 'next/link';

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import BaseButton from '../../elements/Button/Button';
import { THEMES as themes } from '../../elements/Button/ButtonProps';

import commAroundImage from '@/app/assets/images/dashboard/community__around.png';

import styles from './communityAround.module.scss';

const CommunityAround = () => {
    return (
        <div className={styles.community__around__wrapper}>
            <div className={styles.container}>
                <div>
                    <img src={commAroundImage.src} alt="community around" />
                </div>
                <div className={styles.content__wrapper}>
                    <div className={styles.title__wrapper}>
                        <NewText 
                            inner='Create A Close-Knit Community Around You And Your Content'
                            size={sizes.size_40}
                            type={types.newBold800}
                        />
                    </div>
                    <div className={styles.subtitle__wrapper}>
                        <NewText 
                            inner='On Miestro, your members have a safe space to engage, inspire, and connect with each other—right alongside your video library, always at their fingertips.'
                            size={sizes.xlarge}
                            style={{
                                fontWeight: '400',
                                color: '#444C4B'
                            }}
                        />
                    </div>
                    <div className={styles.button__wrapper}>
                        <Link href='/signup'>
                            <BaseButton
                                text="Start Free Trial"
                                style={{
                                    minHeight: "56px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    minWidth: "130px",
                                    padding: '21px 24px 19px 24px'
                                }}
                                theme={themes.new_secondary}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CommunityAround;