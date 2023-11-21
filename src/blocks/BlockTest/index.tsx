import type { Block } from 'payload/types'

export const BlockTest: Block = {
	fields: [
		{
			name: 'blockheader',
			label: 'Header',
			type: 'text',
			required: true,
		},
		{
			name: 'blocktext',
			label: 'Block',
			type: 'richText',
		},
	],
	slug: 'BlockTest', // required
	imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
	imageAltText: 'A nice thumbnail image to show what this block looks like',
	interfaceName: 'blockTest', // optional
}
