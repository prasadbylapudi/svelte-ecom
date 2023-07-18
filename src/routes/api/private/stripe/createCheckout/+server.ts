import { stripeServerClient } from '$lib/server/stripe';
import { json } from '@sveltejs/kit';
import type Stripe from 'stripe';

export const POST = async ({ request }) => {
	const { email, currency, cancelUrl, shippingRateId } = await request.json();

	let customer: Stripe.Customer;

	const customers = await stripeServerClient.customers.list({
		email
	});

	if (customers.data.length === 0) {
		customer = await stripeServerClient.customers.create({
			email
		});
	} else {
		customer = customers.data[0];
	}

	const params: Stripe.Checkout.SessionCreateParams = {
		success_url: 'http://localhost:5173/user/orders',
		mode: 'payment',
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'INR',
					product_data: {
						name: 'T-shirt',
						description: 'Comfortable cotton t-shirt',
						images: [
							'https://st2.depositphotos.com/3080513/7749/i/600/depositphotos_77495730-stock-photo-male-t-shirt-background.jpg'
						]
					},
					unit_amount: 200000
				},
				quantity: 4
			},
			{
				price_data: {
					currency: 'INR',
					product_data: {
						name: 'T-shirt',
						description: 'Comfortable cotton t-shirt',
						images: [
							'https://img.freepik.com/free-psd/isolated-black-t-shirt-front_125540-1167.jpg'
						]
					},
					unit_amount: 100000
				},
				quantity: 4
			}
		],
		// line_items: [...items],
		allow_promotion_codes: true,
		currency,
		submit_type: 'pay',
		// consent_collection: {
		// 	terms_of_service: 'required'
		// },
		client_reference_id: customer.id,
		billing_address_collection: 'required',
		after_expiration: {
			recovery: {
				enabled: true
			}
		},
		cancel_url: cancelUrl,
		invoice_creation: {
			enabled: true
		},
		customer: customer.id,
		shipping_options: [
			{
				shipping_rate: shippingRateId
			}
		],
		payment_method_options: {
			card: {
				setup_future_usage: 'on_session'
			}
		},
		payment_intent_data: {
			setup_future_usage: 'on_session',
			receipt_email: email
		}
	};

	const checkout = await stripeServerClient.checkout.sessions.create(params);

	return json({ checkout }, { status: 200 });
};
