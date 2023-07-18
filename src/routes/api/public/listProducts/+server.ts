import { json } from '@sveltejs/kit';

export async function GET({ locals: { supabase } }) {
	const { data, error } = await supabase.from('products').select('*');
	// .filter('available', 'eq', true);

	if (error) {
		return json({ error });
	}

	return json({ products: data });
}
