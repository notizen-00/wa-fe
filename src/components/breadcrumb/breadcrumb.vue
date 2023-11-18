<template>
    <v-breadcrumbs :items="items">
      <template v-slot:prepend>
        <v-icon size="15" class="mr-2 -mt-1" icon="fas fa-home"></v-icon>
      </template>
    </v-breadcrumbs>
  </template>
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['breadcrumbTitle']);
  
  const items = ref([
    {
      title: 'Home',
      disabled: false,
      href: '/',
    },
    {
      title: props.breadcrumbTitle,
      disabled: true,
      href: 'breadcrumbs_link_1',
    },
  ]);
  </script>