<template>
    <v-row justify="center">
      <v-dialog
        v-model="isOverlayActive"
        persistent
        width="1024"
      >
        <v-card>
          <form @submit.prevent="sendMessage()">
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
                <v-select
                v-model="form.session"
                :items="getListKoneksi.data"
                prepend-inner-icon="fa-duotone fa-mobile"
                item-title="detail_session"
                item-value="detail_session"
                label=" -- Pilih Session --"
                persistent-hint
                clearable
                required
                return-object
                single-line
              ></v-select>
                </v-col>
                
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    v-model="form.to"
                    label="No Hp *"
                    required
                    placeholder="gunakan nomor yang valid ..."
                  ></v-text-field>
                  <span class="text-red mr-3">*</span><small>Gunakan Awalan Kode Negara Misal = <u>6285*****</u></small>
                </v-col>
              </v-row>

              

              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-textarea
                    v-model="form.text"
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
              type="button"
              
              @click="store.pesanStore.toggleOverlay()"
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
    
    const {isOverlayActive} = storeToRefs(store.pesanStore)
    const {getQr,getError,getListKoneksi} = storeToRefs(store.authStore)
    const select = ref()
    
    const form = ref({  
        to:'',
        session:'',
        text:''
    })

    const sendMessage = async() =>{

      await store.pesanStore.pesan_single(form.value)
        

    }
    onMounted(()=>{
     
    })
  </script>