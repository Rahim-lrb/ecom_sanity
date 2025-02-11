import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ecommerce_sanity',

  projectId: 'uyw204g6',
  dataset: 'ecom',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
