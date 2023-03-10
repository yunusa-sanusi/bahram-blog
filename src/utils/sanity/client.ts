import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_SANITY_TOKEN;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2023-03-06',
  token,
  ignoreBrowserTokenWarning: true,
});
