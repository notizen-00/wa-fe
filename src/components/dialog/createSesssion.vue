<template>
    <v-row justify="center">
      <v-dialog
        v-model="isOverlayActive"
        persistent
        width="1024"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Tambahkan Session </span>

            
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="session"
                    label="Nama Session *"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <br>
              <div v-if="!getQr">
                      <v-chip color="info">Klik Save untuk generate Qr</v-chip>
              </div>
              <img v-else :src="getQr" width="200" height="100">
            </v-container>
            <small>*nama session wajib di isi </small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              
              @click="store.dashboardStore.toggleOverlay()"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="store.authStore.generateSession(session)"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script setup>
    import {ref,inject,onMounted} from 'vue'
    import {storeToRefs} from 'pinia'
    const store = inject('store')
    
    const {isOverlayActive} = storeToRefs(store.dashboardStore)
    const {getQr,getError} = storeToRefs(store.authStore)

    const session = ref('')
    onMounted(()=>{
     
        console.log(getQr.value)
    })
  </script>