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
    fields: [
      {
        name: 'slug',
        label: 'Slug',
        type: 'text',
        admin: {
          position: 'sidebar',
        },
        hooks: {
          beforeValidate: [formatSlug('title')],
        },
      },
      {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
      },
      {
        name: 'featuredImage',
        type: 'text',
        label: 'Featured Image',
      },
      {
        name: 'excerpt',
        type: 'richText',
        label: 'Excerpt',
      },
      {
        name: 'body_content1',
        type: 'richText',
        label: 'Content',
      },
      {
        name: 'postImage',
        type: 'text',
        label: 'Post Image',
      },
      {
        name: 'postImageCaption',
        type: 'text',
        label: 'postImageCaption',
      },
      {
        name: 'bodyContent1',
        type: 'richText',
        label: 'Body Content 1',
      },
      {
        name: 'displayMore',
        type: 'checkbox',
        label: 'Add more content fields',
        defaultValue: true,
      },
      {
        name: 'bodyContent2',
        type: 'richText',
        label: 'Body Content2',
        admin: {
          condition: (data, siblingData, { user }) => {
            if (siblingData.displayMore) {
              return true;
            } else {
              return false;
            }
          }
        }
      },
    ],
  }