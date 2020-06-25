<template>
  <v-app>
    <Navbar />
    <v-content class="ma-5">
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
.v-application.v-application--is-ltr.theme--light
  {
    background: #e1edf7;
  }

h1.pageTitle {
  font-weight: 900;  
}
</style>