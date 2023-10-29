/* eslint-disable import/extensions */
import type { CollectionConfig } from 'payload/types'

import formatSlug from '../utilities/formatSlug'
import { BlockTest } from '../blocks/BlockTest'
import { CallToAction } from '../blocks/CallToAction'
import { CarouselBlock } from '../blocks/Carousel'
import { Contact } from '../blocks/Contact'
import { Expertise } from '../blocks/Expertise'
import { ScrollTriggerGallery } from '../blocks/ScrollTriggerGallery'
import { ImageSlider } from '../blocks/ImageSlider'
import { LogoCloud } from '../blocks/LogoCloud'
import { TextBlock } from '../blocks/TextBlock'
import { formatAppURL, revalidatePage } from '../hooks/revalidatePage'
import { CustomButton } from '../components/custom/CustomButton'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  access: {
    read: () => true,
  },
  
  //   fields: [
  //     {
  //       name: 'title',
  //       label: 'Title',
  //       type: 'text',
  //       required: true,
  //     },
  //     {
  //       name: 'richText',
  //       type: 'richText',
  //       label: 'Content',
  //     },
  //     {
  //       name: 'slug',
  //       label: 'Slug',
  //       type: 'text',
  //       admin: {
  //         position: 'sidebar',
  //       },
  //       hooks: {
  //         beforeValidate: [formatSlug('title')],
  //       },
  //     },
  //     {
  //       name: 'subtitle',
  //       label: 'Subtitle',
  //       type: 'text',
  //     },
  //     {
  //       name: 'onemore',
  //       label: 'One More',
  //       type: 'text',
  //     },
  //   ],
  // }

  // export default Pages
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'title',
              label: 'Page Title',
              type: 'text',
              required: true,
            },
            {
              name: 'headline',
              type: 'text',
              admin: {
                description: 'Add a headline the BUSY and PIXELS bits are hardcoded.',
              },
            },
            {
              name: 'richText',
              type: 'richText',
              label: 'Content',
            },
            {
              name: 'enableSubtitle',
              type: 'checkbox',
              // /defaultValue: true,
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              type: 'text',
              admin: {
                condition: (data, siblingData, { user }) => {
                  if (data.enableSubtitle) {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
            },
            {
              name: 'onemore',
              label: 'One More',
              type: 'text',
            },
          ],
        },
        {
          label: 'Page Layout',
          fields: [
            {
              name: 'layout',
              label: 'Layout',
              type: 'blocks',
              minRows: 0,
              blocks: [ImageSlider, BlockTest, TextBlock, CarouselBlock, Contact, CallToAction, LogoCloud, Expertise, ScrollTriggerGallery],
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
            },
            {
              name: 'keywords',
              label: 'Keywords',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: "testButton", // required
      label: "Test Field",
      type: "ui", // required
      admin: {
        position: 'sidebar',
        components: {
          Field: CustomButton,
        },
      },
    },
  ],
}
