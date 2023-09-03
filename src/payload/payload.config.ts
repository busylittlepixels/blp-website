import dotenv from 'dotenv'
import path from 'path'
import nestedDocs from "@payloadcms/plugin-nested-docs";

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Media } from '../collections/Media'
import { Pages } from '../collections/Pages'
import { Posts } from '../collections/Posts'
import { MainMenu } from '../globals/MainMenu'
import Logo from '../components/custom/Logo';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Pages, Posts, Media],
  globals: [MainMenu],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  routes: {
    admin: '/admin'
  },
  admin: {
    meta: {
      titleSuffix: '- Busy Little Pixels',
      favicon: '/assets/favicon.ico',
      ogImage: '/assets/images/logo.png',
    },
    components: {
      graphics: {
        Logo
      },
    },
  },
  plugins: [
    nestedDocs({
      collections: ["pages"],
      generateLabel: (_, doc):any => doc.title as string,
      generateURL: (docs) =>
        docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    }),
  ],
})
