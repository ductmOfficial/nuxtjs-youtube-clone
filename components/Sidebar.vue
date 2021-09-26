<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    clipped
    fixed
    app
  >
    <v-sheet v-for="(list, index) in data" :key="index">
      <v-list dense>
        <v-subheader v-if="!miniVariant && list.groupTitle.length">{{
          list.groupTitle
        }}</v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in list.items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider v-if="list.divider"></v-divider>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script>
const data = [
  {
    groupTitle: '',
    items: [
      {
        icon: 'mdi-home',
        title: 'Trang chủ',
        to: '/',
      },
      {
        icon: 'mdi-compass-outline',
        title: 'Khám phá',
        to: '',
      },
      {
        icon: 'mdi-bookmark-plus',
        title: 'Kênh đăng ký',
        to: '',
      },
    ],
    divider: true,
  },
  {
    groupTitle: '',
    items: [
      {
        icon: 'mdi-library',
        title: 'Thư viện',
        to: ''
      },
      {
        icon: 'mdi-history',
        title: 'Video đã xem',
        to: ''
      },
      {
        icon: 'mdi-playlist-plus',
        title: 'Xem sau',
        to: ''
      },
      {
        icon: 'mdi-emoticon-poop',
        title: 'Video đã thích',
        to: ''
      },
    ],
    divider: true,
  },
  {
    groupTitle: '',
    items: [
      {
        icon: 'mdi-apps',
        title: 'Cài đặt',
        to: '',
      },
      {
        icon: 'mdi-flag-outline',
        title: 'Lịch sử báo cáo',
        to: '',
      },
      {
        icon: 'mdi-help-circle',
        title: 'Trợ giúp',
        to: '',
      },
      {
        icon: 'mdi-information-outline',
        title: 'Gửi phản hồi',
        to: '',
      },
    ],
    divider: false,
  },
]

export default {
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      data,
      drawer: true,
    }
  },
}
</script>

<style></style>
