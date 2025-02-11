import { defineField, defineType } from 'sanity';

export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name of product',
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images of product',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description of product',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug of product',
            options: {
                source: 'name',
            }
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price of product',
        }),
        defineField({
            name: 'category',
            title: 'product of category',
            type: 'reference',
            to: [{ type: 'category' }],
        }),
        defineField({
            name: 'price_id',
            title: 'price id',
            type: 'string',
        }),
    ],
});
