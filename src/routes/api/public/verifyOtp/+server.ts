import { json } from '@sveltejs/kit';

/**
 * verify the OTP sent to the user's phone
 */
export const POST = async ({ request, url, locals: { supabase } }) => {
	const { phone, token } = await request.json();

	const { error, data } = await supabase.auth.verifyOtp({
		phone,
		token: String(token),
		type: 'sms',
		options: {
			redirectTo: `${url.origin}/auth/callback`
		}
	});

	console.log('OTP verification data: ', data);
	console.log('OTP verification error: ', error);

	if (error) {
		return json(
			{ message: 'Server error. Try again later.', success: false },
			{
				status: 500,
				statusText: 'server error.'
			}
		);
	}

	return json(
		{
			message: 'Signed in successfully.',
			success: true
		},
		{
			status: 200
		}
	);
};

// function verifyOTP() {
// 	fetch('/api/public/verifyOtp', {
// 		method: 'POST',
// 		body: JSON.stringify({ phone, token }),
// 		headers: { 'content-type': 'application/json' }
// 	});
// }
