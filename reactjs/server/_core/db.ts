import pg from "pg";
import { ENV } from "./env";

const { Pool } = pg;

let pool: pg.Pool | null = null;

export function getPool(): pg.Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: ENV.databaseUrl,
    });

    pool.on("error", (err: any) => {
      console.error("Unexpected error on idle client", err);
    });
  }

  return pool;
}

export async function query(text: string, params?: any[]) {
  const pool = getPool();
  return pool.query(text, params);
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

export const db = {
  query,
  getPool,
  close: closePool,
};
