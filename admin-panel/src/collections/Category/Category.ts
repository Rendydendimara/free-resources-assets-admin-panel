import type { CollectionConfig } from 'payload/types'

const Category: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'name',
  // },
  slug: 'categories',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
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
  ],
}

export default Category
