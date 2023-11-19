<template>
    <v-card flat title="Data Kontak">
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
      
      <v-data-table :headers="headers" :items="getListKontak.data">
        <template v-slot:item="{ item }">
            <tr>
              <td>{{ item ? item.nama : '-' }}</td>
                <td>{{ item.no_hp ? item.no_hp : '-' }}</td>
                <td><v-chip :color="item.status ? 'green':'red'">{{ item.status ? 'Aktif': 'Scan' }}</v-chip></td>
                <td><v-btn icon="fas fa-trash" color="red" size="x-small" @click="store.kontakStore.deleteKontak(item.id)"></v-btn></td>
            </tr>
          </template>
      </v-data-table>
    </v-card>
  </template>
  
  <script setup>
  import {ref,inject} from 'vue'
  import {storeToRefs} from 'pinia'
  const store = inject('store')
  const search = ref('');
  const {getListKontak} = storeToRefs(store.kontakStore)

  console.log(getListKontak.value)
  const headers = [
    { align: 'start', key: 'name', sortable: true, title: 'Nama Kontak' },
    { key: 'id_session', title: 'No Hp ' },
    { key: 'status', title: 'Status' },
    { key: 'action', title: 'Aksi' },
  ];
 



  </script>
  