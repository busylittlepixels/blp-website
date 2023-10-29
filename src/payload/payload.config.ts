import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from 'payload/config'

import dotenv from 'dotenv'
import path from 'path'
import nestedDocs from "@payloadcms/plugin-nested-docs";

dotenv.config({
  path: path.resolve(__dirname, './../.env'),
})



import { Media } from '../collections/Media'
import { Pages } from '../collections/Pages'
import { Posts } from '../collections/Posts'
import { MainMenu } from '../globals/MainMenu'
import Logo from '../components/custom/Logo';
import { BaseDatabaseAdapter } from 'payload/dist/database/types';
import { Payload } from 'payload/dist/payload';
import { ValidateOptions, RichTextField } from 'payload/types';


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
    // @ts-expect-error
    url: process.env.MONGODB_URI,
  }),
})
