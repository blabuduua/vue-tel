<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Vuetify template</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-alert dense text type="info"
          >Phone text field using 'v-text-field'</v-alert
        >
        <v-text-field outlined label="Phone" v-model="phone"> </v-text-field>

        <v-alert dense text type="info"
          >Phone text field using 'vue-tel-input-vuetify'</v-alert
        >
        <vue-tel-input-vuetify
          outlined
          label="Phone"
          v-model="phone"
        ></vue-tel-input-vuetify>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      phone: null,
    };
  },
};
</script>