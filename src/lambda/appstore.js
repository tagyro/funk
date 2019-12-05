import fetch from "node-fetch";

const API_ENDPOINT = "https://itunes.apple.com/de/rss/customerreviews/id=1438105898/sortBy=mostRecent/xml";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/xml" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
