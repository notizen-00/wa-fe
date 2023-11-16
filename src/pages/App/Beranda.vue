<template>
<AppLayout>


</AppLayout>    
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import {inject} from 'vue'

const store = inject('store')

store.authStore.getListKoneksi();
</script>