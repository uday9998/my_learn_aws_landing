'use client'
import { usePathname } from 'next/navigation';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { linkGroups } from '@/app/components/modules/NavigationBar/components/FeaturesModalContent/FeaturesModalContent';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Link from 'next/link';

import background from '@/app/assets/images/features/blockBackground.png';

import styles from './FeaturesLinks.module.scss';

export const FeaturesBlockIcon = ({
    isMobile
}) => {
    return (
        <div className="relative p-2 rounded-2xl features__block__svg__icon" style={{ background: '#fff' }}>
            <div className={`${styles.other__text} py-[6px] px-3 rounded-lg`} style={{ background: '#2585EB' }}>
                <Text
                    inner='Features'
                    type={types.bold}
                    size={sizes.xlarge}
                    style={{ color: "#fff", lineHeight: '160%' }}
                />
            </div>
            <div className="absolute z-10 py-[5px] px-2 rounded-lg top-[-10px] left-[30%]" style={{ background: '#fff', transform: isMobile ? 'rotate(10deg)' : 'rotate(10deg)' }}>
                <Text
                    inner='Other'
                    type={types.medium140}
                    size={sizes.xx_small}
                    style={{ color: '#3060BD', fontSize: '10px' }}
                />
            </div>
            <div className="rounded-[7px] absolute top-0 left-[20%] w-[52px] h-[18px]" style={{ background: 'rgba(13, 33, 41, 0.53)', filter: 'blur(9px)' }}>
            </div>
        </div>
    )
}

const FeaturesLinks = () => {
    const pathname = usePathname();

    return (
        <div className="container">
            <div className="py-[100px] px-[80px]" >
                <div className={`${styles.features__block} relative p-12`} style={{ backgroundSize: 'cover', backgroundImage: `url(${background.src})`, borderRadius: '30px' }}>
                    <div className="absolute features__block__svg top-[-10%] left-[-3%]" style={{
                        transform: 'rotate(-20deg)'
                    }}>
                        <FeaturesBlockIcon />
                    </div>
                    <div className="flex gap-6 item-start w-full">
                        {linkGroups.map((e, index) => {
                            const filteredLinks = e.filter(link => {
                                return !pathname.includes(link.link)
                            });

                            return (
                                <div key={index} className={`${styles.link__text__wrapper} flex w-full flex-col gap-4`}>
                                    {filteredLinks.map((link, i) => {
                                        return (
                                            <Link key={i} href={`/features/${link.link}`}>
                                                <Text
                                                    inner={link.label}
                                                    type={types.regular148}
                                                    style={{ color: '#fff' }}
                                                    size={sizes.medium}
                                                />
                                            </Link>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesLinks