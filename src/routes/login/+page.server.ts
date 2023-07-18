import { fail } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const phone = formData.get('phone') as string;
		const name = formData.get('name') as string;

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
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		return {
			message: 'Please check your phone for the OTP.',
			success: true
		};
	},

	verifyOtp: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const phone = formData.get('phone') as string;
		const token = formData.get('token') as string;

		const { error } = await supabase.auth.verifyOtp({
			phone,
			token,
			type: 'sms',
			options: {
				redirectTo: `${url.origin}/auth/callback`
			}
		});

		if (error) {
			return fail(500, { message: 'Server error. Try again later.', success: false, phone });
		}

		return {
			message: 'Signed in successfully.',
			success: true
		};
	}
};
