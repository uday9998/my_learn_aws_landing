'use client';
import Link from 'next/link';
// import { useState } from 'react';

import Button from '@/app/components/elements/Button/Button';
import FooterDefault from '@/app/components/modules/Footer/Footer';
import BookDemo from '@/app/components/modules/BookDemo';

import checkboxImage from '@/app/assets/images/checkbox-checked.png'
import background from '@/app/assets/images/demo-background.png'
import WatchVideo from "@/app/assets/videos/videoDemo.mp4";

const BULLETS_LEFT = [
    'Learn more about our product with a free demo.',
    'See how our product can work for you.',
    'Schedule a time to talk to our team.',
]
const BULLETS_RIGHT = [
    'Get a one-on-one demonstration of our product.',
    'Ask us any questions you have.',
];

import styles from './DemoElements.module.scss';

const DemoElements = () => {
    // const [showPopup, setShowPopup] = useState(false);

    // const handleShowPopup = () => {
    //     setShowPopup(prevState => !prevState);
    // };

    return (
        <>
            <div
                className="w-full flex flex-col py-[80px] items-center"
                style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom'

                }}
            >
            <span className="text-[54px] font-black text-[#131F1E]">Schedule Your Free Demo</span>
            <span className="mt-4 text-[#727978] text-lg">Here's a list of what you can get in the demo</span>
            <div className="video-container max-w-[720px] my-8">
                <video
                    src={ WatchVideo }
                    controls
                />
            </div>

            <div 
                className="w-full max-w-[1006px] py-[25px] flex justify-center gap-[76px] rounded-3xl border border-solid border-[#E7E9E9] bg-[#FFFFFF]"
            >
                <div className="flex flex-col gap-4 max-w-[380px]">
                    {
                        BULLETS_LEFT.map(item => (
                            <div 
                                className="flex gap-4"
                                key={item}
                            >
                                <div
                                    className='w-5 h-5'
                                    style={{
                                        backgroundImage: `url(${checkboxImage.src})`
                                    }}
                                ></div>
                                <span className='text-[#131F1E] text-xl font-semibold flex-1'>{ item }</span>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 max-w-[380px]">
                    {
                        BULLETS_RIGHT.map(item => (
                            <div 
                                className="flex gap-4"
                                key={item}
                            >
                                <div
                                    className='w-5 h-5'
                                    style={{
                                        backgroundImage: `url(${checkboxImage.src})`
                                    }}
                                ></div>
                                <span className='text-[#131F1E] text-xl font-semibold flex-1'>{ item }</span>
                            </div>
                        ))
                    }
                </div>
                
            </div>
            <div className={styles.book__demo__wrapper}>
                <Link href='https://demo.miestro.com/' target='_blank'>
                    <Button
                        text='Book a Demo'
                        className='book_a_demo_button'
                        style={{ height: '56px', maxHeight: '56px', padding: '17px 24px', marginTop: '32px' }}
                    />
                </Link>
                
                {/* <div className={classNames(styles.book__demo__wrapper, {
                    [styles.active]: showPopup
                })}>
                    <BookDemo />
                </div> */}
            </div>
        </div>
            <FooterDefault type='home' />
        </>
    )
};

export default DemoElements;