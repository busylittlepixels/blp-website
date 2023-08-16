import type { Block } from 'payload/types'

export const Carousel: Block = {
  fields: [
    // required
    {
      name: 'carouselcontainer', // required
      type: 'array', // required
      label: 'Carousel',
      minRows: 1,
      maxRows: 10,
      interfaceName: 'carouselContainer', // optional
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        // required
        {
          name: 'carouselImageUrl',
          type: 'text',
        },
        {
          name: 'carouselTitle',
          type: 'text',
        },
        {
          name: 'Job',
          type: 'text',
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }: any) => {
            return data?.title || `Slide ${String(index).padStart(2, '0')}`
          },
        },
      },
    },
  ],
  slug: 'Carousel', // required
  imageURL: 'https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2',
  imageAltText: 'A component to render an image slider',
}
