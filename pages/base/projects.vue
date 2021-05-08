<template>
<div class="projects">
<div class="projects-container">
  <div class="grid-item" id="kyro-proj">
    <img src="https://brys.tk/Kyro_logo_transparent.png" alt="kyro logo" width="64" height="64" id="kyro-logo">
    <p id="kyro-descript"><span id="kyro">Kyro</span>, an opensource, highly versatile music bot. Written in JDA, with lavaplayer!
      <a href="https://discord.com/oauth2/authorize?client_id=750368143209267281&scope=bot&permissions=8" class="inv">Invite Here</a>
      <br><br><span id="kyro-stats">Stats: Coming Soon!</span></p>
  </div>
  <div class="grid-item" id="sws-proj">
    <img src="https://brys.tk/sws.png" alt="sws logo" width="160" height="80" id="sws-logo">
    <p id="sws-descript">
    <span id="sws">Spotify WebServer</span>, this webserver provides a well documented easy to use spotify track, playlist, album, and artist parser. <a href="https://github.com/brys0/Spotify-Web/tree/ktor" class="inv">Source Here</a></p></div>
  <div class="grid-item" id="rada-proj">
    <img src="https://brys.tk/RadaCrownR.png" alt="Rada Logo" width="64" height="64" id="rada-logo"/>
    <p id="rada-descript">
      <span id="rada">Rada</span>. A Discord bot made with love and care. Creating servers (especially on mobile) can be a huge pain, that's why Rada offers a wide variety of utility commands to make this much easier for the end user.
      <a href="https://radabot.net/invite" class="inv">Invite Here</a>
    </p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
    };
  },
  props: {
    guilds: String
  },
  methods: {
    async getKyroStats() {
      class KyroStats {
        guilds;
        users;
        memoryUsed;
        constructor(guilds, users, memoryUsed) {
          this.guilds = guilds;
          this.users = users;
          this.memoryUsed = memoryUsed;
        }
      }

      let res = await fetch("https://kt.brys.tk/api/status");
      let data = await res.json();
      return new KyroStats(data[0][0].guilds.length, data[0][0].cache_users, data[0][0].ram_used)
    }
  }
}
</script>

<style scoped>

.projects-container {
  display: inline-grid;
  grid-template-columns: auto;
  margin-top: 5vh;
  margin-left: 50px;
  grid-gap: 5vh;
  animation:  dropInElements 2s ease forwards;
  padding-right: 15vh;
  padding-left: 15vh;
}
.grid-item {
  border: 5px solid rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 30px;
  height: 25vh;
}
#kyro-logo {
  animation: fadeIn ease-in-out 2.5s;
  transform: rotate(-20deg);
}
#kyro-proj {
  border-color: #8a95ff;
  font-size: 3vh;
  background-color: var(--dark-box);
}
#kyro-descript {
  padding-left: 10px;
  color: #d0c1e0;
  padding-right: 10px;
  animation: fadeIn ease-in-out 3s;
}
#kyro {
  color: #5d42c7;
}
#sws {
  color: #1DB954;
}
#sws-descript {
  padding-left: 10px;
  color: #b2f7cb;
  padding-right: 10px;
  animation: fadeIn ease-in-out 3s;
}
#rada-proj {
  border-color: #ffa21d;
  font-size: 3vh;
  background-color: var(--dark-box);

}
#rada-descript {
  padding-left: 10px;
  color: #f58282;
  padding-right: 10px;
  animation: fadeIn ease-in-out 3s;
}
#rada {
  color: #f05151;
}
#sws-logo {
  padding-top: 10px;
  padding-left: 10px;
  animation: fadeIn ease-in-out 2.5s;
}
#sws-proj {
  font-size: 3vh;
  border-color: #2eff7a;
  background-color: var(--dark-box);
}
.inv {
  color: #FED128;
  text-decoration: none;
  transition: color 200ms ease-out;
}
.inv:hover {
  color: #42b883;
}
#kyro-stats {
  text-align: center;
  color: #486ba3;
  font-size: 2vh;
}
@keyframes dropInElements {
  from {transform: translateY(-100vh);}
  to {transform: translateY(0);}
}
@media only screen and (max-width: 600px) {
  .projects-container {
    grid-template-columns: auto;
    margin-top: 0;
    grid-gap: 7vh;
    padding: 10px;
  }
  #sws-proj {
    height: 27vh;
    font-size: 2vh;
  }
  #rada-proj {
    font-size: 2vh;
    height: 27vh;
  }
  #kyro-proj {
    font-size: 2vh;
  }
}
@keyframes popInNav {
  from {transform: translateX(-20vh);}
  to {transform: translateX(0);}
}
</style>
