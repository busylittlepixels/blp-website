// components/HubSpotForm.js
'use client'
import React, { useEffect } from 'react'

export const HubSpotForm = () => {
	useEffect(() => {
		const script = document.createElement('script')

		script.type = 'text/javascript'
		script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
		script.async = true

		document.body.appendChild(script)

		script.onload = () => {
			// Initialize the HubSpot form once the script is loaded
			// @ts-ignore
			if (window.hbspt) {
				// @ts-ignore
				window.hbspt.forms.create({
					portalId: '143518001',
					formId: 'd795d507-5e28-4ecd-958f-fde1836a2c4f',
					target: '#hubspotForm',
				})
			}
		}
	}, [])

	return <div id="hubspotForm" />
}

export default HubSpotForm
