<template>
<div class="form-container">
  <p class="header" v-if="isSent">Need to contact me? Send an email!</p>
  <p class="header" v-else-if="!isSent" style="color: #42b883;">Email Sent!</p>
  <form class="box" @submit.prevent id="emailform">
    <input type="text" name="name" placeholder="Name" required id="name">
    <input type="email" name="email" placeholder="Email" required id="email">
    <p id="content-name">Content <br> Show Markdown? <label class="switch">
      <input type="checkbox" v-on:click="parseMD" id="check">
      <span class="slider round"></span></label></p>
    <vue-markdown :source="md" class="md-class" style="display: none;" id="md-data"></vue-markdown>
    <textarea class="md-class" id="md-id" v-model="md"/>
    <input type="submit" name="" value="Send" @click="emailSend" id="submit">
 </form>
</div>
</template>

<script>
import Prism from 'prismjs'
import CircularJSON from 'circular-json';
let int;
function start(submit, time) {
  let timeStorage = window.localStorage;
  timeStorage.setItem("limit", time)
  int = setInterval(() => limiter(submit, time), 1000)
  setInterval(function() {
    let timeStorage = window.localStorage;
    let timer = timeStorage.getItem("limit");
    let minutes = Math.floor(timer / 60);
    console.log(`[RLD] - Retry in ${minutes} minutes`)
  }, 60000)
}
function limiter(submit) {
  let timeStorage = window.localStorage;
  let timer = timeStorage.getItem("limit");
  if (timer === null || timer <= 1) {
    submit.style = ""
    submit.disabled = false;
    submit.value = "Send";
    timeStorage.clear()
    return clearInterval(int)
  }
  let updated = Number(timer) - 1;
  let minutes = Math.floor(updated / 60);
  timeStorage.setItem("limit", `${updated}`);
  submit.style.backgroundColor = "#f05151";
  submit.style.borderColor = "#fa423e";
  submit.disabled = true;
  submit.style.cursor = 'not-allowed'
  if (timer <= 60) {
    if (updated === 1) {
      submit.value = `Retry in ${updated} second`
    } else {
      submit.value = `Retry in ${updated} seconds`
  }
  } else {
    if (minutes === 1) {
      submit.value = `Retry in ${minutes} minute`;
    } else {
      submit.value = `Retry in ${minutes} minutes`;
    }
  }
}
function ValidateEmail(mail)
{
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
}


export default {
  name: "contact",
  data() {
    return {
      md: "",
       parseMD: function() {
         let render = document.getElementById('md-id');
         let data = document.getElementById('md-data');
         let check = document.getElementById('check').checked;
         if (check) {
           if (render.value === "") {data.innerText = 'Empty :c'}
           data.style.display = 'block';
           render.style.display = 'none';
         } else if (!check) {
           data.style.display = 'none';
           render.style.display = 'initial';
         }
         Prism.highlightAll();
       },
      emailSend: function() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let render = document.getElementById('md-id');
        let data = document.getElementById('md-data');
        let submit = document.getElementById('submit');
        if (!ValidateEmail(email)) {
          alert("You have entered an invalid email address");
        }
        if (name.length === 0 || email.length === 0  || data.innerHTML.toString().length === 0) {
          alert("All boxes must be filled.")
          return
        }
        let compiled = { name: name, email: email, content: data.innerHTML}
          data.style.display = 'block';
          render.style.display = 'none';
          fetch('https://internal.brys.tk/send',
            {
              method: 'POST',
              body: JSON.stringify(compiled),
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://brys.tk/contact'
              }
            }).then(response => {
              if(!response.ok) {
                console.log('^ The above exception cannot be caught.')
              }
            if (response.status === 429) {
              response.json().then(json => {
                console.log(`[RLD] - Email can only be sent every 30 minutes (429), Retry after ${json.retry_after}s`)
                start(submit, json.retry_after)
              });
            }
          });
          return false;
      },
      isSent: function() {
        let urlstr = window.location.href;
        let url = new URL(urlstr);
        let sent = url.searchParams.get("sent");
        console.log(sent)
        if (sent === "true") {
          return true;
        } else
          return false;
      },
      setRateLimit: function(submit, time) {
           let timeStorage = window.localStorage;
           time.setItem("limit", time)
          setInterval(this.checkRateLimit(submit), 10000)
      },
      checkRateLimit: function(submit) {
        let timeStorage = window.localStorage;
        let time = timeStorage.getItem("limit");
        let updated = Number(time) - 10;
        let minutes = Math.floor(updated / 60);
        timeStorage.setItem("limit", `${updated}`);
        submit.value = `Retry in ${minutes} minutes`
      },
      }
  }
}
</script>

<style scoped>
.v-sidebar-menu {
  font-family: Ubuntu, sans-serif;
  animation: popInNav 0.5s ease forwards;
  border-radius: 5px;
}
.v-sidebar-menu .vsm--item {
  font-weight: normal;
}

.header {
  width: 35vw;
  color: #486ba3;
  background-color: var(--dark-box);
  border-radius: 15px;
  margin:0px auto;
  border: 2px solid #42b883;
  text-align: center;
  padding: 20px;
  font-size: 2em;
  animation: dropInError 1s ease forwards;
  font-family: Ubuntu, sans-serif;
  transform: translateY(6vh);;
}
.box {
  width: 35vw;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--dark-box);
  text-align: center;
  border-radius: 15px;
  transition: width 400ms ease-out, height 400ms ease-out;
}
.box h1 {
  color: #486ba3;
  text-transform: uppercase;
  font-weight: 500;
}
.box input[type = "text"],.box input[type = "email"], input[type = "content"]{
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 15vw;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;

}
.box input[type = "text"]:focus,.box input[type = "email"]:focus{
  width: 280px;
  border-color: #2ecc71;
}
textarea {
  width: 15vw;
  text-align: left;
  background: #3d3d3d;
  color: #fff;
  max-width: 45vw;
  max-height: 25vh;
  resize: none;
  border: 2px solid #3498db;
  transition: width 400ms ease-out, height 400ms ease-out;
  min-height: fit-content;
}
textarea:focus {
  width: 50vh;
  height: 45vh;
  border-radius: 0px;
}
.box input[type = "submit"]{
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  width: 15vw;
}
.box input[type = "submit"]:hover{
  background: #2ecc71;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #3d3d3d;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#content-name {
  font-family: Ubuntu, sans-serif;
  color: #42b883;
}
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
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
@keyframes popInNav {
  from {transform: translateX(-20vh);}
  to {transform: translateX(0);}
}
#md-data {
  padding: 2px 10px;
  background-color: #3d3d3d;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ffffff;
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
  width: 35vw;
  height: 25vh;
  overflow-y: scroll;
  text-align: left;
}
pre[class*="language-"] {
  background-color: #2e2d2d;
}
@media only screen and (max-width: 600px) {
  #submit {
    padding-left: 10px;
    padding-right: 10px;
  }
  #md-id {
    width: 30vw;
  }
  .box {
    margin-top: 15vh;
  }
  .header {
    font-size: 15px;
  }
  .box input[type = "text"]:focus,.box input[type = "email"]:focus{
    width: 15vw;
    border-color: #2ecc71;
  }
}

</style>
