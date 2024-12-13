import Stripe from 'stripe';

export const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01', // Use the correct Stripe API version
});
