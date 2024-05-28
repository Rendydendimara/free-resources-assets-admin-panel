import type { CollectionConfig } from 'payload/types'

const Collection: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'name',
  // },
  slug: 'collections',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'packageId',
      relationTo: 'packages',
      type: 'relationship',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      required: false,
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}

export default Collection
