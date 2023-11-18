<template>
    <v-row justify="center">
      <v-dialog
        v-model="isOverlayActive"
        persistent
        width="1024"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Kirim Pesan </span>

            
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    v-model="session"
                    label="No Hp *"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-textarea
                    v-model="session"
                    label="Pesan *"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <br>
              
            </v-container>
            <small>*no Hp wajib di isi </small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              
              @click="store.pesanStore.toggleOverlay()"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="store.authStore.generateSession(session)"
            >
              Kirim 
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
    
    const {isOverlayActive} = storeToRefs(store.pesanStore)
    const {getQr,getError} = storeToRefs(store.authStore)

    const session = ref('')
    onMounted(()=>{
     
        console.log(getQr.value)
    })
  </script>