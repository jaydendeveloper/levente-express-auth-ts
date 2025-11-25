import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "chefconnect",
	timezone: "Z", // Important to ensure consistent timezone values
});
export const db = drizzle({ client: poolConnection });
