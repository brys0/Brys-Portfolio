<template>
<div class="error-container">
  <div class="code">
   {{error.statusCode}}
  </div>
  <div class="error">
    <p v-if="error.statusCode >= 400 && error.statusCode <= 499">Something went wrong locally :/</p>
    <p v-else-if="error.statusCode >= 500">Something went wrong remotely :'c</p>
  </div>
<div class="return-home">
  <p><a href="/" id="home">Return Home</a>  </p>
  </div>
</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}

</script>

<style scoped>
.error {
  width: 20em;
  color: var(--error-text);
  background-color: var(--dark-box);
  border-radius: 15px;
  margin:0px auto;
  border: 5px solid #fc4b38;
  text-align: center;
  padding: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 2em;
  animation: dropInError 1s ease forwards;
}
.return-home {
  font-family: 'Bebas Neue', cursive;
  width: 5em;
  margin:0px auto;
  text-align: center;
  font-size: 2em;
  animation:  fadeIn linear 2s, shine 5s linear infinite;
  background: linear-gradient(to right, var(--error-text) 20%, #30b0ff 40%, #30b0ff 60%, var(--error-text) 80%);
  background-size: 200% auto;
  color: var(--error-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 200px;
}
.code {
  width: calc(20em / 6);
  margin:0px auto;
  text-align: center;
  padding: 20px;
  font-family: 'neoneon', sans-serif;
  font-size:  100px;
  animation: dropInError 1.5s ease forwards,  neon 1s ease infinite;
  text-shadow: 0 0 3vw #F40A35;
}
#home {
  text-decoration: none;
}
.return-home:hover {
  animation: fadeIn linear 2s;
  color: mediumpurple;
}
@keyframes dropInError {
  from {transform: translateY(-2em);}
  to {transform: translateY(200px);}
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
@media only screen and (max-width: 600px) {
  .error {
    width: calc(20em / 4);
    border: none;
    background-color: transparent;
  }
  .code {
   margin-right: 10px;
  }
  .return-home {
    font-size: 8vh;
  }
  html {
    overflow: hidden;
  }
}
</style>
