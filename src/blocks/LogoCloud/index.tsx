import type { Block } from 'payload/types'

export const LogoCloud: Block = {
  fields: [
    // required
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
      name: 'logos', // required
      type: 'array', // required
      label: 'Logos',
      minRows: 1,
      maxRows: 10,
      interfaceName: 'LogoCloud', // optional
      labels: {
        singular: 'Logo',
        plural: 'Logos',
      },
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'logoImage',
          type: 'upload',
          relationTo: 'media',
          // required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.title || `Logo ${String(index).padStart(2, '0')}`
          },
        },
      },
    },
  ],
  slug: 'LogoCloud', // required
  imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'logoCloud', // optional
}
