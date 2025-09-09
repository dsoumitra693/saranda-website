import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'saranda-admin',

  projectId: 'sdxtwu13',
  dataset: 'data',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
