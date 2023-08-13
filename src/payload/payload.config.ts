import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Media } from '../collections/Media'
import { Pages } from '../collections/Pages'
import { Posts } from '../collections/Posts'
import { MainMenu } from '../globals/MainMenu'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Pages, Posts, Media],
  globals: [MainMenu],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  routes: {
    admin: '/admin'
  }
})