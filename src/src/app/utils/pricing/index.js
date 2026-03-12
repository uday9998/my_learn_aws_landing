import { currencySymbols } from "@/app/constants";

export const getCurrencyPrice = (title, pricingType, currency) => {
    if (title === 'Starter') {
       return 'Free';
    } if (currency.currencyAmount) {
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * pricingType) }`;
    } 
    return `${ currencySymbols[currency.currencyCode] }${ pricingType }`;
 };

 export const getPriceData = (name, currency, type) => {
    if (name === 'essential' && type === 'monthly') {
       if (!currency.currencyAmount) {
          return '$69';
       } 
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * 69) }`;
    } if (name === 'essential' && type === 'annual') {
       if (!currency.currencyAmount) {
          return '$55';
       } 
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * 69) }`;
    } if (name === 'infinite' && type === 'monthly') {
       if (!currency.currencyAmount) {
          return '$199';
       } 
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * 199) }`;
    } if (name === 'infinite' && type === 'annual') {
       if (!currency.currencyAmount) {
          return '$159';
       } 
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * 199) }`;
    } if (name === 'surge' && type === 'monthly') {
       if (!currency.currencyAmount) {
          return '$119';
       } 
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * 119) }`;
    } if (name === 'surge' && type === 'annual') {
       if (!currency.currencyAmount) {
          return '$95';
       } 
       return `${ currencySymbols[currency.currencyCode] }${ Math.floor(currency.currencyAmount * 119) }`;
    }
 };