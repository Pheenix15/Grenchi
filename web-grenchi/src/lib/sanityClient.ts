// src/lib/sanityClient.ts
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// create client to connect to sanity project
export const client = createClient({
  projectId: 'suzk4eq2',
  dataset: 'production',
  useCdn: true, // if true uses cached cdn responses for faster reads
  apiVersion: '2024-01-01' // locks api behavior to this date
});

const builder = createImageUrlBuilder(client);

// helper to build full image urls from sanity image references
export function urlFor(source: any) {
  return builder.image(source);
}