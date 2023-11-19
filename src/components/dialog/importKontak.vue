<template>
    <v-row justify="center">
      <v-dialog
        v-model="isDialogActive"
        persistent
        width="1024"
      >
        <v-card>
          <form @submit.prevent="saveKontak()" enctype= multipart/form-data>
          <v-card-title>
            <span class="text-h5">Import Kontak </span>


          </v-card-title>
      
          <v-card-text>
            <v-container>
           
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                <v-file-input
                clearable
                prepend-icon="fas fa-file-csv"
                label="Upload File CSV"
                v-model="form.file"
              ></v-file-input>
                </v-col>
                
              </v-row>


              

            
              <br>
              
            </v-container>
            <small>*File Import wajib berextensi csv </small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              type="button"
              
              @click="store.kontakStore.toggleDialog()"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              type="submit"
            >
              Import
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
    
    const {isDialogActive} = storeToRefs(store.kontakStore)
    const {getQr,getError,getListKoneksi} = storeToRefs(store.authStore)
    const select = ref()
    
    const form = ref({
        file:''
    })

    const saveKontak = async() =>{

      await store.kontakStore.importKontak(form.value.file)
        console.log(form.value.file[0])

    }
    onMounted(()=>{
     
    })
  </script>