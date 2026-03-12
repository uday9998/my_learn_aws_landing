'use client';

import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import image1 from '@/app/assets/images/howPage/images/image1.png'
import image2 from '@/app/assets/images/howPage/images/image2.png'
import image3 from '@/app/assets/images/howPage/images/image3.png'
import image4 from '@/app/assets/images/howPage/images/image4.png'
import image5 from '@/app/assets/images/howPage/images/image5.png'
import image6 from '@/app/assets/images/howPage/images/image6.png'
import image7 from '@/app/assets/images/howPage/images/image7.png'

import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import HowWorkItem from './HowWorkItem/HowWorkItem';

import styles from './HowWorksContent.module.scss';

const items = [
    {
        title: 'Sign Up:',
        image: image1.src,
        description: 'The first step is to sign up for Miestro. You can create a free account and start exploring the platform right away. Once you sign up, you can access all the features that Miestro has to offer.'
    },
    {
        title: 'Upload Your Videos And Content to Miestro:',
        image: image2.src,
        description: 'Miestro allows you to upload your videos and content to the platform. You can upload your content in any format, and Miestro will take care of the rest. Once your content is uploaded, you can start using the various tools that Miestro offers.'
    },
    // {
    //     title: 'Use Smart Tools Such as Miestro Ai to Generate Your Titles and Content for Your Online Program:',
    //     image: image3.src,
    //     description: 'Miestro offers several smart tools that can help you generate titles and content for your online program. Miestro Ai is one such tool that uses advanced algorithms to generate high-quality content for your program.'
    // },
    {
        title: 'Set Your Price And Use Our Checkout Experience For Your Customers:',
        image: image4.src,
        description: "Once your program is ready, you can set the price and use Miestro's checkout experience for your customers. Miestro offers a secure and easy-to-use checkout experience that ensures your customers can purchase your program without any hassle.",
        marginTop: '65px'
    },
    {
        title: 'Customize School Room Experience:',
        image: image5.src,
        description: 'Miestro also allows you to customize the School Room experience. You can choose from several themes and layouts to create a unique and personalized learning experience for your students.'
    },
    {
        title: 'Market Your Videos With Tools:',
        image: image6.src,
        description: 'Miestro also offers several marketing tools that can help you reach your target audience. You can create landing pages, email campaigns, and social media posts to promote your program.'
    },
    {
        title: 'Get paid:',
        image: image7.src,
        description: 'Miestro offers a seamless payment experience that ensures you get paid on time. You can track your earnings and manage your payouts from the Miestro dashboard.'
    }
]

const HowWorksContent = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 1024);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1024)
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex flex-col ${styles.how__work__content} pt-[120px] pb-[70px]`}>
            <div className={`${styles.main__container} ${styles.how_works_wrapper}`}>
                <div className="flex flex-col items-center gap-[80px]">
                    <Text
                        inner="Here's How it Works:"
                        type={types.bold900}
                        style={{ fontSize: '54px', color: '#fff' }}
                    />
                    {items.map((e, index) => {
                        return (
                            <HowWorkItem
                                {...e}
                                key={index}
                                number={index + 1}
                                isMobile={ isMobile }
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

HowWorksContent.propTypes = {
    isMobile: PropTypes.bool
}

export default HowWorksContent