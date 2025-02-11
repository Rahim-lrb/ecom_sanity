import { defineField, defineType } from 'sanity';

export const heroImage = defineType({
    name: 'heroImage',
    title: 'two hero images',
    type: 'document',
    fields: [
        {
            name: 'image1',
            type: 'image',
            title: 'First Image',
        },
        {
            name: 'image2',
            type: 'image',
            title: 'Second Image',
        },
    ],
});
