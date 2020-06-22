<template>
  <nav>
    <v-app-bar flat app color="grey lighten-4">
      <!-- <v-icon left class="grey--text" @click="drawer = !drawer">mdi-home</v-icon> -->
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text--uppercase grey--text">
        <span class="font-weight-light">Time</span>
        <span>Crunch</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="indigo">
      <p>test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
  
}
</script>