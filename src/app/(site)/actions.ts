"use server"

import { redirect } from 'next/navigation';

export default async function createSignup(formData: FormData){
  const data = {
    "email": formData ? formData.get('email') : 'blah@arse.com',
  }
  console.log(data);
  redirect(`/why-blp`) // Navigate to new route
}
