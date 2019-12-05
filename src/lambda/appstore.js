import fetch from "node-fetch"
import xml2js from 'xml2js-es6-promise'

exports.handler = async (event, context, callback) => {
    const mediumFeed = `https://itunes.apple.com/de/rss/customerreviews/id=1438105898/sortBy=mostRecent/xml`
    const response = await fetch(mediumFeed)
    const xml = await response.text()
    const data = await xml2js(xml)
    return  {
      statusCode: 200,
      body: JSON.stringify(data.rss.channel[0].item)
    }
}