<template>
  <v-app>
    <v-content>
      <div id="app" class="fill-height">
        <v-toolbar>
          <router-link to="/">
            <v-icon
                color="orange">
              mdi-home
            </v-icon>
          </router-link>
        </v-toolbar>
        <router-view/>
        <v-btn
                onclick="test()"> TEST </v-btn>
        <UserLevel/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
  import UserLevel from "./components/UserInterface/UserLevel";

  export default {
    components: {UserLevel},
    methods: {
      test: function() {
        console.log('it works');
      }
    }
  }
</script>

<style>
  #app {
    overflow: scroll;
  }

  a {
    text-decoration: none;
  }
</style>