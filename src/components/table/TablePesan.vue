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
      
      <v-data-table :headers="headers" :items="getListPesan">
        <template v-slot:item="{ item }">
            <tr>
              <td>{{ item ? item.session : '-' }}</td>
                <td>{{ item ? item.no_hp_tujuan : '-' }}</td>
                <td>{{ item ? formatDateTime(item.created_at) : '-' }}</td>
                <td><v-chip :color="item ? 'green':'red'">{{ item.status == 1 ? 'Sukses': 'Pending' }}</v-chip></td>
                <td>
                  <v-btn icon="fas fa-trash" color="red" size="x-small" ></v-btn>
                  <v-btn icon="fas fa-eye" class="ml-2" color="info" size="x-small" @click="store.authStore.deleteSession(item.detail_session)"></v-btn>
                </td>
            </tr>
          </template>
      </v-data-table>
    </v-card>
  </template>
  
  <script setup>
  import {ref,inject,onMounted} from 'vue'
  import {storeToRefs} from 'pinia'
  const store = inject('store')
  const {getListPesan} = storeToRefs(store.pesanStore)
  const search = ref('');
  const headers = [
    { align: 'start', key: 'name', sortable: true, title: 'Nama Session' },
    { key: 'id_session', title: 'Kontak' },
    { key: 'id_session', title: 'Waktu Terkirim' },
    { key: 'status', title: 'Status' },
    { key: 'action', title: 'Aksi' },
  ];

  const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) return '-';

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // Use 24-hour format
  };

  const formattedDateTime = new Date(dateTimeString).toLocaleString(undefined, options);

  return formattedDateTime;
};

  onMounted(() => {
    store.pesanStore.fetchPesan();
  })




  </script>
  