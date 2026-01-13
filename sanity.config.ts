import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes' // Path check karein aapke folder structure ke hisaab se

export default defineConfig({
  name: 'default',
  title: 'Prisa Makeover',

  // Ye values .env.local se automatic aayengi
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio', // Ye zaroori hai embedded studio ke liye

  plugins: [structureTool(), visionTool()],

  schema: schema,
})