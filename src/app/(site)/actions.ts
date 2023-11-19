"use server"

import { redirect } from 'next/navigation';

export default async function createSignup(formData: FormData){
  console.log(formData);
  redirect(`/why-blp`) // Navigate to new route
}
