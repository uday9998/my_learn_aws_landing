'use client';

import Slider from "react-slick";
import SliderCard from "./components/SliderCard";

import { COMMENTS__SLIDER__IMAGES, settings } from "@/app/utils/hooks/heroCardsImages";

import styles from './sliderSection.module.scss';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import GradientText from "../../elements/GradientText/GradientText";

const SliderSection = ({
    backgroundColor='#f8fafa'
}) => {
    const sliderSettings = {
        ...settings,
        speed: 9500,
        slidesToShow: 6
    }

    return (
        <div style={{
            backgroundColor
        }} className={styles.slider__wrapper}>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} className="canDo">
            <GradientText  className='gradient__text' text="Real Results, Real Creators:" />
            <h1 className="text-xl pt-2 pb-10 flex justify-center sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            See What Miestro Can Do
          </h1>
            </div>
            
            <Slider {...sliderSettings}>
                {
                    COMMENTS__SLIDER__IMAGES.map(personInfo => {
                        return (
                            <SliderCard 
                                key={personInfo.avatarImage}
                                avatarImage={personInfo.avatarImage}
                                firstText={personInfo.firstText}
                                secondText={personInfo.secondText}
                                avatarName={personInfo.avatarName}
                                avatarRole={personInfo.avatarRole}
                                starCount={personInfo.starCount}
                            />
                        )
                    })
                }
            </Slider>
        </div>
    )
};

export default SliderSection;