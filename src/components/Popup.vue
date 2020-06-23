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
        <v-card-text>
          <v-form v-model="valid">
            <v-container>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :rules="nameRules"
                    :counter="30"
                    label="Title"
                    required
                    prepend-icon="mdi-folder"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="content"
                    label="Information"
                    required
                    prepend-icon="mdi-circle"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" lg="6">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :value="formattedDate"
                        clearable
                        label="Due date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="date = null"
                        prepend-icon="mdi-calendar"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="due"
                      @change="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
  </v-dialog>
  </div>
</template>

<script>
// import format from 'date-fns/format'
// import parseISO from 'date-fns/parseISO'

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  },
  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(0,16) : ''
    }
  }
}
</script>