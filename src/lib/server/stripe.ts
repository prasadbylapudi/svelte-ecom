import { STRIPE_SECRET } from '$env/static/private';
import Stripe from 'stripe';

export const stripeServerClient = new Stripe(STRIPE_SECRET, {
	apiVersion: '2022-11-15'
});
