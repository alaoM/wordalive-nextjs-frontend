import mysql from 'mysql2/promise'

export async function dbquery({ query, values = [] }) {
   const dbConnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'wordalive',
        password: '',
    });
    // const dbConnection = await mysql.createConnection({
    //     host: process.env.host,
    //     user: process.env.host,
    //     database: proccess.env.database,
    //     password: process.env.password,
    // });
    try {
        const [results] = await dbConnection.execute(query, values)
        dbConnection.end();
        return results;
    } catch (error) {
         throw new Error("Something Happened" , error.message);

    }
}
