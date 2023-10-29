import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    staticDir: path.resolve(__dirname, '/uploads'),
    adminThumbnail: 'thumbnail',
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
  fields: [],
}
