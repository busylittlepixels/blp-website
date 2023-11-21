import type { Block } from 'payload/types'

export const ScrollTriggerGallery: Block = {
	fields: [
		// required
		{
			type: 'row', // required
			fields: [
				// required
				{
					name: 'lead_string',
					label: 'lead_string',
					type: 'text',
					required: true,
				},
				{
					name: 'last_string',
					label: 'last_string',
					type: 'text',
					required: true,
				},
			],
		},
	],
	slug: 'ScrollTriggerGallery', // required
	imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
	imageAltText: 'A component to render an image slider',
}
