"use server"

import { redirect } from 'next/navigation';

export const createSignup = async (formData: FormData) => {
  console.log(formData);
  console.log(formData.get('email'));
  redirect(`/why-blp`) // Navigate to new route
}
