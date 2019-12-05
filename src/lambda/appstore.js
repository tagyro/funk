import fetch from "node-fetch"

exports.handler = async (event, context, callback) => {
    const behanceEndpoint = `https://itunes.apple.com/de/rss/customerreviews/id=1438105898/sortBy=mostRecent/xml`
    const response = await fetch(behanceEndpoint)
    const data = await response.json()
    return  {
      statusCode: 200,
      body: JSON.stringify(data.projects)
    }
}