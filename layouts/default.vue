<template>
  <v-app dark>
    <Sidebar :mini-variant="miniVariant" />
    <Header :mini-variant.sync="miniVariant" />
    <v-main :style="{ backgroundColor: $vuetify.theme.dark ? '' : '#f9f9f9' }">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      miniVariant: false,
      title: 'Youtube Clone',
    }
  },
}
</script>
