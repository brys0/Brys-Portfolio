

<template>
  <div id="home">
    <div class="profile-container">
      <img src="https://brys.tk/pfp.png" alt="profile picture" class="center" id="pfp-img"/>
    </div>
      <div id="bio-wrapper">
      <p id="bio">Hi, I'm Brys, the creator of this site!<br> This site was based off of: <br><a href="https://vuejs.org/"> <i class="fab fa-vuejs" id="vue"/></a> with <a href="https://nuxtjs.org/" id="nuxt">Nuxt JS</a> providing the Web Framework.<br></p>
      <p id="socials" style="letter-spacing: 20px;"><a href="https://github.com/brys0"><i class="fab fa-github fa-2x social" style="color: #fff; margin-left: 15px" id="social"></i></a><a href="https://discord.com/users/443166863996878878"><i class="fab fa-discord fa-2x social" style="color: #7289DA; "/></a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {

    }
  }
}
</script>

<style>



.profile-container {
  object-position: center;
}
.bio-container {
  text-align: center;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: calc(50vh / 2);
}
#bio {
  max-width: 20vw;
  padding: 10px;
  font-family: 'Itim', cursive;
  font-size: calc(4vh / 2);
  color: #d0c1e0;
  animation: fadeIn ease-in-out 2.2s;
  background: #3d3d3d;
  margin: 0px auto;
  border-radius: 15px;
  border: #42b883 solid 4px;
  margin-top: 5vh;
  text-align: center;
}
#socials {
  max-width: fit-content;
  padding: 20px;
  font-family: 'Itim', cursive;
  font-size: calc(4vh / 2);
  color: #d0c1e0;
  animation: fadeIn ease-in-out 2.2s;
  background: #3d3d3d;
  margin: 0px auto;
  border-radius: 15px;
  border: #42b883 solid 4px;
  margin-top: 5vh;
  text-align: center;
}
#vue {
  color: #42b883;
  transition: color 200ms ease-out;
}
#vue:hover {
  color: #30b0ff;
}
#nuxt {
  color: #42b883;
  transition: color 200ms ease-out;
  text-decoration: none;
  font-family: Ubuntu, sans-serif;
}
#nuxt:hover {
  color: #30b0ff;
}
img {
  animation: fadeIn ease-in-out 2s, shine 1s linear infinite;;
  border-radius: 50%;
}
#pfp-img {
  margin-top: 20vh;
  background: linear-gradient(to right, #3498db 20%, #7d59ff 40%, #42b883 60%, #3498db 80%);
  padding: 10px;
  background-size: 200% auto;
}
@keyframes dropInMessage {
  from {transform: translateY(-18vh);}
  to {transform: translateY(-2vh);}
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
.svg {
  width: 1.5em;
  vertical-align: middle
}

.social {
  transition: fill 200ms ease-out;
}
.social:hover {
  fill: #30b0ff
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #42b883;
}

input:focus + .slider {
  box-shadow: 0 0 1px #42b883;
}

input:checked + .slider:before {
  transform: translateX(10px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
