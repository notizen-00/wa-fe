<template>
    <AppLayout>
    
        <template #breadcrumbs>
            <breadcrumb breadcrumbTitle="Kirim Pesan"></breadcrumb >
        </template>
    
        <template #content>
          
        <v-container>
            <div class="w-full text-end">
            <v-btn class="m-3 ml-auto" prepend-icon="fas fa-plus" color="primary" @click="store.pesanStore.toggleOverlay()">Tambah Kontak</v-btn>
            </div>
          
            <TableKontak></TableKontak>
            <!-- <iframe src="https://wa.oxva.eu.org/start-session?session=Test&scan=true" width="400" height="300"></iframe> -->
        </v-container>
    
       
        <createKontak></createKontak>
    
        </template>
      
    
    </AppLayout>    
    </template>
    <script setup>
    import AppLayout from '@/layouts/AppLayout.vue';
    import {inject,onMounted} from 'vue'
    import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
    import TableKontak from '../../components/table/TableKontak.vue';
    import createKontak from '@/components/dialog/createKontak.vue';
    import { storeToRefs } from 'pinia';
    const store = inject('store')


    
    </script>