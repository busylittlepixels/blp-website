'use server';

import { redirect } from 'next/navigation';

export async function createSignup(prevState: any, formData: FormData) {
	const email = formData.get('email');
	console.log(email);
	redirect(`/why-blp`); // Navigate to new route
}
