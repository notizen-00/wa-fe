<template>
    <v-row justify="center">
      <v-dialog
        v-model="isOverlayActive"
        persistent
        width="1024"
      >
        <v-card>
          <form @submit.prevent="saveKontak()">
          <v-card-title>
            <span class="text-h5">Data Kontak </span>


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
                    v-model="form.nama"
                    label="Nama Kontak *"
                    required
                    placeholder="isikan nama kontak ...."
                  ></v-text-field>
                </v-col>
                
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    v-model="form.no_hp"
                    label="No Hp *"
                    required
                    placeholder="gunakan nomor yang valid ..."
                  ></v-text-field>
                  <span class="text-red mr-3">*</span><small>Gunakan Awalan Kode Negara Misal = <u>6285*****</u></small>
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
              type="button"
              
              @click="store.kontakStore.toggleOverlay()"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              type="submit"
            >
              Kirim 
            </v-btn>
          
          </v-card-actions>
        </form>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script setup>
    import {ref,inject,onMounted} from 'vue'
    import {storeToRefs} from 'pinia'
    const store = inject('store')
    
    const {isOverlayActive} = storeToRefs(store.kontakStore)
    const {getQr,getError,getListKoneksi} = storeToRefs(store.authStore)
    const select = ref()
    
    const form = ref({  
        nama:'',
        no_hp:''
    })

    const saveKontak = async() =>{

      await store.kontakStore.saveKontak(form.value)
        

    }
    onMounted(()=>{
     
    })
  </script>