/* eslint-disable import/extensions */
import type { CollectionConfig } from 'payload/types'

import formatSlug from '../utilities/formatSlug'
import { BlockTest } from '../blocks/BlockTest'
import { ImageSlider } from '../blocks/ImageSlider'

export const Posts: CollectionConfig = {
  slug: 'post',
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
      name: 'title',
      type: 'text',
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
