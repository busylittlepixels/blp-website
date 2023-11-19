"use server"

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

async function createSignup() {
  redirect(`/studio`) // Navigate to new route
}

export default createSignup