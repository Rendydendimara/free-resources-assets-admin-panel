import type { CollectionConfig } from 'payload/types'

const Package: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'name',
  // },
  slug: 'packages',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'richText',
      required: true
    },
    {
      name: 'price',
      type: 'number',
      required: true
    },
    {
      name: 'discountPrice',
      type: 'number',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      required: false,
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}

export default Package
