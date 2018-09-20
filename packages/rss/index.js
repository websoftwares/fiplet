const express = require('express')
const apicache = require('apicache')
const axios = require('axios')
let app = express()
let cache = apicache.middleware
const port = 3000

const RSS_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url='

app.get('/', cache('10 minutes'), (req, res) => {
  if (req.query.rss_url) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    axios
      .get(`${RSS_API_URL}${req.query.rss_url}`)
      .then(response => res.json(response.data.items))
      .catch(error => console.error(error))
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
