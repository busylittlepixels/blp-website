import type { Block } from 'payload/types'

export const TextBlock: Block = {
  fields: [
    // required
    {
      name: 'header',
      label: 'Header',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
  ],
  slug: 'TextBlock', // required
  imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'textBlock', // optional
}
