'use client';

import ComingSoonBackground from "@/app/assets/images/coming.png";
import image from '@/app/assets/images/howPage/labels.png'

import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text, { TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './CommingSoon.module.scss';

const CommingSoon = () => {
    return (
        <div className="flex flex-col items-center gap-8 pt-[120px] pb-[100px] px-4"
            style={{
                background: `url(${ComingSoonBackground.src})`,
                backgroundSize: "cover"
            }}>
                <div className={styles.mobile__text__wrapper}>
                    <Text
                        inner='Miestro is a powerful platform that allows creators to monetize their content and build:'
                        type={types.bold900}
                        style={{ fontSize: '36px', color: '#fff' }}
                        className='text-center'
                    />
                </div>
                <div className={styles.desktop__text__wrapper}>
                    <TextColumn
                        texts={['Miestro is a powerful platform', 'that allows creators to monetize', 'their content and build:']}
                        type={types.bold900}
                        style={{ fontSize: '54px', color: "#fff" }}
                    />
                </div>
            <div>
                <img src={image.src} alt="online course platform" />
            </div>
        </div>
    )
}

export default CommingSoon
