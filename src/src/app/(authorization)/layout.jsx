import Link from 'next/link';
import { TYPES as types, SIZES as sizes } from '../components/elements/TextWithIcon/TextWithIconProps';

import IconNew from '../components/elements/IconNew/IconNew';
import { StaticText } from '../components/elements/TextWithIcon/TextWithIcon';
import AnimationCard from '../components/elements/AnimationCard/AnimationCard';
import Image from 'next/image';
import newlogo from '../assets/images/new/newmiestro.png'

import styles from './auth.module.scss';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between w-full min-h-screen">
            {/* Left Section - Form Content */}
            <div className={`${styles.title__wrapper} w-full lg:w-1/2 flex flex-col justify-between gap-6 md:gap-8 lg:gap-[50px]`}>
                <div className='pt-6 pb-4 px-6 md:pt-8 md:pb-5 md:px-8 lg:pt-[32px] lg:pb-[20px] lg:pl-[32px] lg:pr-[77px]'>
                    <Link href='/'>
                        <Image 
                            className='miestrologomobile w-auto h-8 md:h-10 lg:h-8' 
                            src={newlogo} 
                            alt="Miestro Logo" 
                        />
                    </Link>
                </div>
                {children}
            </div>

            {/* Right Section - Background with Animation */}
            <div className={`w-full lg:w-1/2 ${styles.auth__right__wrapper} flex flex-col items-center justify-end relative min-h-[300px] lg:min-h-screen`}>
                {/* Text Overlay */}
                <div className={`${styles.text__wrapper} flex items-center justify-center absolute top-0 left-0 right-0 px-4 pt-6 pb-8 md:px-8 md:pt-8 md:pb-12 lg:pt-[20px] lg:pr-[220px] lg:pb-[60px] lg:pl-[220px] lg:fixed lg:top-0 lg:left-1/2 lg:right-0`}>
                    <StaticText
                        inner='Join The Thousands Of Video Creators Using Miestro'
                        type={types.bold900}
                        size={sizes.size_30}
                        style={{ 
                            textAlign: 'center', 
                            color: "#fff", 
                            lineHeight: '150%',
                            fontSize: 'clamp(1.125rem, 2.5vw, 1.875rem)' // Responsive font size
                        }}
                    />
                </div>
                
                {/* Animation Card */}
                <div className="w-full flex justify-center items-end pb-4 md:pb-8 lg:pb-0">
                    <AnimationCard />
                </div>
            </div>
        </div>
    )
};

export default AuthLayout;