import mysql from "mysql";
import {
    SQL_DATABASE,
    SQL_PASSWORD,
    SQL_PORT,
    SQL_SERVER,
    SQL_USERNAME,
} from "./envs.js";
import logger from "./logger.js";

export const sql = mysql.createConnection({
    host: SQL_SERVER,
    user: SQL_USERNAME,
    password: SQL_PASSWORD,
    database: SQL_DATABASE,
    port: SQL_PORT,
});

export const connectDb = async () => {
    return new Promise((resolve, reject) => {
        sql.connect((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

export default sql;
