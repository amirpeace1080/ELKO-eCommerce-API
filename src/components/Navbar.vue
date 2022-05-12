<template>
  <div class="navbar">
    <header role="banner">
      <nav class="navbar">
        <div class="container">
          <a href="#" class="sitename">
              <router-link to="/" exact>Site Name</router-link>
          </a>
          <ul class="nav">
            <li><a href="#">
                <router-link to="/about">About</router-link>    
            </a></li>
            <!-- <li><a href="#">
                <router-link to="/parkings">Parkings</router-link>    
            </a></li> -->
            <!-- <li><a href="#">
                <router-link to="/users">Users</router-link>    
            </a></li> -->
            <li><a class="logout" @click="logout">Logout</a></li>
            <!-- <li><a href="#">Item 5</a></li> -->
          </ul>
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
    </header>
  </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch("logout")
            .then(()=>{
                this.$router.push('/login')
            })
        }
    },
};
</script>

<style scoped>
.logout{
    cursor: pointer;
}
.navbar {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
/* Clearfixes */
.container:before,
.container:after,
.navbar:before,
.navbar:after {
  content: " ";
  display: table;
  clear: both;
}
.clearfix:after,
.navbar:after {
  clear: both;
}
/* Layout */
.container {
  padding: 0 20px;
}
@media only screen and (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 0;
    margin: 0 auto;
  }
}
/* ********************
	Navbar
*********************** */
.navbar {
  background-color: #303030;
  font-size: 12px;
  font-weight: bold;
}
.sitename {
  float: left;
  font-size: 16px;
  line-height: 60px;
  font-weight: normal;
  padding-right: 30px;
  text-decoration: none;
  color: #ccc;
}
.sitename:hover,
.sitename:focus {
  color: #fff;
}
.navbar .nav {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.navbar li a {
  display: inline-block;
  float: left;
  line-height: 60px;
  padding: 0 30px;
  color: #ccc;
  text-transform: uppercase;
  text-decoration: none;
}
.navbar li a:hover,
.navbar li a:focus {
  color: white;
  background-color: red;
}
.router-link-active{
  background-color: green;
}
</style>