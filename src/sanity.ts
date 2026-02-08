import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'umvhu2y5',
  dataset: 'production',
  apiVersion: '2023-10-01',   // 👈 REQUIRED
  useCdn: false,
  
});

