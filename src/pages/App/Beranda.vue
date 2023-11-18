<template>
<AppLayout>

    <template #breadcrumbs>
        <breadcrumb breadcrumbTitle="Dashboard"></breadcrumb >
    </template>

    <template #content>
        <v-container>
            <div class="w-2/3 d-flex justify-around">
        <v-card
        v-for="item in getListCard"
        :key="item"        
        max-width="250"
        class="w-full"
        :title="item.title"
      >
        <template v-slot:append>
          <v-icon :icon="item.icon" ></v-icon>
        </template>
        <v-card-text class="m-2">Jumlah {{ item.title }} : {{ item.jumlah }}</v-card-text>
        <v-divider thickness="2" color="red" class="border-opacity-75 border-green-400"></v-divider>
        <v-card-actions>
            <v-btn size="x-small" class="text-center w-full" variant="tonal">
               Detail
            </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    </v-container>
    <v-container>
        <div class="w-full text-end">
        <v-btn class="m-3 ml-auto" prepend-icon="fas fa-plus" @click="store.dashboardStore.toggleOverlay()">Tambah Session</v-btn>
        </div>
        <TableSession :listData="getListKoneksi"></TableSession>

        <!-- <iframe src="https://wa.oxva.eu.org/start-session?session=Test&scan=true" width="400" height="300"></iframe> -->
    </v-container>

    <component :is="createSesssion" v-if="isOverlayActive"></component>


    </template>
  

</AppLayout>    
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import {inject,onMounted} from 'vue'
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
import TableSession from '@/components/table/TableSession.vue';
import createSesssion from '@/components/dialog/createSesssion.vue';
import { storeToRefs } from 'pinia';
const store = inject('store')
const {getListCard,isOverlayActive} = storeToRefs(store.dashboardStore)
const {getListKoneksi} = storeToRefs(store.authStore)


onMounted(()=>{
    store.authStore.fetchListKoneksi();
    store.authStore.connectWebSocket();

})
</script>