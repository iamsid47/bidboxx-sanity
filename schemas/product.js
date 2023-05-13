// product.js

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'serialno',
      title: 'Serial Number',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    },
    {
      name: 'expprice',
      title: 'Expected Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        accept: 'image/*',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Electronics', value: 'electronics'},
          {title: 'Clothing', value: 'clothing'},
          {title: 'Home Decor', value: 'home-decor'},
        ],
      },
    },
    {
      name: 'bids',
      title: 'Bids',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'bidder',
              title: 'Bidder',
              type: 'string',
            },
            {
              name: 'amount',
              title: 'Amount',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
}
