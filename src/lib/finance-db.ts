import { Pool, PoolClient } from "pg";

declare global { var financePool: Pool | undefined; }

export const pool = global.financePool ?? new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 5,
  idleTimeoutMillis: 20000,
  connectionTimeoutMillis: 10000,
  ssl: process.env.DATABASE_URL?.includes("neon.tech") ? { rejectUnauthorized: false } : undefined,
});

if (process.env.NODE_ENV !== "production") global.financePool = pool;

export type FinanceUser = { id: string; email: string; display_name: string; role: "admin" | "finance_manager" | "viewer" };

export async function withFinanceDb<T>(user: FinanceUser, work: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("SELECT set_config('app.finance_role', $1, true), set_config('app.finance_user_id', $2, true)", [user.role, user.id]);
    const result = await work(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
