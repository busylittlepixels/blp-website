"use server"

import { redirect } from 'next/navigation'

async function createSignup() {
  redirect(`/studio`) // Navigate to new route
}

export default createSignup