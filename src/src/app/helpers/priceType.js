export const getPriceType = (pricingData, type) => {
  return pricingData.map(priceData => {
      if(type === 'monthly') {
          if(priceData.title === 'Essential') {
            return {
              ...priceData,
              pricingType: 69
            }
          } else if(priceData.title === 'Surge') {
            return {
              ...priceData,
              pricingType: 119
            }
          } else if(priceData.title === 'Infinite') {
            return {
              ...priceData,
              pricingType: 199
            }
          }
        } else {
          if(priceData.title === 'Essential') {
            return {
              ...priceData,
              pricingType: 55
            }
          } else if(priceData.title === 'Surge') {
            return {
              ...priceData,
              pricingType: 95
            }
          } else if(priceData.title === 'Infinite') {
            return {
              ...priceData,
              pricingType: 159
            }
          }
        }
  
        return priceData
  })
}

export const setStoragePriceId = (pricing, type) => {
  if(type === 'annual') {
    localStorage.setItem('plan_id', pricing.annualName);
  } else {
    localStorage.setItem('plan_id', pricing.monthlyName)
  }
};

export const getTableMobileText = (title, text) => {
  if(title === 'Number of Courses') {
    if(text.toLowerCase().includes('courses')) {
      return text.slice(0, text.toLowerCase().indexOf('courses'))
    } else {
      return text.slice(0, text.toLowerCase().indexOf('course'))
    }
  } else if(title === 'Number Of Rooms') {
    if(text.toLowerCase().includes('rooms')) {
      return text.slice(0, text.toLowerCase().indexOf('rooms'))
    } else {
      return text.slice(0, text.toLowerCase().indexOf('room'))
    }
  } else if(text === '1 ONBOARDING CALL') {
    return '1 Call'
  } else if(text === '2 ONBOARDING CALLS') {
    return '2 Calls'
  }

  return text;
}