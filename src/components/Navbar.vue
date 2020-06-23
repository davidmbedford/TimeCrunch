<template>
  <nav>
    <v-app-bar flat app color="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text--uppercase grey--text">
        <span class="font-weight-light">Time</span>
        <span>Crunch</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    <template>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            depressed
            color="grey" 
            v-bind="attrs"
            v-on="on"
            class="mx-1"
          >
            <v-icon left>mdi-arrow-down</v-icon>
            <span>dropdown</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <v-btn depressed color="grey" class="mx-1">
        <span>Sign Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="indigo">
      <v-row justify="center">
        <v-col cols="6" class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="your photo">
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-col>
        <v-col>
          <Popup />
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },        
        { icon: 'mdi-account', text: 'Team', route: '/team' }
      ]
    }
  }
  
}
</script>