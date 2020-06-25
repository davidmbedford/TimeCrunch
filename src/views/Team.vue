<template>
  <div class="team">
    <h1 class="pageTitle">Team</h1>    
    <v-container class="my-5">
     <v-row>
       <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
         <v-card flat class="pa-1 ma-3 text-center">
           <v-responsive class="pt-4">
             <v-avatar size="100" class="grey lighten-3">
               <img :src="person.avatar">
             </v-avatar>
           </v-responsive>
           <v-card-text>
             <div class="subheading">{{ person.name }}</div>
             <div class="grey-text">{{ person.role }}</div>
           </v-card-text>
           <v-card-actions>
             <v-btn text color="grey">
               <v-icon small left>mdi-message</v-icon>
               <span>Message</span>
               </v-btn> 
           </v-card-actions>
         </v-card>
       </v-col>
     </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'J. Doe Smith', role: 'Web Developer', avatar: '/jdoe.jpg'},
        { name: 'Cher McDonald', role: 'Graphic Designer', avatar: '/cher.jpg'},
        { name: 'Bjork Ivanov', role: 'Web Developer', avatar: '/bjork.png'},
        { name: 'Bono Roberts', role: 'Social Media Maverick', avatar: '/bono.jpg'},
        { name: 'Prince Yamamoto', role: 'Sales Guru', avatar: '/prince.jpg'}
      ]
    }
  }
}
</script>
