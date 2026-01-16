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
        { 
          name: 'category', 
          title: 'Category', 
          type: 'string',
          options: {
            list: [
              { title: 'Nails', value: 'nails' },
              { title: 'Jewellery', value: 'jewellery' },
            ]
          }
        },
      ],
    },
    {
      name: 'product',
      title: 'Products', // Pehle sirf Press-On Nails tha, ab humne Products kar diya
      type: 'document',
      fields: [
        { name: 'name', title: 'Product Name', type: 'string' },
        { name: 'price', title: 'Price (e.g. ₹799)', type: 'string' },
        { name: 'image', title: 'Product Image', type: 'image' },
        { 
          name: 'category', 
          title: 'Category', 
          type: 'string',
          options: {
            list: [
              { title: 'Nails', value: 'nails' },
              { title: 'Jewellery', value: 'jewellery' },
            ]
          },
          validation: (Rule) => Rule.required()
        },
        { name: 'isSoldOut', title: 'Mark as Sold Out', type: 'boolean', initialValue: false },
      ],
    }
  ],
}