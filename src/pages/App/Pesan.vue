<template>
    <AppLayout>
    
        <template #breadcrumbs>
            <breadcrumb breadcrumbTitle="Kirim Pesan"></breadcrumb >
        </template>
    
        <template #content>
          
        <v-container>
            <div class="w-full text-end">
            <v-btn class="m-3 ml-auto" prepend-icon="fas fa-plus" color="primary" @click="store.pesanStore.toggleOverlay()">Kirim Pesan</v-btn>
            <v-btn class="m-3 ml-auto" prepend-icon="fas fa-plus" color="success" @click="store.bulkStore.toggleOverlay()">Kirim Pesan massal</v-btn>
            </div>
          
            <TablePesan ></TablePesan>
            <!-- <iframe src="https://wa.oxva.eu.org/start-session?session=Test&scan=true" width="400" height="300"></iframe> -->
        </v-container>
    
       
        <createPesan></createPesan>
        <createBulk></createBulk>
        <!-- <SnackBar></SnackBar> -->
    
        </template>
      
    
    </AppLayout>    
    </template>
    <script setup>
    import AppLayout from '@/layouts/AppLayout.vue';
    import {inject,onMounted} from 'vue'
    import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
    import SnackBar from '@/components/snackbar/SnackBar.vue';
    import TablePesan from '../../components/table/TablePesan.vue';
    import createPesan from '@/components/dialog/createPesan.vue';
    import createBulk from '@/components/dialog/createBulk.vue';
    import { storeToRefs } from 'pinia';
    const store = inject('store')

    
    
    </script>