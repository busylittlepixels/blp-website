/* eslint-disable import/extensions */
import type { CollectionConfig } from 'payload/types'

import formatSlug from '../utilities/formatSlug'

import { BlockTest } from '../blocks/BlockTest'
import { Contact } from '../blocks/Contact'
import { ImageSlider } from '../blocks/ImageSlider'
import { TextBlock } from '../blocks/TextBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
              defaultValue: true,
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
              blocks: [ImageSlider, BlockTest, TextBlock, Contact],
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
  ],
}
