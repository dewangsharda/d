import { config } from "dotenv";
config();

export const SQL_SERVER = process.env.SQL_SERVER;
export const SQL_USERNAME = process.env.SQL_USERNAME;
export const SQL_DATABASE = process.env.SQL_DATABASE;
export const SQL_PASSWORD = process.env.SQL_PASSWORD;
export const SQL_PORT = process.env.SQL_PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
