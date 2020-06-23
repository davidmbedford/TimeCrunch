<template>
  <div class="text-center">
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="success"
        text 
        v-bind="attrs"
        v-on="on"
      >
        Add a new project
      </v-btn>
    </template>
      <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>
      </v-card>
  </v-dialog>
  </div>
</template>

<script>
export default {

}
</script>