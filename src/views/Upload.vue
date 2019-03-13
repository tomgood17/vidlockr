<template>
  <div class="dashboard">
    <nav class="navbar navbar-light bg-light">
    
          <div id="mySidenav" class="sidenav">
          <a class="logohome" @click="homedirect()">
            <img href="localhost:8080/" src="https://i.imgur.com/L61RNhD.png" @click="homedirect()" width="70" height="60" top="30px"></a>
          </a>
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&#9776;</a>
            <a href="/">Home</a>
            <a href="/upload">Upload</a>
            <a href="#">Trending</a>
            <a href="#">Create account</a>
          </div>

      <span style="font-size:20px;cursor:pointer" @click="openNav()">&#9776;</span>

      <a class="navbar-brand" href="/">
        <img href="localhost:8080/" src="https://i.imgur.com/HwV9wI6.png" width="40" height="40">
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




    <center>
      <div className="row">
		<div className="col-md-offset-2 col-md-8">
		  <div className="panel panel-default">
            <div className="panel-heading">

			  <div className="panel-heading">
			    <h2 className="panel-title text-center">
			      <span className="glyphicon glyphicon-upload"></span> Upload a Product
			    </h2>
			  </div>
    

                <div>
                    <label>Name</label>
                    <input placeholder="Enter video title"/>
                </div>


                <div>
                    <label>Description</label>
                    <input placeholder="Enter video description"/>
                </div>


                <div>
                    <label>Price</label>
                    <input placeholder="Enter video price"/>
                </div>


                <div>
                    <label>Category</label>
                    <select id="category-list">
                        {this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </select>
                </div>


                <div>
                    <label>Video</label>
                    <div>
                    <button @click="uploadImg()"> Upload </button>   
                    </div>
                </div>


                <button type="button" @click=(this.submitCharacter(this.props.productListSize))> Submit </button>

            </div>
          </div>
		</div>
	  </div>

    </center>





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
    uploadImg() {
      console.log('testing');
      const client = filestack.init('A36wTBVGBS1iCyxE9FLODz');
      const options = {
        onUploadDone: (res) => console.log(res),
      };
      client.picker(options).open();
    },
    submitCharacter(next) {
      const id = next;
      const name = document.getElementById('name').value;
      const handler = document.getElementById('button-upload').dataset.handler;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;
      const rating = Math.floor(Math.random() * 5) + 1; //Just a random number
      const category = document.getElementById('category-list').value;
      const product = {id, name, handler, price, description, rating, category};
      this.props.addProduct(product);
      document.getElementById("product-form").reset();
    },
    getStoryLink(story) {
      return `https://www.storyblok.com/${story.full_slug}`
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
@import 'uploadstyle.css';

.btn-primary {
  background: #468f65;
  border: 1px solid #468f65;
}
.card {
  text-decoration: none;
  color: #000;
}
</style>