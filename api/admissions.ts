import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'umvhu2y5',
  dataset: 'production',
  apiVersion: '2023-10-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const doc = {
      _type: 'admission',
      ...req.body,
    };

    const created = await client.create(doc);

    return res.status(200).json({
      success: true,
      id: created._id,
    });
  } catch (err) {
    console.error('SANITY ERROR:', err);

    return res.status(500).json({
      error: 'Sanity create failed',
    });
  }
}
