import { json } from '@sveltejs/kit';

export async function GET({ url, locals: { supabase } }) {
	const productId = url.searchParams.get('productId');

	if (productId) {
		const { data, error } = await supabase
			.from('reviews')
			.select('*')
			.filter('product', 'eq', productId);

		if (error) {
			return json({ error });
		}

		return json({ reviews: data });
	}

	return json({ error: 'productId is required' }, { status: 400 });
}
