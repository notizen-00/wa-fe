<template>
    <AppLayout>
    
        <template #breadcrumbs>
            <breadcrumb breadcrumbTitle="Kirim Pesan"></breadcrumb >
        </template>
    
        <template #content>
          
        <v-container>
            <div class="w-full text-end">
            <v-btn class="m-3 ml-auto" prepend-icon="fas fa-plus" @click="store.pesanStore.toggleOverlay()">Import Kontak</v-btn>
            </div>
          
            <TablePesan></TablePesan>
            <!-- <iframe src="https://wa.oxva.eu.org/start-session?session=Test&scan=true" width="400" height="300"></iframe> -->
        </v-container>
    
       
        <createPesan></createPesan>
    
        </template>
      
    
    </AppLayout>    
    </template>
    <script setup>
    import AppLayout from '@/layouts/AppLayout.vue';
    import {inject,onMounted} from 'vue'
    import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
    import TablePesan from '../../components/table/TablePesan.vue';
    import createPesan from '@/components/dialog/createPesan.vue';
    import { storeToRefs } from 'pinia';
    const store = inject('store')


    
    </script>