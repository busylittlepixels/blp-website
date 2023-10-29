
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import nestedDocs from "@payloadcms/plugin-nested-docs"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { buildConfig } from 'payload/config'

dotenv.config({
  path: path.resolve(__dirname, './../.env'),
})

import { Media } from '../collections/Media'
import { Pages } from '../collections/Pages'
import { Posts } from '../collections/Posts'
import { MainMenu } from '../globals/MainMenu'
import Logo from '../components/custom/Logo'

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
    bundler: webpackBundler(),
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
      collections: ["pages", "posts"],
      generateLabel: (_, doc): any => doc.title as string,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    }),
  ],
  editor: slateEditor({}),
  db: mongooseAdapter({
    // @ts-ignore
    url: process.env.MONGODB_URI,
  }),
})
