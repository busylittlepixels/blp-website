import type { Block } from 'payload/types'

export const TextBlock: Block = {
	fields: [
		{
			type: 'row', // required
			fields: [
				// required
				{
					name: 'LeadString',
					label: 'lead_string',
					type: 'text',
					required: true,
					admin: {
						width: '30%',
					},
				},
				{
					name: 'StyledString',
					label: 'styled_string',
					type: 'text',
					required: true,
					admin: {
						width: '30%',
					},
				},
				{
					name: 'EndString',
					label: 'end_string',
					type: 'text',
					required: true,
					admin: {
						width: '30%',
					},
				},
			],
		},
		{
			name: 'content',
			label: 'Content',
			type: 'richText',
		},
		{
			name: 'displayMeta',
			type: 'checkbox',
			label: 'Show Optional Fields',
			defaultValue: true,
		},
		{
			name: 'subtitle',
			label: 'Meta Text (example)',
			type: 'text',
			admin: {
				condition: (data, siblingData, { user }) => {
					if (siblingData.displayMeta) {
						return true
					} else {
						return false
					}
				},
			},
		},
	],
	slug: 'TextBlock', // required
	imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
	imageAltText: 'A nice thumbnail image to show what this block looks like',
	interfaceName: 'textBlock', // optional
}
