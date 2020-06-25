<template>
  <div class="projects">
    <h1 class="pageTitle">My Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="font-weight-bold">
            <div>
            {{ project.title }}: 
            <span :class="`${project.status}`">{{project.status}}</span>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-4 py-0 grey--text">
                <div class="font-weight-bold">Due by: {{ project.due }}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

  </div>
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'J. Doe Smith'
      })
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

<style scoped>
.complete {
  color:#3cd193;
}
.ongoing {
  color: #fd9a19;
}
.overdue {
  color: tomato;
}

</style>