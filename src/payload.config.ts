import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import Users from './collections/Users/Users'
import Media from './collections/Media'
import Customers from './collections/Customer/Customer'
import Category from './collections/Category/Category'
import Package from './collections/Package/Package'
import Collection from './collections/Collection/Collection'
import Product from './collections/Product/Product'
import Membership from './collections/Membership/Membership'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Media, Customers, Category, Package, Collection, Product, Membership],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  express: {
    preMiddleware: [
      (req, res, next) => {
        // do something here
        console.log('middleware')
        next()
      }
    ],
  },
  rateLimit: {
    trustProxy: true,
  },
  csrf: [
    // whitelist of domains to allow cookie auth from
    'http://localhost:3000',
  ],
  cors: '*' // allow any domain
})
