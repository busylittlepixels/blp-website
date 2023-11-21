// app/banner.tsx
'use client'
import { useEffect, useState } from 'react'
import { usePostHog } from 'posthog-js/react'

export const CookieBanner = () => {
	const posthog = usePostHog()
	const [showBanner, setShowBanner] = useState<boolean>(false)

	useEffect(() => {
		if (!(posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing())) {
			setShowBanner(true)
		}
	}, [])

	if (!showBanner) {
		return null
	}

	const acceptCookies = () => {
		posthog.opt_in_capturing()
		setShowBanner(false)
	}

	const declineCookies = () => {
		posthog.opt_out_capturing()
		setShowBanner(false)
	}

	return (
		<div className={`nyomNyomCookie`}>
			<p className={'leading-relaxed text-white'}>
				We use tracking cookies to understand how you use the product and help us improve
				it. Please accept cookies to help us improve.
			</p>
			<div>
				<button type="button" onClick={acceptCookies}>
					Accept cookies
				</button>
				<span> </span>
				<button type="button" onClick={declineCookies}>
					Decline cookies
				</button>
			</div>
		</div>
	)
}

export default CookieBanner
