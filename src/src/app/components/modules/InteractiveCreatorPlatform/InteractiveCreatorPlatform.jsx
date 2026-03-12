'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import membership from '../../../assets/videos/membershipsanimation.mp4'
import community from '../../../assets/videos/communityanimation.mp4'
import analytics from '../../../assets/videos/analyticsanimation.mp4'
import course from '../../../assets/videos/coursesanimation.mp4'
import payment from '../../../assets/images/new/payment.png'
import ai from '../../../assets/images/new/ai.png'
import GradientText from '../../elements/GradientText/GradientText';
import './style.css'

const InteractiveCreatorPlatform = () => {
  const [activeFeature, setActiveFeature] = useState('Memberships');
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const featureSectionRefs = useRef({});
  const videoRefs = useRef({});
  const isScrolling = useRef(false);
  const autoScrollTimerRef = useRef(null);
  
  const features = [
    { id: 'Memberships', name: 'Memberships' },
    { id: 'Community', name: 'Community' },
    { id: 'Courses', name: 'Courses' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Payments', name: 'Payments' },
    { id: 'AI', name: 'AI Assistance' },
  ];
  
  const featureMedia = {
    Memberships: {
      type: 'video',
      src: membership,
      poster: "/api/placeholder/640/360"
    },
    Community: {
      type: 'video',
      src: community,
      poster: "/api/placeholder/640/360"
    },
    Courses: {
      type: 'video',
      src: course,
      poster: "/api/placeholder/640/360"
    },
    Analytics: {
      type: 'video',
      src: analytics,
      poster: "/api/placeholder/640/360"
    },
    Payments: {
      type: 'image',
      src: payment, 
      alt: 'Payments Feature Preview'
    },
    AI: {
      type: 'image',
      src: ai,
      alt: 'AI Assistance Feature Preview'
    }
  };
  
  const scrollToFeature = (featureId) => {
    if (isScrolling.current) return;
    
    setActiveFeature(featureId);
    isScrolling.current = true;
    
    // Reset auto-scroll timer whenever manual navigation occurs
    resetAutoScrollTimer();
    
    if (featureSectionRefs.current[featureId] && containerRef.current) {
      const featureElement = featureSectionRefs.current[featureId];
      const container = containerRef.current;
      
      const featureOffset = featureElement.offsetTop;
      
      container.scrollTo({
        top: featureOffset,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    }
  };
  
  const goToNextFeature = () => {
    const currentIndex = features.findIndex(feature => feature.id === activeFeature);
    const nextIndex = (currentIndex + 1) % features.length;
    scrollToFeature(features[nextIndex].id);
  };
  
  const resetAutoScrollTimer = () => {
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    
    autoScrollTimerRef.current = setTimeout(() => {
      goToNextFeature();
    }, 10000);
  };

  useEffect(() => {
    Object.keys(videoRefs.current).forEach(key => {
      if (videoRefs.current[key]) {
        videoRefs.current[key].pause();
      }
    });

    const activeMedia = featureMedia[activeFeature];
    if (activeMedia.type === 'video' && videoRefs.current[activeFeature]) {
      videoRefs.current[activeFeature].play()
        .catch(e => console.error('Error playing video:', e));
    }
    
    // Start auto-scroll timer when active feature changes
    resetAutoScrollTimer();
  }, [activeFeature]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isScrolling.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;

      let closestFeature = features[0].id;
      let closestDistance = Infinity;
      
      features.forEach(feature => {
        const element = featureSectionRefs.current[feature.id];
        if (element) {
          const featurePosition = element.offsetTop;
          const distance = Math.abs(scrollPosition - featurePosition);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestFeature = feature.id;
          }
        }
      });
      
      if (closestFeature !== activeFeature) {
        setActiveFeature(closestFeature);
        // Reset auto-scroll timer when scroll detection changes the active feature
        resetAutoScrollTimer();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeFeature, features]);

  useEffect(() => {
    // Initialize auto-scroll timer when component mounts
    resetAutoScrollTimer();
    
    // Clear timer when component unmounts
    return () => {
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
    };
  }, []);

  const renderFeatureMedia = (feature) => {
    const media = featureMedia[feature.id];
    
    if (media.type === 'video') {
      return (
        <video 
          className="w-full h-full object-cover"
          poster={media.poster}
          muted
          loop
          playsInline
          ref={el => videoRefs.current[feature.id] = el}
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (media.type === 'image') {
      return (
        <div className="w-full h-full relative">
          <Image 
            src={media.src}
            alt={media.alt || `${feature.name} Feature`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={activeFeature === feature.id}
            className="object-cover"
          />
        </div>
      );
    } else {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.name}</h3>
            <p className="text-gray-600">Feature preview coming soon</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="interactivebody min-h-screen w-full py-16 px-4" style={{background: '#F7F8FA'}}>
        <div className="text-center lg:mb-16">
          <GradientText className='gradient__text' text="The Creator&apos;s Command Center:" />
          
          <h1 className="text-gray-900 mg-top mg-top1 font-extrabold big-text ">
            All Your Business Tools
          </h1>
          <h1 className="text-gray-900 mg-top font-extrabold big-text">
            in One Place
          </h1>
        </div>
      <div className="w-full mx-auto lg:mt-10">
        <div className="grid grid-cols-1 lg:pl-40 lg:grid-cols-12 gap-8 mt-20">
          <div className="lg:col-span-4 mt-10">
            <h3 style={{fontWeight: '500'}} className="text-blue-500 font-medium text-2xl mb-6">
              Powerful Features for Creators
            </h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li 
                  key={feature.id} 
                  className="flex items-center cursor-pointer transition-all duration-200 hover:translate-x-1"
                  onClick={() => scrollToFeature(feature.id)}
                >
                  {activeFeature === feature.id && (
                    <span className="text-blue-500 mr-2">▶</span>
                  )}
                  <span 
                    style={{fontWeight: '900'}}
                    className={`text-4xl ${
                      activeFeature === feature.id ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div 
            ref={containerRef}
            className="lg:col-span-8 feature-container"
          >
            <div ref={contentRef} className="feature-content">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="feature-section"
                  ref={el => featureSectionRefs.current[feature.id] = el}
                >
                  <div className="rounded-xl overflow-hidden shadow-xl h-full">
                    <div className="w-full h-full">
                      {renderFeatureMedia(feature)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .feature-container {
          height: 522px;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
          scroll-behavior: smooth;
          will-change: transform;
          transform: translateZ(0);
        }
        
        .feature-container::-webkit-scrollbar {
          width: 6px;
        }
        
        .feature-container::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }
        
        .feature-content {
          position: relative;
        }
        
        .feature-section {
          height: 522px;
          width: 100%;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCreatorPlatform;