<template>
  <div class="dashboard">
    <h1 class="pageTitle">Dashboard</h1>
  
    <v-container class="my-5">  

      <v-row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
            <v-icon left small>mdi-account</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          </template>
          <span>Sort project by Author name</span>
        </v-tooltip>

      </v-row>

      <v-card class="pa-3 my-1" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div class="font-weight-bold">{{project.title}}</div>
          </v-col>
          <v-col xs="4" sm="3" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs="4" sm="3" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs="4" sm="3" md="2">
            <div align="right">
              <v-chip small :class="`${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>

    </v-container>

  </div>
</template>

<script>
import db from "@/fb"

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>

.project.complete {
  border-left: 4px solid #3cd193;
}
.project.ongoing {
  border-left: 4px solid #fd9a19;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.v-chip--no-color.theme--light.complete {
  background:  #3cd193;
  /* opacity: 0.8; */
}
.v-chip.v-chip--no-color.theme--light.ongoing {
  background:  #fd9a19;
  /* opacity: 0.8; */
}
.v-chip.v-chip--no-color.theme--light.overdue {
  background:  tomato;
  /* opacity: 0.8; */
}


</style>