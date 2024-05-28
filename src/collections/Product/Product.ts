import type { CollectionConfig } from 'payload/types'

const Product: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'name',
  // },
  slug: 'products',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'image1',
      type: 'upload',
      required: false,
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'image2',
      type: 'upload',
      required: false,
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
    {
      name: 'caption',
      type: 'text',
      required: false,
    },
    {
      name: 'tag',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
      required: true
    },
    {
      name: 'collectionId',
      relationTo: 'collections',
      type: 'relationship',
    },

  ],
}

export default Product
