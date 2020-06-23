<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
  
    <v-container class="my-5">  

      <v-card class="pa-3 my-1" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="right">
              <v-chip small :class="`${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
      
        <v-row>
          <v-col cols="12" md="6" lg="3">
            <v-btn outlined block color="primary">1</v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-btn outlined block color="primary">2</v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-btn outlined block color="primary">3</v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-btn outlined block color="primary">4</v-btn>
          </v-col>
        </v-row>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }

}
</script>

<style>

.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #fd9a19;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.v-chip--no-color.theme--light.complete {
  background:  #3cd1c2;
  opacity: 0.8;
}
.v-chip.v-chip--no-color.theme--light.ongoing {
  background:  #fd9a19;
  opacity: 0.8;
}
.v-chip.v-chip--no-color.theme--light.overdue {
  background:  tomato;
  opacity: 0.8;
}


</style>