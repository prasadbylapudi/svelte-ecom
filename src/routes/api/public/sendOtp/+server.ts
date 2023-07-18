import { json } from '@sveltejs/kit';

/**
 * send OTP to the user's phone
 */
export const POST = async ({ request, locals: { supabase } }) => {
	const { phone, name } = await request.json();

	const { error } = await supabase.auth.signInWithOtp({
		phone,
		options: {
			channel: 'sms',
			data: {
				name
			}
		}
	});

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
			message: 'Please check your phone for the OTP.',
			success: true
		},
		{
			status: 200
		}
	);
};

// function sendOTP() {
// 	fetch('/api/public/sendOtp', {
// 		method: 'POST',
// 		body: JSON.stringify({ phone, name }),
// 		headers: { 'content-type': 'application/json' }
// 	});
// }
