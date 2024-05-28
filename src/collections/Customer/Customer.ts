import type { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'name',
  // },
  slug: 'customers',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'email',
      type: 'text',
      required: true
    },
    {
      name: 'password',
      type: 'text',
      required: true
    },
    {
      name: 'profilePicture',
      type: 'upload',
      required: true,
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'website',
      type: 'text',
      required: true
    },],
}

export default Customers
