import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Robust body parsing (handles JSON object or stringified body)
  let data = req.body;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse JSON body string:', e);
    }
  }

  const { name, email, subject, message } = data || {};

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields. Please provide name, email, and message.' 
    });
  }

  // Check all possible Neon/Postgres env variable names injected by Vercel
  const connectionString = 
    process.env.DATABASE_URL || 
    process.env.POSTGRES_URL || 
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.NEON_DATABASE_URL;

  if (!connectionString) {
    console.error('Database connection string not found in environment variables.');
    return res.status(500).json({ 
      error: 'DATABASE_URL not found. Please ensure Neon Postgres is connected to this project in Vercel Storage settings.' 
    });
  }

  try {
    const sql = neon(connectionString);

    // 1. Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Insert the contact message
    await sql`
      INSERT INTO messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject || 'No Subject'}, ${message});
    `;

    return res.status(200).json({ 
      success: true, 
      message: 'Message saved successfully to Neon Postgres!' 
    });
  } catch (error) {
    console.error('Database execution error:', error);
    return res.status(500).json({ 
      error: 'Failed to insert message into database: ' + (error.message || error)
    });
  }
}
