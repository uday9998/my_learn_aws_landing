'use client'

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types } from '../../elements/TextWithIcon/TextWithIconProps';

import welcomeImage from '@/app/assets/images/welcome.png';
import welcome from '../../../assets/videos/welcome.mp4';

import styles from './Welcome.module.scss';
import { useEffect, useRef, useState } from 'react';
import GradientText from '../../elements/GradientText/GradientText';
import './index.css'

const WelcomeSection = () => {
    const videoRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    // Handle responsive design
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Call handler initially
        handleResize();
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle video playback
    useEffect(() => {
        // Ensure video plays when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                // Many browsers require user interaction before autoplay
            });
        }
    }, []);

    // Determine if mobile layout is needed
    const isMobile = windowWidth <= 768;

    return (
        <div className={`${styles.welcome__wrapper}`} style={{background: '#fff', paddingBottom: '100px'}}> 
            <div className={styles.header__texts__wrapper}>
            <GradientText className='gradient__text' text="Build Your Empire" />
                <NewText
                    inner={`Members, Community, and Income on Your Terms`}
                    type={types.bold900}
                    style={{
                        color: "#131F1E",
                        maxWidth: '1200px',
                        marginBottom: '24px'
                    }}
                    className="text-center z-10"
                />
                <NewText
                    inner="The only platform that combines video, courses, and community features across all devices."
                    style={{
                        color: "#444C4B",
                        margin: "0px auto",
                    }}
                    className="text-center"
                />
            </div>
            
            <div className={styles.image__wrapper}>
                {isMobile ? (
                    // Mobile layout - stacked
                    <div className='col-flex' style={{ 
                        width: '100%',
                        // maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '20px',
                        display: 'flex'
                    }}>
                        {/* Image full width on mobile */}
                        <div className='flex-col' style={{ width: '100%', marginBottom: '20px' }}>
                            <img 
                                src={welcomeImage.src} 
                                alt="welcome image" 
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </div>
                        
                        {/* Video full width on mobile */}
                        <div style={{ width: '100%' }}>
                            <video 
                                ref={videoRef}
                                style={{ 
                                    width: '100%',
                                    height: 'auto',
                                    border: '4px solid black',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                                    display: 'block',
                                    position: 'relative',
                                    left: '-200px',
                                    marginTop: '110px'
                                }}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className='video-mobile'
                            >
                                <source src={welcome} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ) : (
                    // Desktop layout - overlapping with centering
                    <div style={{ 
                        position: 'relative',
                        width: '100%',
                        maxWidth: '1200px', // Container max width for centering
                        margin: '0 auto',    // Center horizontally
                        padding: '40px 20px',
                        display: 'flex',
                        justifyContent: 'center' // Center the flex content
                    }}>
                        {/* Image positioned to the left */}
                        <div style={{ 
                            width: '75%',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <img 
                                src={welcomeImage.src} 
                                alt="welcome image" 
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </div>
                        
                        {/* Video overlapping from right to left */}
                        <div style={{ 
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '60%',
                            zIndex: 2
                        }}>
                            <video 
                                ref={videoRef}
                                style={{ 
                                    width: '100%',
                                    height: 'auto',
                                    border: '4px solid black',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                                    display: 'block',
                                    position: 'relative',
                                    marginTop: '170px',
                                    left: '-40px'
                                }}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={welcome} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
                
                <div className={styles.image__text__wrapper}>
                    <NewText
                        inner="With Miestro, you have the tools and autonomy to drive your success, paving the way to live on your own terms."
                        style={{
                            color: "#444C4B",
                            margin: "0 auto 0",
                            fontSize: '20px'
                        }}
                        className="text-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection