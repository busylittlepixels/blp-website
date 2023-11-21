import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: (): boolean => true, // Everyone can read Media
	},
	upload: {
		staticURL: '/assets/media',
		staticDir: '../../public/assets/media',
		// Specify the size name that you'd like to use as admin thumbnail
		adminThumbnail: 'thumbnail',
		mimeTypes: ['image/*'],
		imageSizes: [
			{
				height: 400,
				width: 400,
				crop: 'center',
				name: 'thumbnail',
			},
			{
				width: 900,
				height: 450,
				crop: 'center',
				name: 'sixteenByNineMedium',
			},
		],
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
		},
	],
}
