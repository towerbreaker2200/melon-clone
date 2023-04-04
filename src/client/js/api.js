import "regenerator-runtime";
// import "dotenv/config";

const BASE_URL = "https://ws.audioscrobbler.com/2.0";

export async function fetchSongChart() {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.API_KEY}&format=json`
  ).then((res) => res.json());
}
