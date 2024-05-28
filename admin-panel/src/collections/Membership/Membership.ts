import type { CollectionConfig } from 'payload/types'

const Membership: CollectionConfig = {
  // access: {
  //   delete: () => false,
  //   read: () => true,
  // },
  // admin: {
  //   useAsTitle: 'name',
  // },
  slug: 'memberships',
  fields: [
    {
      name: 'userId',
      relationTo: 'customers',
      type: 'relationship',
    },
    {
      name: 'status',
      defaultValue: 'non-aktif',
      options: [
        {
          label: 'Non Aktif',
          value: 'non-aktif',
        },
        {
          label: 'Aktif',
          value: 'aktif',
        },
      ],
      type: 'select',
      required: true
    },
    {
      name: 'startJoin',
      type: 'date',
      required: false
    },
    {
      name: 'targetEnd',
      type: 'date',
      required: false
    },
    {
      name: 'endJoin',
      type: 'date',
      required: false
    },
    {
      name: 'packageId',
      relationTo: 'packages',
      type: 'relationship',
    },
  ],
}

export default Membership
