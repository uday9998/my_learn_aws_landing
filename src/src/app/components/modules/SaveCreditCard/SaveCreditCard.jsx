'use client';
import React, { useState } from 'react';
import { Lock, CheckCircle, Users } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { priceInitialData } from '../../../../constants/pricing/index';
import './SaveCreditCard.scss';

// Get the API base URL
const apiUrl = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY || '');

const TrialForm = ({ user, onRegistrationComplete }) => {
   const stripe = useStripe();
   const elements = useElements();
   const [selectedPlan, setSelectedPlan] = useState('essential');
   const [isProcessing, setIsProcessing] = useState(false);
   const [errors, setErrors] = useState({});
   const [dynamicApiUrl, setDynamicApiUrl] = useState(apiUrl);
   const [redirectUrl, setRedirectUrl] = useState('');
   const [selectedPlanType, setSelectedPlanType] = React.useState('monthly'); 

   // Debug: Log user prop when component loads/updates
   React.useEffect(() => {
      setRedirectUrl(user?.url)
      // If user already has URL, extract domain immediately
      if (user?.url) {
         try {
            const urlObj = new URL(user.url);
            const newDomain = `${urlObj.protocol}//${urlObj.hostname}`;
            setDynamicApiUrl(newDomain);
         } catch (e) {
         }
      }
   }, [user]);


  
   React.useEffect(() => {
      const storedPlanId = localStorage.getItem('plan_id');
      if (storedPlanId) {
         
         // Map the stored plan ID to the plan name expected by the backend
         let planName = 'essential'; // default
         let planType = 'monthly'; // default
         
         // Handle both plan ID formats:
         // Format 1: newmiestro-essential-plan-monthly/yearly (from PricingPlansTop)
         // Format 2: miestro-essential-monthly2/yearly2 (from PricingCard via constants)
         
         if (storedPlanId.includes('essential')) {
            planName = 'essential';
         } else if (storedPlanId.includes('surge')) {
            planName = 'surge';
         } else if (storedPlanId.includes('infinite')) {
            planName = 'infinite';
         }
         
         // Detect if it's an annual plan (handle both formats)
         if (storedPlanId.includes('yearly') || storedPlanId.includes('annual')) {
            planType = 'annual';
         }
         
         setSelectedPlan(planName);
         setSelectedPlanType(planType);
         
         // Don't clean up localStorage immediately - keep it until after successful submission
         // localStorage.removeItem('plan_id');
      }
   }, []);

   const handleSubmit = async (event) => {
      event.preventDefault();
      
      if (!stripe || !elements || isProcessing) {
         return;
      }

      setIsProcessing(true); // Disable form immediately

      // Debug: Log user data at start
      
      // Check if registration is complete first (silently wait if needed)
      if (!user || !user.email || !user.isRegistrationComplete) {
         
         try {
            // Wait for registration to complete silently
            const registrationData = await onRegistrationComplete();
            
            
            // Extract domain from registration response URL if available
            if (registrationData?.url) {
               try {
                  const urlObj = new URL(registrationData.url);
                  const newDomain = `${urlObj.protocol}//${urlObj.hostname}`;
                  setDynamicApiUrl(newDomain);
               } catch (e) {
               }
            } else {
            }
            
            // Update user with registration data
            if (registrationData) {
               Object.assign(user || {}, registrationData);
            }
            
         } catch (error) {
            setErrors({ general: 'Account setup failed. Please try again.' });
            setIsProcessing(false);
            return;
         }
      }

      setErrors({});

      try {
         const setupResponse = await axios.post(`${dynamicApiUrl}/api/main/trial/trial/setup-intent`, {
            email: user?.email,
            name: user?.name,
         });

         const { client_secret } = setupResponse.data;

         const cardElement = elements.getElement(CardElement);
         const { error, setupIntent } = await stripe.confirmCardSetup(client_secret, {
            payment_method: {
               card: cardElement,
               billing_details: {
                  name: user?.name,
                  email: user?.email,
               },
            },
         });

         if (error) {
            setErrors({ payment: error.message });
            setIsProcessing(false);
            return;
         }

         
         // Send the base plan name (the backend will handle annual vs monthly via separate parameter)
         let backendPlanId = selectedPlan;
         
         const trialResponse = await axios.post(`${dynamicApiUrl}/api/main/trial/trial/create-subscription`, {
            email: user?.email,
            name: user?.name,
            setup_intent_id: setupIntent.id,
            plan_type: backendPlanId,
            billing_period: selectedPlanType,
         });

         
         // Clean up localStorage after successful submission
         localStorage.removeItem('plan_id');
        
         // Wait for registration response to provide redirect URL (silently)
         let registrationData = null;
         
         while (!registrationData?.url) {
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms
            try {
               registrationData = await onRegistrationComplete();
            } catch (error) {
               // Continue waiting silently
            }
         }
         
         window.location.href = registrationData.url;
         
      } catch (error) {
         setErrors({
            general: error.response?.data?.error || 'An error occurred while creating your trial.'
         });
      } finally {
         setIsProcessing(false);
      }
   };

   return (
      <div className="trial-form">
         <form onSubmit={handleSubmit}>
               <div className="plan-selection">
                  <h3>Choose Your Plan</h3>
                  <div className="plans-grid">
                     {priceInitialData?.filter(plan => ['Essential', 'Surge', 'Infinite'].includes(plan.title)).map((plan, index) => {
                        // Calculate the correct price based on plan type
                        let displayPrice = plan.pricingType; // monthly price
                        let displayPeriod = '/month';
                        
                        if (selectedPlanType === 'annual') {
                           // Apply annual discount pricing for all plans
                           if (plan.title === 'Essential') {
                              displayPrice = 55;
                           } else if (plan.title === 'Surge') {
                              displayPrice = 95;
                           } else if (plan.title === 'Infinite') {
                              displayPrice = 159;
                           }
                           displayPeriod = '/month (billed yearly)';
                        }
                        
                        return (
                           <div 
                              key={index}
                              className={`plan-card ${selectedPlan === plan.title.toLowerCase() ? 'selected' : ''}`}
                              onClick={() => {
                                 setSelectedPlan(plan.title.toLowerCase());
                                 // Don't change the plan type when clicking, preserve the original selection
                              }}
                           >
                              <div className="plan-header">
                                 <h4>{plan.title}</h4>
                                 <div className="plan-price">
                                    <span className="price">${displayPrice}</span>
                                    <span className="period">{displayPeriod}</span>
                                 </div>
                              </div>
                              <p className="plan-subtitle">{plan.topTitle}</p>
                              <div className="trial-badge">
                                 {selectedPlan === plan.title.toLowerCase() ? 'Selected Plan - ' : ''}14-Day Free Trial
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>

               {user && (
                  <div className="customer-info">
                     <h3>Your Information</h3>
                     <div className="form-row">
                        <div className="form-group">
                           <label>Full Name</label>
                           <div className="user-info-display">{user.name}</div>
                        </div>
                        <div className="form-group">
                           <label>Email Address</label>
                           <div className="user-info-display">{user.email}</div>
                        </div>
                     </div>
                  </div>
               )}

               <div className="payment-method">
                  <h3>Payment Method</h3>
                  <p className="payment-note">Your card won't be charged during the trial period</p>
                  <div className="card-element-container">
                     <CardElement
                        options={{
                           style: {
                              base: {
                                 fontSize: '16px',
                                 color: '#424770',
                                 '::placeholder': {
                                    color: '#aab7c4',
                                 },
                              },
                           },
                        }}
                     />
                  </div>
               </div>

               {Object.keys(errors).length > 0 && (
                  <div className="error-messages">
                     {Object.values(errors).map((error, index) => (
                        <p key={index} className="error-message">{error}</p>
                     ))}
                  </div>
               )}

               <button
                  type="submit"
                  disabled={isProcessing || !stripe}
                  className={`submit-button ${isProcessing ? 'processing' : ''}`}
               >
                  {isProcessing ? (
                     <>
                        <div className="spinner"></div>
                        Starting Your Trial...
                     </>
                  ) : (
                     <>
                        <Lock size={16} />
                        Start 14-Day Free Trial
                     </>
                  )}
               </button>
            </form>
      </div>
   );
};

const SaveCreditCard = ({ user, onRegistrationComplete }) => {
  return (
    <Elements stripe={stripePromise}>
      <div className="credit-card-page">
        <div className="credit-container">
          <div className="header">
            <h1 className="title">Start Your Free Trial</h1>
            <p className="subtitle">Choose your plan and start your 14-day free trial today</p>
          </div>

          <div className="main-content">
            <div className="form-container">
              <TrialForm user={user} onRegistrationComplete={onRegistrationComplete} />
            </div>

            <div className="info-sidebar">
              <div className="creators-join-section">
                <div className="creators-badge">
                  <div className="badge-icon">
                    <Users size={20} className="users-icon" />
                  </div>
                  <div className="badge-content">
                    <h3 className="badge-title">Join Thousands Of Creators</h3>
                    <p className="badge-subtitle">Building their dream business</p>
                  </div>
                </div>

                <div className="creators-content">
                  <h2 className="creators-main-title">
                    Join the revolution of creators building <span className="highlight-text">profitable businesses</span>
                  </h2>

                  <div className="creators-features">
                    <div className="feature-item">
                      <CheckCircle size={16} className="feature-check" />
                      <span>No platform fees: keep what you make</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} className="feature-check" />
                      <span>A reliable platform for you and your students</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} className="feature-check" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} className="feature-check" />
                      <span>Advanced Membership tools</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle size={16} className="feature-check" />
                      <span>Premium creator support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default SaveCreditCard;