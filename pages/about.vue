<template>
<div class="about-container">
  <i class="fas fa-arrow-circle-right fa-3x" id="new-page" v-on:click="advancePage"></i>
  <div class="description-container">
    <h1>A description about me.</h1>
  </div>
</div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      advancePage: function () {
        let arrow = document.getElementById('new-page');
        let box = document.getElementsByClassName('description-container')[0];
        console.log('Advancing page', this)
        arrow.style.color = "#c77df5";
        box.classList.toggle('fade');

      }
    }
  }
}

</script>

<style scoped>
 .description-container {
   width: 35vw;
   padding-left: 5px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: var(--dark-box);
   text-align: center;
   border-radius: 15px;
   transition: width 400ms ease-out, height 400ms ease-out, opacity 250ms;
   border: solid 5px #d0c1e0;
   height: 50vh;
 }
 .description-container.fade {
   opacity: 0;
 }
 .description-container.transition {
   transform: translateX(-100vw);
 }
 .description-container h1 {
   font-size: calc(120px / 3);
   font-family: Ubuntu, sans-serif;
   padding-left: 10px;
   text-align: left;
   color: #486ba3;
 }
 #new-page {
   padding-left: 70vw;
   padding-top: 47vh;
   color: #42b883;
   transition: color 200ms ease-out;
 }
 #new-page:hover {
   cursor: pointer;
   color: #30b0ff;
 }
</style>
