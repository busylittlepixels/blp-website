import type { Block } from 'payload/types'

export const BlockTest: Block = {
  fields: [
    {
      type: 'row', // required
      fields: [ // required
        {
          name: 'Lead String',
          label: 'lead_string',
          type: 'text',
          required: true,
          admin: {
            width: '30%',
          },
        },
        {
          name: 'Styled String',
          label: 'styled_string',
          type: 'text',
          required: true,
          admin: {
            width: '30%',
          },
        },
        {
          name: 'End String',
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
