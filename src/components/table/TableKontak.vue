<template>
    <v-card flat title="Data Pesan">
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          append-inner-icon="fa-duotone fa-search"
          single-line
          density="compact"
          variant="outlined"
          hide-details
        ></v-text-field>
      </template>
      
      <v-data-table :headers="headers" :items="listData.data">
        <template v-slot:item="{ item }">
            <tr>
              <td>{{ item ? item.detail_session : '-' }}</td>
                <td>{{ item.detail ? item.detail.id : '-' }}</td>
                <td><v-chip :color="item.detail ? 'green':'red'">{{ item.detail ? 'Aktif': 'Scan' }}</v-chip></td>
                <td><v-btn icon="fas fa-trash" color="red" size="x-small" @click="store.authStore.deleteSession(item.detail_session)"></v-btn></td>
            </tr>
          </template>
      </v-data-table>
    </v-card>
  </template>
  
  <script setup>
  import {ref,inject} from 'vue'
  const store = inject('store')
  const search = ref('');
  const headers = [
    { align: 'start', key: 'name', sortable: true, title: 'Nama Kontak' },
    { key: 'id_session', title: 'No Hp ' },
    { key: 'status', title: 'Status' },
    { key: 'action', title: 'Aksi' },
  ];
  defineProps({
    listData:{
        type: Object, // Assuming listData is an array of objects
        default: () => [],
    }
  })



  </script>
  