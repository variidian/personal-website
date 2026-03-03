export async function GET() {
    const lastfm_api_key = import.meta.env.API_KEY
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=variidian&api_key=${lastfm_api_key}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return new Response(JSON.stringify(data))
}