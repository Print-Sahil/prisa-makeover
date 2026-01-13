import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'gallery',
      title: 'My Work (Portfolio)',
      type: 'document',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'image', title: 'Work Image', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'product',
      title: 'Press-On Nails',
      type: 'document',
      fields: [
        { name: 'name', title: 'Product Name', type: 'string' },
        { name: 'price', title: 'Price (e.g. ₹799)', type: 'string' },
        { name: 'image', title: 'Product Image', type: 'image' },
        { name: 'isSoldOut', title: 'Mark as Sold Out', type: 'boolean', initialValue: false },
      ],
    }
  ],
}