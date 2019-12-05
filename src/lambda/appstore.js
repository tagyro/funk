import fetch from "node-fetch"

exports.handler = async (event, context, callback) => {
    const endpoint = `https://itunes.apple.com/de/rss/customerreviews/id=1438105898/sortBy=mostRecent/json`
    const response = await fetch(endpoint)
    const data = await response.json()
    return  {
      statusCode: 200,
      body: JSON.stringify(data)
    }
}