import createImageUrlBuilder from '@sanity/image-url'
// Error waali line ko humne niche wali line se badal diya hai
type SanityImageSource = any;

import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}