<template>
  <div id="app">
    <mainmenu v-on:activechange="changeComponent"></mainmenu> 
    <div id="main">
      <component v-bind:is="currentView">
      </component>
    </div>
  </div>
</template>

<script>
import mainmenu from './Menu.vue'
import home from './views/home.vue'

export default {
  name: 'app',
  components: {home, mainmenu},
  data() {
        return {
          currentView: home
        }
    },
  methods: {
      changeComponent: function(item) {
          // Set the current view to the component related to the selected menu item
          this.currentView = item.component;
      }
  }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}

#app {
  width: 100vw;
  height: 100vh;
}

#main {
    margin-left: 180px;
    height: 100vh;
}
</style>
