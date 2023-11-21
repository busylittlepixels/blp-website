import type { Block } from 'payload/types'

export const CallToAction: Block = {
	fields: [
		// required
		{
			name: 'ctaImage',
			type: 'upload',
			relationTo: 'media',
			required: false,
		},
		{
			name: 'headerStart',
			label: 'Header Start',
			type: 'text',
			required: true,
		},
		{
			name: 'headerStyled',
			label: 'Header Styled',
			type: 'text',
			required: true,
		},
		{
			name: 'headerEnd',
			label: 'Header End',
			type: 'text',
			required: true,
		},
		{
			name: 'content',
			label: 'Content',
			type: 'richText',
		},
		{
			name: 'displayButton',
			type: 'checkbox',
			label: 'Show Button Field',
			defaultValue: true,
		},
		{
			name: 'buttonText',
			label: 'Button Text (example)',
			type: 'text',
			admin: {
				condition: (data, siblingData, { user }) => {
					if (siblingData.displayButton) {
						return true
					} else {
						return false
					}
				},
			},
		},
		{
			name: 'buttonLink',
			label: 'Button Link',
			type: 'text',
			admin: {
				condition: (data, siblingData, { user }) => {
					if (siblingData.displayButton) {
						return true
					} else {
						return false
					}
				},
			},
		},
	],
	slug: 'CallToAction', // required
	imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
	imageAltText: 'A nice thumbnail image to show what this block looks like',
	interfaceName: 'ctaBlock', // optional
}
