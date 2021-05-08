<template>
<div class="blog-container">
  <button id="login" v-on:click="redirToLogin">Login</button>
</div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      redirToLogin: function () {
             let button = document.getElementById('login');
             button.style.backgroundColor = "#55e6a5";
             window.location.href = ""
      }
    }
  }
}
</script>

<style scoped>
#login {
  padding: 10px;
  display: block;
  background-color:  #f44336;
  color: white;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  text-decoration: none;
  border: #3d3d3d solid 4px;
  transition: background-color 200ms ease-out, color 200ms ease-out;
  font-size: 2em;
  font-family: Ubuntu, sans-serif;
}
#login:hover {
  background-color: #42b883;
  color: #3d3d3d;
}
</style>
