'use client'

import { useState, useRef, useEffect } from 'react';
import { usersFormat, paymentFormat, precentFormat, yearCalculate } from '@/app/helpers/calculation';

import { NewText } from '../../elements/TextWithIcon/TextWithIcon'; 
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps'; 
import RangeInput from '../../elements/RangeInput';
import Box from '@mui/material/Box';

import styles from './calculate.module.scss';
import GradientText from '../../elements/GradientText/GradientText';
import './style.css'

const CalculateSection = () => {
    const sliderRef = useRef(null)
    const [ rangeValue, setRangeValue ] = useState({
        users: 1000,
        precent: 10,
        payment: 296
    });

    const [labelPosition, setLabelPosition] = useState('-47');


    const changeRangeValue = (event, value, firstRender) => {
        if(!firstRender) {
            if(value <= 2300 && event.target.name === 'users' && window.innerWidth < 600) {
                setLabelPosition('-4')
            } else if(event.target.name !== 'precent' && event.target.name !== 'payment') {
                setLabelPosition('-47')
            }
    
            setRangeValue(prevState => {
                return {
                    ...prevState,
                    [event.target.name]: value
                }
            })
        } else if(firstRender) {
            if(window.innerWidth < 600) {
                setLabelPosition('-4')
            }
        }
    };
    

    useEffect(() => {
        changeRangeValue(false, false, true)
    }, []);

    return (
        <div className={styles.calculate__wrapper}>
            <div className={styles.calculate__container}>
                <div className={styles.texts__wrapper}>
                    <div className={styles.title__wrapper}>
                        <GradientText className='gradient__text' text="Calculate" />
                        {/* <NewText 
                            inner='Calculate'
                            size={sizes.size_40}
                            className='gradient__text'
                        /> */}
                        <NewText 
                            inner='Your Miestro Membership Earnings'
                            size={sizes.size_52}
                            type={types.newBold800}
                            style={{fontSize: '52px'}}
                        />
                    </div>
                    <NewText 
                        inner='Explore your earning potential with our straightforward revenue calculator.'
                        size={sizes.xlarge}
                        style={{
                            color: '#A1A5A5',
                            marginTop: '24px',
                            display:  'flex',
                            justifyContent: 'center'
                        }}
                    />
                </div>
                <div className={styles.range__wrapper}>
                    <div className={styles.range__inner__wrapper}>
                        <div id={styles.text__wrapper}>
                            <NewText 
                                inner='How many users will you have? '
                                size={sizes.xxlarge}
                                style={{
                                    color: '#fff',
                                    marginTop: '24px'
                                }}
                            />
                        </div>
                        <Box >
                            <RangeInput
                                defaultValue={1000}
                                step={1}
                                valueLabelDisplay="on"
                                min={0}
                                max={10000}
                                labelBackgroundColor='#9170ed'
                                valueLabelFormat={usersFormat}
                                labelPosition={labelPosition}
                                onChange={changeRangeValue}
                                name='users'
                                ref={sliderRef}
                            />
                        </Box>
                    </div>
                    <div className={styles.range__inner__wrapper}>
                        <div id={styles.text__wrapper}>
                            <NewText 
                                inner='Estimate the percentage of your audience likely to sign up for your membership.'
                                size={sizes.xxlarge}
                                style={{
                                    color: '#fff',
                                    marginTop: '24px'
                                }}
                            />
                        </div>
                        <Box>
                            <RangeInput
                                defaultValue={10}
                                step={1}
                                valueLabelDisplay="on"
                                min={0}
                                max={100}
                                labelBackgroundColor='#3060BD'
                                valueLabelFormat={precentFormat}
                                labelPosition='-25'
                                name='precent'
                                onChange={changeRangeValue}
                            />
                        </Box>
                    </div>
                    <div className={styles.range__inner__wrapper}>
                        <div id={styles.text__wrapper}>
                            <NewText 
                                inner='Choose your membership investment'
                                size={sizes.xxlarge}
                                style={{
                                    color: '#fff',
                                    marginTop: '24px'
                                }}
                            />
                        </div>
                        <Box>
                            <RangeInput
                                labelBackgroundColor='#36796F'
                                defaultValue={296}
                                step={1}
                                valueLabelDisplay="on"
                                min={0}
                                max={10000}
                                valueLabelFormat={paymentFormat}
                                labelPosition='-25'
                                name='payment'
                                onChange={changeRangeValue}
                            />
                        </Box>
                    </div>
                </div>
                <div className={styles.animation__wrapper}>
                    <div className={styles.text__wrapper}>
                        <NewText 
                            inner={`${yearCalculate(rangeValue.users, rangeValue.precent, rangeValue.payment)}`}
                            size={sizes.size_52}
                            type={types.newBold800}
                            style={{
                                color: '#fff',
                            }}
                        />
                        <NewText 
                            inner='/ Year'
                            size={sizes.size_30}
                            type={types.newBold800}
                            style={{
                                color: '#A1A5A5',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CalculateSection;