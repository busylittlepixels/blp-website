"use server"

import { redirect } from 'next/navigation';

export const createSignup = async (formData: FormData) => {
  console.log("runninng onn server");
  console.log(formData.get('email'));
  redirect(`/why-blp`) // Navigate to new route
}

export default createSignup