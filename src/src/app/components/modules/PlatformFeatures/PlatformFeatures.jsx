'use client'

import React, { useState, useEffect } from 'react'
import { Play } from 'lucide-react'
import image1 from '../../../assets/images/new/image1.png'
import Image from 'next/image'
import './style.css'
import GradientText from '../../elements/GradientText/GradientText'

const PlatformFeatures = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    )

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Responsive multipliers based on screen width
    const getScaleFactor = () => {
        if (windowWidth < 640) return 0.7 // Mobile
        if (windowWidth < 768) return 0.8 // Small tablet
        if (windowWidth < 1024) return 0.9 // Tablet
        return 1 // Desktop
    }

    const scale = getScaleFactor()

    return (
        <div className='plartform w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
                {/* Main Heading */}
                <div className='text-center mb-10 lg:mb-20 md:mb-16'>
                    <h1
                        style={{ fontSize: '52px' }}
                        className='sm:text-xl big-text line-height md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight'
                    >
                        Transform Your Audience Into a Revenue- Generating
                        Community
                    </h1>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-20 md:gap-24 sm:gap-5 '>
                    {/* Left Side - UI Screenshots */}
                    <div className='w-full lg:w-1/2 relative order-2 lg:order-1 mt-8 lg:mt-0'>
                        <div
                            className={`relative ${
                                windowWidth < 640
                                    ? 'h-80'
                                    : windowWidth < 768
                                    ? 'h-96'
                                    : ''
                            }`}
                        >
                            <Image src={image1} alt='' />
                            {/* Main/Center preview screen */}
                            {/* <div className="absolute top-0 right-0 w-4/5 h-4/5 z-20 transform rotate-3 shadow-xl rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/600/480" 
                  alt="Membership platform preview" 
                  className="w-full h-full object-cover"
                />
              </div> */}

                            {/* UI Elements card */}
                            {/* <div className={`absolute top-${windowWidth < 640 ? '2' : '4'} left-0 w-3/5 bg-white ${windowWidth < 640 ? 'p-2' : 'p-3'} md:p-4 rounded-lg shadow-lg z-30`}>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Hero Section</div>
                <div className="bg-gray-100 rounded-lg p-1 sm:p-2 mb-2 sm:mb-3">
                  <img 
                    src="/api/placeholder/280/160" 
                    alt="Hero section UI" 
                    className="w-full rounded"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mt-1 sm:mt-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="border border-gray-300 rounded px-1 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">Left</span>
                    <span className="border border-gray-300 rounded px-1 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">Center</span>
                    <span className="border border-gray-300 rounded px-1 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">Right</span>
                  </div>
                  <span className="text-green-600 font-medium text-[10px] sm:text-xs">Add Section</span>
                </div>
              </div> */}

                            {/* Content Section card */}
                            {/* <div className={`absolute ${windowWidth < 640 ? 'top-[45%]' : 'top-1/2'} left-4 sm:left-8 w-3/5 bg-white ${windowWidth < 640 ? 'p-2' : 'p-3'} md:p-4 rounded-lg shadow-lg z-10`}>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Content Section</div>
                <div className="bg-gray-800 rounded-lg p-1 sm:p-2">
                  <img 
                    src="/api/placeholder/280/100" 
                    alt="Content section UI" 
                    className="w-full rounded"
                  />
                </div>
                <div className="text-[10px] sm:text-xs text-yellow-500 font-medium mt-1 sm:mt-2 flex items-center">
                  <span>👆 Hover To Add</span>
                </div>
              </div> */}

                            {/* Features Section card */}
                            {/* <div className={`absolute bottom-0 left-2 sm:left-4 w-3/5 bg-white ${windowWidth < 640 ? 'p-2' : 'p-3'} md:p-4 rounded-lg shadow-lg z-0`}>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Features Section</div>
                <div className="flex items-center mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs text-gray-500">Button</span>
                  <div className="ml-2 sm:ml-4 w-6 sm:w-8 h-3 sm:h-4 bg-teal-700 rounded-full flex items-center">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full ml-0.5 sm:ml-1"></div>
                  </div>
                </div>
                <div className="bg-teal-900 rounded-lg p-1 sm:p-2">
                  <img 
                    src="/api/placeholder/280/80" 
                    alt="Features section UI" 
                    className="w-full rounded"
                  />
                </div>
              </div> */}

                            {/* Floating app icons */}
                            {/* <div className={`absolute top-1/4 right-1/4 flex items-center gap-1 sm:gap-2 z-40 transform ${windowWidth < 640 ? 'scale-75' : 'scale-90'} md:scale-100`}>
                <div className="bg-purple-600 p-1 sm:p-2 rounded-lg shadow-md">
                  <div className="w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-md"></div>
                </div>
                <div className="bg-white p-1 sm:p-2 rounded-lg shadow-md">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 border-2 border-gray-800 rounded-md"></div>
                </div>
                <div className="bg-white p-0.5 sm:p-1 rounded-lg shadow-md">
                  <div className="w-2 sm:w-3 h-4 sm:h-5 border-2 border-gray-800 rounded-md"></div>
                </div>
              </div> */}
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className='w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2'>
                        <div>
                            <h2
                                style={{
                                    fontWeight: '900',
                                    fontSize: '40px',
                                    lineHeight: '45px'
                                }}
                                className=' convert  text-2xl sm:text-lg md:text-3xl  text-gray-900 mb-2 sm:mb-4 leading-tight'
                            >
                                Convert Your Followers 
                                {windowWidth >= 240 && <br />}
                                Into Committed Members
                            </h2>
                            <p
                                style={{ maxWidth: '519px', fontSize: '20px' }}
                                className=' small-text text-base sm:text-lg text-gray-700'
                            >
                                On a platform that's all yours, accessible
                                across all devices.
                            </p>
                        </div>

                        <div>
                            <p
                                style={{ maxWidth: '519px', fontSize: '20px' }}
                                className='small-text text-base sm:text-lg text-gray-700'
                            >
                                Miestro empowers you to build a community that's
                                not just about views or likes but about real
                                engagement and loyalty.
                            </p>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 sm:pt-6'>
                            <button
                                style={{
                                    background:
                                        'linear-gradient(to right, #006838, #96CF24)',
                                    width: '255px'
                                }}
                                className='px-4 sm:px-6 py-3 sm:py-4  hover:bg-teal-700 transition-colors text-white font-medium rounded-md text-sm sm:text-base'
                            >
                                Start Your Free Trial
                            </button>
                            <div style={{width: 'fit-content'}} className='relative inline-block rounded-md'>
                                {/* Gradient border background */}
                                <div className='absolute inset-0 rounded-md bg-gradient-to-r from-[#006838] to-[#96CF24]'></div>

                                {/* Button with transparent border and background */}
                                <button
                                    style={{ width: '255px' }}
                                    className='relative px-4 sm:px-6 py-3 sm:py-4 text-teal-800 hover:bg-gray-100 transition-colors font-medium rounded-md flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base m-[2px] bg-white'
                                >
                                    <svg
                                        width='22'
                                        height='23'
                                        viewBox='0 0 22 23'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M1.75 11.5C1.75 6.39137 5.89137 2.25 11 2.25C16.1086 2.25 20.25 6.39137 20.25 11.5C20.25 16.6086 16.1086 20.75 11 20.75C5.89137 20.75 1.75 16.6086 1.75 11.5ZM11 0.75C5.06294 0.75 0.25 5.56294 0.25 11.5C0.25 17.4371 5.06294 22.25 11 22.25C16.9371 22.25 21.75 17.4371 21.75 11.5C21.75 5.56294 16.9371 0.75 11 0.75ZM11.9035 8.53431L11.8747 8.51506C11.4953 8.26215 11.1683 8.0441 10.8939 7.89541C10.6193 7.74658 10.2799 7.59869 9.8957 7.62163C9.38491 7.65213 8.91306 7.90465 8.60436 8.31273C8.37218 8.61965 8.30694 8.98412 8.27844 9.29518C8.24997 9.60595 8.24998 9.99902 8.25 10.4549L8.25 10.4896V12.5104L8.25 12.5451C8.24998 13.001 8.24997 13.3941 8.27844 13.7048C8.30694 14.0159 8.37218 14.3804 8.60436 14.6873C8.91306 15.0953 9.38491 15.3479 9.8957 15.3784C10.2799 15.4013 10.6193 15.2534 10.8939 15.1046C11.1683 14.9559 11.4953 14.7378 11.8747 14.4849L11.9035 14.4657L13.4191 13.4553L13.446 13.4374L13.446 13.4374C13.7568 13.2302 14.0313 13.0472 14.2396 12.8793C14.4551 12.7055 14.6838 12.4838 14.8137 12.1704C14.9917 11.7412 14.9917 11.2588 14.8137 10.8296C14.6838 10.5162 14.4551 10.2945 14.2396 10.1207C14.0313 9.95277 13.7568 9.76978 13.446 9.5626L13.4191 9.54468L11.9035 8.53431ZM9.81003 9.20601C9.85076 9.15838 9.90794 9.12778 9.97016 9.1203C9.98783 9.12505 10.0498 9.14404 10.1792 9.2142C10.3857 9.3261 10.6551 9.50477 11.0715 9.78238L12.5871 10.7928C12.9329 11.0233 13.1493 11.1685 13.2979 11.2884C13.3895 11.3622 13.4228 11.4017 13.4317 11.4131C13.4524 11.4692 13.4524 11.5308 13.4317 11.5869C13.4228 11.5983 13.3895 11.6378 13.2979 11.7116C13.1493 11.8315 12.9329 11.9767 12.5871 12.2072L11.0715 13.2176C10.6551 13.4952 10.3857 13.6739 10.1792 13.7858C10.0498 13.856 9.98783 13.8749 9.97016 13.8797C9.90794 13.8722 9.85076 13.8416 9.81003 13.794C9.80417 13.7767 9.78562 13.7146 9.77218 13.568C9.75075 13.3341 9.75 13.0109 9.75 12.5104V10.4896C9.75 9.98915 9.75075 9.66591 9.77218 9.43204C9.78562 9.28541 9.80417 9.22335 9.81003 9.20601Z'
                                            fill='url(#paint0_linear_2002_71544)'
                                        />
                                        <defs>
                                            <linearGradient
                                                id='paint0_linear_2002_71544'
                                                x1='0.25'
                                                y1='0.75'
                                                x2='21.75'
                                                y2='0.75'
                                                gradientUnits='userSpaceOnUse'
                                            >
                                                <stop stop-color='#006838' />
                                                <stop
                                                    offset='1'
                                                    stop-color='#96CF24'
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <GradientText
                                        className='fontSize'
                                        text='Watch Tutorials'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformFeatures
