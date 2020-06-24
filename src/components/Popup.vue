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
          <v-form v-model="valid" ref="form">
            <v-container>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :rules="[rules.title]"
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
                    :rules="[rules.info]"
                    :counter="600"
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
import db from '@/fb'

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      rules: {
        title: v => v.length >= 3 || 'Minimum length is 3 characters.',
        info: v => v.length <=600 || 'Max length is 600 characters.'
      }
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        let dueDate = new Date(this.due).toUTCString().substring(0,16);
        const project = {
          title: this.title,
          content: this.content,
          due: dueDate,
          person: 'Alpha Beta', //add authentication
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => {
          console.log('added to db')
        })
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(0,16) : ''
    }
  }
}
</script>