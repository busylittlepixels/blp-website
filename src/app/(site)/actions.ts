"use server"

import { redirect } from 'next/navigation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createSignup(prevState: any, formData: FormData){
  const email = formData.get('email');
  console.log(email);

  resend.emails.send({
      from: 'No-reply<rick@busylittlepixels.com>', // your verified domain
      to: 'ronan@busylittlepixels.com', // the email address you want to send a message
      subject: `Email added to mailing`,
      text: `<p> ${email} signed up</p>`
  });


  redirect(`/why-blp`) // Navigate to new route
}
