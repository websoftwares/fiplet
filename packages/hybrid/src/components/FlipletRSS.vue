<template>
  <div></div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const RSS_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url='
const FEEDS_LIST = [
  'http://fliplet.net/feed',
  'http://feeds.feedburner.com/TechCrunch/',
  'http://feeds.bbci.co.uk/news/rss.xml'
]

export default {
  name: 'FLipletRSS',
  data() {
    return {
      feeds: [],
    }
  },
  created() {
    let promises = FEEDS_LIST.map(feed => axios.get(`${RSS_API_URL}${feed}`, { crossdomain: true }))
    axios.all(promises).then(function(results) {
    results.forEach(function(response) {
      for (let {link, title, description} of response.data.items) {
        console.log(link);
        console.log(title)
        console.log(description)
      }
    })
});

  }
}
</script>

<style>
</style>
