"use client"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

if (typeof window !== 'undefined') {
  posthog.init('phc_QIQK9JpZRqXHyIi97QIkQtER7fBGuS32lO52i693oFo', {
    api_host: 'https://app.posthog.com'
  })
}

export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
