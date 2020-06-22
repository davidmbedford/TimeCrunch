<template>
  <v-app>
    <Navbar />
    <v-content class="ma-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

<style>
.theme--light.v-application
  {
    background: #BBDEFB;
  }
</style>