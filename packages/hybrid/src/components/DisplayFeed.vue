<template>
<div class="container">
  <div class="row">
    <div class="col-xl-12">
       <h1>RSS Feeds</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-xl-12">
      <form @submit.prevent="loadFeed" class="form">
      <div class="form-group">
          <input :disabled="loading" v-model="feed" class="form-control" placeholder="Enter RSS URL" />
      </div>
      <div class="form-group">
          <input :disabled="loading" type="submit" class="btn btn-primary btn-block"  value="Search" />
      </div>
      </form>
      <hr />
    </div>
  </div>

  <div class="row">
    <div class="col-xl-12">
       <h1>Articles</h1>
        <div v-for="feed in feeds" class="card">
            <img v-if=feed.thumbnail class="card-img-top" :src=feed.thumbnail alt="Card image cap">
               <div class="card-body">
              <h5 class="card-title">{{ feed.title }}</h5>
              <p v-html=feed.description class="card-text">{{ feed.description }}</p>
              <a :href=feed.link  target="_blank" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <hr/>
    </div>
  </div>

</div>

</template>



<script>
import Vue from 'vue'
import axios from 'axios'

const RSS_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url='


export default {
  name: 'FLipletRSS',
  data() {
    return {
      feeds: [],
      loading: false,
      feed: null
    }
  },
  methods: {
    loadFeed: function() {
      this.loading = true
      axios.get(`${RSS_API_URL}${this.feed}`).then(response => {
          this.feeds =response.data.items
          this.loading = false
          return
        })
        .catch(e => console.log(e))
    }
  }
}

</script>
