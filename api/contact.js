import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!connectionString) {
    console.error('Database connection string is missing in environment variables.');
    return res.status(500).json({ 
      error: 'Database not configured. Please connect Neon Postgres in Vercel Storage settings.' 
    });
  }

  try {
    const sql = neon(connectionString);

    // Ensure the messages table exists
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

    // Insert the new contact message
    await sql`
      INSERT INTO messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject || 'No Subject'}, ${message});
    `;

    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been saved successfully!' 
    });
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ error: 'Failed to save message to database.' });
  }
}
