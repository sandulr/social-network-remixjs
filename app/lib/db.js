import mysql from 'serverless-mysql';

export const db = mysql({
    config: {
        host: '127.0.0.1',
        port: '3306',
        database: 'posts',
        user: 'root',
        password: '',
    },
});

export default async function excuteQuery({ query, values }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}

export async function sql_query(query_string, values = []){
    try {
        const results = await db.query(query_string, values)
        await db.end()
        return results
    } catch (e) {
        throw Error(e.message)
    }
}