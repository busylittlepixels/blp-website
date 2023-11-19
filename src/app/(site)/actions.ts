"use server"

import { redirect } from 'next/navigation';

export const createSignup = async (formData: FormData) => {
  console.log(formData);
  redirect(`/why-blp`) // Navigate to new route
}
