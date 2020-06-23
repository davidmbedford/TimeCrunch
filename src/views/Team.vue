<template>
  <div class="team">
    <h1>Team</h1>    
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
        { name: 'The Net Ninja', role: 'Web Developer', avatar: '/avatar-1.png'},
        { name: 'Ryu', role: 'Graphic Designer', avatar: '/avatar-2.png'},
        { name: 'Chun Li', role: 'Web Developer', avatar: '/avatar-3.png'},
        { name: 'Gouken', role: 'Social Media Maverick', avatar: '/avatar-4.png'},
        { name: 'Yoshi', role: 'Sales Guru', avatar: '/avatar-5.png'}
      ]
    }
  }

}
</script>
