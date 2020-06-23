<template>
  <div class="team">
    <h1>Team</h1>    
    <v-container class="my-5">
     <v-row>
       <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
         <v-card flat class="pa-1 ma-3 text-center">
           <v-responsive class="pt-4">img img img</v-responsive>
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
        { name: 'The Net Ninja', role: 'Web Developer'},
        { name: 'Ryu', role: 'Graphic Designer'},
        { name: 'Chun Li', role: 'Web Developer'},
        { name: 'Gouken', role: 'Social Media Maverick'},
        { name: 'Yoshi', role: 'Sales Guru'}
      ]
    }
  }

}
</script>
