<script lang="ts">
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	let phone = '';
	let name = '';
	let token = '';

	// function sendOTP() {
	// 	fetch('/api/public/sendOtp', {
	// 		method: 'POST',
	// 		body: JSON.stringify({ phone, name }),
	// 		headers: { 'content-type': 'application/json' }
	// 	});
	// }

	// function verifyOTP() {
	// 	fetch('/api/public/verifyOtp', {
	// 		method: 'POST',
	// 		body: JSON.stringify({ phone, token }),
	// 		headers: { 'content-type': 'application/json' }
	// 	});
	// }

	// function buyProduct() {
	// 	fetch('/api/protected/stripe/create-checkout', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			items: [
	// 				{
	// 					price: 'price_1NOEi2SJ1afwULmmYd103TB3',
	// 					quantity: 2
	// 				}
	// 			],
	// 			cancelUrl: 'http://localhost:5173',
	// 			currency: 'INR',
	// 			email: 'coolnoob61@gmail.com'
	// 		}),
	// 		headers: { 'content-type': 'application/json' }
	// 	}).then((res) =>
	// 		res.json().then((val) => {
	// 			console.log('checkout::', val);
	// 			window.location = val.checkout.url;
	// 		})
	// 	);
	// }
</script>

<!-- <form method="post" on:submit|preventDefault={sendOTP}>
	<input bind:value={phone} name="phone" />
	<input bind:value={name} type="text" name="name" />
	<button>Send OTP</button>
</form>

<form method="post" on:submit|preventDefault={verifyOTP}>
	<input bind:value={token} type="number" name="token" />
	<button>Verify OTP</button>
</form> -->

<!-- <button on:click={buyProduct} class="p-2 text-purple-200 rounded-md focus:scale-[0.9] bg-purple-700"
	>Buy Product</button
> -->
