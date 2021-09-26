<template>
  <v-app-bar
    clipped-left
    fixed
    app
    flat
    :color="$vuetify.theme.dark ? '' : 'white'"
    :style="{ width: '100%' }"
  >
    <v-app-bar-nav-icon
      @click.stop="$emit('update:miniVariant', !miniVariant)"
    />
    <NuxtLink to="/" class="ml-2 mt-2">
      <img
        :src="$vuetify.theme.dark ? '/icon.png' : '/icon.png'"
        alt="icon"
        height="48"
      />
    </NuxtLink>
    <v-spacer />
    <v-text-field
      clearable
      outlined
      dense
      append-icon="mdi-keyboard"
      placeholder="Tìm kiếm"
      hide-details=""
      class="ml-5"
      type="text"
    ></v-text-field>
    <v-btn icon class="ml-3">
      <v-icon>mdi-microphone</v-icon>
    </v-btn>
    <v-spacer />
    <v-switch
      v-model="$vuetify.theme.dark"
      label="Dark Mode"
      hide-details=""
      class="pa-0 ma-0"
      inset
    ></v-switch>
    <v-btn icon>
      <v-icon>mdi-video</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-avatar size="36px" class="ml-3">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
