import { sql_query } from "~/lib/db";

export async function loader({ request }) {

    if(request.method !== 'POST'){
        return null
    }

    const url = new URL(request.url);

    try {
        //const results = await sql_query(`SELECT id as globalId, caption as altText, photo as originalPhoto, photo_links as otherPhoto, small as smallPhoto FROM g_photos WHERE g_id=${request.query.id} ORDER BY id DESC LIMIT ${request.query.count}, 12`)

        return url;
    } catch (e) {
        return null;
    }
}
