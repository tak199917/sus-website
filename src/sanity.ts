import { createClient } from '@sanity/client';

export const sanityClient = createClient({
 projectId: 'umvhu2y5',
dataset: 'production',
useCdn: false,
});
