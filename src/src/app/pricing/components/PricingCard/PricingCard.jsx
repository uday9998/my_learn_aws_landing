'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import BaseButton from '@/app/components/elements/Button/Button';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as size } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { THEMES as theme } from '@/app/components/elements/Button/ButtonProps';
import block from '@/app/assets/images/pricing/blocks.png';
import hat from '@/app/assets/images/pricing/hat.png';
import SwitchPricing from '../SwitchPricing/SwitchPricing';
import { getPriceType } from '@/app/helpers/priceType';
import PlansFeatureList from '../PlansFeatureList';
import { setStoragePriceId } from '@/app/helpers/priceType';
import { getCurrencyPrice } from '@/app/utils/pricing';

import { priceInitialData } from "@/app/constants";

import styles from './PricingCard.module.scss';

const PricingCard = () => {
  const [currency, setCurrency] = useState({
    currencyCode: 'USD',
    currencyAmount: 0,
  })
  const [type, setType] = useState('monthly');
  const [pricingData, setPricingData] = useState(priceInitialData);
  const [showList, setShowList] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(countryData => countryData.json())
      .then(resCountryData => {
        const currencyCode = resCountryData.currency;

        fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=${process.env.NEXT_PUBLIC_ABSTRACT_API_KEY}&base=USD&target=${currencyCode}`)
          .then(currencyData => currencyData.json())
          .then(response => {
            if (!response?.error) {
              setCurrency(() => {
                return {
                  currencyCode,
                  currencyAmount: response.exchange_rates[currencyCode],
                };
              });
            }
          }).catch(() => {
            return 'not found';
          });
      });
  }, []);

  const handleChangeType = (type) => {
    setType(type);

    setPricingData(prevState => {
      return getPriceType(prevState, type)
    })
  }

  const handleChangeShowList = () => {
    setShowList(prevState => !prevState);
  }

  const handleNavigateToSignup = (pricing) => {
    setStoragePriceId(pricing, type);
    router.push('/signup');
  }

  return (
    <div style={{
      paddingBottom: !showList ? '0' : '50px'
    }} className={styles.cards__button__wrapper}>
      <div className={styles.cards__wrapper}>
        <SwitchPricing
          value={type}
          onChange={handleChangeType}
          className={styles.switch__wrapper}
        />
        <div className={styles.pricing__card__wrapper}>
          {
            pricingData.map((pricing, i) => {
              return (
                <div key={i} style={{
                  background: pricing.backgroundColor,
                  position: 'relative',
                  height: pricing.title === 'Surge' ? 'max-content' : '975px'
                }} className={styles.inner__card__wrapper}>
                  {
                    pricing.title === 'Surge' && <div className={styles.popular__widget}>
                      <div className={styles.inner__popular__wrapper}>
                        <Text
                          inner='popular'
                          size={size.small}
                          type={types.new_bold}
                          style={{
                            color: '#36796F',
                            textTransform: 'uppercase'
                          }}
                        />
                      </div>
                    </div>
                  }
                  <div className={styles.titles__wrapper}>
                    <div className={styles.texts__wrapper}>
                      <Text
                        inner={pricing.topTitle}
                        size={size.xsmall}
                        type={types.new_bold}
                        style={{
                          color: pricing.topTitleColor,
                          textTransform: 'uppercase'
                        }}
                      />
                      <Text
                        inner={pricing.title}
                        size={size.size_44}
                        type={types.new_bold}
                        style={{
                          color: pricing.color,
                          textTransform: 'uppercase',
                          lineHeight: 1
                        }}
                        className={styles.title}
                      />
                      <Text
                        inner={pricing.subtitle}
                        size={size.xlarge}
                        type={types.regular500}
                        style={{
                          color: pricing.statusColor,
                        }}
                      />
                    </div>
                    <div className={styles.background__img__wrapper}>
                      <img src={block.src} alt="blocks" />
                      {
                        pricing.isHat && <img className='hatimage' src={hat.src} alt="hat" />
                      }
                    </div>
                  </div>
                  <div className={styles.status__wrapper}>
                    <div style={{ zIndex: '99999999' }} className={styles.pricing__types__wrapper}>
                      <Text
                        inner={pricing.title === "Custom"
                          ? <a href="https://training.miestro.com/demo" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>Contact us</a>
                          : getCurrencyPrice(pricing.title, pricing.pricingType, currency)
                        }
                        size={size.size_36}
                        type={types.newBold800}
                        style={{
                          color: pricing.pricingTypeColor,
                        }}
                      />
                      {
                        pricing.pricingTypeSectondText && <Text
                          inner={pricing.pricingTypeSectondText}
                          size={size.xxlarge}
                          type={types.newBold800}
                          style={{
                            color: pricing.pricingTypeColor,
                          }}
                          fontFamily={'lato'}
                        />
                      }
                    </div>
                    <BaseButton
                      text={pricing.title === "Custom" ? "Talk to a Real Human" : pricing.buttonText}
                      theme={theme[pricing.buttonTheme]}
                      style={{
                        marginTop: pricing.title === 'Surge' ? '16px' : '',
                        fontSize: '16px'
                      }}
                      onClick={() => {
                        if (pricing.title === "Custom") {
                          window.location.href = "https://training.miestro.com/demo";
                        } else {
                          handleNavigateToSignup(pricing);
                        }
                      }}
                    />
                  </div>
                  {
                    pricing.optionsTitle && <div className={pricing.title !== 'Surge' ? styles.opions__title__wrapper : styles.surge__title__wrapper}>
                      <Text
                        inner={pricing.optionsTitle}
                        size={size.large}
                        type={types.new_bold}
                        style={{
                          color: pricing.color,
                        }}
                      />
                    </div>
                  }
                  <div className={styles.options__wrapper}>
                    {
                      pricing.options.map(option => {
                        return (
                          <div key={option} className={styles.options__icon__text__wrapper}>
                            <div
                              style={{
                                background: pricing.optionsIconsColor,
                                border: `1px solid ${pricing.optionIconsBorderColor}`,
                              }}
                              className={styles.option__icon}
                            />
                            <Text
                              inner={option}
                              size={size.large}
                              type={types.regular_500}
                              style={{
                                color: pricing.optionTextColor,
                              }}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        {
          !showList && <BaseButton
            text='See Full Feature List'
            theme={theme.pricing__style}
            onClick={handleChangeShowList}
          />
        }
      </div>
      {
        showList && <div className={styles.plans__limits__wrapper}>
          <PlansFeatureList
            handleChangeShowList={handleChangeShowList}
            type={type}
            handleChangeType={handleChangeType}
            currency={currency}
          />
        </div>
      }
    </div>
  );
};

export default PricingCard;
