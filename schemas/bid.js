// bid.js

export default {
  name: 'bid',
  title: 'Bid',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
    },
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
}
