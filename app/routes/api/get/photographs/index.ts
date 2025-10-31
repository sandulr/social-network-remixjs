import { sql_query } from "~/lib/db";

export async function loader({ request }) {
    if(request.method!=='POST'){
        return null
    };
    const url = new URL(request.url);

    const results = await sql_query(`SELECT * FROM g_photos LIMIT 12`);

    return results;
}
