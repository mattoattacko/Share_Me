// Connects the front end to Sanity to populate the DB
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-01-07',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// Both of these are from Sanity's documentation
const builder = imageUrlBuilder(client);
// utility function
export const urlFor = (source) => builder.image(source);