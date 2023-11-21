import type { Block } from 'payload/types';

export const Contact: Block = {
	fields: [
		{
			name: 'map_url',
			type: 'text',
			required: true,
		},
		{
			name: 'enableForm',
			type: 'checkbox',
			label: 'Display Form',
			defaultValue: true,
		},
		{
			name: 'form_title',
			label: 'Form Title',
			type: 'text',
			admin: {
				condition: (data, siblingData, { user }) => {
					if (siblingData.enableForm) {
						return true;
					} else {
						return false;
					}
				},
			},
		},
	],
	slug: 'Contact', // required
	imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
	imageAltText: 'A nice thumbnail image to show what this block looks like',
	interfaceName: 'contact', // optional
};
