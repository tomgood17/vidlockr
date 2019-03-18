<template>
  <div class="dashboard">
    <nav class="navbar navbar-light bg-light">
    
          <div id="mySidenav" class="sidenav">
          <a class="logohome" @click="homedirect()">
            <img href="localhost:8080/" src="https://i.imgur.com/L61RNhD.png" @click="homedirect()" width="70" height="60" top="30px">
          </a>
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&#9776;</a>
            <a href="/">Home</a>
            <a href="/upload">Upload</a>
            <a href="#">Trending</a>
            <a href="#">Create account</a>
          </div>

      <span style="font-size:20px;cursor:pointer" @click="openNav()">&#9776;</span>

      <a class="navbar-brand" href="/">
        <img href="localhost:8080/" src="https://i.imgur.com/L61RNhD.png" width="70" height="60">
      </a>
      
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="e.g. animals">
        </div>
      </div>

      <div>
        <button type="button" style="margin-right:10px;" class="btn btn-outline-secondary btn-sm" @click="$auth.contact()">Contact</button>
        <button type="button" style="margin-right:10px;" class="btn btn-outline-secondary btn-sm" @click="$auth.buy()">Buy Videos</button>
        <button type="button" style="margin-right:10px;" class="btn btn-outline-secondary btn-sm" @click="$auth.sell()">Sell Videos</button>
      </div>
      <div>
        <img :src="$auth.user.picture" width="30" height="30">
        <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span>
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="$auth.logout()">Logout</button>
      </div>
    </nav>


    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Hello, {{$auth.user.name}}!</h1>
        <p class="lead">We hope you liked this tutorial and can now start building new astounding projects from this start point. If you're interested in what we're doing besides tech tutorials check out <a href="https://www.storyblok.com">@storyblok</a>.</p>
        <hr class="my-4">
        <p>TBH, I'm sure this project of yours would look great with a landing page filled with content composed in <a href="https://www.storyblok.com">Storyblok</a> 🎉</p>
        
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="https://www.storyblok.com/getting-started" target="_blank" role="button">Getting Started</a>
          <a class="btn btn-secondary btn-lg" href="https://twitter.com/home?status=Have%20a%20look%20at%20%40storyblok%20and%20their%20%40vuejs%20%2B%20%40auth0%20tutorial%3A%20https%3A//www.storyblok.com/tp/how-to-auth0-vuejs-authentication" target="_blank" role="button">Tweet it</a>
        </p>
      </div>
    </div>


<div style="position:relative; padding-bottom:56.25%; overflow:hidden;">
  <iframe src="https://cdn.jwplayer.com/players/m9ZCJev9-1qYPSJWc.html" width="25%" height="25%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;">
  </iframe>
  </div>


  </div>
</template>




<script>
import axios from 'axios'
 
export default {
  data () {
    return {
      stories: []
    }
  },
  mounted() {
    axios.get('https://api.storyblok.com/v1/cdn/stories?starts_with=tp&excluding_fields=body&excluding_ids=48471,48547,60491&token=dtONJHwmxhdJOwKxyjlqAgtt').then((res) => {
      this.stories = res.data.stories
    })
  },
  methods: {
    getStoryLink(story) {
      return `https://www.storyblok.com/${story.full_slug}`
    },
    homedirect() {
      return 'localhost:8080/'
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      console.log('opened nav menu')
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      console.log('closed nav menu')
    },
  }
}



</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
@import 'styles.css';
.btn-primary {
  background: #468f65;
  border: 1px solid #468f65;
}
.card {
  text-decoration: none;
  color: #000;
}
</style>