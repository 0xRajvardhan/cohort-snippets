import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

async function insertData() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ('John Doe2', 'email2@example.com', 'password123')`;
    const res = await client.query(insertQuery);
    console.log(`Insertion success`, res);
  } catch (err) {
    console.log(`Insertion error`, err);
  } finally {
    await client.end();
  }
}

insertData();
