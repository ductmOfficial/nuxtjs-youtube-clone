<template>
  <section>
    <v-divider />
    <v-sheet outlined flat color="" class="px-3">
      <v-chip-group mandatory active-class="primary--text">
        <v-chip v-for="tag in tags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-sheet>
    <v-divider />
    <v-container fluid class="px-5">
      <v-row justify="space-around">
        <v-col v-for="(video, i) in videos" :key="i" cols="3">
          <v-img
            :src="video.thumb"
            :alt="video.title"
            aspect-ratio="1.7"
          ></v-img>
          <v-list-item three-line class="pa-0">
            <v-list-item-avatar>
              <v-img
                src="https://yt3.ggpht.com/vkZi355zHPXvfL70O9qnhmeoAGLZn6_Ca47yd7nUOb9GU9XTnROi2-_dblJdcz9JRhvf-uY7dA=s176-c-k-c0x00ffffff-no-rj"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle
                class="body-1 font-weight-medium"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                v-text="video.title"
              ></v-list-item-subtitle>
              <v-list-item-title
                class="subtitle-2 grey--text font-weight-regular"
                v-text="video.subtitle"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import videos from '@/fixtures/videos.json'

export default {
  data: () => ({
    videos,
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
  }),
}
</script>
