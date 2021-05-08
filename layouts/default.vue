<template>
  <div class="page">
    <span id="🌧️" class="topRight" v-on:click="setRain">🌧️</span>
    <sidebar-menu :menu="menu" :collapsed="true" id="menu"/>
  <rain/>
  <Nuxt/>
  </div>
</template>

<script>

export default {
  name: "default",
  mounted() {
    let rain = document.getElementById('🌧️');
    let value = localStorage.getItem('🌧️');
    if (value === "false") {
      rain.title = "Rain is not being generated";
      rain.innerText = "☁️";
    }
    console.log('%c Brys\n%c Welcome to my site, If you want to snoop around in dev tools to see how I made this I suggest you look at the un-compiled code here https://github.com/brys0/Brys-Portfolio\n %c Thank you ❤️',
      'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
      'color: #42b883; font-family: \'Itim\', cursive; font-size: 16px;',
      'font-style: italic; font-weight: bold; font-family: Ubuntu, sans-serif;');
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        window.onload = () => {
            this.$nuxt.$loading.finish()
        }
      })
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Brys',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fas fa-home'
        },
        {
          href: '/base/about',
          title: 'About Me (Coming Soon!)',
          icon: 'fas fa-question-circle',
          disabled: true
        },
        {
          href: '/base/projects',
          title: 'Projects',
          icon: 'fab fa-codepen',
        },
        {
          href: '/interactive/contact',
          title: 'Contact',
          icon: 'fas fa-inbox'
        },
        {
          href: '/blog/blog',
          title: 'Blog (Coming Soon!)',
          icon: 'fas fa-scroll',
          disabled: true
        }
      ],
      setRain: function() {
        let rain = document.getElementById('🌧️');
        let value = localStorage.getItem('🌧️');
        switch (value) {
          case null:
              localStorage.setItem('🌧️', "false");
              rain.title = "Rain is not being generated";
              rain.innerText = "☁️";
              break;
            case "false":
              localStorage.setItem('🌧️', "true");
              rain.title = "Rain will be generated on next reload";
              rain.innerText = "🌧️";
              break;
           case "true":
             localStorage.setItem('🌧️', "false");
             rain.title = "Rain will not be generated on next reload";
             rain.innerText = "☁️"
        }
      }
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
.v-sidebar-menu .vsm--link {

}
#🌧️ {
  margin-right: 10px;
  font-size: 64px;
  transition: font-size 200ms ease-in-out;
}
#🌧️:hover {
  font-size: 75px;
  cursor: pointer;
}

</style>
